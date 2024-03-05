import styles from "./servicetimes.module.css"

export default function ServiceTimes() {
  return (
    <div className={styles.serviceTimes}>
       <div className={styles.contentWrapper}>
       <h2>
            Service<br />Times
        </h2>
       </div>
       <div className={styles.contentWrapper}>
            <h4>Sunday</h4>
            <div className={styles.timesWrapper}>
                <div className={styles.time}>
                    <h5>8AM</h5>
                    <span>Bible<br />Study</span>
                </div>
                <div className={styles.time}>
                    <h5>9AM</h5>
                    <span>Praise/<br />Worship</span>
                </div>
                <div className={styles.time}>
                    <h5>10AM</h5>
                    <span>Morning's<br />Message</span>
                </div>
            </div>
       </div>
       <div className={styles.contentWrapper}>
       <h4>Nightly</h4>
            <div className={styles.timesWrapper}>
            <div className={styles.time}>
                    <h5>6PM</h5>
                    <span>Worship<br />Service</span>
                </div>
            </div>
       </div>
    </div>
  )
}
