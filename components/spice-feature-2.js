import React from 'react'

import { useTranslations } from 'next-intl'

const SpiceFeature2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="spice-feature-2-layout301 thq-section-padding">
        <div className="spice-feature-2-max-width thq-section-max-width">
          <div className="spice-feature-2-row thq-grid-auto-300">
            <div className="spice-feature-2-feature1">
              <img
                alt="Cloves (Laung)"
                src="https://images.unsplash.com/photo-1701191579013-7013090c370e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fENsb3Zlc3xlbnwwfHx8fDE3NjE1MTQwMzh8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-2-content1 thq-flex-column">
                <div className="spice-feature-2-section-title1 thq-flex-column">
                  <h3 className="spice-feature-2-title1 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_NUUXLF'),
                      }}
                    ></span>
                  </h3>
                  <span className="spice-feature-2-description1 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pjml7e'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-2-action1 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-2-feature2">
              <img
                alt="Cardamom (Elaichi)"
                src="https://images.unsplash.com/photo-1642255486695-a52c59347cfa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fENhcmRhbW9tfGVufDB8fHx8MTc2MTU3ODgzNnww&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-2-content2 thq-flex-column">
                <div className="spice-feature-2-section-title2 thq-flex-column">
                  <strong className="spice-feature-2-title2 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0Nl_H8'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-2-description2 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_OFrIj3'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-2-action2 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-2-feature3">
              <img
                alt="Bay Leaf (Tej Patta)"
                src="https://images.unsplash.com/photo-1547332226-395d746d139a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGJheSUyMGxlYWYlMjBzcGljZXxlbnwwfHx8fDE3NjE1Nzg5OTl8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-2-content3 thq-flex-column">
                <div className="spice-feature-2-section-title3 thq-flex-column">
                  <strong className="spice-feature-2-title3 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_uTJyUM'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-2-description3 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1xITcR'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-2-action3 thq-flex-row"></div>
              </div>
            </div>
            <div className="spice-feature-2-feature4">
              <img
                alt="Cinnamon (Dalchini)"
                src="https://images.unsplash.com/photo-1622798337764-259682f03741?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNpbm5hbW9ufGVufDB8fHx8MTc2MTU3OTE4Nnww&amp;ixlib=rb-4.1.0&amp;w=600"
                className="thq-img-ratio-4-3"
              />
              <div className="spice-feature-2-content4 thq-flex-column">
                <div className="spice-feature-2-section-title4 thq-flex-column">
                  <strong className="spice-feature-2-title4 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PH5VF6'),
                      }}
                    ></span>
                  </strong>
                  <span className="spice-feature-2-description4 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_c9Yv5y'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="spice-feature-2-action4 thq-flex-row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .spice-feature-2-layout301 {
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
          .spice-feature-2-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .spice-feature-2-row {
            width: 100%;
          }
          .spice-feature-2-feature1 {
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
          .spice-feature-2-content1 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-section-title1 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-title1 {
            text-align: center;
          }
          .spice-feature-2-description1 {
            text-align: justify;
          }
          .spice-feature-2-action1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-2-feature2 {
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
          .spice-feature-2-content2 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-section-title2 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-title2 {
            text-align: center;
          }
          .spice-feature-2-description2 {
            text-align: justify;
          }
          .spice-feature-2-action2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-2-feature3 {
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
          .spice-feature-2-content3 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-section-title3 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-title3 {
            text-align: center;
          }
          .spice-feature-2-description3 {
            text-align: justify;
          }
          .spice-feature-2-action3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .spice-feature-2-feature4 {
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
          .spice-feature-2-content4 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-section-title4 {
            align-self: stretch;
            align-items: center;
          }
          .spice-feature-2-title4 {
            text-align: center;
          }
          .spice-feature-2-description4 {
            text-align: justify;
          }
          .spice-feature-2-action4 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .spice-feature-2-row {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .spice-feature-2-feature1 {
              width: 100%;
            }
            .spice-feature-2-feature2 {
              width: 100%;
            }
            .spice-feature-2-feature3 {
              width: 100%;
            }
            .spice-feature-2-feature4 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .spice-feature-2-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default SpiceFeature2
