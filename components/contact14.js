import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'
import CONSTANTS from '@/constants'

const phoneNumber = CONSTANTS.phone_number;
const message = CONSTANTS.message;

const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
  phoneNumber
)}&text=${encodeURIComponent(message)}`;

const Contact14 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`contact14-thq-contact20-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="contact14-thq-max-width-elm thq-section-max-width">
          <div className="contact14-thq-content-elm1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact14-thq-contact-info-elm1">
              <div className="contact14-thq-content-elm2">
                <h3 className="contact14-thq-text-elm1 thq-heading-3">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="contact14-text">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_v-bJAx'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-thq-text-elm2 thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qnL27v'),
                    }}
                  ></span>
                </p>
              </div>
              <span className="contact14-thq-email-elm1 thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zvVBGa'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="contact14-thq-content-elm3">
            <svg viewBox="0 0 1024 1024" className="contact14-icon3">
              <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
            </svg>
            <div className="contact14-thq-contact-info-elm2">
              <div className="contact14-thq-content-elm4">
                <h3 className="contact14-thq-text-elm3 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BDU7mv'),
                    }}
                  ></span>
                </h3>
                <p className="contact14-thq-text-elm4 thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1LNzAD'),
                    }}
                  ></span>
                </p>
              </div>
              <span className="contact14-thq-email-elm2 thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Klb-2-'),
                  }}
                  onClick={() => window.open(whatsappURL, '_blank', 'noopener,noreferrer')}
                  style={{ cursor: 'pointer', color: '#25D366', textDecoration: 'underline' }}
                ></span>
              </span>
            </div>
          </div>
          <div className="contact14-thq-content-elm5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact14-thq-contact-info-elm3">
              <div className="contact14-thq-content-elm6">
                <h3 className="contact14-thq-text-elm5 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3ElNLf'),
                    }}
                  ></span>
                </h3>
                <p className="contact14-thq-text-elm6 thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SNoXU_'),
                    }}
                  ></span>
                </p>
              </div>
              <span className="contact14-thq-phone-elm thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vEmFdW'),
                  }}
                ></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact14-thq-contact20-elm {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .contact14-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact14-thq-content-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-thq-contact-info-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-thq-content-elm2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-thq-text-elm1 {
            align-self: stretch;
            text-align: center;
            font-family: 'Taviraj';
          }
          .contact14-thq-text-elm2 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-thq-email-elm1 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-thq-content-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-icon3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .contact14-thq-contact-info-elm2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-thq-content-elm4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-thq-text-elm3 {
            align-self: stretch;
            text-align: center;
            font-family: 'Taviraj';
          }
          .contact14-thq-text-elm4 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-thq-email-elm2 {
            fill: rgb(37, 211, 102);
            color: rgb(37, 211, 102);
            cursor: pointer;
            text-align: center;
            font-family: 'Open Sans';
            text-decoration: underline;
          }
          .contact14-thq-content-elm5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-thq-contact-info-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-thq-content-elm6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-thq-text-elm5 {
            align-self: stretch;
            text-align: center;
            font-family: 'Taviraj';
          }
          .contact14-thq-text-elm6 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-thq-phone-elm {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-text {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .contact14-thq-max-width-elm {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact14.defaultProps = {
  heading1: undefined,
  rootClassName: '',
}

Contact14.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Contact14
