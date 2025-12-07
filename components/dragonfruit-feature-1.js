import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DragonfruitFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`dragonfruit-feature-1-layout300 thq-section-padding ${props.rootClassName} `}
      >
        <div className="dragonfruit-feature-1-max-width thq-section-max-width">
          <div className="dragonfruit-feature-1-section-title">
            <div className="dragonfruit-feature-1-content1">
              <h2 className="dragonfruit-feature-1-text1 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IMbLJU'),
                  }}
                ></span>
              </h2>
              <span className="dragonfruit-feature-1-text2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nugQa1'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="dragonfruit-feature-1-content2">
            <div className="dragonfruit-feature-1-row thq-flex-row">
              <div className="dragonfruit-feature-1-feature1">
                <img
                  alt="Guava"
                  src="https://images.unsplash.com/photo-1693653897084-7b9d9fb9bfd2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxkcmFnb24lMjBmcnVpdHxlbnwwfHx8fDE3NjUxMjc4MDR8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="dragonfruit-feature-1-content3">
                  <h3 className="dragonfruit-feature-1-feature1-title thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_s-2pBa'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small dragonfruit-feature-1-feature1-description">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Description_rr7mFT'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="dragonfruit-feature-1-feature2">
                <img
                  alt="Papaya"
                  src="https://images.unsplash.com/photo-1455753141069-7f1d73813b22?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxkcmFnb24lMjBmcnVpdHxlbnwwfHx8fDE3NjUxMjc4MDR8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="dragonfruit-feature-1-content4">
                  <h3 className="thq-heading-3 dragonfruit-feature-1-feature2-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_oe9Wx7'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small dragonfruit-feature-1-feature2-description">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Description__C09Yl'),
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
          .dragonfruit-feature-1-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dragonfruit-feature-1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .dragonfruit-feature-1-section-title {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dragonfruit-feature-1-content1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .dragonfruit-feature-1-text1 {
            text-align: center;
          }
          .dragonfruit-feature-1-text2 {
            text-align: center;
          }
          .dragonfruit-feature-1-content2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .dragonfruit-feature-1-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .dragonfruit-feature-1-feature1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dragonfruit-feature-1-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dragonfruit-feature-1-feature1-title {
            text-align: center;
          }
          .dragonfruit-feature-1-feature2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dragonfruit-feature-1-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .dragonfruit-feature-1-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .dragonfruit-feature-1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .dragonfruit-feature-1-section-title {
              width: auto;
            }
            .dragonfruit-feature-1-text1 {
              font-size: 25px;
              text-align: center;
            }
            .dragonfruit-feature-1-text2 {
              font-size: 12px;
            }
            .dragonfruit-feature-1-row {
              flex-direction: column;
            }
            .dragonfruit-feature-1-feature1-title {
              font-size: 18px;
            }
            .dragonfruit-feature-1-feature1-description {
              font-size: 12px;
            }
            .dragonfruit-feature-1-feature2 {
              width: auto;
            }
            .dragonfruit-feature-1-feature2-title {
              font-size: 18px;
            }
            .dragonfruit-feature-1-feature2-description {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .dragonfruit-feature-1-text1 {
              font-size: 18px;
            }
            .dragonfruit-feature-1-text2 {
              font-size: 12px;
            }
            .dragonfruit-feature-1-feature1-title {
              font-size: 18px;
            }
            .dragonfruit-feature-1-feature1-description {
              font-size: 12px;
            }
            .dragonfruit-feature-1-feature2-title {
              font-size: 18px;
            }
            .dragonfruit-feature-1-feature2-description {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

DragonfruitFeature1.defaultProps = {
  rootClassName: '',
}

DragonfruitFeature1.propTypes = {
  rootClassName: PropTypes.string,
}

export default DragonfruitFeature1
