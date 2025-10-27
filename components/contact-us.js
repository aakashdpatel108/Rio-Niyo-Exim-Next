import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactUs = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-us-contact5 thq-section-padding">
        <div className="thq-flex-row thq-section-max-width contact-us-max-width">
          <div className="thq-flex-column contact-us-content">
            <div className="contact-us-section-title">
              <h2 className="thq-heading-2 contact-us-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_davkC0'),
                  }}
                ></span>
              </h2>
              <span className="thq-body-large contact-us-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9Doarm'),
                  }}
                ></span>
              </span>
            </div>
            <div className="contact-us-contact-info thq-flex-column">
              <div className="contact-us-row1 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="thq-body-small contact-us-email">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_B_84ua'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="contact-us-row2 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <span className="thq-body-small contact-us-phone">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LQzdvw'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="contact-us-row3 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="thq-body-small contact-us-address">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HqtsM8'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
          <form className="contact-us-form">
            <div className="contact-us-input1">
              <label
                htmlFor="contact-form-2-name"
                className="thq-body-small contact-us-text3"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oFMJQG'),
                  }}
                ></span>
              </label>
              <input
                type="text"
                id="contact-form-2-name"
                placeholder="Name"
                className="contact-us-text-input1 thq-input"
              />
            </div>
            <div className="contact-us-input2">
              <label
                htmlFor="contact-form-2-email"
                className="thq-body-small contact-us-text4"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IYfRJb'),
                  }}
                ></span>
              </label>
              <input
                type="email"
                id="contact-form-2-email"
                required="true"
                placeholder="Email"
                className="contact-us-text-input2 thq-input"
              />
            </div>
            <div className="contact-us-input3">
              <label
                htmlFor="contact-form-2-message"
                className="thq-body-small contact-us-text5"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T9R41w'),
                  }}
                ></span>
              </label>
              <textarea
                id="contact-form-2-message"
                rows="3"
                placeholder="Enter your message"
                className="contact-us-textarea thq-input"
              ></textarea>
            </div>
            <button type="submit" className="thq-button-filled">
              <span className="thq-body-small contact-us-action1">
                {props.action ?? (
                  <Fragment>
                    <span className="contact-us-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Palvmu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .contact-us-contact5 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-us-section-title {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-contact-info {
            gap: 16px;
            display: flex;
            padding: 8px 0;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-row1 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-us-row2 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-us-row3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .contact-us-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 1269px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-us-input1 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-text-input1 {
            width: 100%;
          }
          .contact-us-input2 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-text-input2 {
            width: 100%;
          }
          .contact-us-input3 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-textarea {
            width: 100%;
          }
          .contact-us-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-us-max-width {
              flex-direction: column;
            }
            .contact-us-content {
              width: 100%;
            }
            .contact-us-form {
              width: 100%;
            }
          }
          @media (max-width: 414px) {
            .contact-us-text1 {
              font-size: 20px;
              font-family: Inter;
            }
            .contact-us-text2 {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-email {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-phone {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-address {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-text3 {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-text4 {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-text5 {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-action1 {
              font-size: 15px;
              font-family: Inter;
            }
          }
        `}
      </style>
    </>
  )
}

ContactUs.defaultProps = {
  action: undefined,
}

ContactUs.propTypes = {
  action: PropTypes.element,
}

export default ContactUs
