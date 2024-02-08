"use client";
import styles from './page.module.css';
import Link from 'next/link'

export default function PopularSports() {
    return (
        <>
            <h1 className={styles.heading}>Most Popular Sports</h1>

            <div className={styles.allImages}>    	
                <div className={styles.sportsCategory}>
                    <div className={styles.imageContainer}>
                        <Link href="/category/soccer">
                            <img
                                className={styles.sportsImage}
                                src="/football.png"
                                alt="Mbappe playing football" 
                            />
                            <div className={styles.sportsTitle}>Football</div>
                        </Link>
                    </div>
                    <div className={styles.imageContainer}>
                            <img
                            className={styles.sportsImage}
                            src="/cricket.png"
                            alt="2 woman playing cricket" 
                        />
                        <h2 className={styles.sportsTitle}>Cricket</h2>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.sportsImage}
                            src="/hockey.png"
                            alt="6 man playing hockey"
                        />
                        <div className={styles.sportsTitle}>Hockey</div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.sportsImage}
                            src="/basketball.png"
                            alt="2 man playing basketball"
                        />
                        <div className={styles.sportsTitle}>Basketball</div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.sportsImage}
                            src="/baseball.jpg"
                            alt="A man throwing a baseball"
                        />
                        <div className={styles.sportsTitle}>Baseball</div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.sportsImage}
                            src="/tennis.png"
                            alt="Roger Federer playing tennis"
                        />
                        <div className={styles.sportsTitle}>Tennis</div>
                    </div>
                </div>
            </div>
        </>
    );
}