import { Icon } from '@iconify/react'
import styles from '../styles/MainHeader.module.css'

const MainHeader = props => {
  return (
    <header className={styles.header}>
      <b>Editor</b>
      <div className={styles.header__icons}>
        <Icon icon="fa-solid:expand-arrows-alt" />
      </div>
    </header>
  )
}

export default MainHeader
