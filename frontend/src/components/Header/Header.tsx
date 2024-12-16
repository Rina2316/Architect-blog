"use client"
import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
const Header: React.FC = () => {
  const handleCallMeClick = () => {
    navigator.clipboard.writeText('+7(911)818-34-10');
    alert('Number copied to clipboard');
  };

  return (
    <header className={styles.header}>
     
      <h1 className={styles.logo}>architecture</h1>

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

export default Header;
