import styles from './page.module.css'
import Sectionone from './sectionone'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.sectionone}>
        <Sectionone />
      </section>
    </main>
  )
}
