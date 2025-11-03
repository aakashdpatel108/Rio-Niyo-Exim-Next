import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="banner1-container1 thq-section-padding">
        <div className="banner1-max-width thq-section-max-width">
          <div className="banner1-container2">
            <h2 className="banner1-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner1-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_WqqM1b'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="banner1-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner1-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_3fAxC3'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="banner1-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ZxnHnq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner1-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner1-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-title {
            text-align: center;
          }
          .banner1-text1 {
            text-align: center;
          }
          .banner1-text3 {
            display: inline-block;
          }
          .banner1-text4 {
            display: inline-block;
          }
          .banner1-text5 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner1.defaultProps = {
  action1: undefined,
  content1: undefined,
  heading1: undefined,
}

Banner1.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Banner1
