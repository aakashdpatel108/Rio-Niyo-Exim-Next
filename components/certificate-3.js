import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Certificate3 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div
        className={`certificate-3-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="certificate-3-container2 thq-section-max-width">
          <div className="certificate-3-image-container">
            {activeTab === 0 && (
              <img
                alt="OFICE"
                src="/udyam%20registration%20certificate-1400w.png"
                className="certificate-3-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="certificate-3-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="certificate-3-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="certificate-3-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="certificate-3-tab-horizontal1"
            >
              <div className="certificate-3-divider-container1">
                {activeTab === 0 && (
                  <div className="certificate-3-container3"></div>
                )}
              </div>
              <div className="certificate-3-content">
                <h2 className="thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('feature1Title_To0D-A'),
                    }}
                  ></span>
                </h2>
                <span className="thq-body-small">
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
              className="certificate-3-tab-horizontal2"
            >
              <div className="certificate-3-divider-container2">
                {activeTab === 1 && (
                  <div className="certificate-3-container4"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="certificate-3-tab-horizontal3"
            >
              <div className="certificate-3-divider-container3">
                {activeTab === 2 && (
                  <div className="certificate-3-container5"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .certificate-3-container1 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: inset;
            border-width: 1px;
          }
          .certificate-3-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .certificate-3-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .certificate-3-image1 {
            width: 714px;
            height: 931px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 3px;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-3-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-3-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-3-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .certificate-3-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-3-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-3-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-3-content {
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
          .certificate-3-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-3-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-3-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-3-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-3-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-3-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }

          @media (max-width: 1600px) {
            .certificate-3-image1 {
              border-style: solid;
              border-width: 3px;
            }
          }
          @media (max-width: 1200px) {
            .certificate-3-image1 {
              width: 478px;
              height: 667px;
            }
          }
          @media (max-width: 991px) {
            .certificate-3-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .certificate-3-image-container {
              justify-content: center;
            }
          }
          @media (max-width: 414px) {
            .certificate-3-image1 {
              width: 364px;
              height: 514px;
            }
          }
        `}
      </style>
    </>
  )
}

Certificate3.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1750165023743-1ce8d4d03ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  rootClassName: '',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1706407281811-eec5d826864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImgAlt: 'Global connections icon',
  feature2ImgAlt: 'Quality check icon',
}

Certificate3.propTypes = {
  feature2ImgSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
}

export default Certificate3
