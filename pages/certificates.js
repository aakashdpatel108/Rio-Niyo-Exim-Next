import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import CertificateBannerComp from '../components/certificate-banner-comp'
import Certificate1 from '../components/certificate-1'
import Certificate2 from '../components/certificate-2'
import Footer from '../components/footer'

const Certificates = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="certificates-container">
        <Head>
          <title>Certificates - Rio Niyo Exim</title>
          <meta property="og:title" content="Certificates - Rio Niyo Exim" />
        </Head>
        <Nav
          page1={
            <Fragment>
              <span className="certificates-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Sny4PG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="certificates-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1YPYYt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="certificates-text12">
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
              <span className="certificates-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E2rpmH'),
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
              <span className="certificates-text14">
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
              <span className="certificates-text15">
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
              <span className="certificates-text16">
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
              <span className="certificates-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JmZngT'),
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
              <span className="certificates-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WFrIcw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="certificates-text19">
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
        <Footer
          logoSrc="/rioniyoexim.svg"
          rootClassName="footerroot-class-name5"
          locale={props?.locale ?? ''}
        ></Footer>
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
          @media (max-width: 991px) {
            .certificates-text17 {
              box-shadow: inherit;
            }
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
