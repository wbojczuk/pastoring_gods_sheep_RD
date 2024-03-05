"use client"

import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>

        <div className={styles.content}>
            <h1>Pastoring <br /> <span>God's Sheep</span></h1>
        </div>

        <div className={styles.content}>
            <p>A Dynamic Christian Talk Show at Charity Church. Delve into Deep Spiritual Insights, Thought-Provoking Discussions, and Inspirational Messages, Anchored in the Timeless Wisdom of the Bible. Join Us on a Journey of Faith, as We Shepherd God's Flock with Love, Compassion, and Unwavering Devotion.</p>

            <div className={styles.buttonWrapper}>
                <Link className="main-link" href="/visit">Join Us</Link>
                <a style={{backgroundColor: "var(--primary-color)", color: "var(--secondary-text-color)"}} href="#" className="main-link">Watch Online</a>
            </div>
        </div>

        <div style={{backgroundColor: "rgba(0,0,0,0.55)"}} className="shader"></div>
        <img src="/img/header-bg.png" alt="Image of Bible" className="bg-img" />
    </header>
  )
}
