"use client"

import Link from "next/link"
import styles from "./visitus.module.css"

export default function VisitUs() {
  return (
    <div className={styles.visitUs}>

        <h3>Come Visit Us!</h3>

        <Link style={{backgroundColor: "var(--primary-color)", color: "var(--secondary-text-color)"}} className="main-link" href="/visit">Get Directions</Link>

        <img src="/img/map.webp" alt="Image of Map" className="bg-img" />
        <div className="shader" style={{backgroundColor: "var(--primary-color-2)", opacity: "0.5"}}></div>
    </div>
  )
}
