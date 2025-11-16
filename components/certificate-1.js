import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Certificate1 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div
        className={`certificate-1-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="certificate-1-container2 thq-section-max-width">
          <div className="certificate-1-image-container">
            {activeTab === 0 && (
              <img
                alt="OFICE"
                src="/iec-1400w.png"
                className="certificate-1-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="certificate-1-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="certificate-1-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="certificate-1-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="certificate-1-tab-horizontal1"
            >
              <div className="certificate-1-divider-container1">
                {activeTab === 0 && (
                  <div className="certificate-1-container3"></div>
                )}
              </div>
              <div className="certificate-1-content">
                <h2 className="thq-heading-2 certificate-1-feature1-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('feature1Title_To0D-A'),
                    }}
                  ></span>
                </h2>
                <span className="thq-body-small certificate-1-feature1-description">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('feature1Description_sWGAPj'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="certificate-1-tab-horizontal2"
            >
              <div className="certificate-1-divider-container2">
                {activeTab === 1 && (
                  <div className="certificate-1-container4"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="certificate-1-tab-horizontal3"
            >
              <div className="certificate-1-divider-container3">
                {activeTab === 2 && (
                  <div className="certificate-1-container5"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .certificate-1-container1 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: inset;
            border-width: 1px;
          }
          .certificate-1-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .certificate-1-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .certificate-1-image1 {
            width: 643px;
            height: 856px;
            object-fit: contain;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: 0px;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-1-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-1-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-1-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .certificate-1-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-1-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-1-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-1-content {
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
          .certificate-1-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-1-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-1-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-1-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-1-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-1-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }

          @media (max-width: 1200px) {
            .certificate-1-image1 {
              width: 638px;
              height: 929px;
            }
          }
          @media (max-width: 991px) {
            .certificate-1-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .certificate-1-image-container {
              justify-content: center;
            }
            .certificate-1-image1 {
              width: 100%;
              height: 999px;
            }
          }
          @media (max-width: 767px) {
            .certificate-1-image1 {
              height: 462px;
            }
            .certificate-1-feature1-title {
              font-size: 25px;
            }
            .certificate-1-feature1-description {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .certificate-1-image1 {
              width: 100%;
              height: 396px;
            }
            .certificate-1-feature1-title {
              font-size: 25px;
            }
            .certificate-1-feature1-description {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

Certificate1.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1750165023743-1ce8d4d03ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  rootClassName: '',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1706407281811-eec5d826864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImgAlt: 'Global connections icon',
  feature2ImgAlt: 'Quality check icon',
}

Certificate1.propTypes = {
  feature2ImgSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
}

export default Certificate1
