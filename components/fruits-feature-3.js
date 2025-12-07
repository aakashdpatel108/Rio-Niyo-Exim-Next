import React from 'react'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

const FruitsFeature3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="fruits-feature-3-layout349 thq-section-padding">
        <div className="fruits-feature-3-max-width thq-section-max-width">
          <div className="fruits-feature-3-image-container">
            <img
              alt="Dragon Fruit"
              src="https://images.unsplash.com/photo-1705501720577-4fe7bba7f85b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxkcmFnb24lMjBmcnVpdHxlbnwwfHx8fDE3NTk1OTU1MzF8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
              className="thq-img-ratio-16-9"
            />
          </div>
          <div className="fruits-feature-3-content1">
            <div className="fruits-feature-3-section-title">
              <span className="thq-body-small fruits-feature-3-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K6msoj'),
                  }}
                ></span>
              </span>
              <div className="fruits-feature-3-content2">
                <h2 className="thq-heading-2 fruits-feature-3-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UHzAPG'),
                    }}
                  ></span>
                </h2>
                <p className="thq-body-large fruits-feature-3-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-E08fG'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <Link href="/dragon-fruit">
              <a className="fruits-feature-3-link thq-button-filled">
                <span className="fruits-feature-3-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3SPJ1h'),
                    }}
                  ></span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .fruits-feature-3-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-3-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .fruits-feature-3-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .fruits-feature-3-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-3-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-3-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-3-link {
            text-decoration: none;
          }
          .fruits-feature-3-text4 {
            font-family: 'Open Sans';
          }
          @media (max-width: 991px) {
            .fruits-feature-3-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .fruits-feature-3-text1 {
              font-size: 12px;
            }
            .fruits-feature-3-text2 {
              font-size: 18px;
            }
            .fruits-feature-3-text3 {
              font-size: 12px;
            }
            .fruits-feature-3-text4 {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .fruits-feature-3-text1 {
              font-size: 12px;
            }
            .fruits-feature-3-text2 {
              font-size: 18px;
            }
            .fruits-feature-3-text3 {
              font-size: 12px;
            }
            .fruits-feature-3-link {
              width: 171px;
              margin-right: 0px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .fruits-feature-3-text4 {
              font-size: 12px;
              font-family: Open Sans;
            }
          }
        `}
      </style>
    </>
  )
}

export default FruitsFeature3
