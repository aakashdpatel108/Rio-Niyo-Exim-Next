import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Certificate4 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div
        className={`certificate-4-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="certificate-4-container2 thq-section-max-width">
          <div className="certificate-4-thq-tabs-menu-elm">
            <div
              onClick={() => setActiveTab(0)}
              className="certificate-4-thq-tab-horizontal-elm1"
            >
              <div className="certificate-4-thq-divider-container-elm1">
                {activeTab === 0 && (
                  <div className="certificate-4-container3"></div>
                )}
              </div>
              <div className="certificate-4-thq-content-elm">
                <h2 className="thq-heading-2 certificate-4-thq-feature1-title-elm">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="certificate-4-text1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NCBvEZ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small certificate-4-thq-feature1-description-elm">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="certificate-4-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9e3M3a'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="certificate-4-thq-tab-horizontal-elm2"
            >
              <div className="certificate-4-thq-divider-container-elm2">
                {activeTab === 1 && (
                  <div className="certificate-4-container4"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="certificate-4-thq-tab-horizontal-elm3"
            >
              <div className="certificate-4-thq-divider-container-elm3">
                {activeTab === 2 && (
                  <div className="certificate-4-container5"></div>
                )}
              </div>
            </div>
          </div>
          <div className="certificate-4-thq-image-container-elm">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="certificate-4-image thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .certificate-4-container1 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 0px;
          }
          .certificate-4-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .certificate-4-thq-tabs-menu-elm {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .certificate-4-thq-tab-horizontal-elm1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-4-thq-divider-container-elm1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-4-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-4-thq-content-elm {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .certificate-4-thq-tab-horizontal-elm2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-4-thq-divider-container-elm2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-4-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-4-thq-tab-horizontal-elm3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-4-thq-divider-container-elm3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-4-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-4-thq-image-container-elm {
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .certificate-4-image {
            width: 643px;
            height: 856px;
            object-fit: contain;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-4-text1 {
            display: inline-block;
          }
          .certificate-4-text2 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .certificate-4-image {
              width: 638px;
              height: 929px;
              margin-top: 0px;
            }
          }
          @media (max-width: 991px) {
            .certificate-4-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .certificate-4-thq-tabs-menu-elm {
              order: 2;
            }
            .certificate-4-thq-image-container-elm {
              justify-content: center;
            }
            .certificate-4-image {
              width: 100%;
              height: 954px;
              margin-right: 0px;
              margin-bottom: 1px;
            }
          }
          @media (max-width: 767px) {
            .certificate-4-thq-feature1-title-elm {
              font-size: 25px;
            }
            .certificate-4-thq-feature1-description-elm {
              font-size: 12px;
            }
            .certificate-4-thq-image-container-elm {
              width: 100%;
              height: 100%;
            }
            .certificate-4-image {
              width: 100%;
              height: 462px;
            }
          }
          @media (max-width: 344px) {
            .certificate-4-image {
              width: 100%;
              height: 396px;
            }
          }
        `}
      </style>
    </>
  )
}

Certificate4.defaultProps = {
  feature1ImgAlt: 'High-Quality Standards Image Alt',
  feature1ImgSrc: '/Certificates/fssai-1400w.png',
  rootClassName: '',
  feature1Title: undefined,
  feature1Description: undefined,
}

Certificate4.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
}

export default Certificate4
