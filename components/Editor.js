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
      f: function saveTextAsFile () {
        const textToWrite = document.querySelector('#text').value
        const fileNameToSaveAs = 'markdown.md'

        // create a blob elements, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data
        // read more: https://developer.mozilla.org/en-US/docs/Web/API/Blob
        var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'})

        // here I going to use the download attribute of the anchor tag to save the text of the textarea triggering the click of the anchor
        // read more: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

        var downloadLink = document.createElement("a") // create the anchor tag
        downloadLink.download = fileNameToSaveAs // assign the name of the file to download including the extension as string (e.g. markdown.md)
        downloadLink.innerHTML = "Download File" // I don't know the reason of this step, I need a deep research

        // to download the file I to use the URL.createObjectURL() API. The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.
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
