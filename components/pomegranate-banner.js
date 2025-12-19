import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const PomegranateBanner = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`pomegranate-banner-container1 thq-section-padding ${props.rootClassName} `}
      >
        <img
          alt="Adventure Banner Image"
          src="https://images.unsplash.com/photo-1541344999736-83eca272f6fc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHBvbWVncmFuYXRlfGVufDB8fHx8MTc2NTQ2NzU5MXww&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="pomegranate-banner-image thq-img-ratio-16-9"
        />
        <div className="pomegranate-banner-thq-max-width-elm thq-section-max-width">
          <div className="pomegranate-banner-container2">
            <h2 className="pomegranate-banner-thq-title-elm thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Title_nGmevs'),
                }}
              ></span>
            </h2>
            <h3 className="pomegranate-banner-text1 thq-heading-3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_GqI6ev'),
                }}
              ></span>
            </h3>
          </div>
          <Link href="/dragon-fruit">
            <a className="pomegranate-banner-link thq-button-filled">
              <span className="pomegranate-banner-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dDGpmv'),
                  }}
                ></span>
              </span>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .pomegranate-banner-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .pomegranate-banner-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .pomegranate-banner-thq-max-width-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .pomegranate-banner-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .pomegranate-banner-thq-title-elm {
            color: rgb(255, 255, 255);
            text-align: center;
          }
          .pomegranate-banner-text1 {
            color: rgb(255, 255, 255);
            text-align: center;
          }
          .pomegranate-banner-link {
            text-decoration: none;
          }
          .pomegranate-banner-text2 {
            font-size: 16px;
          }

          @media (max-width: 767px) {
            .pomegranate-banner-thq-title-elm {
              color: rgb(255, 255, 255);
              font-size: 25px;
              text-align: center;
            }
            .pomegranate-banner-text1 {
              color: rgb(255, 255, 255);
              font-size: 18px;
              text-align: center;
            }
            .pomegranate-banner-text2 {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .pomegranate-banner-thq-title-elm {
              color: rgb(255, 255, 255);
              font-size: 25px;
              text-align: center;
            }
            .pomegranate-banner-text1 {
              color: rgb(255, 255, 255);
              font-size: 12px;
              text-align: center;
            }
            .pomegranate-banner-text2 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

PomegranateBanner.defaultProps = {
  rootClassName: '',
}

PomegranateBanner.propTypes = {
  rootClassName: PropTypes.string,
}

export default PomegranateBanner
