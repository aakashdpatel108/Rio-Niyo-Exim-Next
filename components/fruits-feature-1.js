import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FruitsFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`fruits-feature-1-layout300 thq-section-padding ${props.rootClassName} `}
      >
        <div className="fruits-feature-1-max-width thq-section-max-width">
          <div className="fruits-feature-1-section-title">
            <span className="fruits-feature-1-text10 thq-body-small">
              {props.slogan1 ?? (
                <Fragment>
                  <span className="fruits-feature-1-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dTSXv7'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="fruits-feature-1-content1">
              <h2 className="fruits-feature-1-text11 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="fruits-feature-1-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0Kl-Mv'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="fruits-feature-1-text12 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="fruits-feature-1-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4pUgtd'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="fruits-feature-1-content2">
            <div className="fruits-feature-1-row thq-flex-row">
              <div className="fruits-feature-1-feature1">
                <img
                  alt="Guava"
                  src="https://images.unsplash.com/photo-1629367308496-a2496ba22f88?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGd1YXZhfGVufDB8fHx8MTc1OTUwMjk0NHww&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="fruits-feature-1-content3">
                  <h3 className="fruits-feature-1-feature1-title thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="fruits-feature-1-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_tu7Txn'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="fruits-feature-1-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_mjs9Sg'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="fruits-feature-1-feature2">
                <img
                  alt="Papaya"
                  src="https://images.unsplash.com/photo-1702040242599-46809572ffce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxwYXBheWF8ZW58MHx8fHwxNzU5NTAyOTc2fDA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="fruits-feature-1-content4">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="fruits-feature-1-text15">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_aG_4KZ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="fruits-feature-1-text13">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_2WGC5q'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="fruits-feature-1-feature3">
                <img
                  alt="Banana"
                  src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGJhbmFuYXxlbnwwfHx8fDE3NTk1MDMwMDR8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="fruits-feature-1-content5">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="fruits-feature-1-text17">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_THCdcJ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="fruits-feature-1-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_2OY4Yy'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .fruits-feature-1-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-1-section-title {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-text10 {
            text-align: center;
          }
          .fruits-feature-1-content1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-1-text11 {
            text-align: center;
          }
          .fruits-feature-1-text12 {
            text-align: center;
          }
          .fruits-feature-1-content2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-1-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .fruits-feature-1-feature1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-1-feature1-title {
            text-align: center;
          }
          .fruits-feature-1-feature2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-1-feature3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-content5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-1-text13 {
            display: inline-block;
          }
          .fruits-feature-1-text14 {
            display: inline-block;
          }
          .fruits-feature-1-text15 {
            display: inline-block;
          }
          .fruits-feature-1-text16 {
            display: inline-block;
          }
          .fruits-feature-1-text17 {
            display: inline-block;
          }
          .fruits-feature-1-text18 {
            display: inline-block;
          }
          .fruits-feature-1-text19 {
            display: inline-block;
          }
          .fruits-feature-1-text20 {
            display: inline-block;
          }
          .fruits-feature-1-text21 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .fruits-feature-1-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .fruits-feature-1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .fruits-feature-1-section-title {
              width: auto;
            }
            .fruits-feature-1-text11 {
              text-align: center;
            }
            .fruits-feature-1-row {
              flex-direction: column;
            }
            .fruits-feature-1-feature2 {
              width: auto;
            }
            .fruits-feature-1-feature3 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

FruitsFeature1.defaultProps = {
  feature2Description: undefined,
  slogan1: undefined,
  rootClassName: '',
  feature2Title: undefined,
  feature3Description: undefined,
  feature3Title: undefined,
  content1: undefined,
  feature1Description: undefined,
  heading1: undefined,
  feature1Title: undefined,
}

FruitsFeature1.propTypes = {
  feature2Description: PropTypes.element,
  slogan1: PropTypes.element,
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  content1: PropTypes.element,
  feature1Description: PropTypes.element,
  heading1: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default FruitsFeature1
