import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Editor from '../components/Editor'
import Previewer from '../components/Previewer'

export default function Home() {
  const [markdown, setMarkdown] = useState('')

  const changeMarkdown = text => setMarkdown(text)
  const clearMarkdown = () => setMarkdown('')

  return (
    <>
      <Head>
        <title>Markdown Previewer</title>
      </Head>

      <Layout>
        <Editor
          markdown={markdown}
          handleChangeM={changeMarkdown}
          clearMark={clearMarkdown}
        />
        <Previewer markdown={markdown} />
      </Layout>
    </>
  )
}
