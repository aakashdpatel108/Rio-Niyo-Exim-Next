import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import NotFound21 from '../components/not-found21'
import Footer from '../components/footer'

const GrainsAndCereal = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="grains-and-cereal-container">
        <Head>
          <title>Grains-and-Cereal - Rio Niyo Exim</title>
          <meta
            property="og:title"
            content="Grains-and-Cereal - Rio Niyo Exim"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="grains-and-cereal-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IsBKnD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="grains-and-cereal-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_81Y9wS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="grains-and-cereal-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WfDAYR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="grains-and-cereal-text4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IBx7tK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name12"
          locale={props?.locale ?? ''}
        ></Nav>
        <NotFound21
          action1={
            <Fragment>
              <span className="grains-and-cereal-text5">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AfTo4c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="grains-and-cereal-text6">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rOYNgL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></NotFound21>
        <Footer
          rootClassName="footerroot-class-name14"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .grains-and-cereal-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .grains-and-cereal-text1 {
            display: inline-block;
          }
          .grains-and-cereal-text2 {
            display: inline-block;
          }
          .grains-and-cereal-text3 {
            display: inline-block;
          }
          .grains-and-cereal-text4 {
            display: inline-block;
          }
          .grains-and-cereal-text5 {
            display: inline-block;
          }
          .grains-and-cereal-text6 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default GrainsAndCereal

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
