"use client";

import { usePathname } from "next/navigation";
import styles from "../Filter/Filter.module.scss";
import CustomButton from "../CustomButton/CustomButton";
import Link from "next/link";

const Filter: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const isHomePage = pathname === "/";

  const decodePath = (path: string) => {
    return decodeURIComponent(path.replace(/%20/g, ' '));
  };


  return isHomePage ? (
    <section className={styles.filter}>
      <Link href="/article/The%20Future%20of%20Urban%20Architecture:%20Vertical%20Cities" passHref>
        <CustomButton variant="primary" size="m">
          Architectural Design
        </CustomButton>
      </Link>

      <div className={styles.tabs}>
        <Link href="/article/The%20Impact%20of%20Color%20Psychology%20on%20Residential%20Interiors" passHref>
          <CustomButton variant="primary" size="m">
            Residential Interiors
          </CustomButton>
        </Link>
      </div>

      <Link href="/article/The%20Trend%20of%20Flexible%20Workspaces%20in%20Commercial%20Interiors" passHref>
        <CustomButton variant="primary" size="m">
          Commercial Interior
        </CustomButton>
      </Link>
    </section>
  ) : (
    <section className={styles.breadcrumb}>
      <Link href="/" passHref>
        <button>All Articles</button>
      </Link>
      <span className={styles.separator}>|</span>
      {pathSegments.map((segment, index) => (
        <span key={index} className={styles.tag}>
       {decodePath(segment)}
          {index < pathSegments.length - 1 && (
            <span className={styles.separator}>|</span>
          )}
        </span>
      ))}
    </section>
  );
};

export default Filter;
