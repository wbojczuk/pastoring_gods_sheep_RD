import styles from "./donatecontent.module.css"

export default function DonateContent(props: {imgSrc: string}) {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={props.imgSrc} width={360} height={600} alt="Image of Grapes" />
        </div>
        

        <div className={styles.content}>
            <h2>Give to Pastoring God’s Sheep</h2>

            <p>Thank You for your incredible generosity. Your donations ensure that we can continue teaching  the community about God’s kingdom. <br /><br />
            You can send donations via Zelle to: 725-710-5420
            </p>
        </div>
    </section>
  )
}
