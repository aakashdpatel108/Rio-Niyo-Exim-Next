import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact14 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`contact14-contact20 thq-section-padding ${props.rootClassName} `}
      >
        <div className="contact14-max-width thq-section-max-width">
          <div className="contact14-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact14-contact-info1">
              <div className="contact14-content2">
                <h3 className="contact14-text1 thq-heading-3">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="contact14-text7">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_v-bJAx'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-text2 thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qnL27v'),
                    }}
                  ></span>
                </p>
              </div>
              <span className="contact14-email1 thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zvVBGa'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="contact14-content3">
            <svg viewBox="0 0 1024 1024" className="contact14-icon3">
              <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
            </svg>
            <div className="contact14-contact-info2">
              <div className="contact14-content4">
                <h3 className="contact14-text3 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BDU7mv'),
                    }}
                  ></span>
                </h3>
                <p className="contact14-text4 thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1LNzAD'),
                    }}
                  ></span>
                </p>
              </div>
              <span className="contact14-email2 thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Klb-2-'),
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="contact14-content5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact14-contact-info3">
              <div className="contact14-content6">
                <h3 className="contact14-text5 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3ElNLf'),
                    }}
                  ></span>
                </h3>
                <p className="contact14-text6 thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SNoXU_'),
                    }}
                  ></span>
                </p>
              </div>
              <span className="contact14-phone thq-body-small">
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
          .contact14-contact20 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .contact14-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact14-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-contact-info1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text1 {
            align-self: stretch;
            text-align: center;
            font-family: 'Taviraj';
          }
          .contact14-text2 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-email1 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-content3 {
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
          .contact14-contact-info2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text3 {
            align-self: stretch;
            text-align: center;
            font-family: 'Taviraj';
          }
          .contact14-text4 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-email2 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-content5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-contact-info3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text5 {
            align-self: stretch;
            text-align: center;
            font-family: 'Taviraj';
          }
          .contact14-text6 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-phone {
            text-align: center;
            font-family: 'Open Sans';
          }
          .contact14-text7 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .contact14-max-width {
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
