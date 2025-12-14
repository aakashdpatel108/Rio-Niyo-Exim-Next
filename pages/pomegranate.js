import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import PomegranateBanner from '../components/pomegranate-banner'
import PomegranateHero from '../components/pomegranate-hero'
import PomegranateTable from '../components/pomegranate-table'
import PomegranateFeature1 from '../components/pomegranate-feature-1'
import FooterMain from '../components/footer-main'

const Pomegranate = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="pomegranate-container">
        <Head>
          <title>Pomegranate - Rio Niyo Exim</title>
          <meta property="og:title" content="Pomegranate - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/pomegranate"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="pomegranate-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sVRVQN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="pomegranate-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yrBRkJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="pomegranate-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zOgoZU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="pomegranate-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Qyh_EM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="pomegranate-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bS4hGf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="pomegranate-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gCKdsi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="pomegranate-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5qxjsO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="pomegranate-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jd06-9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="pomegranate-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zS7Jui'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="pomegranate-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UBqc6U'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="pomegranate-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jRzjG1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="pomegranate-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ad1w9S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="pomegranate-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ugAqWp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="pomegranate-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nvXLRW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="pomegranate-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4NBlWA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="pomegranate-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zdc0WI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="pomegranate-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tCmAz_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="pomegranate-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_G58TaH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name15"
          locale={props?.locale ?? ''}
        ></Nav>
        <PomegranateBanner
          rootClassName="pomegranate-bannerroot-class-name"
          locale={props?.locale ?? ''}
        ></PomegranateBanner>
        <PomegranateHero
          rootClassName="pomegranate-heroroot-class-name"
          locale={props?.locale ?? ''}
        ></PomegranateHero>
        <PomegranateTable
          text={
            <Fragment>
              <span className="pomegranate-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SDTXe3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="pomegranate-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FUGU6S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="pomegranate-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_l1xHbE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="pomegranate-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oq4LgX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="pomegranate-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jVWboK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="pomegranate-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UmzVW8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="pomegranate-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_st9sU7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="pomegranate-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3IluFQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="pomegranate-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__w_nJG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="pomegranate-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b5xZf8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="pomegranate-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7JnUI4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="pomegranate-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hCBbz6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="pomegranate-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xekVNf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="pomegranate-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ONd-IH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="pomegranate-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M2HsfM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="pomegranate-text43">
                <span>Magnesium – 12 mg</span>
                <br />
              </span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="pomegranate-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Sp1Vda'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text71={
            <Fragment>
              <span className="pomegranate-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pRAgVZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text81={
            <Fragment>
              <span className="pomegranate-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LJHvgj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="pomegranate-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T3vNuK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text131={
            <Fragment>
              <span className="pomegranate-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q6vPbl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="pomegranate-tableroot-class-name"
          locale={props?.locale ?? ''}
        ></PomegranateTable>
        <PomegranateFeature1
          rootClassName="pomegranate-feature1root-class-name"
          locale={props?.locale ?? ''}
        ></PomegranateFeature1>
        <FooterMain
          link2={
            <Fragment>
              <span className="pomegranate-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BarmM7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="pomegranate-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6fQ7dJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="pomegranate-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hEt45H'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="pomegranate-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kTY532'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="pomegranate-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dyHsTF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="pomegranate-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T-WlMO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="pomegranate-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ffnL6d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name12"
          locale={props?.locale ?? ''}
        ></FooterMain>
      </div>
      <style jsx>
        {`
          .pomegranate-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .pomegranate-text10 {
            display: inline-block;
          }
          .pomegranate-text11 {
            display: inline-block;
          }
          .pomegranate-text12 {
            display: inline-block;
          }
          .pomegranate-text13 {
            display: inline-block;
          }
          .pomegranate-text14 {
            display: inline-block;
          }
          .pomegranate-text15 {
            display: inline-block;
          }
          .pomegranate-text16 {
            display: inline-block;
          }
          .pomegranate-text17 {
            display: inline-block;
          }
          .pomegranate-text18 {
            display: inline-block;
          }
          .pomegranate-text19 {
            display: inline-block;
          }
          .pomegranate-text20 {
            display: inline-block;
          }
          .pomegranate-text21 {
            display: inline-block;
          }
          .pomegranate-text22 {
            display: inline-block;
          }
          .pomegranate-text23 {
            display: inline-block;
          }
          .pomegranate-text24 {
            display: inline-block;
          }
          .pomegranate-text25 {
            display: inline-block;
          }
          .pomegranate-text26 {
            display: inline-block;
          }
          .pomegranate-text27 {
            display: inline-block;
          }
          .pomegranate-text28 {
            display: inline-block;
          }
          .pomegranate-text29 {
            display: inline-block;
          }
          .pomegranate-text30 {
            display: inline-block;
          }
          .pomegranate-text31 {
            display: inline-block;
          }
          .pomegranate-text32 {
            display: inline-block;
          }
          .pomegranate-text33 {
            display: inline-block;
          }
          .pomegranate-text34 {
            display: inline-block;
          }
          .pomegranate-text35 {
            display: inline-block;
          }
          .pomegranate-text36 {
            display: inline-block;
          }
          .pomegranate-text37 {
            display: inline-block;
          }
          .pomegranate-text38 {
            display: inline-block;
          }
          .pomegranate-text39 {
            display: inline-block;
          }
          .pomegranate-text40 {
            display: inline-block;
          }
          .pomegranate-text41 {
            display: inline-block;
          }
          .pomegranate-text42 {
            display: inline-block;
          }
          .pomegranate-text43 {
            display: inline-block;
          }
          .pomegranate-text46 {
            display: inline-block;
          }
          .pomegranate-text47 {
            display: inline-block;
          }
          .pomegranate-text48 {
            display: inline-block;
          }
          .pomegranate-text49 {
            display: inline-block;
          }
          .pomegranate-text50 {
            display: inline-block;
          }
          .pomegranate-text51 {
            display: inline-block;
          }
          .pomegranate-text52 {
            display: inline-block;
          }
          .pomegranate-text53 {
            display: inline-block;
          }
          .pomegranate-text54 {
            display: inline-block;
          }
          .pomegranate-text55 {
            display: inline-block;
          }
          .pomegranate-text56 {
            display: inline-block;
          }
          .pomegranate-text57 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .pomegranate-text29 {
              font-family: Taviraj;
            }
            .pomegranate-text30 {
              font-family: Open Sans;
            }
            .pomegranate-text49 {
              font-family: Open Sans;
            }
          }
        `}
      </style>
    </>
  )
}

export default Pomegranate

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
