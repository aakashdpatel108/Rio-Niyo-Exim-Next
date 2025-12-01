import React from 'react'

import { useTranslations } from 'next-intl'

const Hero8 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="hero8-header26 thq-section-padding">
        <div className="hero8-max-width thq-flex-column thq-section-max-width">
          <div className="hero8-column">
            <img
              alt="Mangoes"
              src="https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxtYW5nb2VzfGVufDB8fHx8MTc2NDQ0ODczNnww&amp;ixlib=rb-4.1.0&amp;w=1400"
              className="thq-img-ratio-16-9"
            />
            <div className="hero8-content">
              <h1 className="hero8-text1 thq-heading-1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GNdtDV'),
                  }}
                ></span>
              </h1>
              <p className="hero8-text2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BVRxDr'),
                  }}
                ></span>
              </p>
              <div className="hero8-actions">
                <button className="thq-button-filled hero8-button1">
                  <span className="thq-body-small hero8-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_jp4Nf9'),
                      }}
                    ></span>
                  </span>
                </button>
                <button className="thq-button-outline hero8-button2">
                  <span className="thq-body-small hero8-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_6Bv5cx'),
                      }}
                    ></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero8-header26 {
            gap: var(--dl-layout-space-twounits);
          }
          .hero8-max-width {
            align-self: center;
          }
          .hero8-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero8-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero8-text1 {
            font-size: 35px;
            text-align: center;
          }
          .hero8-text2 {
            font-size: 16px;
            text-align: center;
          }
          .hero8-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 1200px) {
            .hero8-text1 {
              text-align: center;
            }
            .hero8-text2 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero8-text1 {
              font-size: 25px;
              text-align: center;
              font-family: Taviraj;
            }
            .hero8-text2 {
              font-size: 12px;
              text-align: center;
            }
            .hero8-text3 {
              font-size: 15px;
            }
            .hero8-text4 {
              font-size: 15px;
            }
          }
          @media (max-width: 479px) {
            .hero8-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero8-button1 {
              width: 100%;
            }
            .hero8-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Hero8
