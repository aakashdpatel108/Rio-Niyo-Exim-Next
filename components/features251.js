import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features251 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features251-container2 thq-section-max-width">
          <div className="features251-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features251-tab-horizontal1"
            >
              <div className="features251-divider-container1">
                {activeTab === 0 && (
                  <div className="features251-container3"></div>
                )}
              </div>
              <div className="features251-content1">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features251-text6">
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
                      <span className="features251-text2">
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
              className="features251-tab-horizontal2"
            >
              <div className="features251-divider-container2">
                {activeTab === 1 && (
                  <div className="features251-container4"></div>
                )}
              </div>
              <div className="features251-content2">
                <h2 className="thq-heading-2">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features251-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ulFPKz'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features251-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Woo1JV'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features251-tab-horizontal3"
            >
              <div className="features251-divider-container3">
                {activeTab === 2 && (
                  <div className="features251-container5"></div>
                )}
              </div>
              <div className="features251-content3">
                <h2 className="thq-heading-2">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features251-text1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_QuQwU8'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features251-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_-_IoET'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features251-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features251-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features251-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features251-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features251-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features251-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features251-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features251-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features251-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features251-content1 {
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
          .features251-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features251-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features251-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features251-content2 {
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
          .features251-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features251-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features251-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features251-content3 {
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
          .features251-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features251-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features251-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features251-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features251-text1 {
            display: inline-block;
          }
          .features251-text2 {
            display: inline-block;
          }
          .features251-text3 {
            display: inline-block;
          }
          .features251-text4 {
            display: inline-block;
          }
          .features251-text5 {
            display: inline-block;
          }
          .features251-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features251-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .features251-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

Features251.defaultProps = {
  feature1ImgAlt: 'High-Quality Standards Image Alt',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1750165023743-1ce8d4d03ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1706407281811-eec5d826864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3Title: undefined,
  feature1Description: undefined,
  feature3ImgAlt: 'Wide Range of Products Image Alt',
  feature2Title: undefined,
  feature2ImgAlt: 'Global Reach Image Alt',
  feature3Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1629550638894-99c94f021a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTQ5NzA4OXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description: undefined,
  feature1Title: undefined,
}

Features251.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features251
