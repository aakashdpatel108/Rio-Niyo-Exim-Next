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
          text1={
            <Fragment>
              <span className="blogs-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZOwW9I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="blogs-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ruUR5o'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="blogs-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LKwgfx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="blogs-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iSaQCX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="blogs-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zaKDVi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="blogs-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DDx4do'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="blogs-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lX0AKa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="blogs-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MUtMni'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="blogs-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A7QCh6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="blogs-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Qm-0PQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="blogs-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j6aeNV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="blogs-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a6-kuW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="blogs-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CCYzWH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="blogs-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q8NOCY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="blogs-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iZPgmH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="blogs-text27">
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
          feature1Title={
            <Fragment>
              <span className="blogs-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_m6YuYa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="blogs-text29">
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
              <span className="blogs-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Uv8tqK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="fruits-feature1root-class-name"
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
          .blogs-text23 {
            display: inline-block;
          }
          .blogs-text24 {
            display: inline-block;
          }
          .blogs-text25 {
            display: inline-block;
          }
          .blogs-text26 {
            display: inline-block;
          }
          .blogs-text27 {
            display: inline-block;
          }
          .blogs-text28 {
            display: inline-block;
          }
          .blogs-text29 {
            display: inline-block;
          }
          .blogs-text30 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .blogs-text28 {
              font-size: 26px;
            }
          }
          @media (max-width: 344px) {
            .blogs-text28 {
              font-size: 20px;
            }
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
