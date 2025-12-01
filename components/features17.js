import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features17 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features17-layout349 thq-section-padding">
        <div className="features17-max-width thq-section-max-width">
          <div className="features17-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-16-9"
            />
          </div>
          <div className="features17-content1">
            <div className="features17-section-title">
              <span className="thq-body-small">
                {props.feature1Slogan ?? (
                  <Fragment>
                    <span className="features17-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_pemloT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="features17-content2">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features17-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_OYpkcJ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="thq-body-large">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features17-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_mny1bl'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features17-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features17-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features17-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .features17-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features17-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features17-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features17-text4 {
            display: inline-block;
          }
          .features17-text5 {
            display: inline-block;
          }
          .features17-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features17-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features17.defaultProps = {
  feature1Description: undefined,
  feature1Title: undefined,
  feature1ImageAlt: 'Advanced Security Icon',
  feature1Slogan: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
}

Features17.propTypes = {
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Slogan: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
}

export default Features17
