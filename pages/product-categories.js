import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import ProductCategoryBanner from '../components/product-category-banner'
import ProductCategoryFeature1 from '../components/product-category-feature-1'
import CTA26 from '../components/cta26'
import FooterMain from '../components/footer-main'

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
          <link
            rel="canonical"
            href="https://pesky-well-documented-gnu-7y5ieg.teleporthq.app/product-categories"
          />
        </Head>
        <Nav
          page3={
            <Fragment>
              <span className="product-categories-text10">
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
              <span className="product-categories-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_x6xa67'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="product-categories-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gTwVq0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="product-categories-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wXXFHh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="product-categories-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2Y3xGP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          fruits={
            <Fragment>
              <span className="product-categories-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-799kj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page41={
            <Fragment>
              <span className="product-categories-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QvXUQ8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="product-categories-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7gDYTa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="product-categories-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xZD4Un'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="product-categories-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4mMrQk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="product-categories-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fOhu38'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page411={
            <Fragment>
              <span className="product-categories-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1xbIQb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="product-categories-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_X3LvSy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text312={
            <Fragment>
              <span className="product-categories-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_quRSRz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3111={
            <Fragment>
              <span className="product-categories-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zALcHz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3112={
            <Fragment>
              <span className="product-categories-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K65t7p'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31111={
            <Fragment>
              <span className="product-categories-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_h2AgcT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          vegetables={
            <Fragment>
              <span className="product-categories-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_snkDQ9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navroot-class-name9"
          locale={props?.locale ?? ''}
        ></Nav>
        <ProductCategoryBanner
          video1Poster="example.com/video1Poster.jpg"
          locale={props?.locale ?? ''}
        ></ProductCategoryBanner>
        <ProductCategoryFeature1
          feature2Description1={
            <Fragment>
              <span className="product-categories-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_y560Kc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></ProductCategoryFeature1>
        <CTA26
          action1={
            <Fragment>
              <span className="product-categories-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Xr_Or7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CTA26>
        <FooterMain
          link2={
            <Fragment>
              <span className="product-categories-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P2A8ei'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="product-categories-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LJeFER'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="product-categories-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9vnA2V'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="product-categories-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9jzfG3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="product-categories-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-bGPDj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="product-categories-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PzSELH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="product-categories-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_POo1Xk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-mainroot-class-name7"
          locale={props?.locale ?? ''}
        ></FooterMain>
      </div>
      <style jsx>
        {`
          .product-categories-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: clip;
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
          .product-categories-text27 {
            display: inline-block;
          }
          .product-categories-text28 {
            display: inline-block;
          }
          .product-categories-text29 {
            display: inline-block;
          }
          .product-categories-text30 {
            display: inline-block;
          }
          .product-categories-text31 {
            display: inline-block;
          }
          .product-categories-text32 {
            display: inline-block;
          }
          .product-categories-text33 {
            display: inline-block;
          }
          .product-categories-text34 {
            display: inline-block;
          }
          .product-categories-text35 {
            display: inline-block;
          }
          .product-categories-text36 {
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
