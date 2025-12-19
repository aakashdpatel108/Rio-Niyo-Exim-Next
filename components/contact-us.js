import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'
import MyCustomContactUsComp from "./MyCustomContactUsComp"

const ContactUs = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-us-thq-contact5-elm thq-section-padding">
        <div className="thq-flex-row thq-section-max-width contact-us-thq-max-width-elm">
          <div className="thq-flex-column contact-us-thq-content-elm">
            <div className="contact-us-thq-section-title-elm">
              <h2 className="thq-heading-2 contact-us-thq-text-elm1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_davkC0'),
                  }}
                ></span>
              </h2>
              <span className="thq-body-large contact-us-thq-text-elm2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9Doarm'),
                  }}
                ></span>
              </span>
            </div>
            <div className="contact-us-thq-contact-info-elm thq-flex-column">
              <div className="contact-us-thq-row-elm1 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="thq-body-small contact-us-thq-email-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_B_84ua'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="contact-us-thq-row-elm2 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <span className="thq-body-small contact-us-thq-phone-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LQzdvw'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="contact-us-thq-row-elm3 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="thq-body-small contact-us-thq-address-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HqtsM8'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
          {/* <form className="contact-us-form"  onSubmit={handleSubmit}>
            <div className="contact-us-input1">
              <label
                htmlFor="contact-form-2-name"
                className="thq-body-small contact-us-thq-text-elm3"
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
                name="contact-form-2-name"
                placeholder="Name"
                data-form-field-id="contact-form-2-name"
                className="contact-us-text-input1 thq-input"
                 value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contact-us-thq-input-elm2">
              <label
                htmlFor="contact-form-2-email"
                className="thq-body-small contact-us-thq-text-elm4"
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
                name="phone number"
                required="true"
                placeholder="Email"
                data-form-field-id="contact-form-2-email"
                className="contact-us-text-input2 thq-input"
                value={email}
  onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact-us-thq-input-elm3">
              <label
                htmlFor="contact-form-2-email"
                className="thq-body-small contact-us-thq-text-elm5"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9Uv-3P'),
                  }}
                ></span>
              </label>
              <input
                type="text"
                id="contact-form-2-email"
                name="contact-form-2-email"
                enctype="Phone Number"
                required="true"
                placeholder="Phone Number"
                data-form-field-id="contact-form-2-email"
                className="contact-us-thq-text-input-elm3 thq-input"
              />
            </div>
            <div className="contact-us-thq-input-elm4">
              <label
                htmlFor="contact-form-2-message"
                className="thq-body-small contact-us-thq-text-elm6"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T9R41w'),
                  }}
                ></span>
              </label>
              <textarea
                id="contact-form-2-message"
                name="contact-form-2-message"
                rows="3"
                placeholder="Enter your message"
                data-form-field-id="contact-form-2-message"
                className="contact-us-textarea thq-input"
                value={message}
  onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              name="button zi77ookwrp"
              type="submit"
              data-form-field-id="button zi77ookwrp"
              className="thq-button-filled contact-us-thq-button-elm"
            >
              <span className="thq-body-small contact-us-thq-action1-elm">
                {props.action ?? (
                  <Fragment>
                    <span className="contact-us-text">
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
            {loading && <p>Sending...</p>}
{status && <p style={{ color: status.type === 'error' ? 'red' : 'green' }}>{status.text}</p>}
          </form> */}
          <MyCustomContactUsComp />
        </div>
      </div>
      <style jsx>
        {`
          .contact-us-thq-contact5-elm {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-us-thq-section-title-elm {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-thq-contact-info-elm {
            gap: 16px;
            display: flex;
            padding: 8px 0;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-thq-row-elm1 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-us-thq-row-elm2 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-us-thq-row-elm3 {
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
          .contact-us-thq-input-elm1 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-thq-text-input-elm1 {
            width: 100%;
          }
          .contact-us-thq-input-elm2 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-thq-text-input-elm2 {
            width: 100%;
          }
          .contact-us-thq-input-elm3 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-thq-text-input-elm3 {
            width: 100%;
          }
          .contact-us-thq-input-elm4 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-textarea {
            width: 100%;
          }
          .contact-us-text {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-us-thq-max-width-elm {
              flex-direction: column;
            }
            .contact-us-thq-content-elm {
              width: 100%;
            }
            .contact-us-form {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-us-thq-text-elm1 {
              font-size: 20px;
            }
            .contact-us-thq-text-elm2 {
              font-size: 15px;
            }
            .contact-us-thq-email-elm {
              font-size: 15px;
            }
            .contact-us-thq-phone-elm {
              font-size: 15px;
            }
            .contact-us-thq-address-elm {
              font-size: 15px;
            }
            .contact-us-thq-text-elm3 {
              font-size: 15px;
            }
            .contact-us-thq-text-elm4 {
              font-size: 15px;
            }
            .contact-us-thq-text-elm5 {
              font-size: 15px;
            }
            .contact-us-thq-text-elm6 {
              font-size: 15px;
            }
            .contact-us-thq-action1-elm {
              font-size: 15px;
            }
          }
          @media (max-width: 344px) {
            .contact-us-thq-text-elm1 {
              font-size: 20px;
              font-family: Taviraj;
            }
            .contact-us-thq-text-elm2 {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-thq-email-elm {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-thq-phone-elm {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-thq-address-elm {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-thq-text-elm3 {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-thq-text-elm4 {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-thq-text-elm5 {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-thq-text-elm6 {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-thq-button-elm {
              width: 81px;
            }
            .contact-us-thq-action1-elm {
              font-size: 15px;
              font-family: Inter;
            }
            .contact-us-text {
              font-size: 12px;
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
