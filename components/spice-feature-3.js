import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SpiceFeature3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`spice-feature-3-thq-layout251-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="spice-feature-3-thq-max-width-elm thq-section-max-width">
          <div className="spice-feature-3-thq-content-elm1">
            <div className="spice-feature-3-thq-row-elm thq-flex-row">
              <div className="spice-feature-3-thq-feature1-elm thq-flex-column">
                <img
                  alt="Black Peppercorns (Kali Mirch)"
                  src="https://images.unsplash.com/photo-1755598603006-5cee23c4cb4e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxCbGFjayUyMHBlcHBlcmN8ZW58MHx8fHwxNzYxNTgxMzAxfDA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3 spice-feature-3-thq-feature1-image-elm"
                />
                <div className="spice-feature-3-thq-content-elm2 thq-flex-column">
                  <h3 className="thq-heading-3 spice-feature-3-thq-feature1-title-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_R-6NzQ'),
                      }}
                    ></span>
                  </h3>
                  <span className="spice-feature-3-thq-feature1-description-elm thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_RQy0H-'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="spice-feature-3-thq-feature2-elm thq-flex-column">
                <img
                  alt="Fennel Seed (Saunf)"
                  src="https://images.unsplash.com/photo-1701189975806-97b11541ec82?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fEZlbm5lbCUyMHNlZWR8ZW58MHx8fHwxNzYxNTgxNDYzfDA&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="thq-img-ratio-4-3 spice-feature-3-thq-feature2-image-elm"
                />
                <div className="spice-feature-3-thq-content-elm3 thq-flex-column">
                  <h3 className="thq-heading-3 spice-feature-3-thq-feature2-title-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_wA4jmJ'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small spice-feature-3-thq-feature2-description-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description_znvVy2'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="spice-feature-3-thq-feature3-elm thq-flex-column">
                <img
                  alt="Chilli (Mirch)"
                  src="https://images.unsplash.com/photo-1625921133217-8d978f7872b8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fENoaWxsaSUyMHBvd2RlcnxlbnwwfHx8fDE3NjE1ODE1OTF8MA&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="thq-img-ratio-4-3 spice-feature-3-thq-feature3-image-elm"
                />
                <div className="spice-feature-3-thq-content-elm4 thq-flex-column">
                  <h3 className="thq-heading-3 spice-feature-3-thq-feature3-title-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Title_Zk2hvG'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small spice-feature-3-thq-feature3-description-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Description_tm0kqE'),
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
          .spice-feature-3-thq-layout251-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .spice-feature-3-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .spice-feature-3-thq-content-elm1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .spice-feature-3-thq-row-elm {
            align-items: flex-start;
          }
          .spice-feature-3-thq-feature1-elm {
            flex: 1;
          }
          .spice-feature-3-thq-content-elm2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .spice-feature-3-thq-feature1-description-elm {
            align-self: flex-start;
          }
          .spice-feature-3-thq-feature2-elm {
            flex: 1;
          }
          .spice-feature-3-thq-content-elm3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .spice-feature-3-thq-feature3-elm {
            flex: 1;
          }
          .spice-feature-3-thq-content-elm4 {
            align-self: stretch;
            align-items: flex-start;
          }

          @media (max-width: 991px) {
            .spice-feature-3-thq-feature1-image-elm {
              height: 260px;
            }
            .spice-feature-3-thq-feature2-image-elm {
              height: 260px;
            }
            .spice-feature-3-thq-feature3-image-elm {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .spice-feature-3-thq-row-elm {
              flex-direction: column;
            }
            .spice-feature-3-thq-feature1-image-elm {
              width: 100%;
            }
            .spice-feature-3-thq-feature1-title-elm {
              font-size: 18px;
            }
            .spice-feature-3-thq-feature1-description-elm {
              font-size: 12px;
            }
            .spice-feature-3-thq-feature2-elm {
              width: auto;
            }
            .spice-feature-3-thq-feature2-image-elm {
              width: 100%;
            }
            .spice-feature-3-thq-feature2-title-elm {
              font-size: 18px;
            }
            .spice-feature-3-thq-feature2-description-elm {
              font-size: 12px;
            }
            .spice-feature-3-thq-feature3-elm {
              width: auto;
            }
            .spice-feature-3-thq-feature3-title-elm {
              font-size: 18px;
            }
            .spice-feature-3-thq-feature3-description-elm {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .spice-feature-3-thq-feature1-title-elm {
              font-size: 18px;
            }
            .spice-feature-3-thq-feature1-description-elm {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

SpiceFeature3.defaultProps = {
  rootClassName: '',
}

SpiceFeature3.propTypes = {
  rootClassName: PropTypes.string,
}

export default SpiceFeature3
