import Icons from './Icons'
import styles from '../styles/MainHeader.module.css'

const MainHeader = ({section, icons}) => {
  return (
    <header className={styles.header}>
      <b>{section}</b>
      <Icons icons={icons} />
    </header>
  )
}

export default MainHeader
