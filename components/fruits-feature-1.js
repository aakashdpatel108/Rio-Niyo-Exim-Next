import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FruitsFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`fruits-feature-1-thq-layout300-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="fruits-feature-1-thq-max-width-elm thq-section-max-width">
          <div className="fruits-feature-1-thq-section-title-elm">
            <span className="fruits-feature-1-thq-text-elm1 thq-body-small">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Gz5pbx'),
                }}
              ></span>
            </span>
            <div className="fruits-feature-1-thq-content-elm1">
              <h2 className="fruits-feature-1-thq-text-elm2 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Guwcum'),
                  }}
                ></span>
              </h2>
              <span className="fruits-feature-1-thq-text-elm3 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SoGsh0'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="fruits-feature-1-thq-content-elm2">
            <div className="fruits-feature-1-thq-row-elm thq-flex-row">
              <div className="fruits-feature-1-thq-feature1-elm">
                <img
                  alt="Guava"
                  src="https://images.unsplash.com/photo-1629367308496-a2496ba22f88?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGd1YXZhfGVufDB8fHx8MTc1OTUwMjk0NHww&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="fruits-feature-1-thq-content-elm3">
                  <h3 className="fruits-feature-1-thq-feature1-title-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_KQCyQ3'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small fruits-feature-1-thq-feature1-description-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_S2aZ3P'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="fruits-feature-1-thq-feature2-elm">
                <img
                  alt="Pomegranate"
                  src="https://images.unsplash.com/photo-1702040242599-46809572ffce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxwYXBheWF8ZW58MHx8fHwxNzU5NTAyOTc2fDA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="fruits-feature-1-thq-content-elm4">
                  <h3 className="thq-heading-3 fruits-feature-1-thq-feature2-title-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_6CCzfz'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small fruits-feature-1-thq-feature2-description-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wPS-7G'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="fruits-feature-1-thq-feature3-elm">
                <img
                  alt="Banana"
                  src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGJhbmFuYXxlbnwwfHx8fDE3NTk1MDMwMDR8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="fruits-feature-1-thq-content-elm5">
                  <h3 className="thq-heading-3 fruits-feature-1-thq-feature3-title-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_7N4hFl'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small fruits-feature-1-thq-feature3-description-elm">
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
          .fruits-feature-1-thq-layout300-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-1-thq-section-title-elm {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-thq-text-elm1 {
            text-align: center;
          }
          .fruits-feature-1-thq-content-elm1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-1-thq-text-elm2 {
            text-align: center;
          }
          .fruits-feature-1-thq-text-elm3 {
            text-align: center;
          }
          .fruits-feature-1-thq-content-elm2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-1-thq-row-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .fruits-feature-1-thq-feature1-elm {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-thq-content-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-1-thq-feature1-title-elm {
            text-align: center;
          }
          .fruits-feature-1-thq-feature2-elm {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-thq-content-elm4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-1-thq-feature3-elm {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-1-thq-content-elm5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .fruits-feature-1-thq-section-title-elm {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .fruits-feature-1-thq-max-width-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .fruits-feature-1-thq-section-title-elm {
              width: auto;
            }
            .fruits-feature-1-thq-text-elm1 {
              font-size: 12px;
            }
            .fruits-feature-1-thq-text-elm2 {
              font-size: 25px;
              text-align: center;
            }
            .fruits-feature-1-thq-text-elm3 {
              font-size: 12px;
            }
            .fruits-feature-1-thq-row-elm {
              flex-direction: column;
            }
            .fruits-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .fruits-feature-1-thq-feature1-description-elm {
              font-size: 12px;
            }
            .fruits-feature-1-thq-feature2-elm {
              width: auto;
            }
            .fruits-feature-1-thq-feature2-title-elm {
              font-size: 18px;
            }
            .fruits-feature-1-thq-feature2-description-elm {
              font-size: 12px;
            }
            .fruits-feature-1-thq-feature3-elm {
              width: auto;
            }
            .fruits-feature-1-thq-feature3-title-elm {
              font-size: 18px;
            }
            .fruits-feature-1-thq-feature3-description-elm {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .fruits-feature-1-thq-text-elm1 {
              font-size: 12px;
            }
            .fruits-feature-1-thq-text-elm2 {
              font-size: 18px;
            }
            .fruits-feature-1-thq-text-elm3 {
              font-size: 12px;
            }
            .fruits-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .fruits-feature-1-thq-feature1-description-elm {
              font-size: 12px;
            }
            .fruits-feature-1-thq-feature2-title-elm {
              font-size: 18px;
            }
            .fruits-feature-1-thq-feature2-description-elm {
              font-size: 12px;
            }
            .fruits-feature-1-thq-feature3-title-elm {
              font-size: 18px;
            }
            .fruits-feature-1-thq-feature3-description-elm {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

FruitsFeature1.defaultProps = {
  rootClassName: '',
}

FruitsFeature1.propTypes = {
  rootClassName: PropTypes.string,
}

export default FruitsFeature1
