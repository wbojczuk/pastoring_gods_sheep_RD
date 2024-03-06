import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.pageTitle}</h1>

        <img src="/img/page-title-bg.png" className="bg-img" aria-hidden />
        <div style={{backgroundColor: "rgba(0,0,0,0.55)"}} className="shader"></div>
    </header>
  )
}
