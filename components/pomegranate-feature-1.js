import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const PomegranateFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`pomegranate-feature-1-thq-layout300-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="pomegranate-feature-1-thq-max-width-elm thq-section-max-width">
          <div className="pomegranate-feature-1-thq-section-title-elm">
            <div className="pomegranate-feature-1-thq-content-elm1">
              <h2 className="pomegranate-feature-1-thq-text-elm1 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9MZwR-'),
                  }}
                ></span>
              </h2>
              <span className="pomegranate-feature-1-thq-text-elm2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5d-ubc'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="pomegranate-feature-1-thq-content-elm2">
            <div className="pomegranate-feature-1-thq-row-elm thq-flex-row">
              <div className="pomegranate-feature-1-thq-feature1-elm">
                <img
                  alt="Guava"
                  src="https://images.unsplash.com/photo-1676635134874-6a94b6a73a36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxwb21lZ3JhbmF0ZXxlbnwwfHx8fDE3NjU0NjgwNjV8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="pomegranate-feature-1-thq-content-elm3">
                  <h3 className="pomegranate-feature-1-thq-feature1-title-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_qm3Wqp'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small pomegranate-feature-1-thq-feature1-description-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Description_i9-4kT'),
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
          .pomegranate-feature-1-thq-layout300-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pomegranate-feature-1-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pomegranate-feature-1-thq-section-title-elm {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pomegranate-feature-1-thq-content-elm1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pomegranate-feature-1-thq-text-elm1 {
            text-align: center;
          }
          .pomegranate-feature-1-thq-text-elm2 {
            text-align: center;
          }
          .pomegranate-feature-1-thq-content-elm2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pomegranate-feature-1-thq-row-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .pomegranate-feature-1-thq-feature1-elm {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pomegranate-feature-1-thq-content-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pomegranate-feature-1-thq-feature1-title-elm {
            text-align: center;
          }

          @media (max-width: 991px) {
            .pomegranate-feature-1-thq-section-title-elm {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .pomegranate-feature-1-thq-max-width-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .pomegranate-feature-1-thq-section-title-elm {
              width: auto;
            }
            .pomegranate-feature-1-thq-text-elm1 {
              font-size: 25px;
              text-align: center;
            }
            .pomegranate-feature-1-thq-text-elm2 {
              font-size: 12px;
            }
            .pomegranate-feature-1-thq-row-elm {
              flex-direction: column;
            }
            .pomegranate-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .pomegranate-feature-1-thq-feature1-description-elm {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .pomegranate-feature-1-thq-text-elm1 {
              font-size: 18px;
            }
            .pomegranate-feature-1-thq-text-elm2 {
              font-size: 12px;
            }
            .pomegranate-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .pomegranate-feature-1-thq-feature1-description-elm {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

PomegranateFeature1.defaultProps = {
  rootClassName: '',
}

PomegranateFeature1.propTypes = {
  rootClassName: PropTypes.string,
}

export default PomegranateFeature1
