import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Editor from '../components/Editor'
import Previewer from '../components/Previewer'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [markdown, setMarkdown] = useState('')

  const changeMarkdown = ev => setMarkdown(ev.target.value)

  return (
    <>
      <Head>
        <title>Markdown Previewer</title>
      </Head>

      <Layout>
        <Editor mark={changeMarkdown} />
        <Previewer markdown={markdown} />
      </Layout>
    </>
  )
}
