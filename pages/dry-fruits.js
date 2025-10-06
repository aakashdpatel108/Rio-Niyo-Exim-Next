import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Footer from '../components/footer'

const DryFruits = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="dry-fruits-container">
        <Head>
          <title>Dry-fruits - Rio Niyo Exim</title>
          <meta property="og:title" content="Dry-fruits - Rio Niyo Exim" />
        </Head>
        <Nav
          page1={
            <Fragment>
              <span className="dry-fruits-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QV9X-d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="dry-fruits-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b5ZSvm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="dry-fruits-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cmZdYG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="dry-fruits-text4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oFTC58'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name7"
          locale={props?.locale ?? ''}
        ></Nav>
        <Footer
          logoSrc="/rioniyoexim.svg"
          rootClassName="footerroot-class-name8"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .dry-fruits-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .dry-fruits-text1 {
            display: inline-block;
          }
          .dry-fruits-text2 {
            display: inline-block;
          }
          .dry-fruits-text3 {
            display: inline-block;
          }
          .dry-fruits-text4 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default DryFruits

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
