import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FruitsFeature4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`fruits-feature-4-thq-layout349-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="fruits-feature-4-thq-max-width-elm thq-section-max-width">
          <div className="fruits-feature-4-thq-content-elm1">
            <div className="fruits-feature-4-thq-section-title-elm">
              <span className="thq-body-small fruits-feature-4-thq-text-elm1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TlTuox'),
                  }}
                ></span>
              </span>
              <div className="fruits-feature-4-thq-content-elm2">
                <h2 className="thq-heading-2 fruits-feature-4-thq-text-elm2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UWGJH8'),
                    }}
                  ></span>
                </h2>
                <p className="thq-body-large fruits-feature-4-thq-text-elm3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7JG8mF'),
                    }}
                  ></span>
                </p>
                <Link href="/pomegranate">
                  <a className="fruits-feature-4-link thq-button-filled">
                    <span className="fruits-feature-4-text">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_yuZ8XR'),
                        }}
                      ></span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="fruits-feature-4-thq-image-container-elm">
            <img
              alt="Mango"
              src="https://images.unsplash.com/photo-1541344999736-83eca272f6fc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHBvbWVncmFuYXRlfGVufDB8fHx8MTc2NjI2Nzc3N3ww&amp;ixlib=rb-4.1.0&amp;w=1400"
              className="thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .fruits-feature-4-thq-layout349-elm {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-4-thq-max-width-elm {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .fruits-feature-4-thq-content-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-4-thq-section-title-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-4-thq-content-elm2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-4-link {
            text-decoration: none;
          }
          .fruits-feature-4-text {
            font-family: 'Open Sans';
          }
          .fruits-feature-4-thq-image-container-elm {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }

          @media (max-width: 991px) {
            .fruits-feature-4-thq-max-width-elm {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 767px) {
            .fruits-feature-4-thq-text-elm1 {
              font-size: 12px;
            }
            .fruits-feature-4-thq-text-elm2 {
              font-size: 18px;
            }
            .fruits-feature-4-thq-text-elm3 {
              font-size: 12px;
            }
            .fruits-feature-4-text {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .fruits-feature-4-thq-text-elm1 {
              font-size: 12px;
            }
            .fruits-feature-4-thq-text-elm2 {
              font-size: 18px;
            }
            .fruits-feature-4-thq-text-elm3 {
              font-size: 12px;
            }
            .fruits-feature-4-link {
              width: 171px;
              margin-right: 0px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .fruits-feature-4-text {
              font-size: 12px;
              font-family: Open Sans;
            }
          }
        `}
      </style>
    </>
  )
}

FruitsFeature4.defaultProps = {
  rootClassName: '',
}

FruitsFeature4.propTypes = {
  rootClassName: PropTypes.string,
}

export default FruitsFeature4
