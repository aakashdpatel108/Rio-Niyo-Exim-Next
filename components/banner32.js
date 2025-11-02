import React from 'react'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

const Banner32 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="banner32-container1 thq-section-padding">
        <img
          alt="Pulses"
          src="https://images.unsplash.com/photo-1705475388190-775066fd69a5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHB1bHNlc3xlbnwwfHx8fDE3NjIwNDA4MDN8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="banner32-image thq-img-ratio-16-9"
        />
        <div className="banner32-max-width thq-section-max-width">
          <div className="banner32-container2">
            <h2 className="banner32-title thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_rnERcB'),
                }}
              ></span>
            </h2>
            <h3 className="banner32-text1 thq-heading-3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_JXs4N_'),
                }}
              ></span>
            </h3>
          </div>
          <Link href="/contact-us">
            <a className="banner32-link thq-button-filled">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NfFf81'),
                  }}
                ></span>
              </span>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .banner32-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner32-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .banner32-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner32-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner32-title {
            color: #000000;
            text-align: center;
          }
          .banner32-text1 {
            color: #ffffff;
            text-align: center;
          }
          .banner32-link {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Banner32
