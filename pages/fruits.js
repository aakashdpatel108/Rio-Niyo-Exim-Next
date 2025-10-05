import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import VegetablesBannerComp from '../components/vegetables-banner-comp'
import FruitsFeature1 from '../components/fruits-feature-1'
import FruitsFeature2 from '../components/fruits-feature-2'
import FruitsFeature3 from '../components/fruits-feature-3'
import FruitsFeature4 from '../components/fruits-feature-4'
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
          page1={
            <Fragment>
              <span className="fruits-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OMRiv7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="fruits-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lU9ndc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="fruits-text12">
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
              <span className="fruits-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j5cIHG'),
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
              <span className="fruits-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__cAgh0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="fruits-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T4-iti'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="fruits-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lTwBRu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="fruits-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U3zebe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZydWl0cyUyMGFuZCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzU5MzI4NzU1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          rootClassName="vegetables-banner-comproot-class-name2"
          locale={props?.locale ?? ''}
        ></VegetablesBannerComp>
        <FruitsFeature1
          slogan1={
            <Fragment>
              <span className="fruits-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HBFgZl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="fruits-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T2OXUY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="fruits-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BlZrdI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="fruits-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_w8Pl3o'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="fruits-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GtRAtC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="fruits-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8A5tL9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="fruits-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UrQHRk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="fruits-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Zf3v_n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="fruits-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WSDWFl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></FruitsFeature1>
        <FruitsFeature2
          feature1Slogan={
            <Fragment>
              <span className="fruits-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_chhn6P'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></FruitsFeature2>
        <FruitsFeature3 locale={props?.locale ?? ''}></FruitsFeature3>
        <FruitsFeature4
          slogan={
            <Fragment>
              <span className="fruits-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p-VcpY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          mainAction={
            <Fragment>
              <span className="fruits-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xexpIi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="fruits-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mvMbj7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="fruits-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_W9OaEz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="fruits-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xaSX9j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="fruits-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2lckzJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="fruits-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VPiq84'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="fruits-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Uv7esg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="fruits-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FqHrHN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="fruits-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tKBdgc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="fruits-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vuAVnE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></FruitsFeature4>
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
          .fruits-text30 {
            display: inline-block;
          }
          .fruits-text31 {
            display: inline-block;
          }
          .fruits-text32 {
            display: inline-block;
          }
          .fruits-text33 {
            display: inline-block;
          }
          .fruits-text34 {
            display: inline-block;
          }
          .fruits-text35 {
            display: inline-block;
          }
          .fruits-text36 {
            display: inline-block;
          }
          .fruits-text37 {
            display: inline-block;
          }
          .fruits-text38 {
            display: inline-block;
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
