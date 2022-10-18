import React from 'react'
import clsx from 'clsx'
import { MuiFileInput } from 'mui-file-input'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import DocusaurusImageUrl from '@site/static/img/logo.svg'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import '../css/index.css'

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  const [files, setFiles] = React.useState<File[]>([])

  const handleChange = (newFiles: File[]) => {
    setFiles(newFiles)
  }

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <DocusaurusImageUrl width={100} height={100} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <MuiFileInput
          value={files}
          multiple
          onChange={handleChange}
          placeholder="Insert a file"
        />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  )
}

const Home = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  )
}

export default Home
