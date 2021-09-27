import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-okaidia.css';
import MainHeader from './MainHeader'
import styles from '../styles/Previewer.module.css'

const Previewer = (props) => {
  const icons = []

  useEffect (() => {
    Prism.highlightAll()
  })

  return (
    <section className="container">
      <MainHeader section='Previewer' icons={icons} />
      <section className={styles.previewer}>
        <ReactMarkdown remarkPlugins={[gfm]}>
          {props.markdown}
        </ReactMarkdown>
      </section>
    </section>
  )
}

export default Previewer
