import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import MainHeader from './MainHeader'
import styles from '../styles/Previewer.module.css'

const Previewer = (props) => {
  const icons = ['fa-solid:expand-arrows-alt']

  return (
    <section className={styles.previewer__container}>
      <MainHeader section='Previewer' icons={icons} />
      <section className={styles.previewer}>
        <ReactMarkdown remarkPlugins={[gfm]} children={props.markdown}/>
      </section>
    </section>
  )
}

export default Previewer
