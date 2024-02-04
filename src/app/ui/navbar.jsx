import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        Home
      </Link>
      <span className={styles.navitem}> | </span>
      <Link href="/categories">
        Categories
      </Link>
      <span className={styles.navitem}> | </span>
      <Link href="/livescores">
        Live Scores
      </Link>
      <span className={styles.navitem}> | </span>
      <Link href="/fanzone"> {/* Add a link to the Fan Zone page */}
        Fan Zone
      </Link>
      {/* Add other nav items as needed */}
    </div>
  );
};

export default Navbar;
