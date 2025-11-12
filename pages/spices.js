import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner3 from '../components/banner3'
import SpiceFeature1 from '../components/spice-feature-1'
import SpiceFeature2 from '../components/spice-feature-2'
import SpiceFeature3 from '../components/spice-feature-3'
import SpiceFeature4 from '../components/spice-feature-4'
import FooterMain from '../components/footer-main'

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
              <span className="spices-text10">
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
              <span className="spices-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PgFJj4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="spices-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ew5o_T'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="spices-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_S12xWR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="spices-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CC5GA_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="spices-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KmQFqs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="spices-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nASC_9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="spices-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ORWuB6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="spices-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TKtcHn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="spices-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_I9_8pc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="spices-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TTI0KI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="spices-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-KlCoX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="spices-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TSq62Z'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="spices-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cBi1gF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="spices-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TWoLxd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="spices-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZTvh2U'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="spices-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GZJqi-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="spices-text27">
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
              <span className="spices-text28">
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
              <span className="spices-text29">
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
          locale={props?.locale ?? ''}
        ></SpiceFeature3>
        <SpiceFeature4
          rootClassName="spice-feature4root-class-name"
          locale={props?.locale ?? ''}
        ></SpiceFeature4>
        <FooterMain
          termsLink={
            <Fragment>
              <span className="spices-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4SoNtW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="spices-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BSWzwg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="spices-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7HAZRc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="spices-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9y6pNh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="spices-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tozo_A'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="spices-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cK4cIy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="spices-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_moKJ28'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name8"
          locale={props?.locale ?? ''}
        ></FooterMain>
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
          .spices-text10 {
            display: inline-block;
          }
          .spices-text11 {
            display: inline-block;
          }
          .spices-text12 {
            display: inline-block;
          }
          .spices-text13 {
            display: inline-block;
          }
          .spices-text14 {
            display: inline-block;
          }
          .spices-text15 {
            display: inline-block;
          }
          .spices-text16 {
            display: inline-block;
          }
          .spices-text17 {
            display: inline-block;
          }
          .spices-text18 {
            display: inline-block;
          }
          .spices-text19 {
            display: inline-block;
          }
          .spices-text20 {
            display: inline-block;
          }
          .spices-text21 {
            display: inline-block;
          }
          .spices-text22 {
            display: inline-block;
          }
          .spices-text23 {
            display: inline-block;
          }
          .spices-text24 {
            display: inline-block;
          }
          .spices-text25 {
            display: inline-block;
          }
          .spices-text26 {
            display: inline-block;
          }
          .spices-text27 {
            display: inline-block;
          }
          .spices-text28 {
            display: inline-block;
          }
          .spices-text29 {
            display: inline-block;
          }
          .spices-text30 {
            display: inline-block;
          }
          .spices-text31 {
            display: inline-block;
          }
          .spices-text32 {
            display: inline-block;
          }
          .spices-text33 {
            display: inline-block;
          }
          .spices-text34 {
            display: inline-block;
          }
          .spices-text35 {
            display: inline-block;
          }
          .spices-text36 {
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
