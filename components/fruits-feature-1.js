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
            <span className="fruits-feature-1-text1 thq-body-small">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Gz5pbx'),
                }}
              ></span>
            </span>
            <div className="fruits-feature-1-content1">
              <h2 className="fruits-feature-1-text2 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Guwcum'),
                  }}
                ></span>
              </h2>
              <span className="fruits-feature-1-text3 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SoGsh0'),
                  }}
                ></span>
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
                        <span className="fruits-feature-1-text6">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_tu7Txn'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small fruits-feature-1-feature1-description">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_S2aZ3P'),
                      }}
                    ></span>
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
                  <h3 className="thq-heading-3 fruits-feature-1-feature2-title">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="fruits-feature-1-text4">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_aG_4KZ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small fruits-feature-1-feature2-description">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wPS-7G'),
                      }}
                    ></span>
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
                  <h3 className="thq-heading-3 fruits-feature-1-feature3-title">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="fruits-feature-1-text5">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_THCdcJ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small fruits-feature-1-feature3-description">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tP3muh'),
                      }}
                    ></span>
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
          .fruits-feature-1-text1 {
            text-align: center;
          }
          .fruits-feature-1-content1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-1-text2 {
            text-align: center;
          }
          .fruits-feature-1-text3 {
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
          .fruits-feature-1-text4 {
            display: inline-block;
          }
          .fruits-feature-1-text5 {
            display: inline-block;
          }
          .fruits-feature-1-text6 {
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
            .fruits-feature-1-text1 {
              font-size: 15px;
            }
            .fruits-feature-1-text2 {
              font-size: 30px;
              text-align: center;
            }
            .fruits-feature-1-text3 {
              font-size: 15px;
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
            .fruits-feature-1-text6 {
              font-size: 26px;
            }
          }
          @media (max-width: 344px) {
            .fruits-feature-1-text1 {
              font-size: 12px;
            }
            .fruits-feature-1-text2 {
              font-size: 20px;
            }
            .fruits-feature-1-text3 {
              font-size: 12px;
            }
            .fruits-feature-1-feature1-title {
              font-size: 20px;
            }
            .fruits-feature-1-feature1-description {
              font-size: 12px;
            }
            .fruits-feature-1-feature2-title {
              font-size: 20px;
            }
            .fruits-feature-1-feature2-description {
              font-size: 12px;
            }
            .fruits-feature-1-feature3-title {
              font-size: 20px;
            }
            .fruits-feature-1-feature3-description {
              font-size: 12px;
            }
            .fruits-feature-1-text6 {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

FruitsFeature1.defaultProps = {
  rootClassName: '',
  feature2Title: undefined,
  feature3Title: undefined,
  feature1Title: undefined,
}

FruitsFeature1.propTypes = {
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default FruitsFeature1
