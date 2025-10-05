import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Footer3 from './footer3'

const Footer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer
        className={`footer-container thq-section-padding ${props.rootClassName} `}
      >
        <Footer3
          link1={
            <Fragment>
              <span className="footer-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0XG6Vp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="footer-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Y2_Gz4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="footer-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_I2mr0K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="footer-text4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9AHQb7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="footer-text5">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_S4s24G'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="footer-text6">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6ZUlJ5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="footer-text7">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OHPngr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="footer-text8">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jvEu9f'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer3root-class-name"
          locale={props?.locale ?? ''}
        ></Footer3>
      </footer>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-text1 {
            display: inline-block;
          }
          .footer-text2 {
            display: inline-block;
          }
          .footer-text3 {
            display: inline-block;
          }
          .footer-text4 {
            display: inline-block;
          }
          .footer-text5 {
            display: inline-block;
          }
          .footer-text6 {
            display: inline-block;
          }
          .footer-text7 {
            display: inline-block;
          }
          .footer-text8 {
            display: inline-block;
          }
          .footerroot-class-name {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            background-color: #d4d4d4;
          }
          .footerroot-class-name1 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            background-color: #d4d4d4;
          }
          .footerroot-class-name2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            background-color: #d4d4d4;
          }
          .footerroot-class-name3 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            background-color: #d4d4d4;
          }
          .footerroot-class-name4 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            background-color: #d4d4d4;
          }
          .footerroot-class-name5 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            background-color: #d4d4d4;
          }
          .footerroot-class-name6 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            background-color: #d4d4d4;
          }
          .footerroot-class-name7 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            position: static;
            background-color: #d4d4d4;
          }
          .footerroot-class-name8 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            background-color: #d4d4d4;
          }
          .footerroot-class-name9 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #040404;
            background-color: #d4d4d4;
          }

          @media (max-width: 991px) {
            .footerroot-class-name {
              padding: 0px;
            }
          }
          @media (max-width: 767px) {
            .footer-container {
              width: 767px;
            }
          }
          @media (max-width: 414px) {
            .footer-text1 {
              font-size: 12px;
            }
            .footer-text2 {
              font-size: 12px;
            }
            .footer-text3 {
              font-size: 12px;
            }
            .footer-text4 {
              font-size: 12px;
            }
            .footer-text5 {
              font-size: 12px;
            }
            .footerroot-class-name {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
