import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HomeFeatureSteps = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`home-feature-steps-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="home-feature-steps-thq-max-width-elm thq-section-max-width">
          <div className="home-feature-steps-container2 thq-grid-2">
            <div className="home-feature-steps-thq-section-header-elm">
              <span className="home-feature-steps-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uDyrR_'),
                  }}
                ></span>
              </span>
              <p className="home-feature-steps-thq-text-elm1 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ri3SQv'),
                  }}
                ></span>
              </p>
              <div className="home-feature-steps-thq-actions-elm">
                <Link href="/about-us">
                  <a className="home-feature-steps-link thq-button-filled thq-button-animated">
                    <span className="thq-body-small home-feature-steps-thq-text-elm2">
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
            <div className="home-feature-steps-container3">
              <div className="home-feature-steps-container4 thq-card">
                <h2 className="home-feature-steps-text2 thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9Z2lf5'),
                    }}
                  ></span>
                </h2>
                <span className="home-feature-steps-text3 thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zde29O'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-feature-steps-container5 thq-card">
                <h2 className="home-feature-steps-thq-heading-elm thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Q1-6zR'),
                    }}
                  ></span>
                </h2>
                <span className="home-feature-steps-text4 thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_o-ziXF'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-feature-steps-container6 thq-card">
                <h2 className="home-feature-steps-text5 thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UmhFnz'),
                    }}
                  ></span>
                </h2>
                <span className="home-feature-steps-text6 thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fkNTLU'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-feature-steps-container7 thq-card">
                <h2 className="home-feature-steps-text7 thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Cj29TQ'),
                    }}
                  ></span>
                </h2>
                <span className="home-feature-steps-text8 thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JOj98Y'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-feature-steps-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-feature-steps-thq-max-width-elm {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-feature-steps-container2 {
            align-items: start;
          }
          .home-feature-steps-thq-section-header-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature-steps-text1 {
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
          .home-feature-steps-thq-text-elm1 {
            font-family: 'Open Sans';
          }
          .home-feature-steps-thq-actions-elm {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .home-feature-steps-link {
            text-decoration: none;
          }
          .home-feature-steps-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .home-feature-steps-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .home-feature-steps-text2 {
            font-size: 35px;
            text-align: left;
            font-family: 'Taviraj';
          }
          .home-feature-steps-text3 {
            text-align: left;
            font-family: 'Open Sans';
          }
          .home-feature-steps-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .home-feature-steps-thq-heading-elm {
            text-align: left;
            font-family: 'Taviraj';
          }
          .home-feature-steps-text4 {
            text-align: left;
            font-family: 'Open Sans';
          }
          .home-feature-steps-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .home-feature-steps-text5 {
            text-align: left;
            font-family: 'Taviraj';
          }
          .home-feature-steps-text6 {
            text-align: left;
            font-family: 'Open Sans';
          }
          .home-feature-steps-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .home-feature-steps-text7 {
            font-family: 'Taviraj';
          }
          .home-feature-steps-text8 {
            text-align: left;
          }

          @media (max-width: 1600px) {
            .home-feature-steps-text1 {
              border-width: 0px;
            }
          }
          @media (max-width: 991px) {
            .home-feature-steps-thq-max-width-elm {
              flex-direction: column;
            }
            .home-feature-steps-text1 {
              color: rgb(65, 63, 63);
              font-size: 55px;
              font-style: normal;
              font-family: Inter;
              font-weight: 900;
            }
            .home-feature-steps-thq-text-elm1 {
              font-size: 16px;
            }
            .home-feature-steps-text7 {
              font-family: Taviraj;
            }
            .home-feature-stepsroot-class-name {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .home-feature-steps-container1 {
              height: auto;
            }
            .home-feature-steps-thq-section-header-elm {
              width: auto;
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-feature-steps-text1 {
              color: rgb(65, 63, 63);
              width: 100%;
              font-size: 50px;
              font-style: normal;
              font-family: Inter;
              font-weight: 900;
              border-width: 0px;
            }
            .home-feature-steps-thq-text-elm1 {
              font-size: 15px;
              font-family: Open Sans;
            }
            .home-feature-steps-thq-actions-elm {
              width: 100%;
              align-self: flex-start;
            }
            .home-feature-steps-link {
              width: 102px;
              font-size: 12px;
            }
            .home-feature-steps-thq-text-elm2 {
              font-size: 12px;
            }
            .home-feature-steps-container3 {
              width: auto;
            }
            .home-feature-steps-container4 {
              width: 100%;
            }
            .home-feature-steps-text2 {
              font-size: 20px;
              font-family: Taviraj;
            }
            .home-feature-steps-text3 {
              font-size: 15px;
              font-family: Open Sans;
            }
            .home-feature-steps-container5 {
              width: 100%;
            }
            .home-feature-steps-thq-heading-elm {
              font-size: 20px;
              font-family: Taviraj;
            }
            .home-feature-steps-text4 {
              font-size: 15px;
              font-family: Open Sans;
            }
            .home-feature-steps-container6 {
              width: 100%;
            }
            .home-feature-steps-text5 {
              font-size: 20px;
              font-family: Taviraj;
            }
            .home-feature-steps-text6 {
              font-size: 15px;
              font-family: Open Sans;
            }
            .home-feature-steps-container7 {
              width: 100%;
            }
            .home-feature-steps-text7 {
              font-size: 20px;
              font-family: Taviraj;
            }
            .home-feature-steps-text8 {
              font-size: 15px;
            }
            .home-feature-stepsroot-class-name {
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .home-feature-steps-link {
              width: 100%;
            }
          }
          @media (max-width: 344px) {
            .home-feature-steps-container1 {
              height: 100%;
            }
            .home-feature-steps-thq-section-header-elm {
              width: 100%;
            }
            .home-feature-steps-text1 {
              color: rgb(65, 63, 63);
              font-size: 40px;
              font-style: normal;
              font-family: Inter;
              font-weight: 900;
            }
            .home-feature-steps-thq-text-elm1 {
              font-size: 12px;
              font-family: Open Sans;
            }
            .home-feature-steps-thq-text-elm2 {
              font-size: 12px;
            }
            .home-feature-steps-container3 {
              width: 100%;
            }
            .home-feature-steps-container4 {
              width: 100%;
            }
            .home-feature-steps-text2 {
              font-size: 20px;
              text-align: left;
            }
            .home-feature-steps-text3 {
              font-size: 15px;
              text-align: left;
              font-family: Open Sans;
            }
            .home-feature-steps-thq-heading-elm {
              font-size: 20px;
              font-family: Taviraj;
            }
            .home-feature-steps-text4 {
              font-size: 15px;
              text-align: left;
            }
            .home-feature-steps-text5 {
              font-size: 20px;
              text-align: left;
              font-family: Taviraj;
            }
            .home-feature-steps-text6 {
              font-size: 15px;
              text-align: left;
            }
            .home-feature-steps-text7 {
              text-align: left;
              font-family: Taviraj;
            }
            .home-feature-steps-text8 {
              font-size: 15px;
              text-align: left;
            }
            .home-feature-stepsroot-class-name {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

HomeFeatureSteps.defaultProps = {
  rootClassName: '',
}

HomeFeatureSteps.propTypes = {
  rootClassName: PropTypes.string,
}

export default HomeFeatureSteps
