import { useState } from 'react'
import MainHeader from './MainHeader'
import styles from '../styles/Editor.module.css'

const Editor = (props) => {
  const [isDrag, setIsDrag] = useState(props.isDrag)
  const icons = [
    {
      i: 'icomoon-free:copy',
      k: 'icon-00',
      f: (e) => {
        // select the element to copy
        // const editor = document.querySelector('#text')
        // for input or textarea use the element.select()
        // editor.select()
        // for other elements use the range
          // let range = document.createRange()
          // range.selectNode(editor)
          // window.getSelection().addRange(range)

        try {
          // execute the copy command with execCommand (deprecated) or with the navigator.clipboard
          // const copy = document.execCommand('copy')
          navigator.clipboard.writeText(props.markdown)
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
      f: function saveTextAsFile () {
        const textToWrite = props.markdown
        const fileNameToSaveAs = 'markdown.md'

        if (textToWrite) {
          // create a blob elements, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data
          // read more: https://developer.mozilla.org/en-US/docs/Web/API/Blob
          var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'})

          // here I going to use the download attribute of the anchor tag to save the text of the textarea triggering the click of the anchor
          // read more: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

          var downloadLink = document.createElement("a") // create the anchor tag
          downloadLink.download = fileNameToSaveAs // assign the name of the file to download including the extension as string (e.g. markdown.md)
          downloadLink.innerHTML = "Download File" // I don't know the reason of this step, I need a deep research

          // to download the file I need to use the URL.createObjectURL() API. The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.
          // the URL.createObjectURL vary depending of the browser
          // read more: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
          // more about how to use URL object: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#example_using_object_urls_to_display_images
          if (window.webkitURL != null) {
          // Chrome allows the link to be clicked
          // without actually adding it to the DOM.
          downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob)
          }
          else {
            // Firefox requires the link to be added to the DOM
            // before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
            downloadLink.onclick = () => {
              destroyClickedElement
              // revoking the url object to avoid memory leaks
              window.URL.revokeObjectURL(textFileAsBlob)
              // console.log('revoking the URL object in mozilla')
            }
            downloadLink.style.display = "none"
            document.body.appendChild(downloadLink)
          }

          downloadLink.click()
          if (window.webkitURL != null) {
            // revoking the url object to avoid memory leaks
            window.webkitURL.revokeObjectURL(textFileAsBlob)
            // console.log('revoking the URL object in chrome based browser')
          } else {
            document.body.removeChild(downloadLink)
            // console.log('removing child from mozilla')
          }
        }

        // more about how to upload a file: https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/

        // more about blob: https://www.amitmerchant.com/use-of-blob-object-javascript/

        //
        // futher improvement: Make the user change the name of the file with saveAs
        //
      }
    },
    {
      i: 'ic:round-clear',
      k: 'icon-02',
      f: () => { props.clearMark() }
    }
  ]

  const handleDrop = e => {
    e.preventDefault()
    setIsDrag(false)

    // to copy the text of a file, You need to access to dataTransfer of event
    const dt = e.dataTransfer
    // then use the files in that dataTransfer to pass it to a function to handle the files
    let files = []
    // below is used to work with multiple files. I will use just a single file instead
    /*for (let i = 0; i < dt.items.length; i++) {
      if (dt.items[i].kind == 'file' && (dt.items[i].type == 'text/markdown' || dt.items[i].type == 'text/plain')) {
        files.push(dt.files[i])
      }
    }*/

    // I just going to work with one file
    if (dt.items[0].kind == 'file' && (dt.items[0].type == 'text/markdown' || dt.items[0].type == 'text/plain')) {
      files.push(dt.files[0])
    } else if (dt.items[0].kind == 'string') {
      const textToCopy = dt.getData('text')
      handleCopyTextFromFile(textToCopy)
    }

    if (files.length) handleFiles(files)
  }

  /*
   * this function goin to create a FileReader to allow the web read the file(s) dropped by the user. Once the reader loads end, the reader will copy the text of the first file in the 'markdown' state to show it in the textarea
   * FileReaders object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
   * more information: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
   *
   * To read more than one file at one You need to use Promises and Promise all. Can use async/await instead
   * more info about read multiple files:
   * https://ourcodeworld.com/articles/read/1438/how-to-read-multiple-files-at-once-using-the-filereader-class-in-javascript
   * https://www.taniarascia.com/promise-all-with-async-await/
   *
   * How to read files from a "file" input: https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
  */
  const handleFiles = files => {
    // instantiate a new file reader
    const r = new FileReader()
    // we wait until the file reader load to check a single file
    r.onload = (e) => {
      const textFromF = e.target.result
      handleCopyTextFromFile(textFromF)
    }
    r.readAsText(files[0], 'UTF-8')
  }

  const handleCopyTextFromFile = textToCopy => props.handleChangeM(textToCopy)

  return (
    <section className="container"
      onDragEnter={e => setIsDrag(true)}
      onDragLeave={e => setIsDrag(false)}
    >
      <MainHeader section='Editor' icons={icons} />
      <textarea
        id="text"
        className={`
          ${styles.editor__body}
          ${props.isDrag ? styles.body__draggin : ''}
          ${isDrag ? styles.body__draggin : ''}
        `}
        onChange={e => props.handleChangeM(e.target.value)}
        value={props.markdown}
        onDrop={handleDrop}
        placeholder='Write your markdown text here'
      >
      </textarea>
    </section>
  )
}

export default Editor
