import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import Banner2 from '../components/banner2'
import Features4 from '../components/features4'
import CTA26 from '../components/cta26'
import Footer from '../components/footer'

const ProductCategories = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="product-categories-container">
        <Head>
          <title>Product-categories - Rio Niyo Exim</title>
          <meta
            property="og:title"
            content="Product-categories - Rio Niyo Exim"
          />
        </Head>
        <Nav
          page1={
            <Fragment>
              <span className="product-categories-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_02Hm3Q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="product-categories-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ck2TOw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="product-categories-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2XhQc4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="product-categories-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_x6xa67'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name9"
          locale={props?.locale ?? ''}
        ></Nav>
        <Banner2
          content1={
            <Fragment>
              <span className="product-categories-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TWydlM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          video1Poster="example.com/video1Poster.jpg"
          locale={props?.locale ?? ''}
        ></Banner2>
        <Features4
          sectionTitle={
            <Fragment>
              <span className="product-categories-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YifbX9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="product-categories-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xlkuOq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title1={
            <Fragment>
              <span className="product-categories-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AJYoxS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title2={
            <Fragment>
              <span className="product-categories-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vYjhD3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title3={
            <Fragment>
              <span className="product-categories-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HulPg9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="product-categories-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-7qFHi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description1={
            <Fragment>
              <span className="product-categories-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qYXdux'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description2={
            <Fragment>
              <span className="product-categories-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NGbjEP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description3={
            <Fragment>
              <span className="product-categories-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jFnJyz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Features4>
        <CTA26
          action1={
            <Fragment>
              <span className="product-categories-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4OJ84O'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="product-categories-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zKGvO-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="product-categories-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Nq1gyI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CTA26>
        <Footer
          logoSrc="/rioniyoexim.svg"
          rootClassName="footerroot-class-name11"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .product-categories-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .product-categories-text10 {
            display: inline-block;
          }
          .product-categories-text11 {
            display: inline-block;
          }
          .product-categories-text12 {
            display: inline-block;
          }
          .product-categories-text13 {
            display: inline-block;
          }
          .product-categories-text14 {
            display: inline-block;
            font-family: 'Open Sans';
            font-weight: 400;
          }
          .product-categories-text15 {
            display: inline-block;
          }
          .product-categories-text16 {
            display: inline-block;
          }
          .product-categories-text17 {
            display: inline-block;
          }
          .product-categories-text18 {
            display: inline-block;
          }
          .product-categories-text19 {
            display: inline-block;
          }
          .product-categories-text20 {
            display: inline-block;
          }
          .product-categories-text21 {
            display: inline-block;
          }
          .product-categories-text22 {
            display: inline-block;
          }
          .product-categories-text23 {
            display: inline-block;
          }
          .product-categories-text24 {
            display: inline-block;
          }
          .product-categories-text25 {
            display: inline-block;
          }
          .product-categories-text26 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default ProductCategories

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
