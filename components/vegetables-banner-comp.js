import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const VegetablesBannerComp = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <img
          alt="Image of fresh fruits and vegetables"
          src="https://images.unsplash.com/photo-1476837579993-f1d3948f17c2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDkwfHxmcnVpdHN8ZW58MHx8fHwxNzU5NTAzMTcyfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="vegetables-banner-comp-background-image thq-img-ratio-16-9"
        />
        <div className="vegetables-banner-comp-container thq-flex-row">
          <h2 className="vegetables-banner-comp-text1 thq-heading-2">
            {props.heading11 ?? (
              <Fragment>
                <span className="vegetables-banner-comp-text7">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QhBRlA'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="vegetables-banner-comp-content">
            <p className="vegetables-banner-comp-text2 thq-body-large">
              {props.content11 ?? (
                <Fragment>
                  <span className="vegetables-banner-comp-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_49cl-x'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="vegetables-banner-comp-actions">
              <button type="button" className="thq-button-filled">
                <span className="vegetables-banner-comp-text3">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="vegetables-banner-comp-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_cvXKRW'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button type="button" className="thq-button-outline">
                <span className="vegetables-banner-comp-text4">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="vegetables-banner-comp-text8">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_pSZH3N'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .vegetables-banner-comp-background-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .vegetables-banner-comp-container {
            display: flex;
            overflow: visible;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .vegetables-banner-comp-text1 {
            color: #ffffff;
            font-family: 'Taviraj';
          }
          .vegetables-banner-comp-content {
            gap: 24px;
            width: 616px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .vegetables-banner-comp-text2 {
            color: #ffffff;
            font-family: 'Open Sans';
          }
          .vegetables-banner-comp-actions {
            display: flex;
            align-items: flex-start;
          }
          .vegetables-banner-comp-text3 {
            font-family: 'Open Sans';
          }
          .vegetables-banner-comp-text4 {
            font-family: 'Open Sans';
          }
          .vegetables-banner-comp-text5 {
            display: inline-block;
          }
          .vegetables-banner-comp-text6 {
            display: inline-block;
          }
          .vegetables-banner-comp-text7 {
            display: inline-block;
          }
          .vegetables-banner-comp-text8 {
            display: inline-block;
          }
          .vegetables-banner-comproot-class-name {
            height: auto;
            min-height: auto;
          }
          .vegetables-banner-comproot-class-name1 {
            height: auto;
            min-height: auto;
          }
          .vegetables-banner-comproot-class-name2 {
            height: auto;
            min-height: auto;
          }
          @media (max-width: 991px) {
            .vegetables-banner-comp-container {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .vegetables-banner-comp-content {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

VegetablesBannerComp.defaultProps = {
  rootClassName: '',
  action1: undefined,
  content11: undefined,
  heading11: undefined,
  action2: undefined,
}

VegetablesBannerComp.propTypes = {
  rootClassName: PropTypes.string,
  action1: PropTypes.element,
  content11: PropTypes.element,
  heading11: PropTypes.element,
  action2: PropTypes.element,
}

export default VegetablesBannerComp
