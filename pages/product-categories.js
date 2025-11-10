import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Nav from '../components/nav'
import ProductCategoryBanner from '../components/product-category-banner'
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
          content1={
            <Fragment>
              <span className="product-categories-text28">
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
        ></ProductCategoryBanner>
        <Features4
          sectionTitle={
            <Fragment>
              <span className="product-categories-text29">
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
              <span className="product-categories-text30">
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
              <span className="product-categories-text31">
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
              <span className="product-categories-text32">
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
              <span className="product-categories-text33">
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
              <span className="product-categories-text34">
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
              <span className="product-categories-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_y560Kc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description2={
            <Fragment>
              <span className="product-categories-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QS6gO2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description3={
            <Fragment>
              <span className="product-categories-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jFnJyz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description31={
            <Fragment>
              <span className="product-categories-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kcg_JN'),
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
              <span className="product-categories-text39">
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
            font-family: 'Open Sans';
            font-weight: 400;
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
          .product-categories-text37 {
            display: inline-block;
          }
          .product-categories-text38 {
            display: inline-block;
          }
          .product-categories-text39 {
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
