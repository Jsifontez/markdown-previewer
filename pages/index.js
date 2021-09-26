import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Editor from '../components/Editor'
import Previewer from '../components/Previewer'

export default function Home() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`\' && lastLine == '\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:
![Cute Koala](https://images.unsplash.com/photo-1616424436509-f2be22f40838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80)
`)

  const [isDrag, setIsDrag] = useState(false)

  const changeMarkdown = text => setMarkdown(text)
  const clearMarkdown = () => setMarkdown('')

  const handleDragEnter = () => setIsDrag(true)
  const handleDrop = e => {
    e.preventDefault()
    setIsDrag(false)
  }
  const handleDragLeave = e => {
    setIsDrag(false)
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Markdown Previewer</title>
      </Head>

      <Layout>
        <main
          onDragEnter={handleDragEnter}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
        >
          <Editor
            markdown={markdown}
            handleChangeM={changeMarkdown}
            clearMark={clearMarkdown}
            isDrag={isDrag}
            dragEnter={handleDragEnter}
          />
          <Previewer markdown={markdown} />
        </main>
      </Layout>
    </>
  )
}
