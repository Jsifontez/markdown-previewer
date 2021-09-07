import MainHeader from './MainHeader'
import styles from '../styles/Editor.module.css'

const Editor = (props) => {
  const icons = [
    {
      i: 'icomoon-free:copy',
      k: 'icon-00',
      f: (e) => {
        // select the element to copy
        const editor = document.querySelector('#text')
        // for input or textarea use the element.select()
        // editor.select()
        // for other elements use the range
          // let range = document.createRange()
          // range.selectNode(editor)
          // window.getSelection().addRange(range)

        try {
          // execute the copy command with execCommand (deprecated) or with the navigator.clipboard
          // const copy = document.execCommand('copy')
          navigator.clipboard.writeText(editor.value)
        } catch(err) {
          console.log('Oops, unable to copy the text')
        }

        // once selected, or not, remove the range elements. This also remove the selection of the text on input and textarea
        // window.getSelection().removeAllRanges()
        // navigator.clipboard.writeText doesn't need to select the text neither removeAllRanges
      }
    },
    {
      i: 'akar-icons:download',
      k: 'icon-01',
      f: function () { console.log('you\'re downloading') }
    },
    {
      i: 'ic:round-clear',
      k: 'icon-02',
      f: (ev) => {
        // improve this way of do this. Ask in FCC if this is a good practice
        const editor = document.querySelector('#text')
        editor.value = ""
        props.clearMark()
      }
    },
    {
      i: 'fa-solid:expand-arrows-alt',
      k: 'icon-03',
      f: function () { console.log('you\'re expanding') }
    }
  ]

  return (
    <section className="container">
      <MainHeader section='Editor' icons={icons} />
      <textarea id="text" className={styles.editor__body} onChange={props.mark}></textarea>
    </section>
  )
}

export default Editor
