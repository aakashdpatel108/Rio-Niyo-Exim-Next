import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import VegetablesBannerComp from '../components/vegetables-banner-comp'
import FruitsFeature1 from '../components/fruits-feature-1'
import FruitsFeature2 from '../components/fruits-feature-2'
import FruitsFeature3 from '../components/fruits-feature-3'
import Footer from '../components/footer'

const Fruits = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="fruits-container">
        <Head>
          <title>Fruits - Rio Niyo Exim</title>
          <meta property="og:title" content="Fruits - Rio Niyo Exim" />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="fruits-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LVVv4t'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="fruits-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j5cIHG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="fruits-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KY_Drr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="fruits-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nqDd1N'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="fruits-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_anRzR7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="fruits-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T2uqO_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="fruits-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LymRt9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="fruits-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZoZZp_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="fruits-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WDOPop'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="fruits-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T1ce2d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="fruits-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eiArcE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="fruits-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oztq4x'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="fruits-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ywU-sn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="fruits-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mPxhmP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="fruits-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pGwpXE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="fruits-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-IpRg_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="fruits-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SE6bl9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="fruits-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A8xDd_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name4"
          locale={props?.locale ?? ''}
        ></Nav>
        <VegetablesBannerComp
          action1={
            <Fragment>
              <span className="fruits-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_it7hCb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="fruits-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PxBOKG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZydWl0cyUyMGFuZCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzU5MzI4NzU1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          rootClassName="vegetables-banner-comproot-class-name2"
          locale={props?.locale ?? ''}
        ></VegetablesBannerComp>
        <FruitsFeature1 locale={props?.locale ?? ''}></FruitsFeature1>
        <FruitsFeature2 locale={props?.locale ?? ''}></FruitsFeature2>
        <FruitsFeature3 locale={props?.locale ?? ''}></FruitsFeature3>
        <Footer
          logoSrc="/rioniyoexim.svg"
          rootClassName="footerroot-class-name6"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .fruits-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .fruits-text10 {
            display: inline-block;
          }
          .fruits-text11 {
            display: inline-block;
          }
          .fruits-text12 {
            display: inline-block;
          }
          .fruits-text13 {
            display: inline-block;
          }
          .fruits-text14 {
            display: inline-block;
          }
          .fruits-text15 {
            display: inline-block;
          }
          .fruits-text16 {
            display: inline-block;
          }
          .fruits-text17 {
            display: inline-block;
          }
          .fruits-text18 {
            display: inline-block;
          }
          .fruits-text19 {
            display: inline-block;
          }
          .fruits-text20 {
            display: inline-block;
          }
          .fruits-text21 {
            display: inline-block;
          }
          .fruits-text22 {
            display: inline-block;
          }
          .fruits-text23 {
            display: inline-block;
          }
          .fruits-text24 {
            display: inline-block;
          }
          .fruits-text25 {
            display: inline-block;
          }
          .fruits-text26 {
            display: inline-block;
          }
          .fruits-text27 {
            display: inline-block;
          }
          .fruits-text28 {
            display: inline-block;
          }
          .fruits-text29 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .fruits-text29 {
              font-size: 12px;
            }
          }
          @media (max-width: 767px) {
            .fruits-text28 {
              font-size: 12px;
            }
            .fruits-text29 {
              font-size: 15px;
            }
          }
          @media (max-width: 344px) {
            .fruits-text28 {
              font-size: 12px;
            }
            .fruits-text29 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Fruits

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
