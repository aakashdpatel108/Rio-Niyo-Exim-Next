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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stats13-icon1"
              >
                <g
                  fill="none"
                  color="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 8.187c.104-2.1.415-3.41 1.347-4.34c.93-.932 2.24-1.243 4.34-1.347M21.5 8.187c-.104-2.1-.415-3.41-1.347-4.34c-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347c.932-.93 1.243-2.24 1.347-4.34M8.187 21.5c-2.1-.104-3.41-.415-4.34-1.347c-.932-.93-1.243-2.24-1.347-4.34m17.135-4.495c.243.304.365.457.365.682s-.122.378-.365.682C18.542 14.05 15.751 17 12 17s-6.542-2.95-7.635-4.318C4.122 12.378 4 12.225 4 12s.122-.378.365-.682C5.458 9.95 8.249 7 12 7s6.542 2.95 7.635 4.318"></path>
                  <path d="M14 12a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></path>
                </g>
              </svg>
              <h2 className="stats13-text10 thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats13-text19">
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stats13-icon5"
              >
                <path
                  d="M18 16v-2h1V4H6v10.035Q6.245 14 6.5 14H8v2H6.5a1.5 1.5 0 0 0 0 3H10v2H6.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-4v-2h3v-3zM7 5h2v2H7zm0 3h2v2H7zm7 9v6h-2v-6H9l4-5l4 5z"
                  fill="currentColor"
                ></path>
              </svg>
              <h2 className="stats13-text12 thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats13-text21">
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
                    <span className="stats13-text20">
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="stats13-icon7"
              >
                <path
                  d="M17.603 7.519a7.999 7.999 0 1 1-5.117-5.126L11.439 3.44q-.086.086-.158.185a6.5 6.5 0 1 0 5.088 5.098a1.5 1.5 0 0 0 .192-.162zM14.898 9q.1.486.1 1A5 5 0 1 1 11 5.1v1.546A3.5 3.5 0 1 0 13.353 9zm-4.9 2.5a1.5 1.5 0 0 0 1.45-1.887L13.03 8.03l.03-.03h2.44a.5.5 0 0 0 .354-.146l2-2A.5.5 0 0 0 17.5 5H15V2.5a.5.5 0 0 0-.853-.354l-2 2A.5.5 0 0 0 12 4.5v2.44l-.03.03l-1.582 1.581a1.5 1.5 0 0 0-1.89 1.45a1.5 1.5 0 0 0 1.5 1.5"
                  fill="currentColor"
                ></path>
              </svg>
              <h2 className="stats13-text14 thq-heading-2">
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
          alt="Image of happy customers"
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTc2MjEwNzQzMHww&amp;ixlib=rb-4.1.0&amp;w=1500"
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
          .stats13-icon1 {
            width: 70px;
            height: 60px;
          }
          .stats13-text10 {
            text-align: center;
          }
          .stats13-text11 {
            text-align: center;
          }
          .stats13-container5 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats13-icon5 {
            width: 70px;
            height: 60px;
          }
          .stats13-text12 {
            text-align: center;
          }
          .stats13-text13 {
            text-align: center;
          }
          .stats13-container6 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats13-icon7 {
            width: 70px;
            height: 60px;
          }
          .stats13-text14 {
            text-align: center;
          }
          .stats13-text15 {
            text-align: center;
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
          @media (max-width: 414px) {
            .stats13-icon1 {
              width: 50px;
              height: 40px;
            }
            .stats13-text19 {
              font-size: inherit;
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
  stat2: undefined,
  stat1Description: undefined,
  stat1: undefined,
}

Stats13.propTypes = {
  stat2Description: PropTypes.element,
  stat3: PropTypes.element,
  stat3Description: PropTypes.element,
  stat2: PropTypes.element,
  stat1Description: PropTypes.element,
  stat1: PropTypes.element,
}

export default Stats13
