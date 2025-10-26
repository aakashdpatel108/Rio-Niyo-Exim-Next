import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner21 from '../components/banner21'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import MeetOurTeam from '../components/meet-our-team'
import Footer from '../components/footer'

const AboutUs = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-Us - Rio Niyo Exim</title>
          <meta property="og:title" content="About-Us - Rio Niyo Exim" />
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
          fruits={
            <Fragment>
              <span className="about-us-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__wYPjW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="about-us-text13">
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
        <Banner21
          action1={
            <Fragment>
              <span className="about-us-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_n2tmZ3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-us-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5wQsUB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-us-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GaRBps'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Banner21>
        <Stats2
          content1={
            <Fragment>
              <span className="about-us-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_I2m5gm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="about-us-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VhmcQb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Stats2>
        <Logos1
          heading1={
            <Fragment>
              <span className="about-us-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AdNGgf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Logos1>
        <Features1
          slogan={
            <Fragment>
              <span className="about-us-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bhw4Hr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          mainAction={
            <Fragment>
              <span className="about-us-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o-WlZ2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="about-us-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LItllM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="about-us-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Aya4SO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="about-us-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6Uydy8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="about-us-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0hZLc4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          secondaryAction={
            <Fragment>
              <span className="about-us-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vqKuk7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="about-us-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WEjgqL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="about-us-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DUQVAE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="about-us-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iajvmB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="about-us-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p2Bbia'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Features1>
        <MeetOurTeam
          member1={
            <Fragment>
              <span className="about-us-text31">
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
              <span className="about-us-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EeLP2k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="about-us-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_C8XRjR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-us-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rQ6pwH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member1Job={
            <Fragment>
              <span className="about-us-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kPIWiO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member1Src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxwZXJzb258ZW58MHx8fHwxNzU5MDkzMDI4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          member2Job={
            <Fragment>
              <span className="about-us-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2A67mc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member2Src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxwZXJzb258ZW58MHx8fHwxNzU5MDkzMDI4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          member1Content={
            <Fragment>
              <span className="about-us-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Z0LBkO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          member2Content={
            <Fragment>
              <span className="about-us-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-LY0u_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></MeetOurTeam>
        <Footer
          logoSrc="/rioniyoexim.svg"
          rootClassName="footerroot-class-name1"
          locale={props?.locale ?? ''}
        ></Footer>
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
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            letter-spacing: 1px;
          }
          .about-us-text18 {
            display: inline-block;
            font-family: 'Inter';
            font-weight: 400;
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
