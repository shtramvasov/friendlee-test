import styles from './Heading.module.scss'

function Heading({text}) {
  return (
    <h1 className={styles.heading}>{text}</h1>
  )
}

export default Heading