import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import HomeBannerComp from '../components/home-banner-comp'
import Features9 from '../components/features9'
import HomePageImageSlider from '../components/home-page-image-slider'
import Steps2 from '../components/steps2'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Rio Niyo Exim</title>
          <meta property="og:title" content="Rio Niyo Exim" />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0Da8w7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xAdg9o'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Eg4LKa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Run-l1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name"
          locale={props?.locale ?? ''}
        ></Nav>
        <HomeBannerComp
          content1={
            <Fragment>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2UEXTk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0sbiMa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZydWl0cyUyMGFuZCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzU5MzI4NzU1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          rootClassName="home-banner-comproot-class-name"
          locale={props?.locale ?? ''}
        ></HomeBannerComp>
        <Features9 locale={props?.locale ?? ''}></Features9>
        <div className="home-container2">
          <HomePageImageSlider
            action1={
              <Fragment>
                <span className="home-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PZ0pyv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            content1={
              <Fragment>
                <span className="home-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Fxr6Li'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="home-page-image-sliderroot-class-name"
            locale={props?.locale ?? ''}
          ></HomePageImageSlider>
        </div>
        <div className="home-container3">
          <Steps2
            step4Description={
              <Fragment>
                <span className="home-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CvQFq4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></Steps2>
        </div>
        <ContactUs
          email={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7tkDDl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RXC26c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="home-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_009sSQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          adress={
            <Fragment>
              <span className="home-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_v_PgNR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s3A62O'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__tpJCG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eJl2Fk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></ContactUs>
        <Footer
          logoSrc="/rioniyoexim.svg"
          rootClassName="footerroot-class-name"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
            font-family: 'Inter';
          }
          .home-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-text16 {
            display: inline-block;
            font-family: 'Open Sans';
          }
          .home-text17 {
            display: inline-block;
            font-family: 'Open Sans';
          }
          .home-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: 0px;
            align-items: center;
            margin-left: 0px;
            padding-top: var(--dl-layout-space-threeunits);
            margin-right: 0px;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            justify-content: center;
            background-color: #e8f8df;
          }
          .home-text18 {
            display: inline-block;
            font-family: 'Open Sans';
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .home-text15 {
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .home-text14 {
              font-family: Inter;
              letter-spacing: 6px;
            }
          }
          @media (max-width: 414px) {
            .home-text14 {
              font-family: Inter;
              letter-spacing: 2px;
            }
            .home-container2 {
              width: 100%;
            }
            .home-container3 {
              width: 100%;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

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
