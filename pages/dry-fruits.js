import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner33 from '../components/banner33'
import DryfruitFeature1 from '../components/dryfruit-feature-1'
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
          page3={
            <Fragment>
              <span className="dry-fruits-text10">
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
              <span className="dry-fruits-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oFTC58'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="dry-fruits-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q14xpU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="dry-fruits-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vNPAex'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name7"
          page41={
            <Fragment>
              <span className="dry-fruits-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9A7sUh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="dry-fruits-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_351uEt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="dry-fruits-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Yp0WhI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="dry-fruits-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ktnKoj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="dry-fruits-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XTZn_P'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="dry-fruits-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2x3RdB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="dry-fruits-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_X6Wsrt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="dry-fruits-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_O9biXh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="dry-fruits-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SgHlfB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="dry-fruits-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3UyhxZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="dry-fruits-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5gIqlx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="dry-fruits-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VlqTcv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="dry-fruits-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j9p_po'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="dry-fruits-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RPaOm1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Nav>
        <Banner33
          action1={
            <Fragment>
              <span className="dry-fruits-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lnjuR3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="dry-fruits-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UFiTDg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="dry-fruits-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xl0DZz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1693812879904-b8161644ce5a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxudXRzfGVufDB8fHx8MTc2MjEyMTI1Nnww&amp;ixlib=rb-4.1.0&amp;w=1500"
          locale={props?.locale ?? ''}
        ></Banner33>
        <DryfruitFeature1
          rootClassName="dryfruit-feature1root-class-name"
          locale={props?.locale ?? ''}
        ></DryfruitFeature1>
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
          .dry-fruits-text10 {
            display: inline-block;
          }
          .dry-fruits-text11 {
            display: inline-block;
          }
          .dry-fruits-text12 {
            display: inline-block;
          }
          .dry-fruits-text13 {
            display: inline-block;
          }
          .dry-fruits-text14 {
            display: inline-block;
          }
          .dry-fruits-text15 {
            display: inline-block;
          }
          .dry-fruits-text16 {
            display: inline-block;
          }
          .dry-fruits-text17 {
            display: inline-block;
          }
          .dry-fruits-text18 {
            display: inline-block;
          }
          .dry-fruits-text19 {
            display: inline-block;
          }
          .dry-fruits-text20 {
            display: inline-block;
          }
          .dry-fruits-text21 {
            display: inline-block;
          }
          .dry-fruits-text22 {
            display: inline-block;
          }
          .dry-fruits-text23 {
            display: inline-block;
          }
          .dry-fruits-text24 {
            display: inline-block;
          }
          .dry-fruits-text25 {
            display: inline-block;
          }
          .dry-fruits-text26 {
            display: inline-block;
          }
          .dry-fruits-text27 {
            display: inline-block;
          }
          .dry-fruits-text28 {
            display: inline-block;
          }
          .dry-fruits-text29 {
            color: #ffffff;
            display: inline-block;
          }
          .dry-fruits-text30 {
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
