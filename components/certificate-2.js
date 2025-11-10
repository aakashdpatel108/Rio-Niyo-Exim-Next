import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Certificate2 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div
        className={`certificate-2-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="certificate-2-container2 thq-section-max-width">
          <div className="certificate-2-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="certificate-2-tab-horizontal1"
            >
              <div className="certificate-2-divider-container1">
                {activeTab === 0 && (
                  <div className="certificate-2-container3"></div>
                )}
              </div>
              <div className="certificate-2-content">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="certificate-2-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_khDPVo'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="certificate-2-text1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9Z7QEO'),
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
              className="certificate-2-tab-horizontal2"
            >
              <div className="certificate-2-divider-container2">
                {activeTab === 1 && (
                  <div className="certificate-2-container4"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="certificate-2-tab-horizontal3"
            >
              <div className="certificate-2-divider-container3">
                {activeTab === 2 && (
                  <div className="certificate-2-container5"></div>
                )}
              </div>
            </div>
          </div>
          <div className="certificate-2-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="certificate-2-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="certificate-2-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="certificate-2-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .certificate-2-container1 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 0px;
          }
          .certificate-2-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .certificate-2-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .certificate-2-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-2-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-2-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-2-content {
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
          .certificate-2-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-2-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-2-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-2-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-2-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-2-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-2-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .certificate-2-image1 {
            width: 643px;
            height: 884px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: hidden;
            border-width: 1px;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-2-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-2-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-2-text1 {
            display: inline-block;
          }
          .certificate-2-text2 {
            display: inline-block;
          }
          .certificate-2root-class-name {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 1200px) {
            .certificate-2-image1 {
              width: 638px;
              height: 898px;
            }
          }
          @media (max-width: 991px) {
            .certificate-2-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .certificate-2-tabs-menu {
              order: 2;
            }
            .certificate-2-image-container {
              justify-content: center;
            }
            .certificate-2-image1 {
              width: 478px;
              height: 667px;
              margin-right: 0px;
            }
          }
          @media (max-width: 344px) {
            .certificate-2-image1 {
              width: 364px;
              height: 514px;
            }
          }
        `}
      </style>
    </>
  )
}

Certificate2.defaultProps = {
  feature1ImgAlt: 'High-Quality Standards Image Alt',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1750165023743-1ce8d4d03ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1706407281811-eec5d826864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Description: undefined,
  feature3ImgAlt: 'Wide Range of Products Image Alt',
  feature2ImgAlt: 'Global Reach Image Alt',
  feature1ImgSrc: '/gst-1400w.png',
  rootClassName: '',
  feature1Title: undefined,
}

Certificate2.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
}

export default Certificate2
