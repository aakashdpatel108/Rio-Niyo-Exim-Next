import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Certificate5 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div
        className={`certificate-5-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="certificate-5-container2 thq-section-max-width">
          <div className="certificate-5-thq-image-container-elm">
            {activeTab === 0 && (
              <img
                alt="OFICE"
                src="/Certificates/spice%20board%20rcmc-1400w.png"
                className="certificate-5-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="certificate-5-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="certificate-5-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="certificate-5-thq-tabs-menu-elm">
            <div
              onClick={() => setActiveTab(0)}
              className="certificate-5-thq-tab-horizontal-elm1"
            >
              <div className="certificate-5-thq-divider-container-elm1">
                {activeTab === 0 && (
                  <div className="certificate-5-container3"></div>
                )}
              </div>
              <div className="certificate-5-thq-content-elm">
                <h2 className="certificate-5-thq-feature1-title-elm thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('feature1Title_pGIA3y'),
                    }}
                  ></span>
                </h2>
                <span className="thq-body-small certificate-5-thq-feature1-description-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('feature1Description_TgmpJY'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="certificate-5-thq-tab-horizontal-elm2"
            >
              <div className="certificate-5-thq-divider-container-elm2">
                {activeTab === 1 && (
                  <div className="certificate-5-container4"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="certificate-5-thq-tab-horizontal-elm3"
            >
              <div className="certificate-5-thq-divider-container-elm3">
                {activeTab === 2 && (
                  <div className="certificate-5-container5"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .certificate-5-container1 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: inset;
            border-width: 1px;
          }
          .certificate-5-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .certificate-5-thq-image-container-elm {
            height: 100%;
            display: flex;
            position: relative;
          }
          .certificate-5-image1 {
            width: 661px;
            height: 427px;
            object-fit: contain;
            border-radius: 0px;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-5-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-5-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-5-thq-tabs-menu-elm {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .certificate-5-thq-tab-horizontal-elm1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-5-thq-divider-container-elm1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-5-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-5-thq-content-elm {
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
          .certificate-5-thq-feature1-title-elm {
            font-size: 35px;
          }
          .certificate-5-thq-tab-horizontal-elm2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-5-thq-divider-container-elm2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-5-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-5-thq-tab-horizontal-elm3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-5-thq-divider-container-elm3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-5-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }

          @media (max-width: 1600px) {
            .certificate-5-image1 {
              height: 422px;
              border-width: 0px;
            }
          }
          @media (max-width: 1200px) {
            .certificate-5-image1 {
              width: 638px;
              height: 495px;
            }
          }
          @media (max-width: 991px) {
            .certificate-5-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .certificate-5-thq-image-container-elm {
              justify-content: center;
            }
            .certificate-5-image1 {
              width: 100%;
              height: 510px;
            }
          }
          @media (max-width: 767px) {
            .certificate-5-image1 {
              height: 154px;
            }
            .certificate-5-thq-feature1-title-elm {
              font-size: 25px;
            }
            .certificate-5-thq-feature1-description-elm {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .certificate-5-image1 {
              width: 100%;
              height: 181px;
            }
            .certificate-5-thq-feature1-title-elm {
              font-size: 25px;
            }
            .certificate-5-thq-feature1-description-elm {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

Certificate5.defaultProps = {
  rootClassName: '',
  feature3ImgAlt: 'Global connections icon',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1706407281811-eec5d826864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImgAlt: 'Quality check icon',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1750165023743-1ce8d4d03ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
}

Certificate5.propTypes = {
  rootClassName: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Certificate5
