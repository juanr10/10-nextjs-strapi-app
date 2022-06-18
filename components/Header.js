import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.bar}>
          <Link href="/">
            <Image
              src="/img/logo.svg"
              width={400}
              height={100}
              alt="Logo image"
            />
          </Link>

          <nav className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/aboutUs">About us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/shop">Shop</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
