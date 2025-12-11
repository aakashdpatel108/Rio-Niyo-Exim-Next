import React from 'react'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

const FruitsFeature2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="fruits-feature-2-thq-layout349-elm thq-section-padding">
        <div className="fruits-feature-2-thq-max-width-elm thq-section-max-width">
          <div className="fruits-feature-2-thq-content-elm1">
            <div className="fruits-feature-2-thq-section-title-elm">
              <span className="thq-body-small fruits-feature-2-thq-text-elm1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BdQFTp'),
                  }}
                ></span>
              </span>
              <div className="fruits-feature-2-thq-content-elm2">
                <h2 className="thq-heading-2 fruits-feature-2-thq-text-elm2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CXC32O'),
                    }}
                  ></span>
                </h2>
                <p className="thq-body-large fruits-feature-2-thq-text-elm3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GXk1eo'),
                    }}
                  ></span>
                </p>
                <Link href="/mango">
                  <a className="fruits-feature-2-link thq-button-filled">
                    <span className="fruits-feature-2-text">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_D09wJl'),
                        }}
                      ></span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="fruits-feature-2-thq-image-container-elm">
            <img
              alt="Mango"
              src="https://images.unsplash.com/photo-1519096845289-95806ee03a1a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxNYW5nb3xlbnwwfHx8fDE3NTk1OTQ4NDZ8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
              className="thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .fruits-feature-2-thq-layout349-elm {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-2-thq-max-width-elm {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .fruits-feature-2-thq-content-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-2-thq-section-title-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-2-thq-content-elm2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-2-link {
            text-decoration: none;
          }
          .fruits-feature-2-text {
            font-family: 'Open Sans';
          }
          .fruits-feature-2-thq-image-container-elm {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          @media (max-width: 991px) {
            .fruits-feature-2-thq-max-width-elm {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 767px) {
            .fruits-feature-2-thq-text-elm1 {
              font-size: 12px;
            }
            .fruits-feature-2-thq-text-elm2 {
              font-size: 18px;
            }
            .fruits-feature-2-thq-text-elm3 {
              font-size: 12px;
            }
            .fruits-feature-2-text {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .fruits-feature-2-thq-text-elm1 {
              font-size: 12px;
            }
            .fruits-feature-2-thq-text-elm2 {
              font-size: 18px;
            }
            .fruits-feature-2-thq-text-elm3 {
              font-size: 12px;
            }
            .fruits-feature-2-link {
              width: 171px;
              margin-right: 0px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .fruits-feature-2-text {
              font-size: 12px;
              font-family: Open Sans;
            }
          }
        `}
      </style>
    </>
  )
}

export default FruitsFeature2
