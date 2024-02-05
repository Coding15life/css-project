import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.navheader}>
        <div>
          <h1>Sports Sanctuary</h1>
        </div>
      </Link>
      <div className={styles.navlinks}>
        <Link href="/" className={styles.navitem}>
          Home
        </Link>
        <Link href="/category" className={styles.navitem}>
          Categories
        </Link>
        <Link href="/livescores" className={styles.navitem}>
          Live Scores
        </Link>
        <Link href="/fanzone" className={styles.navitem}> {/* Add a link to the Fan Zone page */}
          Fan Zone
        </Link>
      </div>
      {/* Add other nav items as needed */}
    </div>
  );
};

export default Navbar;
