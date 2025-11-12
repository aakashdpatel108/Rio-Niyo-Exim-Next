import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import NotFound21 from '../components/not-found21'
import FooterMain from '../components/footer-main'

const GrainsAndCereal = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="grains-and-cereal-container">
        <Head>
          <title>Grains-and-Cereal - Rio Niyo Exim</title>
          <meta
            property="og:title"
            content="Grains-and-Cereal - Rio Niyo Exim"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="grains-and-cereal-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IsBKnD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="grains-and-cereal-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_81Y9wS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="grains-and-cereal-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_18mC8g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="grains-and-cereal-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BlgLsh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="grains-and-cereal-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-BEBZC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="grains-and-cereal-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WfDAYR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="grains-and-cereal-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_19hK9M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="grains-and-cereal-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4nimhC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="grains-and-cereal-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LQHsK3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="grains-and-cereal-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VXGZnX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="grains-and-cereal-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IW9V4d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="grains-and-cereal-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vyeFjK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="grains-and-cereal-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xHQFzu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="grains-and-cereal-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__Awum0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="grains-and-cereal-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P1hqN1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="grains-and-cereal-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E3szmc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="grains-and-cereal-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FTJzvU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="grains-and-cereal-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IBx7tK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name12"
          locale={props?.locale ?? ''}
        ></Nav>
        <NotFound21
          action1={
            <Fragment>
              <span className="grains-and-cereal-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AfTo4c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="grains-and-cereal-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rOYNgL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></NotFound21>
        <FooterMain
          termsLink={
            <Fragment>
              <span className="grains-and-cereal-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Re86rQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="grains-and-cereal-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZJotpi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="grains-and-cereal-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pdn6fz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="grains-and-cereal-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ab9cXY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="grains-and-cereal-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2XJUZ6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="grains-and-cereal-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z5_RTP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="grains-and-cereal-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_k52CX3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name6"
          locale={props?.locale ?? ''}
        ></FooterMain>
      </div>
      <style jsx>
        {`
          .grains-and-cereal-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .grains-and-cereal-text10 {
            display: inline-block;
          }
          .grains-and-cereal-text11 {
            display: inline-block;
          }
          .grains-and-cereal-text12 {
            display: inline-block;
          }
          .grains-and-cereal-text13 {
            display: inline-block;
          }
          .grains-and-cereal-text14 {
            display: inline-block;
          }
          .grains-and-cereal-text15 {
            display: inline-block;
          }
          .grains-and-cereal-text16 {
            display: inline-block;
          }
          .grains-and-cereal-text17 {
            display: inline-block;
          }
          .grains-and-cereal-text18 {
            display: inline-block;
          }
          .grains-and-cereal-text19 {
            display: inline-block;
          }
          .grains-and-cereal-text20 {
            display: inline-block;
          }
          .grains-and-cereal-text21 {
            display: inline-block;
          }
          .grains-and-cereal-text22 {
            display: inline-block;
          }
          .grains-and-cereal-text23 {
            display: inline-block;
          }
          .grains-and-cereal-text24 {
            display: inline-block;
          }
          .grains-and-cereal-text25 {
            display: inline-block;
          }
          .grains-and-cereal-text26 {
            display: inline-block;
          }
          .grains-and-cereal-text27 {
            display: inline-block;
          }
          .grains-and-cereal-text28 {
            display: inline-block;
          }
          .grains-and-cereal-text29 {
            display: inline-block;
          }
          .grains-and-cereal-text30 {
            display: inline-block;
          }
          .grains-and-cereal-text31 {
            display: inline-block;
          }
          .grains-and-cereal-text32 {
            display: inline-block;
          }
          .grains-and-cereal-text33 {
            display: inline-block;
          }
          .grains-and-cereal-text34 {
            display: inline-block;
          }
          .grains-and-cereal-text35 {
            display: inline-block;
          }
          .grains-and-cereal-text36 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default GrainsAndCereal

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
