import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SpiceFeature4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`spice-feature-4-layout301 thq-section-padding ${props.rootClassName} `}
      >
        <div className="spice-feature-4-max-width thq-section-max-width">
          <div className="spice-feature-4-row thq-grid-auto-300">
            <div className="spice-feature-4-feature1">
              <img
                alt="Poppy Seed (Khus Khus)"
                src="https://images.unsplash.com/photo-1612708015264-5f13c037c9cd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxQb3BweSUyMFNlZWQlMjB8ZW58MHx8fHwxNzYxNTgyMDIxfDA&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-4-content1 thq-flex-column">
                <div className="spice-feature-4-section-title1 thq-flex-column">
                  <h3 className="spice-feature-4-title1 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('title1_CPZCbi'),
                      }}
                    ></span>
                  </h3>
                  <span className="spice-feature-4-description1 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('description1_gXkBlB'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-4-action1 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-4-feature21">
              <img
                alt="Mustard Seed (Rai/Sarson)"
                src="https://images.unsplash.com/photo-1604768802835-899055f0e245?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fE11c3RhcmQlMjBTZWVkfGVufDB8fHx8MTc2MTU4MjIyMXww&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-4-content2 thq-flex-column">
                <div className="spice-feature-4-section-title2 thq-flex-column">
                  <strong className="spice-feature-4-title21 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('title2_ZbCGnw'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-4-description21 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('description2_cy2QBc'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-4-action2 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-4-feature22">
              <img
                alt="Sesame Seed (Til)"
                src="https://images.unsplash.com/photo-1628317321557-68729bee6644?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFNlc2FtZSUyMHNlZWR8ZW58MHx8fHwxNzYxNTgyMTA3fDA&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-4-content3 thq-flex-column">
                <div className="spice-feature-4-section-title3 thq-flex-column">
                  <strong className="spice-feature-4-title22 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('title2_vY2kEi'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-4-description22 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('description2_pKNdFa'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-4-action3 thq-flex-row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .spice-feature-4-layout301 {
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
          .spice-feature-4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .spice-feature-4-row {
            width: 100%;
          }
          .spice-feature-4-feature1 {
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
          .spice-feature-4-content1 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-section-title1 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-title1 {
            text-align: center;
          }
          .spice-feature-4-description1 {
            text-align: justify;
          }
          .spice-feature-4-action1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-4-feature21 {
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
          .spice-feature-4-content2 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-section-title2 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-title21 {
            text-align: center;
          }
          .spice-feature-4-description21 {
            text-align: justify;
          }
          .spice-feature-4-action2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-4-feature22 {
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
          .spice-feature-4-content3 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-section-title3 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-4-title22 {
            text-align: center;
          }
          .spice-feature-4-description22 {
            text-align: justify;
          }
          .spice-feature-4-action3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }

          @media (max-width: 991px) {
            .spice-feature-4-row {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .spice-feature-4-feature1 {
              width: 100%;
            }
            .spice-feature-4-feature21 {
              width: 100%;
            }
            .spice-feature-4-feature22 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .spice-feature-4-title1 {
              font-size: 18px;
            }
            .spice-feature-4-description1 {
              font-size: 12px;
            }
            .spice-feature-4-title21 {
              font-size: 18px;
            }
            .spice-feature-4-description21 {
              font-size: 12px;
            }
            .spice-feature-4-title22 {
              font-size: 18px;
            }
            .spice-feature-4-description22 {
              font-size: 12px;
            }
          }
          @media (max-width: 479px) {
            .spice-feature-4-max-width {
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
