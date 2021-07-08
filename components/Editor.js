import { Icon } from '@iconify/react'
import styles from '../styles/Editor.module.css'

const Editor = (props) => {
  return (
    <section className={styles.editor}>
      <header className={styles.editor__header}>
        <b>Editor</b>
        <Icon icon="fa-solid:expand-arrows-alt" />
      </header>
      <textarea className={styles.editor__body}></textarea>
    </section>
  )
}

export default Editor