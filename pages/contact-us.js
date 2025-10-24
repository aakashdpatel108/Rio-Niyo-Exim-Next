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
          page1={
            <Fragment>
              <span className="contact-us-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9Zxg2h'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="contact-us-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZOSTrC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="contact-us-text12">
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
              <span className="contact-us-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nvZAyM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name3"
          locale={props?.locale ?? ''}
        ></Nav>
        <ContactUsBanner
          content1={
            <Fragment>
              <span className="contact-us-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nMIdgU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-us-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zATqSb'),
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
              <span className="contact-us-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EuArue'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-us-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OMIZJY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-us-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0jBFZ6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-us-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZsJxgB'),
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
              <span className="contact-us-text20">
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
              <span className="contact-us-text21">
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
              <span className="contact-us-text22">
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
            font-style: normal;
            font-weight: 600;
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
