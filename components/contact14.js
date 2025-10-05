import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact14 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact14-contact20 thq-section-padding">
        <div className="contact14-max-width thq-section-max-width">
          <div className="contact14-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact14-contact-info1">
              <div className="contact14-content2">
                <h3 className="contact14-text10 thq-heading-3">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="contact14-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_v-bJAx'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-text11 thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="contact14-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_gjVbhO'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact14-email1 thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact14-text24">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nGHKMm'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact14-content3">
            <svg viewBox="0 0 1024 1024" className="contact14-icon3">
              <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
            </svg>
            <div className="contact14-contact-info2">
              <div className="contact14-content4">
                <h3 className="contact14-text12 thq-heading-3">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="contact14-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Qj15fP'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-text13 thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="contact14-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_vbj-az'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact14-email2 thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="contact14-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_MCkrdX'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact14-content5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact14-contact-info3">
              <div className="contact14-content6">
                <h3 className="contact14-text14 thq-heading-3">
                  {props.heading3 ?? (
                    <Fragment>
                      <span className="contact14-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_A6Xr4M'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-text15 thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact14-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_lvFy_i'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact14-phone thq-body-small">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact14-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_lrum8y'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
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
          .contact14-text10 {
            align-self: stretch;
            text-align: center;
            font-family: 'Inter';
          }
          .contact14-text11 {
            text-align: center;
            font-family: 'Inter';
          }
          .contact14-email1 {
            text-align: center;
            font-family: 'Inter';
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
          .contact14-text12 {
            align-self: stretch;
            text-align: center;
            font-family: 'Inter';
          }
          .contact14-text13 {
            text-align: center;
            font-family: 'Inter';
          }
          .contact14-email2 {
            text-align: center;
            font-family: 'Inter';
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
          .contact14-text14 {
            align-self: stretch;
            text-align: center;
            font-family: 'Inter';
          }
          .contact14-text15 {
            text-align: center;
            font-family: 'Inter';
          }
          .contact14-phone {
            text-align: center;
            font-family: 'Inter';
          }
          .contact14-text16 {
            display: inline-block;
          }
          .contact14-text17 {
            display: inline-block;
          }
          .contact14-text18 {
            display: inline-block;
          }
          .contact14-text19 {
            display: inline-block;
          }
          .contact14-text20 {
            display: inline-block;
          }
          .contact14-text21 {
            display: inline-block;
          }
          .contact14-text22 {
            display: inline-block;
          }
          .contact14-text23 {
            display: inline-block;
          }
          .contact14-text24 {
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
  content3: undefined,
  content1: undefined,
  phone1: undefined,
  content2: undefined,
  heading1: undefined,
  heading3: undefined,
  link1: undefined,
  heading2: undefined,
  email1: undefined,
}

Contact14.propTypes = {
  content3: PropTypes.element,
  content1: PropTypes.element,
  phone1: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  heading3: PropTypes.element,
  link1: PropTypes.element,
  heading2: PropTypes.element,
  email1: PropTypes.element,
}

export default Contact14
