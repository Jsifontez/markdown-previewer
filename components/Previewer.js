import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import MainHeader from './MainHeader'
import styles from '../styles/Previewer.module.css'

const Previewer = (props) => {
  const icons = [
    {
      i: 'fa-solid:expand-arrows-alt',
      k: 'icon-04',
      f: () => console.log('you\'re expanding')
    }
  ]

  return (
    <section className="container">
      <MainHeader section='Previewer' icons={icons} />
      <section className={styles.previewer}>
        <ReactMarkdown remarkPlugins={[gfm]} children={props.markdown}/>
      </section>
    </section>
  )
}

export default Previewer
