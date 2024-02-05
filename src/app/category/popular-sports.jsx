import styles from './page.module.css';
export default function PopularSports() {
    return (
        <>
            <h1 className={styles.heading}>Most Popular Sports</h1>

            <div className={styles.allImages}>
                    <img 
                        className={styles.sportsImage}
                        src="/football.png" 
                        alt="Mbappe playing football"
                        width="700px"
                        height="500px"
                    />

                <img
                    className={styles.sportsImage}
                    src="/cricket.png"
                    alt="2 woman playing cricket" 
                    width="700px"
                    height="500px"
                />

                <img
                    className={styles.sportsImage}
                    src="/hockey.png"
                    alt="6 man playing hockey"
                    width="700px"
                    height="500px"
                />
            </div>
        </>
    );
}