import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner21 from '../components/banner21'
import Stats2 from '../components/stats2'
import Stats13 from '../components/stats13'
import Logos1 from '../components/logos1'
import MeetOurTeam from '../components/meet-our-team'
import FooterMain from '../components/footer-main'

const AboutUs = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-Us - Rio Niyo Exim</title>
          <meta property="og:title" content="About-Us - Rio Niyo Exim" />
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/about-us"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="about-us-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1SIx_i'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="about-us-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5JHI89'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-us-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_32isif'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-us-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Cwr11O'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-us-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FDXvg1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="about-us-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__wYPjW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="about-us-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bXD2cL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="about-us-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SKMrzh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="about-us-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9vBFqA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="about-us-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RJRX8d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="about-us-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K-KnOY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="about-us-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LvKXPQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="about-us-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8ktmza'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="about-us-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Z2vv1-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="about-us-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wi-2UE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="about-us-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oTTeKH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="about-us-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UIH5Cu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="about-us-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MM53Ey'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name1"
          locale={props?.locale ?? ''}
        ></Nav>
        <Banner21 locale={props?.locale ?? ''}></Banner21>
        <Stats2 locale={props?.locale ?? ''}></Stats2>
        <Stats13 locale={props?.locale ?? ''}></Stats13>
        <Logos1 locale={props?.locale ?? ''}></Logos1>
        <MeetOurTeam
          member1={
            <Fragment>
              <span className="about-us-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_D6RI6t'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member2={
            <Fragment>
              <span className="about-us-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EeLP2k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member1Job={
            <Fragment>
              <span className="about-us-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dhQIqj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member1Src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxwZXJzb258ZW58MHx8fHwxNzU5MDkzMDI4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          member2Job={
            <Fragment>
              <span className="about-us-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Oy6MvF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member2Src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxwZXJzb258ZW58MHx8fHwxNzU5MDkzMDI4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          locale={props?.locale ?? ''}
        ></MeetOurTeam>
        <FooterMain
          link2={
            <Fragment>
              <span className="about-us-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IkH7QO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="about-us-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-v16nC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="about-us-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1_5iR5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="about-us-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FlTXZ6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="about-us-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ugY1Mq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="about-us-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_okcr3b'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="about-us-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7lQQsG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name3"
          locale={props?.locale ?? ''}
        ></FooterMain>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .about-us-text10 {
            display: inline-block;
          }
          .about-us-text11 {
            display: inline-block;
          }
          .about-us-text12 {
            display: inline-block;
          }
          .about-us-text13 {
            display: inline-block;
          }
          .about-us-text14 {
            display: inline-block;
          }
          .about-us-text15 {
            display: inline-block;
          }
          .about-us-text16 {
            display: inline-block;
          }
          .about-us-text17 {
            display: inline-block;
          }
          .about-us-text18 {
            display: inline-block;
          }
          .about-us-text19 {
            display: inline-block;
          }
          .about-us-text20 {
            display: inline-block;
          }
          .about-us-text21 {
            display: inline-block;
          }
          .about-us-text22 {
            display: inline-block;
          }
          .about-us-text23 {
            display: inline-block;
          }
          .about-us-text24 {
            display: inline-block;
          }
          .about-us-text25 {
            display: inline-block;
          }
          .about-us-text26 {
            display: inline-block;
          }
          .about-us-text27 {
            display: inline-block;
          }
          .about-us-text28 {
            display: inline-block;
          }
          .about-us-text29 {
            display: inline-block;
          }
          .about-us-text30 {
            display: inline-block;
          }
          .about-us-text31 {
            display: inline-block;
          }
          .about-us-text32 {
            display: inline-block;
          }
          .about-us-text33 {
            display: inline-block;
          }
          .about-us-text34 {
            display: inline-block;
          }
          .about-us-text35 {
            display: inline-block;
          }
          .about-us-text36 {
            display: inline-block;
          }
          .about-us-text37 {
            display: inline-block;
          }
          .about-us-text38 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default AboutUs

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
