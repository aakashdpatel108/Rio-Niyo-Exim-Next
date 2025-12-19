import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DragonfruitFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`dragonfruit-feature-1-thq-layout300-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="dragonfruit-feature-1-thq-max-width-elm thq-section-max-width">
          <div className="dragonfruit-feature-1-thq-section-title-elm">
            <div className="dragonfruit-feature-1-thq-content-elm1">
              <h2 className="dragonfruit-feature-1-thq-text-elm1 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IMbLJU'),
                  }}
                ></span>
              </h2>
              <span className="dragonfruit-feature-1-thq-text-elm2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nugQa1'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="dragonfruit-feature-1-thq-content-elm2">
            <div className="dragonfruit-feature-1-thq-row-elm thq-flex-row">
              <div className="dragonfruit-feature-1-thq-feature1-elm">
                <img
                  alt="Guava"
                  src="https://images.unsplash.com/photo-1693653897084-7b9d9fb9bfd2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxkcmFnb24lMjBmcnVpdHxlbnwwfHx8fDE3NjUxMjc4MDR8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
                <div className="dragonfruit-feature-1-thq-content-elm3">
                  <h3 className="dragonfruit-feature-1-thq-feature1-title-elm thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_s-2pBa'),
                      }}
                    ></span>
                  </h3>
                  <span className="thq-body-small dragonfruit-feature-1-thq-feature1-description-elm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Description_rr7mFT'),
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
          .dragonfruit-feature-1-thq-layout300-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dragonfruit-feature-1-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .dragonfruit-feature-1-thq-section-title-elm {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dragonfruit-feature-1-thq-content-elm1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .dragonfruit-feature-1-thq-text-elm1 {
            text-align: center;
          }
          .dragonfruit-feature-1-thq-text-elm2 {
            text-align: center;
          }
          .dragonfruit-feature-1-thq-content-elm2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .dragonfruit-feature-1-thq-row-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .dragonfruit-feature-1-thq-feature1-elm {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dragonfruit-feature-1-thq-content-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dragonfruit-feature-1-thq-feature1-title-elm {
            text-align: center;
          }

          @media (max-width: 991px) {
            .dragonfruit-feature-1-thq-section-title-elm {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .dragonfruit-feature-1-thq-max-width-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .dragonfruit-feature-1-thq-section-title-elm {
              width: auto;
            }
            .dragonfruit-feature-1-thq-text-elm1 {
              font-size: 25px;
              text-align: center;
            }
            .dragonfruit-feature-1-thq-text-elm2 {
              font-size: 12px;
            }
            .dragonfruit-feature-1-thq-row-elm {
              flex-direction: column;
            }
            .dragonfruit-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .dragonfruit-feature-1-thq-feature1-description-elm {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .dragonfruit-feature-1-thq-text-elm1 {
              font-size: 18px;
            }
            .dragonfruit-feature-1-thq-text-elm2 {
              font-size: 12px;
            }
            .dragonfruit-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .dragonfruit-feature-1-thq-feature1-description-elm {
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
