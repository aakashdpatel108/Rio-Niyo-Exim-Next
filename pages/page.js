import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Rio Niyo Exim</title>
          <meta property="og:title" content="Page - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/page"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Page

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
