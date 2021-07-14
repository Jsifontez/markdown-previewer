import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Editor from '../components/Editor'
import Previewer from '../components/Previewer'
import styles from '../styles/Home.module.css'

export default function Home() {
  const markdown = `
# Hello *World*!
This is another paragraph element.

*Italic*

**Bold**

-------------

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
  `
  return (
    <>
      <Head>
        <title>Markdown Previewer</title>
      </Head>

      <Layout>
        <Editor />
        <Previewer markdown={markdown} />
      </Layout>
    </>
  )
}
