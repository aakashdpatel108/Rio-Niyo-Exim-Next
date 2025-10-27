import React from 'react'

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
          alt="home page banner image"
          src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZydWl0cyUyMGFuZCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzU5Njk5MTM5fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="home-banner-comp-image"
        />
        <div className="home-banner-comp-max-width thq-section-max-width">
          <div className="home-banner-comp-content">
            <h1 className="home-banner-comp-text1 thq-heading-1">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_yFuawZ'),
                }}
              ></span>
            </h1>
            <p className="home-banner-comp-text2 thq-body-large">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_cwhaIT'),
                }}
              ></span>
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
            color: rgb(255, 255, 255);
            text-align: center;
            font-family: 'Taviraj';
            letter-spacing: 10px;
          }
          .home-banner-comp-text2 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            text-align: center;
            letter-spacing: 6px;
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
          }
        `}
      </style>
    </>
  )
}

HomeBannerComp.defaultProps = {
  rootClassName: '',
}

HomeBannerComp.propTypes = {
  rootClassName: PropTypes.string,
}

export default HomeBannerComp
