import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import FruitsFeature1 from '../components/fruits-feature-1'
import Footer from '../components/footer'

const Blogs = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="blogs-container">
        <Head>
          <title>Blogs - Rio Niyo Exim</title>
          <meta property="og:title" content="Blogs - Rio Niyo Exim" />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="blogs-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GMQPDH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="blogs-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q0yqPd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="blogs-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iSaQCX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="blogs-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o7spzW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name8"
          locale={props?.locale ?? ''}
        ></Nav>
        <FruitsFeature1
          slogan1={
            <Fragment>
              <span className="blogs-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FsWJhF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="blogs-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_u2J_Tw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="blogs-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b-9bxv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="blogs-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8wQW31'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="blogs-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GOzfGP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="blogs-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Uv8tqK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="fruits-feature1root-class-name"
          feature1Description={
            <Fragment>
              <span className="blogs-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IMLnpi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="blogs-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ve4V7U'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="blogs-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rraRGR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></FruitsFeature1>
        <Footer
          rootClassName="footerroot-class-name10"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .blogs-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .blogs-text10 {
            display: inline-block;
          }
          .blogs-text11 {
            display: inline-block;
          }
          .blogs-text12 {
            display: inline-block;
          }
          .blogs-text13 {
            display: inline-block;
          }
          .blogs-text14 {
            display: inline-block;
          }
          .blogs-text15 {
            display: inline-block;
          }
          .blogs-text16 {
            display: inline-block;
          }
          .blogs-text17 {
            display: inline-block;
          }
          .blogs-text18 {
            display: inline-block;
          }
          .blogs-text19 {
            display: inline-block;
          }
          .blogs-text20 {
            display: inline-block;
          }
          .blogs-text21 {
            display: inline-block;
          }
          .blogs-text22 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Blogs

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
