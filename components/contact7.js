import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact7 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact7-container1 thq-section-padding">
        <div className="contact7-max-width thq-section-max-width">
          <div className="contact7-content1 thq-flex-row">
            <div className="contact7-content2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <h2 className="contact7-text1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact7-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_GsByMT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="contact7-text2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact7-text3">
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
          <div className="contact7-content3 thq-flex-row">
            <div className="contact7-container2">
              <iframe
                src="https://www.google.com/maps?q=40, galaxy royal bunglows, jahangirpura&amp;output=embed"
                address="40, galaxy royal bunglows, jahangirpura"
                className="contact7-google-maps"
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
          .contact7-max-width {
            align-self: center;
          }
          .contact7-content1 {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .contact7-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact7-text1 {
            font-family: 'Inter';
          }
          .contact7-text2 {
            font-family: 'Inter';
          }
          .contact7-content3 {
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
          .contact7-google-maps {
            width: var(--dl-layout-size-maxwidth);
            height: 720px;
          }
          .contact7-text3 {
            display: inline-block;
          }
          .contact7-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact7-content3 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact7-content1 {
              gap: var(--dl-layout-space-oneandhalfunits);
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
