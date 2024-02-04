import Link from 'next/link';
import styles from './page.module.css'; // Ensure this path correctly points to your CSS file

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      </header>
      <main className={styles.main}>
        <h1>Welcome</h1>
        {/* Include other components and content for your home page */}
      </main>
      <footer className={styles.footer}>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}
