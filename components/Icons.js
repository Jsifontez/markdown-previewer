import { Icon } from '@iconify/react'
import styles from '../styles/Icons.module.css'

const Icons = ({icons}) => {
  return (
    <div>
      {icons.map(i =>
        <Icon className={styles.icon} icon={i} key={i} />
      )}
    </div>
  )
}

export default Icons
