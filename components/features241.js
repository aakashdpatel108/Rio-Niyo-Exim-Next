import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features241 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="features241-container1 thq-section-padding">
        <div className="features241-container2 thq-section-max-width">
          <div className="features241-image-container">
            {activeTab === 0 && (
              <img
                alt="OFICE"
                src="/certificateofiec-1400w.png"
                className="features241-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features241-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features241-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="features241-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features241-tab-horizontal1"
            >
              <div className="features241-divider-container1">
                {activeTab === 0 && (
                  <div className="features241-container3"></div>
                )}
              </div>
              <div className="features241-content">
                <h2 className="thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GpXRGh'),
                    }}
                  ></span>
                </h2>
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kYG6qK'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features241-tab-horizontal2"
            >
              <div className="features241-divider-container2">
                {activeTab === 1 && (
                  <div className="features241-container4"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features241-tab-horizontal3"
            >
              <div className="features241-divider-container3">
                {activeTab === 2 && (
                  <div className="features241-container5"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features241-container1 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: inset;
            border-width: 1px;
          }
          .features241-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features241-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features241-image1 {
            height: 990px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: dotted;
            border-width: 2px;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features241-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features241-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features241-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features241-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features241-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features241-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features241-content {
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
          .features241-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features241-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features241-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features241-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features241-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features241-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 1200px) {
            .features241-image1 {
              width: 478px;
              height: 667px;
            }
          }
          @media (max-width: 991px) {
            .features241-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .features241-image-container {
              justify-content: center;
            }
          }
          @media (max-width: 414px) {
            .features241-image1 {
              width: 364px;
              height: 514px;
            }
          }
        `}
      </style>
    </>
  )
}

Features241.defaultProps = {
  feature3ImgAlt: 'Global connections icon',
  feature2ImgAlt: 'Quality check icon',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1706407281811-eec5d826864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1750165023743-1ce8d4d03ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
}

Features241.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features241
