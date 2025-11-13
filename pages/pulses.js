import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner32 from '../components/banner32'
import PulsesFeature1 from '../components/pulses-feature-1'
import Footer from '../components/footer'

const Pulses = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="pulses-container">
        <Head>
          <title>Pulses - Rio Niyo Exim</title>
          <meta property="og:title" content="Pulses - Rio Niyo Exim" />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="pulses-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Gne_h6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="pulses-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Y2FjWP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="pulses-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bAyABM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="pulses-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_B6dNAq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="pulses-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_N0tVbm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="pulses-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6ZG1lk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="pulses-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_usjWz7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="pulses-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P-hhr5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="pulses-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7YgB9k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="pulses-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1Xb8oy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="pulses-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-EC0KT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="pulses-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_J9_a_C'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="pulses-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_S4qZgn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="pulses-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IwGYiq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="pulses-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_857cfa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="pulses-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Xx5o1h'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="pulses-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_V4pzLG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="pulses-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mzX1Au'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name10"
          locale={props?.locale ?? ''}
        ></Nav>
        <Banner32 locale={props?.locale ?? ''}></Banner32>
        <PulsesFeature1
          rootClassName="pulses-feature1root-class-name"
          locale={props?.locale ?? ''}
        ></PulsesFeature1>
        <Footer
          rootClassName="footerroot-class-name12"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .pulses-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .pulses-text10 {
            display: inline-block;
          }
          .pulses-text11 {
            display: inline-block;
          }
          .pulses-text12 {
            display: inline-block;
          }
          .pulses-text13 {
            display: inline-block;
          }
          .pulses-text14 {
            display: inline-block;
          }
          .pulses-text15 {
            display: inline-block;
          }
          .pulses-text16 {
            display: inline-block;
          }
          .pulses-text17 {
            display: inline-block;
          }
          .pulses-text18 {
            display: inline-block;
          }
          .pulses-text19 {
            display: inline-block;
          }
          .pulses-text20 {
            display: inline-block;
          }
          .pulses-text21 {
            display: inline-block;
          }
          .pulses-text22 {
            display: inline-block;
          }
          .pulses-text23 {
            display: inline-block;
          }
          .pulses-text24 {
            display: inline-block;
          }
          .pulses-text25 {
            display: inline-block;
          }
          .pulses-text26 {
            display: inline-block;
          }
          .pulses-text27 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Pulses

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
