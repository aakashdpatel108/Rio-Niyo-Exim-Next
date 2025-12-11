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
          src="https://images.unsplash.com/photo-1664395935803-7d5f88ae6369?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHB1bHNlc3xlbnwwfHx8fDE3NjI4NzQ1MDZ8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="banner32-image thq-img-ratio-16-9"
        />
        <div className="banner32-thq-max-width-elm thq-section-max-width">
          <div className="banner32-container2">
            <h2 className="banner32-thq-title-elm thq-heading-2">
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
              <span className="banner32-text2">
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
          .banner32-thq-max-width-elm {
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
          .banner32-thq-title-elm {
            color: #ffffff;
            text-align: center;
          }
          .banner32-text1 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 400;
          }
          .banner32-link {
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .banner32-thq-title-elm {
              font-size: 25px;
            }
            .banner32-text1 {
              font-size: 12px;
              padding-top: 0px;
            }
            .banner32-link {
              width: 100px;
              height: 25px;
            }
            .banner32-text2 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Banner32
