import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Footer from '../components/footer'

const Spices = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="spices-container">
        <Head>
          <title>Spices - Rio Niyo Exim</title>
          <meta property="og:title" content="Spices - Rio Niyo Exim" />
        </Head>
        <Nav
          page1={
            <Fragment>
              <span className="spices-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c8Qb3j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="spices-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EyisV9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="spices-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PvmAqE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="spices-text4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PgFJj4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name5"
          locale={props?.locale ?? ''}
        ></Nav>
        <Footer
          logoSrc="/rioniyoexim.svg"
          rootClassName="footerroot-class-name9"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .spices-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .spices-text1 {
            display: inline-block;
          }
          .spices-text2 {
            display: inline-block;
          }
          .spices-text3 {
            display: inline-block;
          }
          .spices-text4 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Spices

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
