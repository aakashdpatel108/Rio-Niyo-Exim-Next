import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FruitsFeature2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="fruits-feature-2-layout349 thq-section-padding">
        <div className="fruits-feature-2-max-width thq-section-max-width">
          <div className="fruits-feature-2-content1">
            <div className="fruits-feature-2-section-title">
              <span className="thq-body-small fruits-feature-2-text1">
                {props.feature1Slogan ?? (
                  <Fragment>
                    <span className="fruits-feature-2-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ROfftW'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="fruits-feature-2-content2">
                <h2 className="thq-heading-2 fruits-feature-2-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CXC32O'),
                    }}
                  ></span>
                </h2>
                <p className="thq-body-large fruits-feature-2-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GXk1eo'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </div>
          <div className="fruits-feature-2-image-container">
            <img
              alt="Mango"
              src="https://images.unsplash.com/photo-1519096845289-95806ee03a1a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxNYW5nb3xlbnwwfHx8fDE3NTk1OTQ4NDZ8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
              className="thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .fruits-feature-2-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-2-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .fruits-feature-2-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-2-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-2-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-2-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .fruits-feature-2-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .fruits-feature-2-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 344px) {
            .fruits-feature-2-text1 {
              font-size: 12px;
            }
            .fruits-feature-2-text2 {
              font-size: 20px;
            }
            .fruits-feature-2-text3 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

FruitsFeature2.defaultProps = {
  feature1Slogan: undefined,
}

FruitsFeature2.propTypes = {
  feature1Slogan: PropTypes.element,
}

export default FruitsFeature2
