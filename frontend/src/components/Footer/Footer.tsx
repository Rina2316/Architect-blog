"use client"
import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  const handleCallMeClick = () => {
    navigator.clipboard.writeText('+7(911)818-34-10');
    alert('Number copied to clipboard');
  };

  return (
    <header className={styles.header}>
     
      <h1 className={styles.logo}>architecture</h1>
		<p  className={styles.paragraph}>(с) 2024, all rights reserved</p>

      <nav className={styles.nav}>
        <Link href="/">Projects</Link>
        <Link href="/">News</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contacts</Link>
      </nav>

      <div className={styles.contact}>
        <button className={styles.callMe} onClick={handleCallMeClick}>
          Call me
        </button>
        <span
          className={styles.phone}
          onClick={handleCallMeClick}
          title="Click to copy number"
        >
          +7(911)818-34-10
        </span>
      </div>
    </header>
  );
};

export default Footer;
