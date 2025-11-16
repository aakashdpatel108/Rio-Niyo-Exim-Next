import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features11-layout349 thq-section-padding">
        <div className="thq-flex-column thq-section-max-width features11-max-width">
          <img
            alt={props.featureImageAlt}
            src={props.featureImageSrc}
            className="thq-img-ratio-4-3 features11-image"
          />
          <div className="thq-flex-column">
            <span className="features11-text1 thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features11-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hAQRlS'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="features11-text2 thq-heading-2">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features11-text7">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wg53_b'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features11-text3 thq-body-large">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features11-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_xVlHw9'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="thq-flex-row features11-actions">
              <button className="features11-button1 thq-button-filled">
                <span className="thq-body-small">
                  {props.mainAction ?? (
                    <Fragment>
                      <span className="features11-text8">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ajF_sg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="features11-button2 thq-button-outline">
                <span className="thq-body-small">
                  {props.secondaryAction ?? (
                    <Fragment>
                      <span className="features11-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_QoYlKZ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features11-layout349 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features11-text1 {
            align-self: center;
            text-align: center;
          }
          .features11-text2 {
            align-self: center;
            text-align: center;
          }
          .features11-text3 {
            align-self: center;
            text-align: center;
          }
          .features11-button1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features11-button2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features11-text4 {
            display: inline-block;
          }
          .features11-text5 {
            display: inline-block;
          }
          .features11-text6 {
            display: inline-block;
          }
          .features11-text7 {
            display: inline-block;
          }
          .features11-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features11-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .features11-max-width {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .features11-max-width {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .features11-actions {
              width: 100%;
              flex-direction: column;
            }
            .features11-button1 {
              width: 100%;
            }
            .features11-button2 {
              width: 100%;
            }
          }
          @media (max-width: 344px) {
            .features11-image {
              height: 322px;
            }
          }
        `}
      </style>
    </>
  )
}

Features11.defaultProps = {
  secondaryAction: undefined,
  feature1Slogan: undefined,
  feature1Description: undefined,
  featureImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  feature1Title: undefined,
  mainAction: undefined,
  featureImageAlt: 'Customizable Templates',
}

Features11.propTypes = {
  secondaryAction: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1Description: PropTypes.element,
  featureImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  mainAction: PropTypes.element,
  featureImageAlt: PropTypes.string,
}

export default Features11
