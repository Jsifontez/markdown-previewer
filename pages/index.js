import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Markdown Previewer</title>
      </Head>

      <Layout>
        <section  style={{height: '615px', width: '100%'}}>
          <header style={{height:'40px'}}>
            <b>Editor</b>
          </header>
          <textarea style={{height: '100%'}}></textarea>
        </section>
      </Layout>
    </>
  )
}
