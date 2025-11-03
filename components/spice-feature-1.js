import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SpiceFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`spice-feature-1-layout251 thq-section-padding ${props.rootClassName} `}
      >
        <div className="spice-feature-1-max-width thq-section-max-width">
          <div className="thq-flex-row spice-feature-1-section-title">
            <div className="spice-feature-1-column thq-flex-column">
              <h2 className="thq-heading-2 spice-feature-1-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pBUSc8'),
                  }}
                ></span>
              </h2>
            </div>
          </div>
          <div className="spice-feature-1-content1">
            <div className="spice-feature-1-row thq-flex-row">
              <div className="spice-feature-1-feature1 thq-flex-column">
                <img
                  alt="Turmeric (Haldi)"
                  src="https://images.unsplash.com/photo-1606951444141-e5533feb55be?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHR1cm1lcmljfGVufDB8fHx8MTc2MTUxMjY0M3ww&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3 spice-feature-1-feature1-image"
                />
                <div className="spice-feature-1-content2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_aHb-uS'),
                      }}
                    ></span>
                  </h3>
                  <span className="spice-feature-1-feature1-description thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="spice-feature-1-text2">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_kUem1f'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="spice-feature-1-feature2 thq-flex-column">
                <img
                  alt="Cumin (Jeera)"
                  src="https://images.unsplash.com/photo-1601723897386-e5df0c749fb7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGN1bWluJTIwc2VlZHN8ZW58MHx8fHwxNzYxNTEzNDE2fDA&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="thq-img-ratio-4-3 spice-feature-1-feature2-image"
                />
                <div className="spice-feature-1-content3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ap_BTz'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ot8CaP'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="spice-feature-1-feature3 thq-flex-column">
                <img
                  alt="Coriander (Dhania)"
                  src="https://images.unsplash.com/photo-1608797179072-4268dd68eff2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGNvcmlhbmRlcnxlbnwwfHx8fDE3NjE1MTM1NjF8MA&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="thq-img-ratio-4-3 spice-feature-1-feature3-image"
                />
                <div className="spice-feature-1-content4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1mHuaS'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_bbxktn'),
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
          .spice-feature-1-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .spice-feature-1-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .spice-feature-1-column {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .spice-feature-1-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .spice-feature-1-row {
            align-items: flex-start;
          }
          .spice-feature-1-feature1 {
            flex: 1;
          }
          .spice-feature-1-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .spice-feature-1-feature1-description {
            align-self: flex-start;
          }
          .spice-feature-1-feature2 {
            flex: 1;
          }
          .spice-feature-1-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .spice-feature-1-feature3 {
            flex: 1;
          }
          .spice-feature-1-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .spice-feature-1-text2 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .spice-feature-1-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .spice-feature-1-feature1-image {
              height: 260px;
            }
            .spice-feature-1-feature2-image {
              height: 260px;
            }
            .spice-feature-1-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .spice-feature-1-column {
              width: 100%;
            }
            .spice-feature-1-text1 {
              text-align: center;
            }
            .spice-feature-1-row {
              flex-direction: column;
            }
            .spice-feature-1-feature1-image {
              width: 100%;
            }
            .spice-feature-1-feature2 {
              width: auto;
            }
            .spice-feature-1-feature2-image {
              width: 100%;
            }
            .spice-feature-1-feature3 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

SpiceFeature1.defaultProps = {
  rootClassName: '',
  feature1Description: undefined,
}

SpiceFeature1.propTypes = {
  rootClassName: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default SpiceFeature1
