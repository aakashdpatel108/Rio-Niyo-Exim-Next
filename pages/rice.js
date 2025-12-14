import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import RiceBanner from '../components/rice-banner'
import RiceFeature1 from '../components/rice-feature-1'
import FooterMain from '../components/footer-main'

const Rice = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="rice-container">
        <Head>
          <title>Rice - Rio Niyo Exim</title>
          <meta property="og:title" content="Rice - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/rice"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="rice-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LLtZ_5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="rice-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q2Ydof'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="rice-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DNmZrF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="rice-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_v7N6Qe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="rice-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DzHS5j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="rice-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Sv-RWx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="rice-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BAKU6N'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="rice-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XE1zV8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="rice-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zoq8VM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="rice-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Dy4uOg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="rice-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ub1XrU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="rice-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QasYTh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="rice-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JFooHi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="rice-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_biENsa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="rice-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qnDvGO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="rice-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ggrll-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="rice-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t7KXzW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="rice-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IHSBz-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name16"
          locale={props?.locale ?? ''}
        ></Nav>
        <RiceBanner locale={props?.locale ?? ''}></RiceBanner>
        <RiceFeature1
          rootClassName="rice-feature1root-class-name"
          locale={props?.locale ?? ''}
        ></RiceFeature1>
        <FooterMain
          link2={
            <Fragment>
              <span className="rice-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kjgiH0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="rice-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cOj13v'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="rice-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8leQTh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="rice-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sAUIzx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="rice-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_97_Q8K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="rice-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_J1snbm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="rice-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bCqMqe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name13"
          locale={props?.locale ?? ''}
        ></FooterMain>
      </div>
      <style jsx>
        {`
          .rice-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .rice-text10 {
            display: inline-block;
          }
          .rice-text11 {
            display: inline-block;
          }
          .rice-text12 {
            display: inline-block;
          }
          .rice-text13 {
            display: inline-block;
          }
          .rice-text14 {
            display: inline-block;
          }
          .rice-text15 {
            display: inline-block;
          }
          .rice-text16 {
            display: inline-block;
          }
          .rice-text17 {
            display: inline-block;
          }
          .rice-text18 {
            display: inline-block;
          }
          .rice-text19 {
            display: inline-block;
          }
          .rice-text20 {
            display: inline-block;
          }
          .rice-text21 {
            display: inline-block;
          }
          .rice-text22 {
            display: inline-block;
          }
          .rice-text23 {
            display: inline-block;
          }
          .rice-text24 {
            display: inline-block;
          }
          .rice-text25 {
            display: inline-block;
          }
          .rice-text26 {
            display: inline-block;
          }
          .rice-text27 {
            display: inline-block;
          }
          .rice-text28 {
            display: inline-block;
          }
          .rice-text29 {
            display: inline-block;
          }
          .rice-text30 {
            display: inline-block;
          }
          .rice-text31 {
            display: inline-block;
          }
          .rice-text32 {
            display: inline-block;
          }
          .rice-text33 {
            display: inline-block;
          }
          .rice-text34 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Rice

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
