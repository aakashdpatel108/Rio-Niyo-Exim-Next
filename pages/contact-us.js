import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import ContactUsBanner from '../components/contact-us-banner'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer from '../components/footer'

const ContactUs = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-us-container">
        <Head>
          <title>Contact-Us - Rio Niyo Exim</title>
          <meta property="og:title" content="Contact-Us - Rio Niyo Exim" />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="contact-us-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_moyt-7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="contact-us-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nvZAyM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contact-us-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2eHqmz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contact-us-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2I5DKR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contact-us-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cKJ1HB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="contact-us-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j-GKOi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="contact-us-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U0z0X-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="contact-us-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ShNdAx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="contact-us-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iDN-wU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="contact-us-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Jt3-9s'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="contact-us-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t-wAVB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="contact-us-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QURUgH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="contact-us-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nzKepN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="contact-us-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MChk8_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="contact-us-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GjhDxA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="contact-us-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A7xWoR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="contact-us-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FjZ3gk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="contact-us-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ocp7mI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name3"
          locale={props?.locale ?? ''}
        ></Nav>
        <ContactUsBanner
          heading1={
            <Fragment>
              <span className="contact-us-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2P9GmR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></ContactUsBanner>
        <ContactForm3
          action={
            <Fragment>
              <span className="contact-us-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EuArue'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></ContactForm3>
        <Contact14
          heading1={
            <Fragment>
              <span className="contact-us-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LH0YEl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Contact14>
        <Contact7
          content1={
            <Fragment>
              <span className="contact-us-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Xr20pv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-us-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CdEU5L'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Contact7>
        <Footer
          logoSrc="/rioniyoexim.svg"
          rootClassName="footerroot-class-name2"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .contact-us-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .contact-us-text10 {
            display: inline-block;
          }
          .contact-us-text11 {
            display: inline-block;
          }
          .contact-us-text12 {
            display: inline-block;
          }
          .contact-us-text13 {
            display: inline-block;
          }
          .contact-us-text14 {
            display: inline-block;
          }
          .contact-us-text15 {
            display: inline-block;
          }
          .contact-us-text16 {
            display: inline-block;
          }
          .contact-us-text17 {
            display: inline-block;
          }
          .contact-us-text18 {
            display: inline-block;
          }
          .contact-us-text19 {
            display: inline-block;
          }
          .contact-us-text20 {
            display: inline-block;
          }
          .contact-us-text21 {
            display: inline-block;
          }
          .contact-us-text22 {
            display: inline-block;
          }
          .contact-us-text23 {
            display: inline-block;
          }
          .contact-us-text24 {
            display: inline-block;
          }
          .contact-us-text25 {
            display: inline-block;
          }
          .contact-us-text26 {
            display: inline-block;
          }
          .contact-us-text27 {
            display: inline-block;
          }
          .contact-us-text28 {
            display: inline-block;
          }
          .contact-us-text29 {
            display: inline-block;
          }
          .contact-us-text30 {
            display: inline-block;
          }
          .contact-us-text31 {
            display: inline-block;
          }
          .contact-us-text32 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default ContactUs

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
