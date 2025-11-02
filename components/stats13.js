import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats13 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="stats13-max-width thq-section-max-width">
          <div className="stats13-container2">
            <h2 className="stats13-title thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_X61cVG'),
                }}
              ></span>
            </h2>
            <span className="stats13-content thq-body-small">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_qMMqNN'),
                }}
              ></span>
            </span>
          </div>
          <div className="stats13-container3 thq-grid-3">
            <div className="stats13-container4 thq-card">
              <h2 className="thq-heading-2 stats13-text10">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats13-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_MTrdex'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="stats13-text11 thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats13-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_K2BbVq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="stats13-container5 thq-card">
              <h2 className="thq-heading-2 stats13-text12">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats13-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ThltHs'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="stats13-text13 thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats13-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_jt3y8h'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats13-container6 thq-card">
              <h2 className="thq-heading-2 stats13-text14">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats13-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_H6bNBe'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="stats13-text15 thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats13-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_xEsaeP'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTc2MjEwNzQzMHww&amp;ixlib=rb-4.1.0&amp;w=1500"
          alt="Image of happy customers"
          className="stats13-image thq-img-ratio-16-9"
        />
      </div>
      <style jsx>
        {`
          .stats13-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .stats13-container2 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .stats13-title {
            color: #ffffff;
            text-align: center;
          }
          .stats13-content {
            color: rgb(255, 255, 255);
            font-size: 16px;
            text-align: center;
          }
          .stats13-container3 {
            width: 100%;
            z-index: 100;
          }
          .stats13-container4 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats13-text11 {
            text-align: justify;
          }
          .stats13-container5 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats13-text13 {
            text-align: justify;
          }
          .stats13-container6 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats13-text15 {
            text-align: justify;
          }
          .stats13-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .stats13-text16 {
            display: inline-block;
          }
          .stats13-text17 {
            display: inline-block;
          }
          .stats13-text18 {
            display: inline-block;
          }
          .stats13-text19 {
            display: inline-block;
          }
          .stats13-text20 {
            display: inline-block;
          }
          .stats13-text21 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .stats13-max-width {
              flex-direction: column;
            }
            .stats13-title {
              text-align: center;
            }
            .stats13-container4 {
              align-self: flex-start;
            }
            .stats13-text10 {
              align-self: center;
            }
            .stats13-container5 {
              align-self: flex-start;
            }
            .stats13-text12 {
              align-self: center;
            }
            .stats13-container6 {
              align-self: flex-start;
            }
            .stats13-text14 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .stats13-title {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Stats13.defaultProps = {
  stat2Description: undefined,
  stat3: undefined,
  stat3Description: undefined,
  stat1Description: undefined,
  stat1: undefined,
  stat2: undefined,
}

Stats13.propTypes = {
  stat2Description: PropTypes.element,
  stat3: PropTypes.element,
  stat3Description: PropTypes.element,
  stat1Description: PropTypes.element,
  stat1: PropTypes.element,
  stat2: PropTypes.element,
}

export default Stats13
