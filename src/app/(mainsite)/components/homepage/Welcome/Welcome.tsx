"use client"
import styles from "./welcome.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Welcome(props: {imgSrc: string}) {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <Image className={styles.img} src={props.imgSrc} width={360} height={600} alt="Featured Service Image" />
        </div>
        

        <div className={styles.content}>
            <h4>Welcome</h4>
            <h2>Discover Jesus, his love and compassion</h2>

            <p>Join us as we delve into the timeless essence of Jesus Christ—His boundless love, unwavering compassion, and profound teachings that transcend time and circumstance. Through insightful discussions, personal testimonies, and heartfelt reflections, we invite you to uncover the transformative power of encountering Jesus in your life. <br /><br />
            Through the lens of Scripture and the guidance of seasoned pastors and guests, we explore the impact of Jesus' ministry on our daily lives, relationships, and communities. 
            </p>
            <Link href={"/visit"} className="main-link">Join Us</Link>
        </div>
    </section>
  )
}
