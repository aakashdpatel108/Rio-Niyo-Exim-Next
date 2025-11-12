import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner31 from '../components/banner31'
import VegetableFeature1 from '../components/vegetable-feature-1'
import FooterMain from '../components/footer-main'

const Vegetables = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="vegetables-container">
        <Head>
          <title>Vegetables - Rio Niyo Exim</title>
          <meta property="og:title" content="Vegetables - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/vegetables"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="vegetables-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1w13Ej'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="vegetables-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A3Hkia'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="vegetables-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Z6XsiZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="vegetables-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vUhnX_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="vegetables-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Jrl_JH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="vegetables-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gE5OGF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="vegetables-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wC-mrc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="vegetables-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_g8DZzU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="vegetables-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Y_UzrO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="vegetables-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xTEqxh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="vegetables-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LMSSj7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="vegetables-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kqyjQ3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="vegetables-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VWeK08'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="vegetables-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vMs8II'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="vegetables-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ezYnrK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="vegetables-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7t8fIu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="vegetables-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_G86Spz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="vegetables-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xItkU6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name6"
          locale={props?.locale ?? ''}
        ></Nav>
        <Banner31 locale={props?.locale ?? ''}></Banner31>
        <VegetableFeature1
          rootClassName="vegetable-feature1root-class-name"
          locale={props?.locale ?? ''}
        ></VegetableFeature1>
        <FooterMain
          link2={
            <Fragment>
              <span className="vegetables-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YY9wgm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="vegetables-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wPNEf-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="vegetables-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gf-xSm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="vegetables-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KkFJiY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="vegetables-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0QGtkH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="vegetables-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QuvmJE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="vegetables-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-BKxuZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name9"
          locale={props?.locale ?? ''}
        ></FooterMain>
      </div>
      <style jsx>
        {`
          .vegetables-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .vegetables-text10 {
            display: inline-block;
          }
          .vegetables-text11 {
            display: inline-block;
          }
          .vegetables-text12 {
            display: inline-block;
          }
          .vegetables-text13 {
            display: inline-block;
          }
          .vegetables-text14 {
            display: inline-block;
          }
          .vegetables-text15 {
            display: inline-block;
          }
          .vegetables-text16 {
            display: inline-block;
          }
          .vegetables-text17 {
            display: inline-block;
          }
          .vegetables-text18 {
            display: inline-block;
          }
          .vegetables-text19 {
            display: inline-block;
          }
          .vegetables-text20 {
            display: inline-block;
          }
          .vegetables-text21 {
            display: inline-block;
          }
          .vegetables-text22 {
            display: inline-block;
          }
          .vegetables-text23 {
            display: inline-block;
          }
          .vegetables-text24 {
            display: inline-block;
          }
          .vegetables-text25 {
            display: inline-block;
          }
          .vegetables-text26 {
            display: inline-block;
          }
          .vegetables-text27 {
            display: inline-block;
          }
          .vegetables-text28 {
            display: inline-block;
          }
          .vegetables-text29 {
            display: inline-block;
          }
          .vegetables-text30 {
            display: inline-block;
          }
          .vegetables-text31 {
            display: inline-block;
          }
          .vegetables-text32 {
            display: inline-block;
          }
          .vegetables-text33 {
            display: inline-block;
          }
          .vegetables-text34 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Vegetables

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
