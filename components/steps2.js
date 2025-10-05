import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="steps2-container1 thq-section-padding">
        <div className="steps2-max-width thq-section-max-width">
          <div className="steps2-container2 thq-grid-2">
            <div className="steps2-section-header">
              <span className="steps2-text10">
                {props.text ?? (
                  <Fragment>
                    <span className="steps2-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Z0gWMm'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <p className="thq-body-large steps2-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ri3SQv'),
                  }}
                ></span>
              </p>
              <div className="steps2-actions">
                <button className="thq-button-filled thq-button-animated steps2-button">
                  <span className="thq-body-small steps2-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_d4qUKE'),
                      }}
                    ></span>
                  </span>
                </button>
              </div>
            </div>
            <div className="steps2-container3">
              <div className="steps2-container4 thq-card">
                <h2 className="steps2-text13 thq-heading-2">
                  {props.step1Title ?? (
                    <Fragment>
                      <span className="steps2-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_EvVumV'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text14 thq-body-small">
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="steps2-text31">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_mb8EhB'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text15 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9Q5Vnt'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="steps2-container5 thq-card">
                <h2 className="steps2-text16 thq-heading-2">
                  {props.step2Title ?? (
                    <Fragment>
                      <span className="steps2-text28">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_hMZyH4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text17 thq-body-small">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps2-text29">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_VG1gs2'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text18 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ssYsiq'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="steps2-container6 thq-card">
                <h2 className="steps2-text19 thq-heading-2">
                  {props.step3Title ?? (
                    <Fragment>
                      <span className="steps2-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_CfU2sq'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text20 thq-body-small">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps2-text32">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_E1mBf3'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text21 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Z9G3jl'),
                    }}
                  ></span>
                </label>
              </div>
              <div className="steps2-container7 thq-card">
                <h2 className="steps2-text22 thq-heading-2">
                  {props.step4Title ?? (
                    <Fragment>
                      <span className="steps2-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_6rVLi1'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text23 thq-body-small">
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="steps2-text30">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_TewuTW'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text24 thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gzi4Da'),
                    }}
                  ></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps2-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps2-max-width {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps2-container2 {
            align-items: start;
          }
          .steps2-section-header {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-text10 {
            color: rgb(65, 63, 63);
            width: 100%;
            height: auto;
            opacity: 0.3;
            font-size: 70px;
            align-self: center;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 900;
            padding-top: 0px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 0px;
          }
          .steps2-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text13 {
            font-size: 30px;
            text-align: left;
            font-family: 'inter';
          }
          .steps2-text14 {
            text-align: left;
            font-family: 'Inter';
          }
          .steps2-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 700;
          }
          .steps2-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text16 {
            text-align: left;
          }
          .steps2-text17 {
            text-align: left;
            font-family: 'Inter';
          }
          .steps2-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text19 {
            text-align: left;
            font-family: 'Inter';
          }
          .steps2-text20 {
            text-align: left;
          }
          .steps2-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text22 {
            font-family: 'Inter';
          }
          .steps2-text23 {
            text-align: left;
          }
          .steps2-text24 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-text25 {
            display: inline-block;
            font-family: 'Inter';
          }
          .steps2-text26 {
            display: inline-block;
          }
          .steps2-text27 {
            display: inline-block;
          }
          .steps2-text28 {
            display: inline-block;
          }
          .steps2-text29 {
            display: inline-block;
          }
          .steps2-text30 {
            display: inline-block;
          }
          .steps2-text31 {
            display: inline-block;
          }
          .steps2-text32 {
            display: inline-block;
          }
          .steps2-text33 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .steps2-text10 {
              border-width: 0px;
            }
          }
          @media (max-width: 991px) {
            .steps2-max-width {
              flex-direction: column;
            }
            .steps2-text10 {
              color: rgb(65, 63, 63);
              font-size: 55px;
              font-style: normal;
              font-family: Inter;
              font-weight: 900;
            }
            .steps2-text11 {
              font-size: 16px;
            }
          }
          @media (max-width: 767px) {
            .steps2-section-header {
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .steps2-text10 {
              color: rgb(65, 63, 63);
              font-size: 50px;
              font-style: normal;
              font-family: Inter;
              font-weight: 900;
              border-width: 0px;
            }
            .steps2-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps2-container4 {
              width: 100%;
            }
            .steps2-container5 {
              width: 100%;
            }
            .steps2-container6 {
              width: 100%;
            }
            .steps2-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps2-button {
              width: 100%;
            }
          }
          @media (max-width: 414px) {
            .steps2-text10 {
              color: rgb(65, 63, 63);
              font-size: 40px;
              font-style: normal;
              font-family: Inter;
              font-weight: 900;
            }
            .steps2-text11 {
              font-size: 15px;
            }
            .steps2-text12 {
              font-size: 15px;
            }
            .steps2-text13 {
              font-size: 20px;
              text-align: left;
            }
            .steps2-text14 {
              font-size: 15px;
              text-align: left;
            }
            .steps2-text16 {
              font-size: 20px;
              font-family: Inter;
            }
            .steps2-text17 {
              font-size: 15px;
              text-align: left;
            }
            .steps2-text19 {
              font-size: 20px;
              text-align: left;
              font-family: Inter;
            }
            .steps2-text20 {
              font-size: 15px;
              text-align: left;
            }
            .steps2-text22 {
              font-size: 20px;
              text-align: left;
              font-family: Inter;
            }
            .steps2-text23 {
              font-size: 15px;
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

Steps2.defaultProps = {
  step1Title: undefined,
  step4Title: undefined,
  step3Title: undefined,
  step2Title: undefined,
  step2Description: undefined,
  step4Description: undefined,
  step1Description: undefined,
  step3Description: undefined,
  text: undefined,
}

Steps2.propTypes = {
  step1Title: PropTypes.element,
  step4Title: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
  step4Description: PropTypes.element,
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  text: PropTypes.element,
}

export default Steps2
