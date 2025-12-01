import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Page = (props) => {
  return (
    <>
      <div className="page-container1">
        <Head>
          <title>Page - Rio Niyo Exim</title>
          <meta property="og:title" content="Page - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/page"
          />
        </Head>
        <div className="page-container2"></div>
      </div>
      <style jsx>
        {`
          .page-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-container2 {
            width: 100%;
            height: var(--dl-layout-size-maxwidth);
            display: block;
            object-fit: contain;
            flex-direction: row;
            background-size: contain;
            background-image: url('/Certificates/certificateofiec-1500w.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          @media (max-width: 1600px) {
            .page-container2 {
              width: 100%;
              height: var(--dl-layout-size-maxwidth);
            }
          }
          @media (max-width: 991px) {
            .page-container2 {
              height: var(--dl-layout-size-maxwidth);
            }
          }
          @media (max-width: 767px) {
            .page-container2 {
              width: 100%;
              height: 1000px;
            }
          }
          @media (max-width: 344px) {
            .page-container2 {
              width: 100%;
              height: 500px;
            }
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
