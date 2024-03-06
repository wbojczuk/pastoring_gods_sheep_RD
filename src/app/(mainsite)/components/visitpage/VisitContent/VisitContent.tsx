import styles from "./visitcontent.module.css"

export default function VisitContent() {
  return (
    <section className={styles.visitContent}>
        <div className={styles.content}>
            <h2>Come Give Us A Visit!</h2>
            <p>Let’s study the word of God together, our church is located at <a href="https://maps.app.goo.gl/sbQGDQdbD2NS5VTs6" target="_blank">5705 East Tropicana Blvd. Las Vegas, Nevada 89122</a></p>
            <div className={styles.buttonWrapper}>
                <a style={{color: "var(--secondary-text-color)", backgroundColor: "var(--primary-color)"}} className="main-link" href="https://maps.app.goo.gl/sbQGDQdbD2NS5VTs6" target="_blank">Get Directions</a>
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
