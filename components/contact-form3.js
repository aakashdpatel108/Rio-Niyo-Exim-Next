import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactForm3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-form3-contact9 thq-section-padding">
        <div className="thq-flex-row thq-section-max-width contact-form3-max-width">
          <img
            src="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzYxMzE5OTc3fDA&amp;ixlib=rb-4.1.0&amp;w=700"
            alt="contact us"
            className="contact-form3-image1 thq-img-ratio-4-3"
          />
          <div className="contact-form3-content1 thq-flex-column">
            <div className="contact-form3-section-title thq-card">
              <span className="contact-form3-text10 thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="contact-form3-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gU2CLa'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="contact-form3-content2">
                <h2 className="contact-form3-text11 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="contact-form3-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_A6-avC'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="contact-form3-text12 thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="contact-form3-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_L1syi9'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <form className="thq-card">
              <div className="contact-form3-input1">
                <label
                  htmlFor="contact-form-3-name"
                  className="contact-form3-text13 thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_u3ursB'),
                    }}
                  ></span>
                </label>
                <input
                  type="text"
                  id="contact-form-3-name"
                  placeholder="Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-input2">
                <label
                  htmlFor="contact-form-3-email"
                  className="contact-form3-text14 thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XckA12'),
                    }}
                  ></span>
                </label>
                <input
                  type="email"
                  id="contact-form-3-email"
                  required="true"
                  placeholder="Email"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-container">
                <label
                  htmlFor="contact-form-3-message"
                  className="contact-form3-text15 thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wZqqYD'),
                    }}
                  ></span>
                </label>
                <textarea
                  id="contact-form-3-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="thq-input"
                ></textarea>
              </div>
              <div className="contact-form3-checkbox1">
                <input
                  type="checkbox"
                  id="contact-form-3-check"
                  checked="true"
                  required="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-3-check"
                  className="contact-form3-text16 thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HsWI4H'),
                    }}
                  ></span>
                </label>
              </div>
              <button
                type="submit"
                className="contact-form3-button thq-button-filled"
              >
                <span className="thq-body-small">
                  {props.action ?? (
                    <Fragment>
                      <span className="contact-form3-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Jxa1gl'),
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
      </div>
      <style jsx>
        {`
          .contact-form3-contact9 {
            position: relative;
            align-items: center;
          }
          .contact-form3-image1 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            max-width: 640px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
          }
          .contact-form3-content1 {
            gap: 0;
            flex: 1;
            align-items: stretch;
          }
          .contact-form3-section-title {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-text10 {
            font-family: 'Inter';
          }
          .contact-form3-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-text11 {
            font-style: normal;
            font-family: 'Inter';
            font-weight: 600;
          }
          .contact-form3-text12 {
            font-family: 'Inter';
          }
          .contact-form3-input1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-text13 {
            font-family: 'Inter';
          }
          .contact-form3-input2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-text14 {
            font-family: 'Inter';
          }
          .contact-form3-container {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form3-text15 {
            font-family: 'Inter';
          }
          .contact-form3-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .contact-form3-text16 {
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .contact-form3-button {
            align-self: flex-start;
          }
          .contact-form3-text17 {
            display: inline-block;
          }
          .contact-form3-text18 {
            display: inline-block;
          }
          .contact-form3-text19 {
            display: inline-block;
          }
          .contact-form3-text20 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-form3-max-width {
              flex-direction: column;
            }
            .contact-form3-content1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-form3-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm3.defaultProps = {
  content1: undefined,
  heading1: undefined,
  content2: undefined,
  action: undefined,
}

ContactForm3.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  action: PropTypes.element,
}

export default ContactForm3
