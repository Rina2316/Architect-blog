/** @type {import('next').NextConfig} */
const nextConfig = {
  // Разрешаем изображения с localhost и других доменов
  images: {
    domains: ['localhost', 'example.com'], // Добавьте сюда другие домены, если нужно
  },

  webpack(config: any) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      // Обрабатываем *.svg?icon как React-компоненты
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: /icon/, // *.svg?icon
        use: ['@svgr/webpack'],
      },
      // Применяем существующее правило ко всем остальным *.svg
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: /icon/ }, // исключаем *.svg?icon
      },
    );

    // Исключаем *.svg из старого правила
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
