import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import HomeBannerComp from '../components/home-banner-comp'
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
          page1={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zzVx0P'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A1XRwJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text12">
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
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xAdg9o'),
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
        <div className="home-container2">
          <div className="home-column thq-section-padding thq-section-max-width">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="home-icon1"
            >
              <g fill="none">
                <path
                  d="M5.535 2.49L1 4.788C2.113 7.544 5.014 8.756 7.465 7.51L12.5 5c-1.113-2.756-4.75-3.65-6.965-2.51"
                  fill="#00D26A"
                ></path>
                <path
                  d="m11.343 4.798l-1.17.534C6.17 7.168 4.124 11.715 5.357 15.984a26.95 26.95 0 0 0 5.206 9.788l.885 1.067a8.74 8.74 0 0 0 10.38 2.359c3.794-1.74 5.86-5.935 4.964-10.055l-.348-1.58a27 27 0 0 0-3.53-8.645l-.495-.779a8.74 8.74 0 0 0-11.076-3.34"
                  fill="#FFB02E"
                ></path>
              </g>
            </svg>
            <div className="home-content">
              <h1 className="home-text16 thq-heading-1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HZ8e2j'),
                  }}
                ></span>
              </h1>
              <p className="home-text17 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hH4Z8i'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </div>
        <hr className="home-separator"></hr>
        <div className="home-container3">
          <HomePageImageSlider
            action1={
              <Fragment>
                <span className="home-text18">
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
                <span className="home-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Fxr6Li'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="home-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ptu84j'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></HomePageImageSlider>
        </div>
        <div className="home-container4">
          <Steps2
            text={
              <Fragment>
                <span className="home-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WhxQaM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step1Title={
              <Fragment>
                <span className="home-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lLmQMe'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step2Title={
              <Fragment>
                <span className="home-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TV7fgi'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step3Title={
              <Fragment>
                <span className="home-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PZBOPa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step4Title={
              <Fragment>
                <span className="home-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MpJHYY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step1Description={
              <Fragment>
                <span className="home-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gDb0cf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step2Description={
              <Fragment>
                <span className="home-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_a7eiNf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step3Description={
              <Fragment>
                <span className="home-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MH_PWj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            step4Description={
              <Fragment>
                <span className="home-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_43OjXq'),
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
              <span className="home-text30">
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
              <span className="home-text31">
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
              <span className="home-text32">
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
              <span className="home-text33">
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
              <span className="home-text34">
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
              <span className="home-text35">
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
              <span className="home-text36">
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
            margin-top: 0px;
            align-items: center;
            margin-left: 0px;
            padding-top: var(--dl-layout-space-threeunits);
            margin-right: 0px;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            margin-bottom: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .home-icon1 {
            width: 78px;
            height: 60px;
            display: flex;
          }
          .home-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text16 {
            font-size: 45px;
            text-align: center;
            font-family: 'Taviraj';
          }
          .home-text17 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .home-separator {
            width: 10%;
            height: 2px;
            margin-top: var(--dl-layout-space-twounits);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: #00d26a;
          }
          .home-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-text18 {
            display: inline-block;
            font-family: 'Open Sans';
          }
          .home-text19 {
            display: inline-block;
            font-family: 'Open Sans';
          }
          .home-text20 {
            display: inline-block;
            font-family: 'Taviraj';
          }
          .home-container4 {
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
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
            font-family: 'Inter';
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
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .home-column {
              margin-top: 0px;
            }
            .home-text16 {
              font-size: 40px;
            }
          }
          @media (max-width: 1200px) {
            .home-text15 {
              font-family: Inter;
            }
            .home-text16 {
              font-size: 35px;
            }
          }
          @media (max-width: 991px) {
            .home-container2 {
              padding: var(--dl-layout-space-halfunit);
            }
            .home-text17 {
              font-size: 16px;
            }
          }
          @media (max-width: 767px) {
            .home-text14 {
              font-family: Inter;
              letter-spacing: 6px;
            }
            .home-container2 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .home-text16 {
              font-size: 30px;
            }
          }
          @media (max-width: 414px) {
            .home-text14 {
              font-family: Inter;
              letter-spacing: 2px;
            }
            .home-container2 {
              width: 100%;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .home-text16 {
              font-size: 20px;
            }
            .home-text17 {
              font-size: 15px;
              text-align: justify;
            }
            .home-container3 {
              width: 100%;
            }
            .home-container4 {
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
