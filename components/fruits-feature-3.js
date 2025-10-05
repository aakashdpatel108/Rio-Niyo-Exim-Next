import React from 'react'

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
              <span className="thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K6msoj'),
                  }}
                ></span>
              </span>
              <div className="fruits-feature-3-content2">
                <h2 className="thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UHzAPG'),
                    }}
                  ></span>
                </h2>
                <p className="thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-E08fG'),
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
          @media (max-width: 991px) {
            .fruits-feature-3-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default FruitsFeature3
