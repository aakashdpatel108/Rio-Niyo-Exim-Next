import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Footer from '../components/footer'

const Vegetables = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="vegetables-container">
        <Head>
          <title>Vegetables - Rio Niyo Exim</title>
          <meta property="og:title" content="Vegetables - Rio Niyo Exim" />
        </Head>
        <Nav
          page1={
            <Fragment>
              <span className="vegetables-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8_HXe6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="vegetables-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Z51IHY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="vegetables-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1w13Ej'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="vegetables-text4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A3Hkia'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name6"
          locale={props?.locale ?? ''}
        ></Nav>
        <Footer
          logoSrc="/rioniyoexim.svg"
          rootClassName="footerroot-class-name7"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .vegetables-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .vegetables-text1 {
            display: inline-block;
          }
          .vegetables-text2 {
            display: inline-block;
          }
          .vegetables-text3 {
            display: inline-block;
          }
          .vegetables-text4 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Vegetables

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
