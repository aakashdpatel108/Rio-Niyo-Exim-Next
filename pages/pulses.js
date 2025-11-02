import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner32 from '../components/banner32'
import PulsesFeature1 from '../components/pulses-feature-1'
import Footer from '../components/footer'

const Pulses = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="pulses-container">
        <Head>
          <title>Pulses - Rio Niyo Exim</title>
          <meta property="og:title" content="Pulses - Rio Niyo Exim" />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="pulses-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Gne_h6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="pulses-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Y2FjWP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="pulses-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6ZG1lk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="pulses-text4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mzX1Au'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name10"
          locale={props?.locale ?? ''}
        ></Nav>
        <Banner32 locale={props?.locale ?? ''}></Banner32>
        <PulsesFeature1
          rootClassName="pulses-feature1root-class-name"
          locale={props?.locale ?? ''}
        ></PulsesFeature1>
        <Footer
          rootClassName="footerroot-class-name12"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .pulses-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .pulses-text1 {
            display: inline-block;
          }
          .pulses-text2 {
            display: inline-block;
          }
          .pulses-text3 {
            display: inline-block;
          }
          .pulses-text4 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Pulses

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
