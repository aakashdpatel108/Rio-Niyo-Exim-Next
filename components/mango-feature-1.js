import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MangoFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`mango-feature-1-layout300 thq-section-padding ${props.rootClassName} `}
      >
        <div className="mango-feature-1-max-width thq-section-max-width">
          <div className="mango-feature-1-section-title">
            <div className="mango-feature-1-content1">
              <h2 className="mango-feature-1-text1 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0Dd1J4'),
                  }}
                ></span>
              </h2>
              <span className="mango-feature-1-text2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZlNLuh'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="mango-feature-1-content2">
            <div className="mango-feature-1-row thq-flex-row">
              <div className="mango-feature-1-feature1">
                <img
                  alt="Guava"
                  src="/Fruits/kesar-1400w.jpg"
                  className="thq-img-ratio-4-3"
                />
                <div className="mango-feature-1-content3">
                  <h3 className="mango-feature-1-feature1-title thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_0VUjhb'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small mango-feature-1-feature1-description">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Description_fwFxOp'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="mango-feature-1-feature21">
                <img
                  alt="Papaya"
                  src="/Fruits/hafus-1400w.webp"
                  className="thq-img-ratio-4-3"
                />
                <div className="mango-feature-1-content4">
                  <h3 className="thq-heading-3 mango-feature-1-feature2-title1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_yUfeZg'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small mango-feature-1-feature2-description1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description_6Pwvol'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="mango-feature-1-feature22">
                <img
                  alt="Papaya"
                  src="/Fruits/rajapuri-1400w.jpg"
                  className="thq-img-ratio-4-3"
                />
                <div className="mango-feature-1-content5">
                  <h3 className="thq-heading-3 mango-feature-1-feature2-title2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_ec5H1d'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small mango-feature-1-feature2-description2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description_JCqCB6'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="mango-feature-1-feature23">
                <img
                  alt="Papaya"
                  src="/Fruits/dasheri-1400w.jpeg"
                  className="thq-img-ratio-4-3"
                />
                <div className="mango-feature-1-content6">
                  <h3 className="thq-heading-3 mango-feature-1-feature2-title3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_shRai4'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small mango-feature-1-feature2-description3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description_I5wVTy'),
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
          .mango-feature-1-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mango-feature-1-section-title {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-content1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .mango-feature-1-text1 {
            text-align: center;
          }
          .mango-feature-1-text2 {
            text-align: center;
          }
          .mango-feature-1-content2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .mango-feature-1-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .mango-feature-1-feature1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mango-feature-1-feature1-title {
            text-align: center;
          }
          .mango-feature-1-feature21 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mango-feature-1-feature22 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-content5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mango-feature-1-feature23 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-feature-1-content6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .mango-feature-1-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .mango-feature-1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .mango-feature-1-section-title {
              width: auto;
            }
            .mango-feature-1-text1 {
              font-size: 25px;
              text-align: center;
            }
            .mango-feature-1-text2 {
              font-size: 12px;
            }
            .mango-feature-1-row {
              flex-direction: column;
            }
            .mango-feature-1-feature1-title {
              font-size: 18px;
            }
            .mango-feature-1-feature1-description {
              font-size: 12px;
            }
            .mango-feature-1-feature21 {
              width: auto;
            }
            .mango-feature-1-feature2-title1 {
              font-size: 18px;
            }
            .mango-feature-1-feature2-description1 {
              font-size: 12px;
            }
            .mango-feature-1-feature22 {
              width: auto;
            }
            .mango-feature-1-feature2-title2 {
              font-size: 18px;
            }
            .mango-feature-1-feature2-description2 {
              font-size: 12px;
            }
            .mango-feature-1-feature23 {
              width: auto;
            }
            .mango-feature-1-feature2-title3 {
              font-size: 18px;
            }
            .mango-feature-1-feature2-description3 {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .mango-feature-1-text1 {
              font-size: 18px;
            }
            .mango-feature-1-text2 {
              font-size: 12px;
            }
            .mango-feature-1-feature1-title {
              font-size: 18px;
            }
            .mango-feature-1-feature1-description {
              font-size: 12px;
            }
            .mango-feature-1-feature2-title1 {
              font-size: 18px;
            }
            .mango-feature-1-feature2-description1 {
              font-size: 12px;
            }
            .mango-feature-1-feature2-title2 {
              font-size: 18px;
            }
            .mango-feature-1-feature2-description2 {
              font-size: 12px;
            }
            .mango-feature-1-feature2-title3 {
              font-size: 18px;
            }
            .mango-feature-1-feature2-description3 {
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
