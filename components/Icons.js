import { Icon } from '@iconify/react'

const Icons = ({icons}) => {
  return (
    <div>
      {icons.map(i =>
        <Icon icon={i} key={i} />
      )}
    </div>
  )
}

export default Icons
