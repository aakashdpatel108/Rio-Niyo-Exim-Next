import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ProductCategoryBanner = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="product-category-banner-container1 thq-section-padding">
        <div className="product-category-banner-max-width thq-section-max-width">
          <div className="product-category-banner-container2">
            <h2 className="product-category-banner-title thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_alav-S'),
                }}
              ></span>
            </h2>
            <h3 className="product-category-banner-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="product-category-banner-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_KV8d_S'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <video
            src={props.video1Src}
            loop="true"
            muted="true"
            poster={props.video1Poster}
            autoPlay="true"
            className="product-category-banner-video"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .product-category-banner-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .product-category-banner-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .product-category-banner-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .product-category-banner-title {
            text-align: center;
            background-image: linear-gradient(
              90deg,
              rgb(189, 195, 199) 0%,
              rgb(135, 223, 87) 100%
            );
          }
          .product-category-banner-text1 {
            text-align: center;
          }
          .product-category-banner-video {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            animation-name: none;
            animation-delay: 0s;
            border-top-width: 1px;
            border-left-width: 0px;
            animation-duration: 300ms;
            border-right-width: 0px;
            animation-direction: normal;
            border-bottom-width: 0px;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .product-category-banner-text2 {
            display: inline-block;
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

ProductCategoryBanner.defaultProps = {
  video1Src: '',
  content1: undefined,
  video1Poster: 'example.com/video1Poster.jpg',
}

ProductCategoryBanner.propTypes = {
  video1Src: PropTypes.string,
  content1: PropTypes.element,
  video1Poster: PropTypes.string,
}

export default ProductCategoryBanner
