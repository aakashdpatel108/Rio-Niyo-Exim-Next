import React from 'react'

import { useTranslations } from 'next-intl'

const RiceBanner = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="rice-banner-container thq-section-padding">
        <div className="rice-banner-thq-max-width-elm thq-section-max-width">
          <img
            alt="Rice"
            src="https://images.unsplash.com/photo-1592997572594-34be01bc36c7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxyaWNlfGVufDB8fHx8MTc2NTczMDEyN3ww&amp;ixlib=rb-4.1.0&amp;w=1400"
            className="rice-banner-image thq-img-ratio-16-9"
          />
          <div className="rice-banner-thq-row-elm">
            <div className="rice-banner-thq-container-elm thq-flex-row">
              <h2 className="thq-heading-2 rice-banner-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ufBr6O'),
                  }}
                ></span>
              </h2>
              <div className="rice-banner-thq-content-elm">
                <p className="rice-banner-thq-text-elm thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sFuN-p'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .rice-banner-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .rice-banner-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .rice-banner-image {
            height: 500px;
          }
          .rice-banner-thq-row-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .rice-banner-thq-container-elm {
            gap: var(--dl-layout-space-fiveunits);
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .rice-banner-thq-content-elm {
            gap: 24px;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .rice-banner-thq-text-elm {
            text-align: left;
          }
          @media (max-width: 1600px) {
            .rice-banner-thq-content-elm {
              width: auto;
            }
          }
          @media (max-width: 991px) {
            .rice-banner-thq-container-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .rice-banner-thq-max-width-elm {
              gap: var(--dl-layout-space-twounits);
            }
            .rice-banner-image {
              height: auto;
            }
            .rice-banner-text {
              font-size: 25px;
            }
            .rice-banner-thq-content-elm {
              width: auto;
            }
            .rice-banner-thq-text-elm {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default RiceBanner
