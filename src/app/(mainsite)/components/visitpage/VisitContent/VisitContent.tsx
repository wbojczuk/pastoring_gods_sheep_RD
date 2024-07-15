import styles from "./visitcontent.module.css"

export default function VisitContent() {
  return (
    <section className={styles.visitContent}>
        <div className={styles.content}>
            <h2>Come Give Us A Visit!</h2>
            <p>Let’s study the word of God together, watch our recordings at the link below! Streaming on The Marketplace Network.</p>
            <div className={styles.buttonWrapper}>
                <a style={{color: "var(--secondary-text-color)", backgroundColor: "var(--primary-color)"}} className="main-link" href="https://www.youtube.com/playlist?list=PL8YJJ6ITG6Q7NPeHNY3aRlswnK_YfJsJP" target="_blank">Watch Recordings</a>
            </div>
        </div>
        <div className={styles.imgWrapper}>
            <div className={styles.imgContainer}>
                <img src="/img/location.png" alt="Image of church's location" />
            </div>
        </div>
    </section>
  )
}
