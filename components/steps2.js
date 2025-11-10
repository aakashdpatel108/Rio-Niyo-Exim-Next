import React, { Fragment } from 'react'
import Link from 'next/link'

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
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uDyrR_'),
                  }}
                ></span>
              </span>
              <p className="steps2-text11 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ri3SQv'),
                  }}
                ></span>
              </p>
              <div className="steps2-actions">
                <Link href="/about-us">
                  <a className="steps2-link thq-button-filled thq-button-animated">
                    <span className="thq-body-small steps2-text12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_d4qUKE'),
                        }}
                      ></span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="steps2-container3">
              <div className="steps2-container4 thq-card">
                <h2 className="steps2-text13 thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9Z2lf5'),
                    }}
                  ></span>
                </h2>
                <span className="steps2-text14 thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zde29O'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="steps2-container5 thq-card">
                <h2 className="steps2-heading thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Q1-6zR'),
                    }}
                  ></span>
                </h2>
                <span className="steps2-text15 thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_o-ziXF'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="steps2-container6 thq-card">
                <h2 className="steps2-text16 thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UmhFnz'),
                    }}
                  ></span>
                </h2>
                <span className="steps2-text17 thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fkNTLU'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="steps2-container7 thq-card">
                <h2 className="steps2-text18 thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Cj29TQ'),
                    }}
                  ></span>
                </h2>
                <span className="steps2-text19 thq-body-small">
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="steps2-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_TewuTW'),
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
          .steps2-text11 {
            font-family: 'Open Sans';
          }
          .steps2-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-link {
            text-decoration: none;
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
            font-size: 35px;
            text-align: left;
            font-family: 'Taviraj';
          }
          .steps2-text14 {
            text-align: left;
            font-family: 'Open Sans';
          }
          .steps2-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-heading {
            text-align: left;
            font-family: 'Taviraj';
          }
          .steps2-text15 {
            text-align: left;
            font-family: 'Open Sans';
          }
          .steps2-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text16 {
            text-align: left;
            font-family: 'Taviraj';
          }
          .steps2-text17 {
            text-align: left;
            font-family: 'Open Sans';
          }
          .steps2-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text18 {
            font-family: 'Taviraj';
          }
          .steps2-text19 {
            text-align: left;
          }
          .steps2-text20 {
            display: inline-block;
            font-family: 'Open Sans';
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
            .steps2-text18 {
              font-family: Taviraj;
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
            .steps2-text13 {
              font-size: 35px;
              font-family: Taviraj;
            }
            .steps2-container5 {
              width: 100%;
            }
            .steps2-heading {
              font-family: Taviraj;
            }
            .steps2-container6 {
              width: 100%;
            }
            .steps2-text16 {
              font-family: Taviraj;
            }
            .steps2-container7 {
              width: 100%;
            }
            .steps2-text18 {
              font-family: Taviraj;
            }
          }
          @media (max-width: 479px) {
            .steps2-link {
              width: 100%;
            }
          }
          @media (max-width: 344px) {
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
            .steps2-heading {
              font-size: 20px;
              font-family: Inter;
            }
            .steps2-text15 {
              font-size: 15px;
              text-align: left;
            }
            .steps2-text16 {
              font-size: 20px;
              text-align: left;
              font-family: Inter;
            }
            .steps2-text17 {
              font-size: 15px;
              text-align: left;
            }
            .steps2-text18 {
              font-size: 20px;
              text-align: left;
              font-family: Inter;
            }
            .steps2-text19 {
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
  step4Description: undefined,
}

Steps2.propTypes = {
  step4Description: PropTypes.element,
}

export default Steps2
