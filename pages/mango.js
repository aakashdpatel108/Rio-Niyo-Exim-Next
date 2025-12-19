import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import MangoHero from '../components/mango-hero'
import TableComponent from '../components/table-component'
import MangoFeature1 from '../components/mango-feature-1'
import FooterMain from '../components/footer-main'

const Mango = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="mango-container">
        <Head>
          <title>Mango - Rio Niyo Exim</title>
          <meta property="og:title" content="Mango - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/mango"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="mango-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Avp_ip'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="mango-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IFn7wR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="mango-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AqD-4n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="mango-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4laA_q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="mango-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jUbjtD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="mango-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fB-Ylw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="mango-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_y12wyx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="mango-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UnPHG3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="mango-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-W6In2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="mango-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_igZe-O'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="mango-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NwbnMv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="mango-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nycGzH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="mango-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4r3AOm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="mango-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_76c5xW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="mango-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6oqoWV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="mango-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Rym7yk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="mango-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-EZjiP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="mango-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bZw-xE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name13"
          locale={props?.locale ?? ''}
        ></Nav>
        <MangoHero
          image1Src="https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxtYW5nb2VzfGVufDB8fHx8MTc2NDQ0ODczNnww&amp;ixlib=rb-4.1.0&amp;w=1500"
          locale={props?.locale ?? ''}
        ></MangoHero>
        <TableComponent
          text={
            <Fragment>
              <span className="mango-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KDrSSj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="mango-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AmUGbR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="mango-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Le_ObW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="mango-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7vzB3r'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="mango-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AYHfsh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="mango-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Od31vZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="mango-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AXtdDq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="mango-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TNPVMm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="mango-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LW5nlt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="mango-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oeev64'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="mango-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jRrO_M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="mango-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RqjRsZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="mango-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_v4YmqN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="mango-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6n0sVS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="mango-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TncpUb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="mango-text43">
                <span>Magnesium</span>
                <br />
              </span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="mango-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6k3m8z'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="mango-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZeNWdc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="mango-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BBjwc7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></TableComponent>
        <MangoFeature1
          rootClassName="mango-feature1root-class-name"
          locale={props?.locale ?? ''}
        ></MangoFeature1>
        <FooterMain
          link2={
            <Fragment>
              <span className="mango-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nO1mm8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="mango-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kbTWQO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="mango-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ygu-GE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="mango-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T3DFkx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="mango-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_x09BjG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="mango-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t8w_Ki'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="mango-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MFz9l2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name10"
          locale={props?.locale ?? ''}
        ></FooterMain>
      </div>
      <style jsx>
        {`
          .mango-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .mango-text10 {
            display: inline-block;
          }
          .mango-text11 {
            display: inline-block;
          }
          .mango-text12 {
            display: inline-block;
          }
          .mango-text13 {
            display: inline-block;
          }
          .mango-text14 {
            display: inline-block;
          }
          .mango-text15 {
            display: inline-block;
          }
          .mango-text16 {
            display: inline-block;
          }
          .mango-text17 {
            display: inline-block;
          }
          .mango-text18 {
            display: inline-block;
          }
          .mango-text19 {
            display: inline-block;
          }
          .mango-text20 {
            display: inline-block;
          }
          .mango-text21 {
            display: inline-block;
          }
          .mango-text22 {
            display: inline-block;
          }
          .mango-text23 {
            display: inline-block;
          }
          .mango-text24 {
            display: inline-block;
          }
          .mango-text25 {
            display: inline-block;
          }
          .mango-text26 {
            display: inline-block;
          }
          .mango-text27 {
            display: inline-block;
          }
          .mango-text28 {
            display: inline-block;
          }
          .mango-text29 {
            display: inline-block;
          }
          .mango-text30 {
            display: inline-block;
          }
          .mango-text31 {
            display: inline-block;
          }
          .mango-text32 {
            display: inline-block;
          }
          .mango-text33 {
            display: inline-block;
          }
          .mango-text34 {
            display: inline-block;
          }
          .mango-text35 {
            display: inline-block;
          }
          .mango-text36 {
            display: inline-block;
          }
          .mango-text37 {
            display: inline-block;
          }
          .mango-text38 {
            display: inline-block;
          }
          .mango-text39 {
            display: inline-block;
          }
          .mango-text40 {
            display: inline-block;
          }
          .mango-text41 {
            display: inline-block;
          }
          .mango-text42 {
            display: inline-block;
          }
          .mango-text43 {
            display: inline-block;
          }
          .mango-text46 {
            display: inline-block;
          }
          .mango-text47 {
            display: inline-block;
          }
          .mango-text48 {
            display: inline-block;
          }
          .mango-text49 {
            display: inline-block;
          }
          .mango-text50 {
            display: inline-block;
          }
          .mango-text51 {
            display: inline-block;
          }
          .mango-text52 {
            display: inline-block;
          }
          .mango-text53 {
            display: inline-block;
          }
          .mango-text54 {
            display: inline-block;
          }
          .mango-text55 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .mango-text29 {
              font-family: Taviraj;
            }
            .mango-text30 {
              font-family: Open Sans;
            }
            .mango-text48 {
              font-family: Open Sans;
            }
          }
        `}
      </style>
    </>
  )
}

export default Mango

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
