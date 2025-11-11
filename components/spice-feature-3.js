import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SpiceFeature3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`spice-feature-3-layout251 thq-section-padding ${props.rootClassName} `}
      >
        <div className="spice-feature-3-max-width thq-section-max-width">
          <div className="spice-feature-3-content1">
            <div className="spice-feature-3-row thq-flex-row">
              <div className="spice-feature-3-feature1 thq-flex-column">
                <img
                  alt="Black Peppercorns (Kali Mirch)"
                  src="https://images.unsplash.com/photo-1755598603006-5cee23c4cb4e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxCbGFjayUyMHBlcHBlcmN8ZW58MHx8fHwxNzYxNTgxMzAxfDA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3 spice-feature-3-feature1-image"
                />
                <div className="spice-feature-3-content2 thq-flex-column">
                  <h3 className="thq-heading-3 spice-feature-3-feature1-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_R-6NzQ'),
                      }}
                    ></span>
                  </h3>
                  <span className="spice-feature-3-feature1-description thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_RQy0H-'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="spice-feature-3-feature2 thq-flex-column">
                <img
                  alt="Fennel Seed (Saunf)"
                  src="https://images.unsplash.com/photo-1701189975806-97b11541ec82?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fEZlbm5lbCUyMHNlZWR8ZW58MHx8fHwxNzYxNTgxNDYzfDA&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="thq-img-ratio-4-3 spice-feature-3-feature2-image"
                />
                <div className="spice-feature-3-content3 thq-flex-column">
                  <h3 className="thq-heading-3 spice-feature-3-feature2-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_wA4jmJ'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small spice-feature-3-feature2-description">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description_znvVy2'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="spice-feature-3-feature3 thq-flex-column">
                <img
                  alt="Chilli (Mirch)"
                  src="https://images.unsplash.com/photo-1625921133217-8d978f7872b8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fENoaWxsaSUyMHBvd2RlcnxlbnwwfHx8fDE3NjE1ODE1OTF8MA&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="thq-img-ratio-4-3 spice-feature-3-feature3-image"
                />
                <div className="spice-feature-3-content4 thq-flex-column">
                  <h3 className="thq-heading-3 spice-feature-3-feature3-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Title_Zk2hvG'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small spice-feature-3-feature3-description">
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
          .spice-feature-3-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .spice-feature-3-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .spice-feature-3-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .spice-feature-3-row {
            align-items: flex-start;
          }
          .spice-feature-3-feature1 {
            flex: 1;
          }
          .spice-feature-3-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .spice-feature-3-feature1-description {
            align-self: flex-start;
          }
          .spice-feature-3-feature2 {
            flex: 1;
          }
          .spice-feature-3-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .spice-feature-3-feature3 {
            flex: 1;
          }
          .spice-feature-3-content4 {
            align-self: stretch;
            align-items: flex-start;
          }

          @media (max-width: 991px) {
            .spice-feature-3-feature1-image {
              height: 260px;
            }
            .spice-feature-3-feature2-image {
              height: 260px;
            }
            .spice-feature-3-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .spice-feature-3-row {
              flex-direction: column;
            }
            .spice-feature-3-feature1-image {
              width: 100%;
            }
            .spice-feature-3-feature1-title {
              font-size: 18px;
            }
            .spice-feature-3-feature1-description {
              font-size: 12px;
            }
            .spice-feature-3-feature2 {
              width: auto;
            }
            .spice-feature-3-feature2-image {
              width: 100%;
            }
            .spice-feature-3-feature2-title {
              font-size: 18px;
            }
            .spice-feature-3-feature2-description {
              font-size: 12px;
            }
            .spice-feature-3-feature3 {
              width: auto;
            }
            .spice-feature-3-feature3-title {
              font-size: 18px;
            }
            .spice-feature-3-feature3-description {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .spice-feature-3-feature1-title {
              font-size: 18px;
            }
            .spice-feature-3-feature1-description {
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
