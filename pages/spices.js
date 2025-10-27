import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner3 from '../components/banner3'
import SpiceFeature1 from '../components/spice-feature-1'
import SpiceFeature2 from '../components/spice-feature-2'
import SpiceFeature3 from '../components/spice-feature-3'
import SpiceFeature4 from '../components/spice-feature-4'
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
          page3={
            <Fragment>
              <span className="spices-text1">
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
              <span className="spices-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PgFJj4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="spices-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KmQFqs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="spices-text4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nVjni-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name5"
          locale={props?.locale ?? ''}
        ></Nav>
        <Banner3
          action1={
            <Fragment>
              <span className="spices-text5">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M0cb6a'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Banner3>
        <SpiceFeature1
          rootClassName="spice-feature1root-class-name"
          feature1Description={
            <Fragment>
              <span className="spices-text6">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lJn7kG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></SpiceFeature1>
        <SpiceFeature2 locale={props?.locale ?? ''}></SpiceFeature2>
        <SpiceFeature3
          rootClassName="spice-feature3root-class-name"
          feature1Description={
            <Fragment>
              <span className="spices-text7">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1f0g5E'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></SpiceFeature3>
        <SpiceFeature4
          rootClassName="spice-feature4root-class-name"
          locale={props?.locale ?? ''}
        ></SpiceFeature4>
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
            overflow-x: clip;
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
          .spices-text5 {
            display: inline-block;
          }
          .spices-text6 {
            display: inline-block;
          }
          .spices-text7 {
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
