import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import CertificateBannerComp from '../components/certificate-banner-comp'
import Certificate1 from '../components/certificate-1'
import Certificate2 from '../components/certificate-2'
import Certificate3 from '../components/certificate-3'
import FooterMain from '../components/footer-main'

const Certificates = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="certificates-container">
        <Head>
          <title>Certificates - Rio Niyo Exim</title>
          <meta property="og:title" content="Certificates - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/certificates"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="certificates-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SFerHG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="certificates-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E2rpmH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="certificates-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_grWOC3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="certificates-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__Y-2eN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="certificates-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kefLiZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="certificates-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GjqiRn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="certificates-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HUfiGk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="certificates-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7vum2o'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="certificates-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gxakXQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="certificates-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NUsxHb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="certificates-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xlm-2-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="certificates-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zYork8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="certificates-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__3WCDF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="certificates-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aPS6RZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="certificates-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7Fpm5k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="certificates-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Iv0gfk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="certificates-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Hg_GjZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="certificates-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__fy02Y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name2"
          locale={props?.locale ?? ''}
        ></Nav>
        <CertificateBannerComp
          action1={
            <Fragment>
              <span className="certificates-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MPCs_y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="certificates-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pnqXji'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="certificates-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CogmYY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="certificates-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__MSRGK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZydWl0cyUyMGFuZCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzU5MzI4NzU1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          rootClassName="certificate-banner-comproot-class-name1"
          locale={props?.locale ?? ''}
        ></CertificateBannerComp>
        <Certificate1
          feature1ImgSrc="/demo-1400w.png"
          feature3ImgSrc="https://images.unsplash.com/photo-1563268381-06ddf2b1f46d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxibGFja3xlbnwwfHx8fDE3NTk0OTkwMDB8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
          locale={props?.locale ?? ''}
        ></Certificate1>
        <Certificate2
          feature1Title={
            <Fragment>
              <span className="certificates-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WFrIcw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="certificate2root-class-name"
          feature1Description={
            <Fragment>
              <span className="certificates-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UNsQjC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Certificate2>
        <Certificate3
          rootClassName="certificate3root-class-name"
          locale={props?.locale ?? ''}
        ></Certificate3>
        <FooterMain
          link2={
            <Fragment>
              <span className="certificates-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SDXxlG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="certificates-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8hQwBq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="certificates-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Uyqygb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="certificates-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qF2RCR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="certificates-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c8FsY-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="certificates-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hGT8gr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="certificates-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1JCxUG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name2"
          locale={props?.locale ?? ''}
        ></FooterMain>
      </div>
      <style jsx>
        {`
          .certificates-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .certificates-text10 {
            display: inline-block;
          }
          .certificates-text11 {
            display: inline-block;
          }
          .certificates-text12 {
            display: inline-block;
          }
          .certificates-text13 {
            display: inline-block;
          }
          .certificates-text14 {
            display: inline-block;
          }
          .certificates-text15 {
            display: inline-block;
          }
          .certificates-text16 {
            display: inline-block;
          }
          .certificates-text17 {
            display: inline-block;
          }
          .certificates-text18 {
            display: inline-block;
          }
          .certificates-text19 {
            display: inline-block;
          }
          .certificates-text20 {
            display: inline-block;
          }
          .certificates-text21 {
            display: inline-block;
          }
          .certificates-text22 {
            display: inline-block;
          }
          .certificates-text23 {
            display: inline-block;
          }
          .certificates-text24 {
            display: inline-block;
          }
          .certificates-text25 {
            display: inline-block;
          }
          .certificates-text26 {
            display: inline-block;
          }
          .certificates-text27 {
            display: inline-block;
          }
          .certificates-text28 {
            display: inline-block;
          }
          .certificates-text29 {
            display: inline-block;
          }
          .certificates-text30 {
            display: inline-block;
          }
          .certificates-text31 {
            display: inline-block;
          }
          .certificates-text32 {
            display: inline-block;
          }
          .certificates-text33 {
            display: inline-block;
          }
          .certificates-text34 {
            display: inline-block;
          }
          .certificates-text35 {
            display: inline-block;
          }
          .certificates-text36 {
            display: inline-block;
          }
          .certificates-text37 {
            display: inline-block;
          }
          .certificates-text38 {
            display: inline-block;
          }
          .certificates-text39 {
            display: inline-block;
          }
          .certificates-text40 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Certificates

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
