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
              <span className="home-text1">
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
              <span className="home-text2">
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
              <span className="home-text3">
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
              <span className="home-text4">
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
          image1Src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZydWl0cyUyMGFuZCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzU5MzI4NzU1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          rootClassName="home-banner-comproot-class-name"
          locale={props?.locale ?? ''}
        ></HomeBannerComp>
        <Features9 locale={props?.locale ?? ''}></Features9>
        <div className="home-container2">
          <HomePageImageSlider
            action1={
              <Fragment>
                <span className="home-text5">
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
                <span className="home-text6">
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
                <span className="home-text7">
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
          action={
            <Fragment>
              <span className="home-text8">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_009sSQ'),
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
          .home-text1 {
            display: inline-block;
          }
          .home-text2 {
            display: inline-block;
          }
          .home-text3 {
            display: inline-block;
          }
          .home-text4 {
            display: inline-block;
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
          .home-text5 {
            display: inline-block;
            font-family: 'Open Sans';
          }
          .home-text6 {
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
          .home-text7 {
            display: inline-block;
            font-family: 'Open Sans';
          }
          .home-text8 {
            display: inline-block;
          }
          @media (max-width: 414px) {
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
