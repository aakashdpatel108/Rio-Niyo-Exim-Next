import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MangoFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`mango-feature-1-thq-layout300-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="mango-feature-1-thq-max-width-elm thq-section-max-width">
          <div className="mango-feature-1-thq-section-title-elm">
            <div className="mango-feature-1-thq-content-elm1">
              <h2 className="mango-feature-1-thq-text-elm1 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0Dd1J4'),
                  }}
                ></span>
              </h2>
              <span className="mango-feature-1-thq-text-elm2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZlNLuh'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="mango-feature-1-thq-content-elm2">
            <div className="mango-feature-1-thq-row-elm thq-flex-row">
              <div className="mango-feature-1-thq-feature1-elm">
                <img
                  alt="Guava"
                  src="/Fruits/kesar-1400w.jpg"
                  className="thq-img-ratio-4-3"
                />
                <div className="mango-feature-1-thq-content-elm3">
                  <h3 className="mango-feature-1-thq-feature1-title-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_0VUjhb'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small mango-feature-1-thq-feature1-description-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Description_fwFxOp'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="mango-feature-1-thq-feature2-elm1">
                <img
                  alt="Papaya"
                  src="/Fruits/hafus-1400w.webp"
                  className="thq-img-ratio-4-3"
                />
                <div className="mango-feature-1-thq-content-elm4">
                  <h3 className="thq-heading-3 mango-feature-1-thq-feature2-title-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_yUfeZg'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small mango-feature-1-thq-feature2-description-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description_6Pwvol'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="mango-feature-1-thq-feature2-elm2">
                <img
                  alt="Papaya"
                  src="/Fruits/rajapuri-1400w.jpg"
                  className="thq-img-ratio-4-3"
                />
                <div className="mango-feature-1-thq-content-elm5">
                  <h3 className="thq-heading-3 mango-feature-1-thq-feature2-title-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_ec5H1d'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small mango-feature-1-thq-feature2-description-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description_JCqCB6'),
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
          .mango-feature-1-thq-layout300-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mango-feature-1-thq-section-title-elm {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-thq-content-elm1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .mango-feature-1-thq-text-elm1 {
            text-align: center;
          }
          .mango-feature-1-thq-text-elm2 {
            text-align: center;
          }
          .mango-feature-1-thq-content-elm2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .mango-feature-1-thq-row-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .mango-feature-1-thq-feature1-elm {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-thq-content-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mango-feature-1-thq-feature1-title-elm {
            text-align: center;
          }
          .mango-feature-1-thq-feature2-elm1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-thq-content-elm4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mango-feature-1-thq-feature2-elm2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-thq-content-elm5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .mango-feature-1-thq-section-title-elm {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .mango-feature-1-thq-max-width-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .mango-feature-1-thq-section-title-elm {
              width: auto;
            }
            .mango-feature-1-thq-text-elm1 {
              font-size: 25px;
              text-align: center;
            }
            .mango-feature-1-thq-text-elm2 {
              font-size: 12px;
            }
            .mango-feature-1-thq-row-elm {
              flex-direction: column;
            }
            .mango-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .mango-feature-1-thq-feature1-description-elm {
              font-size: 12px;
            }
            .mango-feature-1-thq-feature2-elm1 {
              width: auto;
            }
            .mango-feature-1-thq-feature2-title-elm1 {
              font-size: 18px;
            }
            .mango-feature-1-thq-feature2-description-elm1 {
              font-size: 12px;
            }
            .mango-feature-1-thq-feature2-elm2 {
              width: auto;
            }
            .mango-feature-1-thq-feature2-title-elm2 {
              font-size: 18px;
            }
            .mango-feature-1-thq-feature2-description-elm2 {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .mango-feature-1-thq-text-elm1 {
              font-size: 18px;
            }
            .mango-feature-1-thq-text-elm2 {
              font-size: 12px;
            }
            .mango-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .mango-feature-1-thq-feature1-description-elm {
              font-size: 12px;
            }
            .mango-feature-1-thq-feature2-title-elm1 {
              font-size: 18px;
            }
            .mango-feature-1-thq-feature2-description-elm1 {
              font-size: 12px;
            }
            .mango-feature-1-thq-feature2-title-elm2 {
              font-size: 18px;
            }
            .mango-feature-1-thq-feature2-description-elm2 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

MangoFeature1.defaultProps = {
  rootClassName: '',
}

MangoFeature1.propTypes = {
  rootClassName: PropTypes.string,
}

export default MangoFeature1
