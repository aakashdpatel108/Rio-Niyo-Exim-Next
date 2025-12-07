import React from 'react'

import { useTranslations } from 'next-intl'

const MangoHero = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="mango-hero-header26 thq-section-padding">
        <div className="mango-hero-max-width thq-flex-column thq-section-max-width">
          <div className="mango-hero-column">
            <img
              alt="Mango"
              src="https://images.unsplash.com/photo-1623497718131-46ace0d4d707?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxtYW5nb3xlbnwwfHx8fDE3NjUxMjg2MTh8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
              className="thq-img-ratio-16-9"
            />
            <div className="mango-hero-content">
              <h1 className="mango-hero-text1 thq-heading-1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GNdtDV'),
                  }}
                ></span>
              </h1>
              <p className="mango-hero-text2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BVRxDr'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mango-hero-header26 {
            gap: var(--dl-layout-space-twounits);
          }
          .mango-hero-max-width {
            align-self: center;
          }
          .mango-hero-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mango-hero-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .mango-hero-text1 {
            font-size: 35px;
            text-align: center;
          }
          .mango-hero-text2 {
            font-size: 16px;
            text-align: center;
          }
          @media (max-width: 1200px) {
            .mango-hero-text1 {
              text-align: center;
            }
            .mango-hero-text2 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .mango-hero-text1 {
              font-size: 25px;
              text-align: center;
              font-family: Taviraj;
            }
            .mango-hero-text2 {
              font-size: 12px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default MangoHero
