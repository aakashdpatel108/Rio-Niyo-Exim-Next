import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import DragonFruitBanner from '../components/dragon-fruit-banner'
import DragonHero from '../components/dragon-hero'
import DragonFruitTable from '../components/dragon-fruit-table'
import DragonfruitFeature1 from '../components/dragonfruit-feature-1'
import FooterMain from '../components/footer-main'

const DragonFruit = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="dragon-fruit-container">
        <Head>
          <title>Dragon-fruit - Rio Niyo Exim</title>
          <meta property="og:title" content="Dragon-fruit - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/dragon-fruit"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="dragon-fruit-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ufbfc0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="dragon-fruit-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_u1zcfu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="dragon-fruit-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_n9abEk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="dragon-fruit-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_V6VGub'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="dragon-fruit-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oUg8ja'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="dragon-fruit-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PgaDkY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="dragon-fruit-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nQnjXY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="dragon-fruit-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3f07I5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="dragon-fruit-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WRD4NS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="dragon-fruit-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MIr7OE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="dragon-fruit-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hLoeuB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="dragon-fruit-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7g9DIu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="dragon-fruit-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0QwQ-0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="dragon-fruit-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4tvBxd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="dragon-fruit-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8A62NB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="dragon-fruit-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Nlelsh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="dragon-fruit-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iPROF9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="dragon-fruit-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_az5BNj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name14"
          locale={props?.locale ?? ''}
        ></Nav>
        <DragonFruitBanner locale={props?.locale ?? ''}></DragonFruitBanner>
        <DragonHero
          rootClassName="dragon-heroroot-class-name"
          locale={props?.locale ?? ''}
        ></DragonHero>
        <DragonFruitTable
          text={
            <Fragment>
              <span className="dragon-fruit-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZihAUp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="dragon-fruit-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1ZCjZa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="dragon-fruit-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qz-A7g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="dragon-fruit-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9fLcm1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="dragon-fruit-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bWMXYJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="dragon-fruit-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ysn-xD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="dragon-fruit-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6BENKW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="dragon-fruit-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_l0ioZR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="dragon-fruit-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lq03Kw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="dragon-fruit-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dfM3mW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="dragon-fruit-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lhu3q3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="dragon-fruit-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BREky1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="dragon-fruit-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xclnsR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="dragon-fruit-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tVrinY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="dragon-fruit-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bKL7Nh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="dragon-fruit-text43">
                <span>Magnesium - 10 mg</span>
                <br />
              </span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="dragon-fruit-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R0U953'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text71={
            <Fragment>
              <span className="dragon-fruit-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rdqVoO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text81={
            <Fragment>
              <span className="dragon-fruit-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gY_xtV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="dragon-fruit-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_toii4P'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text131={
            <Fragment>
              <span className="dragon-fruit-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DQxHab'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="dragon-fruit-tableroot-class-name"
          locale={props?.locale ?? ''}
        ></DragonFruitTable>
        <DragonfruitFeature1
          rootClassName="dragonfruit-feature1root-class-name"
          locale={props?.locale ?? ''}
        ></DragonfruitFeature1>
        <FooterMain
          link2={
            <Fragment>
              <span className="dragon-fruit-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7ASVAV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="dragon-fruit-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s83d8e'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="dragon-fruit-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_er38nX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="dragon-fruit-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__aFjJe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="dragon-fruit-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0hsYx5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="dragon-fruit-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZtArrN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="dragon-fruit-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-Remu0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name11"
          locale={props?.locale ?? ''}
        ></FooterMain>
      </div>
      <style jsx>
        {`
          .dragon-fruit-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .dragon-fruit-text10 {
            display: inline-block;
          }
          .dragon-fruit-text11 {
            display: inline-block;
          }
          .dragon-fruit-text12 {
            display: inline-block;
          }
          .dragon-fruit-text13 {
            display: inline-block;
          }
          .dragon-fruit-text14 {
            display: inline-block;
          }
          .dragon-fruit-text15 {
            display: inline-block;
          }
          .dragon-fruit-text16 {
            display: inline-block;
          }
          .dragon-fruit-text17 {
            display: inline-block;
          }
          .dragon-fruit-text18 {
            display: inline-block;
          }
          .dragon-fruit-text19 {
            display: inline-block;
          }
          .dragon-fruit-text20 {
            display: inline-block;
          }
          .dragon-fruit-text21 {
            display: inline-block;
          }
          .dragon-fruit-text22 {
            display: inline-block;
          }
          .dragon-fruit-text23 {
            display: inline-block;
          }
          .dragon-fruit-text24 {
            display: inline-block;
          }
          .dragon-fruit-text25 {
            display: inline-block;
          }
          .dragon-fruit-text26 {
            display: inline-block;
          }
          .dragon-fruit-text27 {
            display: inline-block;
          }
          .dragon-fruit-text28 {
            display: inline-block;
          }
          .dragon-fruit-text29 {
            display: inline-block;
          }
          .dragon-fruit-text30 {
            display: inline-block;
          }
          .dragon-fruit-text31 {
            display: inline-block;
          }
          .dragon-fruit-text32 {
            display: inline-block;
          }
          .dragon-fruit-text33 {
            display: inline-block;
          }
          .dragon-fruit-text34 {
            display: inline-block;
          }
          .dragon-fruit-text35 {
            display: inline-block;
          }
          .dragon-fruit-text36 {
            display: inline-block;
          }
          .dragon-fruit-text37 {
            display: inline-block;
          }
          .dragon-fruit-text38 {
            display: inline-block;
          }
          .dragon-fruit-text39 {
            display: inline-block;
          }
          .dragon-fruit-text40 {
            display: inline-block;
          }
          .dragon-fruit-text41 {
            display: inline-block;
          }
          .dragon-fruit-text42 {
            display: inline-block;
          }
          .dragon-fruit-text43 {
            display: inline-block;
          }
          .dragon-fruit-text46 {
            display: inline-block;
          }
          .dragon-fruit-text47 {
            display: inline-block;
          }
          .dragon-fruit-text48 {
            display: inline-block;
          }
          .dragon-fruit-text49 {
            display: inline-block;
          }
          .dragon-fruit-text50 {
            display: inline-block;
          }
          .dragon-fruit-text51 {
            display: inline-block;
          }
          .dragon-fruit-text52 {
            display: inline-block;
          }
          .dragon-fruit-text53 {
            display: inline-block;
          }
          .dragon-fruit-text54 {
            display: inline-block;
          }
          .dragon-fruit-text55 {
            display: inline-block;
          }
          .dragon-fruit-text56 {
            display: inline-block;
          }
          .dragon-fruit-text57 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .dragon-fruit-text29 {
              font-family: Taviraj;
            }
            .dragon-fruit-text30 {
              font-family: Open Sans;
            }
            .dragon-fruit-text49 {
              font-family: Open Sans;
            }
          }
        `}
      </style>
    </>
  )
}

export default DragonFruit

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
