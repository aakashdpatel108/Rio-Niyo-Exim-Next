import React from 'react'

import { useTranslations } from 'next-intl'
import MyCustomContactUsComp from "./MyCustomContactUsComp"

const ContactForm3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-form3-thq-contact9-elm thq-section-padding">
        <div className="thq-flex-row thq-section-max-width contact-form3-thq-max-width-elm">
          <img
            alt="contact us"
            src="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzYxMzE5OTc3fDA&amp;ixlib=rb-4.1.0&amp;w=700"
            className="contact-form3-thq-image1-elm thq-img-ratio-4-3"
          />
          <div className="contact-form3-thq-content-elm1 thq-flex-column">
            <div className="contact-form3-thq-section-title-elm thq-card">
              <div className="contact-form3-thq-content-elm2">
                <h2 className="contact-form3-thq-text-elm1 thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mHmA2w'),
                    }}
                  ></span>
                </h2>
                <span className="contact-form3-thq-text-elm2 thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_M-3MpL'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            {/* <form className="thq-card">
              <div className="contact-form3-input1">
                <label
                  htmlFor="contact-form-3-name"
                  className="contact-form3-thq-text-elm3 thq-body-small"
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
                  name="contact-form-3-name"
                  placeholder="Name"
                  data-form-field-id="contact-form-3-name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-thq-input-elm2">
                <label
                  htmlFor="contact-form-3-email"
                  className="contact-form3-thq-text-elm4 thq-body-small"
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
                  name="phone number"
                  required="true"
                  placeholder="Email"
                  data-form-field-id="contact-form-3-email"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-thq-input-elm3">
                <label
                  htmlFor="contact-form-3-email"
                  className="contact-form3-thq-text-elm5 thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xFN23h'),
                    }}
                  ></span>
                </label>
                <input
                  type="text"
                  id="contact-form-3-email"
                  name="Phone Number"
                  required="true"
                  placeholder="Phone Number"
                  data-form-field-id="contact-form-3-email"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-container">
                <label
                  htmlFor="contact-form-3-message"
                  className="contact-form3-thq-text-elm6 thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wZqqYD'),
                    }}
                  ></span>
                </label>
                <textarea
                  id="contact-form-3-message"
                  name="contact-form-3-message"
                  rows="3"
                  placeholder="Enter your message"
                  data-form-field-id="contact-form-3-message"
                  className="thq-input"
                ></textarea>
              </div>
              <button
                name="button kqkhww100r"
                type="submit"
                data-form-field-id="button kqkhww100r"
                className="contact-form3-thq-button-elm thq-button-filled"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1tDcBa'),
                    }}
                  ></span>
                </span>
              </button>
            </form> */}
            <MyCustomContactUsComp />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form3-thq-contact9-elm {
            position: relative;
            align-items: center;
          }
          .contact-form3-thq-image1-elm {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            max-width: 640px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
          }
          .contact-form3-thq-content-elm1 {
            gap: 0;
            flex: 1;
            align-items: stretch;
          }
          .contact-form3-thq-section-title-elm {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-thq-content-elm2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-thq-text-elm1 {
            font-style: normal;
            font-family: 'Taviraj';
            font-weight: 600;
          }
          .contact-form3-thq-text-elm2 {
            font-family: 'Open Sans';
          }
          .contact-form3-thq-input-elm1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-thq-text-elm3 {
            font-family: 'Inter';
          }
          .contact-form3-thq-input-elm2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-thq-text-elm4 {
            font-family: 'Inter';
          }
          .contact-form3-thq-input-elm3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-thq-text-elm5 {
            font-family: 'Inter';
          }
          .contact-form3-container {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form3-thq-text-elm6 {
            font-family: 'Inter';
          }
          .contact-form3-thq-button-elm {
            align-self: flex-start;
          }
          @media (max-width: 991px) {
            .contact-form3-thq-max-width-elm {
              flex-direction: column;
            }
            .contact-form3-thq-content-elm1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-form3-thq-image1-elm {
              width: 100%;
            }
            .contact-form3-thq-text-elm1 {
              font-size: 25px;
            }
            .contact-form3-thq-text-elm2 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContactForm3
