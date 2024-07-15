"use client"
import styles from "./pastor.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Pastor(props: {imgSrc: string}) {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <Image className={styles.img} src={props.imgSrc} width={360} height={600} alt="Featured Service Image" />
        </div>
        

        <div className={styles.content}>
            <h4>Hello</h4>
            <h2>Meet Timothy!</h2>

            <p>Meet Apostle Timothy, the host of the uplifting talk show, 'Pastoring God's Sheep,' which has been airing for two and a half years and boasts 71 episodes available on YouTube and Facebook. <br /><br />Timothy is not only an apostle but also an author, with his book 'My Journey To Glory' published under the name Tim Baden.
            </p>
            <Link href="/contact" className="main-link">Join Us</Link>
        </div>
    </section>
  )
}
