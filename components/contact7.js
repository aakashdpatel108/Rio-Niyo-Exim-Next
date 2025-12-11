import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact7 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact7-container1 thq-section-padding">
        <div className="contact7-thq-max-width-elm thq-section-max-width">
          <div className="contact7-thq-content-elm1 thq-flex-row">
            <div className="contact7-thq-content-elm2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <h2 className="contact7-thq-text-elm1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact7-text2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_GsByMT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="contact7-thq-text-elm2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact7-text1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ue8HWA'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact7-thq-content-elm3 thq-flex-row">
            <div className="contact7-container2">
              <iframe
                src="https://www.google.com/maps?q=40, galaxy royal bunglows, jahangirpura&amp;output=embed"
                address="40, galaxy royal bunglows, jahangirpura"
                className="contact7-thq-google-maps-elm"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact7-container1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact7-thq-max-width-elm {
            align-self: center;
          }
          .contact7-thq-content-elm1 {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .contact7-thq-content-elm2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact7-thq-text-elm1 {
            font-family: 'Taviraj';
          }
          .contact7-thq-text-elm2 {
            font-family: 'Open Sans';
          }
          .contact7-thq-content-elm3 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact7-container2 {
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column-reverse;
          }
          .contact7-thq-google-maps-elm {
            width: var(--dl-layout-size-maxwidth);
            height: 720px;
          }
          .contact7-text1 {
            display: inline-block;
          }
          .contact7-text2 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact7-thq-content-elm3 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact7-thq-content-elm1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contact7-thq-text-elm1 {
              font-size: 26px;
            }
            .contact7-thq-text-elm2 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Contact7.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

Contact7.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact7
