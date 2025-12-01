import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Certificate6 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div
        className={`certificate-6-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="certificate-6-container2 thq-section-max-width">
          <div className="certificate-6-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="certificate-6-tab-horizontal1"
            >
              <div className="certificate-6-divider-container1">
                {activeTab === 0 && (
                  <div className="certificate-6-container3"></div>
                )}
              </div>
              <div className="certificate-6-content">
                <h2 className="thq-heading-2 certificate-6-feature1-title">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="certificate-6-text1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text__wgbBm'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small certificate-6-feature1-description">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="certificate-6-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_TX5Lvc'),
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
              className="certificate-6-tab-horizontal2"
            >
              <div className="certificate-6-divider-container2">
                {activeTab === 1 && (
                  <div className="certificate-6-container4"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="certificate-6-tab-horizontal3"
            >
              <div className="certificate-6-divider-container3">
                {activeTab === 2 && (
                  <div className="certificate-6-container5"></div>
                )}
              </div>
            </div>
          </div>
          <div className="certificate-6-image-container">
            {activeTab === 0 && (
              <img
                src="/Certificates/apeda%20rcmc-1400w.png"
                alt="High-Quality Standards Image Alt"
                className="certificate-6-image thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .certificate-6-container1 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 0px;
          }
          .certificate-6-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .certificate-6-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .certificate-6-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-6-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-6-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-6-content {
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
          .certificate-6-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-6-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-6-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-6-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-6-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-6-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-6-image-container {
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .certificate-6-image {
            width: 643px;
            height: 412px;
            object-fit: contain;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-6-text1 {
            display: inline-block;
          }
          .certificate-6-text2 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .certificate-6-image {
              width: 638px;
              height: 410px;
              margin-top: 0px;
            }
          }
          @media (max-width: 991px) {
            .certificate-6-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .certificate-6-tabs-menu {
              order: 2;
            }
            .certificate-6-image-container {
              justify-content: center;
            }
            .certificate-6-image {
              width: 100%;
              height: 531px;
              margin-right: 0px;
              margin-bottom: 1px;
            }
          }
          @media (max-width: 767px) {
            .certificate-6-feature1-title {
              font-size: 25px;
            }
            .certificate-6-feature1-description {
              font-size: 12px;
            }
            .certificate-6-image-container {
              width: 100%;
              height: 100%;
            }
            .certificate-6-image {
              width: 100%;
              height: 158px;
            }
          }
          @media (max-width: 344px) {
            .certificate-6-image {
              width: 100%;
              height: 197px;
            }
          }
        `}
      </style>
    </>
  )
}

Certificate6.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  feature1Description: undefined,
}

Certificate6.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
}

export default Certificate6
