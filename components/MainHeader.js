import Icons from './Icons'
import styles from '../styles/MainHeader.module.css'

const MainHeader = props => {
  return (
    <header className={styles.header}>
      <b>Editor</b>
      <Icons icons={['fa-solid:expand-arrows-alt']} />
    </header>
  )
}

export default MainHeader
