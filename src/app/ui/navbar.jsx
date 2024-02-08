import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/" className={styles.navheader}>
        <div>
          <h1>
            <div style={{color: "#FF004D", display: "inline-block"}}>Sports</div> Sanctuary
          </h1>
        </div>
      </a>
      <div className={styles.navlinks}>
        <a href="/" className={styles.navitem}>
          Home
        </a>        
        <a href="/news" className={styles.navitem}>
          News
        </a>
        <Link href="/category" className={styles.navitem}>
          Categories
        </Link>
        <Link href="/livescores" className={styles.navitem}>
          Live Scores
        </Link>
        <Link href="/fanzone" className={styles.navitem}> 
          Fan Zone
        </Link>
      </div>
      {/* Add other nav items as needed */}
    </div>
  );
};

export default Navbar;
