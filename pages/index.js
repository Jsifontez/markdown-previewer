import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Editor from '../components/Editor'
import Previewer from '../components/Previewer'

export default function Home() {
  const [markdown, setMarkdown] = useState('')
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
