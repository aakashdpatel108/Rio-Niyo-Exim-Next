import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="banner3-container1 thq-section-padding">
        <img
          alt="Outdoor adventure"
          src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHNwaWNlc3xlbnwwfHx8fDE3NjE1MTIzMjJ8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="banner3-image thq-img-ratio-16-9"
        />
        <div className="banner3-max-width thq-section-max-width">
          <div className="banner3-container2">
            <h2 className="banner3-title thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_TxMqGw'),
                }}
              ></span>
            </h2>
            <h3 className="banner3-text1 thq-heading-3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Ute6tZ'),
                }}
              ></span>
            </h3>
          </div>
          <Link href="/contact-us">
            <a className="banner3-link thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="banner3-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KRSnRC'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .banner3-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner3-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .banner3-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner3-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner3-title {
            color: rgb(255, 255, 255);
            text-align: center;
          }
          .banner3-text1 {
            color: rgb(255, 255, 255);
            text-align: center;
          }
          .banner3-link {
            text-decoration: none;
          }
          .banner3-text3 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner3.defaultProps = {
  action1: undefined,
}

Banner3.propTypes = {
  action1: PropTypes.element,
}

export default Banner3
