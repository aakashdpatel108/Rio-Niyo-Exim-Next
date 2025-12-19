import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner33 from '../components/banner33'
import DryfruitFeature11 from '../components/dryfruit-feature-11'
import FooterMain from '../components/footer-main'

const DryFruits = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="dry-fruits-container">
        <Head>
          <title>Dry-fruits - Rio Niyo Exim</title>
          <meta property="og:title" content="Dry-fruits - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/dry-fruits"
          />
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
          text1={
            <Fragment>
              <span className="dry-fruits-text12">
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
              <span className="dry-fruits-text13">
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
              <span className="dry-fruits-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XTZn_P'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="dry-fruits-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q14xpU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="dry-fruits-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9A7sUh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="dry-fruits-text17">
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
              <span className="dry-fruits-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3UyhxZ'),
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
          text32={
            <Fragment>
              <span className="dry-fruits-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5gIqlx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="dry-fruits-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_351uEt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="dry-fruits-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_X6Wsrt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="dry-fruits-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VlqTcv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="dry-fruits-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_O9biXh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="dry-fruits-text25">
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
              <span className="dry-fruits-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RPaOm1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="dry-fruits-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vNPAex'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name7"
          locale={props?.locale ?? ''}
        ></Nav>
        <Banner33
          image1Src="https://images.unsplash.com/photo-1693812879904-b8161644ce5a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxudXRzfGVufDB8fHx8MTc2MjEyMTI1Nnww&amp;ixlib=rb-4.1.0&amp;w=1500"
          locale={props?.locale ?? ''}
        ></Banner33>
        <DryfruitFeature11
          rootClassName="dryfruit-feature11root-class-name"
          locale={props?.locale ?? ''}
        ></DryfruitFeature11>
        <FooterMain
          link2={
            <Fragment>
              <span className="dry-fruits-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2usIBC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="dry-fruits-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gtv3xN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="dry-fruits-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_skYqlU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="dry-fruits-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0u_17M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="dry-fruits-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XS88UU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="dry-fruits-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q1k7pg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="dry-fruits-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HeNPg9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name4"
          locale={props?.locale ?? ''}
        ></FooterMain>
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
            display: inline-block;
          }
          .dry-fruits-text30 {
            display: inline-block;
          }
          .dry-fruits-text31 {
            display: inline-block;
          }
          .dry-fruits-text32 {
            display: inline-block;
          }
          .dry-fruits-text33 {
            display: inline-block;
          }
          .dry-fruits-text34 {
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
