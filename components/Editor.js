import MainHeader from './MainHeader'
import styles from '../styles/Editor.module.css'

const Editor = (props) => {
  const icons = [
    'icomoon-free:copy',
    'akar-icons:download',
    'ic:round-clear',
    'fa-solid:expand-arrows-alt'
  ]

  return (
    <section className={styles.editor}>
      <MainHeader section='Editor' icons={icons} />
      <textarea className={styles.editor__body}></textarea>
    </section>
  )
}

export default Editor
