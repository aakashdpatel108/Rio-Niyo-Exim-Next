import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HomeBannerComp = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`home-banner-comp-header30 thq-section-padding ${props.rootClassName} `}
      >
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="home-banner-comp-image"
        />
        <div className="home-banner-comp-max-width thq-section-max-width">
          <div className="home-banner-comp-content">
            <h1 className="home-banner-comp-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="home-banner-comp-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MV9OtJ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="home-banner-comp-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="home-banner-comp-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_y0Srmc'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-banner-comp-header30 {
            gap: var(--dl-layout-space-twounits);
          }
          .home-banner-comp-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            margin: 0px;
            position: absolute;
            object-fit: cover;
          }
          .home-banner-comp-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
          }
          .home-banner-comp-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-banner-comp-text1 {
            color: #ffffff;
            text-align: center;
            font-family: 'Taviraj';
            letter-spacing: 10px;
          }
          .home-banner-comp-text2 {
            color: #ffffff;
            font-size: 30px;
            text-align: center;
            letter-spacing: 6px;
          }
          .home-banner-comp-text3 {
            display: inline-block;
            font-family: 'Inter';
          }
          .home-banner-comp-text4 {
            display: inline-block;
            font-family: 'Inter';
          }
          .home-banner-comproot-class-name {
            height: auto;
            min-height: auto;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          @media (max-width: 1600px) {
            .home-banner-comp-image {
              height: 100%;
            }
            .home-banner-comproot-class-name {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              opacity: 1;
            }
          }
          @media (max-width: 1200px) {
            .home-banner-comp-text1 {
              letter-spacing: 8px;
            }
            .home-banner-comp-text4 {
              font-family: Inter;
            }
          }
          @media (max-width: 991px) {
            .home-banner-comp-text1 {
              font-size: 45px;
              text-align: center;
              letter-spacing: 6px;
            }
            .home-banner-comp-text2 {
              font-size: 28px;
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-banner-comp-text1 {
              font-size: 35px;
              letter-spacing: 4px;
            }
            .home-banner-comp-text2 {
              font-size: 25px;
              letter-spacing: 4px;
            }
            .home-banner-comp-text3 {
              font-family: Inter;
              letter-spacing: 6px;
            }
          }
          @media (max-width: 414px) {
            .home-banner-comp-text1 {
              font-size: 20px;
              letter-spacing: 2px;
            }
            .home-banner-comp-text2 {
              font-size: 10px;
              letter-spacing: 2px;
            }
            .home-banner-comp-text3 {
              font-family: Inter;
              letter-spacing: 2px;
            }
          }
        `}
      </style>
    </>
  )
}

HomeBannerComp.defaultProps = {
  image1Alt: 'Image of fresh fruits and vegetables',
  rootClassName: '',
  content1: undefined,
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1688591407037-e110f4acc4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTMyODYxNHw&ixlib=rb-4.1.0&q=80&w=1500',
}

HomeBannerComp.propTypes = {
  image1Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default HomeBannerComp
