import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const RiceFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`rice-feature-1-thq-layout300-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="rice-feature-1-thq-max-width-elm thq-section-max-width">
          <div className="rice-feature-1-thq-section-title-elm">
            <div className="rice-feature-1-thq-content-elm1">
              <h2 className="rice-feature-1-thq-text-elm1 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FQANrO'),
                  }}
                ></span>
              </h2>
              <span className="rice-feature-1-thq-text-elm2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xW3H9s'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="rice-feature-1-thq-content-elm2">
            <div className="rice-feature-1-thq-row-elm thq-flex-row">
              <div className="rice-feature-1-thq-feature1-elm">
                <img
                  alt="sella basmati rice"
                  src="/Grains and cereals/sella%20basmati%20rice-1400w.webp"
                  className="thq-img-ratio-4-3"
                />
                <div className="rice-feature-1-thq-content-elm3">
                  <h3 className="rice-feature-1-thq-feature1-title-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_wQ1eW0'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small rice-feature-1-thq-feature1-description-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Description_-3IgzP'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="rice-feature-1-thq-feature2-elm1">
                <img
                  alt="Sona masoori kolam rice"
                  src="/Grains and cereals/sona%20masoori%20kolam%20rice-1400w.webp"
                  className="thq-img-ratio-4-3"
                />
                <div className="rice-feature-1-thq-content-elm4">
                  <h3 className="thq-heading-3 rice-feature-1-thq-feature2-title-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_SqJLZs'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small rice-feature-1-thq-feature2-description-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description_9jtJ-V'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="rice-feature-1-thq-feature2-elm2">
                <img
                  alt="broken rice"
                  src="/Grains and cereals/broken%20rice-1400w.jpg"
                  className="thq-img-ratio-4-3"
                />
                <div className="rice-feature-1-thq-content-elm5">
                  <h3 className="thq-heading-3 rice-feature-1-thq-feature2-title-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_hDPJmF'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small rice-feature-1-thq-feature2-description-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description_yHt5sY'),
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
          .rice-feature-1-thq-layout300-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            border-top-width: 2px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .rice-feature-1-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .rice-feature-1-thq-section-title-elm {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .rice-feature-1-thq-content-elm1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .rice-feature-1-thq-text-elm1 {
            text-align: center;
          }
          .rice-feature-1-thq-text-elm2 {
            text-align: center;
          }
          .rice-feature-1-thq-content-elm2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .rice-feature-1-thq-row-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .rice-feature-1-thq-feature1-elm {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .rice-feature-1-thq-content-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .rice-feature-1-thq-feature1-title-elm {
            text-align: center;
          }
          .rice-feature-1-thq-feature2-elm1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .rice-feature-1-thq-content-elm4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .rice-feature-1-thq-feature2-elm2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .rice-feature-1-thq-content-elm5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .rice-feature-1-thq-section-title-elm {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .rice-feature-1-thq-layout300-elm {
              padding-top: var(--dl-layout-space-threeunits);
            }
            .rice-feature-1-thq-max-width-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .rice-feature-1-thq-section-title-elm {
              width: auto;
            }
            .rice-feature-1-thq-text-elm1 {
              font-size: 25px;
              text-align: center;
            }
            .rice-feature-1-thq-text-elm2 {
              font-size: 12px;
            }
            .rice-feature-1-thq-row-elm {
              flex-direction: column;
            }
            .rice-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .rice-feature-1-thq-feature1-description-elm {
              font-size: 12px;
            }
            .rice-feature-1-thq-feature2-elm1 {
              width: auto;
            }
            .rice-feature-1-thq-feature2-title-elm1 {
              font-size: 18px;
            }
            .rice-feature-1-thq-feature2-description-elm1 {
              font-size: 12px;
            }
            .rice-feature-1-thq-feature2-elm2 {
              width: auto;
            }
            .rice-feature-1-thq-feature2-title-elm2 {
              font-size: 18px;
            }
            .rice-feature-1-thq-feature2-description-elm2 {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .rice-feature-1-thq-layout300-elm {
              padding-top: var(--dl-layout-space-oneandhalfunits);
            }
            .rice-feature-1-thq-text-elm1 {
              font-size: 18px;
            }
            .rice-feature-1-thq-text-elm2 {
              font-size: 12px;
            }
            .rice-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .rice-feature-1-thq-feature1-description-elm {
              font-size: 12px;
            }
            .rice-feature-1-thq-feature2-title-elm1 {
              font-size: 18px;
            }
            .rice-feature-1-thq-feature2-description-elm1 {
              font-size: 12px;
            }
            .rice-feature-1-thq-feature2-title-elm2 {
              font-size: 18px;
            }
            .rice-feature-1-thq-feature2-description-elm2 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

RiceFeature1.defaultProps = {
  rootClassName: '',
}

RiceFeature1.propTypes = {
  rootClassName: PropTypes.string,
}

export default RiceFeature1
