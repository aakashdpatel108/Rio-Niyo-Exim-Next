import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SpiceFeature4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`spice-feature-4-thq-layout301-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="spice-feature-4-thq-max-width-elm thq-section-max-width">
          <div className="spice-feature-4-thq-row-elm thq-grid-auto-300">
            <div className="spice-feature-4-thq-feature1-elm">
              <img
                alt="Poppy Seed (Khus Khus)"
                src="https://images.unsplash.com/photo-1612708015264-5f13c037c9cd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxQb3BweSUyMFNlZWQlMjB8ZW58MHx8fHwxNzYxNTgyMDIxfDA&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-4-thq-content-elm1 thq-flex-column">
                <div className="spice-feature-4-thq-section-title-elm1 thq-flex-column">
                  <h3 className="spice-feature-4-thq-title1-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('title1_CPZCbi'),
                      }}
                    ></span>
                  </h3>
                  <span className="spice-feature-4-thq-description1-elm thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('description1_gXkBlB'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-4-thq-action-elm1 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-4-thq-feature2-elm1">
              <img
                alt="Mustard Seed (Rai/Sarson)"
                src="https://images.unsplash.com/photo-1604768802835-899055f0e245?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fE11c3RhcmQlMjBTZWVkfGVufDB8fHx8MTc2MTU4MjIyMXww&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-4-thq-content-elm2 thq-flex-column">
                <div className="spice-feature-4-thq-section-title-elm2 thq-flex-column">
                  <strong className="spice-feature-4-thq-title2-elm1 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('title2_ZbCGnw'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-4-thq-description2-elm1 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('description2_cy2QBc'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-4-thq-action-elm2 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-4-thq-feature2-elm2">
              <img
                alt="Sesame Seed (Til)"
                src="https://images.unsplash.com/photo-1628317321557-68729bee6644?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFNlc2FtZSUyMHNlZWR8ZW58MHx8fHwxNzYxNTgyMTA3fDA&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-4-thq-content-elm3 thq-flex-column">
                <div className="spice-feature-4-thq-section-title-elm3 thq-flex-column">
                  <strong className="spice-feature-4-thq-title2-elm2 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('title2_vY2kEi'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-4-thq-description2-elm2 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('description2_pKNdFa'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-4-thq-action-elm3 thq-flex-row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .spice-feature-4-thq-layout301-elm {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .spice-feature-4-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .spice-feature-4-thq-row-elm {
            width: 100%;
          }
          .spice-feature-4-thq-feature1-elm {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .spice-feature-4-thq-content-elm1 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-thq-section-title-elm1 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-thq-title1-elm {
            text-align: center;
          }
          .spice-feature-4-thq-description1-elm {
            text-align: justify;
          }
          .spice-feature-4-thq-action-elm1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-4-thq-feature2-elm1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .spice-feature-4-thq-content-elm2 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-thq-section-title-elm2 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-thq-title2-elm1 {
            text-align: center;
          }
          .spice-feature-4-thq-description2-elm1 {
            text-align: justify;
          }
          .spice-feature-4-thq-action-elm2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-4-thq-feature2-elm2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .spice-feature-4-thq-content-elm3 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-thq-section-title-elm3 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-thq-title2-elm2 {
            text-align: center;
          }
          .spice-feature-4-thq-description2-elm2 {
            text-align: justify;
          }
          .spice-feature-4-thq-action-elm3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }

          @media (max-width: 991px) {
            .spice-feature-4-thq-row-elm {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .spice-feature-4-thq-feature1-elm {
              width: 100%;
            }
            .spice-feature-4-thq-feature2-elm1 {
              width: 100%;
            }
            .spice-feature-4-thq-feature2-elm2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .spice-feature-4-thq-title1-elm {
              font-size: 18px;
            }
            .spice-feature-4-thq-description1-elm {
              font-size: 12px;
            }
            .spice-feature-4-thq-title2-elm1 {
              font-size: 18px;
            }
            .spice-feature-4-thq-description2-elm1 {
              font-size: 12px;
            }
            .spice-feature-4-thq-title2-elm2 {
              font-size: 18px;
            }
            .spice-feature-4-thq-description2-elm2 {
              font-size: 12px;
            }
          }
          @media (max-width: 479px) {
            .spice-feature-4-thq-max-width-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

SpiceFeature4.defaultProps = {
  rootClassName: '',
}

SpiceFeature4.propTypes = {
  rootClassName: PropTypes.string,
}

export default SpiceFeature4
