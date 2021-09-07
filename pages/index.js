import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Editor from '../components/Editor'
import Previewer from '../components/Previewer'

export default function Home() {
  const [markdown, setMarkdown] = useState('')

  const changeMarkdown = ev => setMarkdown(ev.target.value)
  const clearMarkdown = () => setMarkdown('')

  return (
    <>
      <Head>
        <title>Markdown Previewer</title>
      </Head>

      <Layout>
        <Editor mark={changeMarkdown} clearMark={clearMarkdown}/>
        <Previewer markdown={markdown} />
      </Layout>
    </>
  )
}
