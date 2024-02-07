"use client";
import styles from './page.module.css';
export default function PopularSports() {
    return (
        <>
            <h1 className={styles.heading}>Most Popular Sports</h1>

            <div className={styles.allImages}>    	
                <div className={styles.sportsCategory}>
                    <img
                        className={styles.sportsImage}
                        src="/football.png"
                        alt="Mbappe playing football" 
                        width="500px"
                        height="300px"
                    />
                    <h2 className={styles.sportsTitle}>Football</h2>
                </div>
                <div className={styles.sportsCategory}>
                    <img
                        className={styles.sportsImage}
                        src="/cricket.png"
                        alt="2 woman playing cricket" 
                        width="500px"
                        height="300px"
                    />
                    <h2 className={styles.sportsTitle}>Cricket</h2>
                </div>
                <div className={styles.sportsCategory}>
                    <img
                        className={styles.sportsImage}
                        src="/hockey.png"
                        alt="6 man playing hockey"
                        width="500px"
                        height="300px"
                    />
                    <h2 className={styles.sportsTitle}>Hockey</h2>
                </div>
                <div className={styles.sportsCategory}>
                    <img
                        className={styles.sportsImage}
                        src="/basketball.png"
                        alt="2 man playing basketball"
                        width="500px"
                        height="300px"
                    />
                    <h2 className={styles.sportsTitle}>Basketball</h2>
                </div>
                <div className={styles.sportsCategory}>
                    <img
                        className={styles.sportsImage}
                        src="/baseball.jpg"
                        alt="A man throwing a baseball"
                        width="500px"
                        height="300px"
                    />
                    <h2 className={styles.sportsTitle}>Baseball</h2>
                </div>
                <div className={styles.sportsCategory}>
                    <img
                        className={styles.sportsImage}
                        src="/tennis.png"
                        alt="Roger Federer playing tennis"
                        width="500px"
                        height="300px"
                    />
                    <h2 className={styles.sportsTitle}>Tennis</h2>
                </div>
            </div>
        </>
    );
}