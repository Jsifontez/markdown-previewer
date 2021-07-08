import MainHeader from './MainHeader'
import styles from '../styles/Editor.module.css'

const Editor = (props) => {
  return (
    <section className={styles.editor}>
      <MainHeader />
      <textarea className={styles.editor__body}></textarea>
    </section>
  )
}

export default Editor
