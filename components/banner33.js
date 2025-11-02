import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner33 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="banner33-container1 thq-section-padding">
        <img
          alt="Nuts and dried fruits"
          src="https://images.unsplash.com/photo-1693812879904-b8161644ce5a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxudXRzfGVufDB8fHx8MTc2MjEyMTI1Nnww&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="banner33-image thq-img-ratio-16-9"
        />
        <div className="banner33-max-width thq-section-max-width">
          <div className="banner33-container2">
            <h2 className="banner33-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner33-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PfqVcx'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="banner33-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner33-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_oK_ia5'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <Link href="/contact-us">
            <a className="banner33-link thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="banner33-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_42hOGg'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_v5NSPI'),
                }}
              ></span>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .banner33-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner33-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .banner33-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner33-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner33-title {
            text-align: center;
          }
          .banner33-text1 {
            text-align: center;
          }
          .banner33-link {
            text-decoration: none;
          }
          .banner33-text3 {
            display: inline-block;
          }
          .banner33-text4 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .banner33-text5 {
            color: #ffffff;
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner33.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content1: undefined,
}

Banner33.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default Banner33
