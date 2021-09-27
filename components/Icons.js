import { Icon } from '@iconify/react'
import styles from '../styles/Icons.module.css'

const Icons = ({icons}) => {
  return (
    <div>
      {icons.map(i =>
        <Icon className={styles.icon} icon={i.i} key={i.k} onClick={i.f} tabIndex="0"/>
      )}
    </div>
  )
}

export default Icons
