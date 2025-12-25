import React from 'react'

import { useTranslations } from 'next-intl'

const SpiceFeature2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="spice-feature-2-thq-layout301-elm thq-section-padding">
        <div className="spice-feature-2-thq-max-width-elm thq-section-max-width">
          <div className="spice-feature-2-thq-row-elm thq-grid-auto-300">
            <div className="spice-feature-2-thq-feature1-elm">
              <img
                alt="Cloves (Laung)"
                src="https://images.unsplash.com/photo-1701191579013-7013090c370e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fENsb3Zlc3xlbnwwfHx8fDE3NjE1MTQwMzh8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-2-thq-content-elm1 thq-flex-column">
                <div className="spice-feature-2-thq-section-title-elm1 thq-flex-column">
                  <h3 className="spice-feature-2-thq-title1-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_NUUXLF'),
                      }}
                    ></span>
                  </h3>
                  <span className="spice-feature-2-thq-description1-elm thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pjml7e'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-2-thq-action-elm1 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-2-thq-feature2-elm">
              <img
                alt="Cardamom (Elaichi)"
                src="https://images.unsplash.com/photo-1642255486695-a52c59347cfa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fENhcmRhbW9tfGVufDB8fHx8MTc2MTU3ODgzNnww&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-2-thq-content-elm2 thq-flex-column">
                <div className="spice-feature-2-thq-section-title-elm2 thq-flex-column">
                  <strong className="spice-feature-2-thq-title2-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0Nl_H8'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-2-thq-description2-elm thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_OFrIj3'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-2-thq-action-elm2 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-2-thq-feature3-elm">
              <img
                alt="Bay Leaf (Tej Patta)"
                src="/Spices/bay%20leaf-600w.jpg"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-2-thq-content-elm3 thq-flex-column">
                <div className="spice-feature-2-thq-section-title-elm3 thq-flex-column">
                  <strong className="spice-feature-2-thq-title3-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_uTJyUM'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-2-thq-description3-elm thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1xITcR'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-2-thq-action-elm3 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-2-thq-feature4-elm">
              <img
                alt="Cinnamon (Dalchini)"
                src="https://images.unsplash.com/photo-1622798337764-259682f03741?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNpbm5hbW9ufGVufDB8fHx8MTc2MTU3OTE4Nnww&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-2-thq-content-elm4 thq-flex-column">
                <div className="spice-feature-2-thq-section-title-elm4 thq-flex-column">
                  <strong className="spice-feature-2-thq-title4-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PH5VF6'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-2-thq-description4-elm thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_c9Yv5y'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-2-thq-action-elm4 thq-flex-row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .spice-feature-2-thq-layout301-elm {
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
          .spice-feature-2-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .spice-feature-2-thq-row-elm {
            width: 100%;
          }
          .spice-feature-2-thq-feature1-elm {
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
          .spice-feature-2-thq-content-elm1 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-thq-section-title-elm1 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-thq-title1-elm {
            text-align: center;
          }
          .spice-feature-2-thq-description1-elm {
            text-align: justify;
          }
          .spice-feature-2-thq-action-elm1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-2-thq-feature2-elm {
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
          .spice-feature-2-thq-content-elm2 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-thq-section-title-elm2 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-thq-title2-elm {
            text-align: center;
          }
          .spice-feature-2-thq-description2-elm {
            text-align: justify;
          }
          .spice-feature-2-thq-action-elm2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-2-thq-feature3-elm {
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
          .spice-feature-2-thq-content-elm3 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-thq-section-title-elm3 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-thq-title3-elm {
            text-align: center;
          }
          .spice-feature-2-thq-description3-elm {
            text-align: justify;
          }
          .spice-feature-2-thq-action-elm3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-2-thq-feature4-elm {
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
          .spice-feature-2-thq-content-elm4 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-thq-section-title-elm4 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-thq-title4-elm {
            text-align: center;
          }
          .spice-feature-2-thq-description4-elm {
            text-align: justify;
          }
          .spice-feature-2-thq-action-elm4 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .spice-feature-2-thq-row-elm {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .spice-feature-2-thq-feature1-elm {
              width: 100%;
            }
            .spice-feature-2-thq-feature2-elm {
              width: 100%;
            }
            .spice-feature-2-thq-feature3-elm {
              width: 100%;
            }
            .spice-feature-2-thq-feature4-elm {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .spice-feature-2-thq-title1-elm {
              font-size: 18px;
            }
            .spice-feature-2-thq-description1-elm {
              font-size: 12px;
            }
            .spice-feature-2-thq-title2-elm {
              font-size: 18px;
            }
            .spice-feature-2-thq-description2-elm {
              font-size: 12px;
            }
            .spice-feature-2-thq-title3-elm {
              font-size: 18px;
            }
            .spice-feature-2-thq-description3-elm {
              font-size: 12px;
            }
            .spice-feature-2-thq-title4-elm {
              font-size: 18px;
            }
            .spice-feature-2-thq-description4-elm {
              font-size: 12px;
            }
          }
          @media (max-width: 479px) {
            .spice-feature-2-thq-max-width-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default SpiceFeature2
