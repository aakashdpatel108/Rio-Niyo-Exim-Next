import React from 'react'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

const DragonFruitBanner = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="dragon-fruit-banner-container1 thq-section-padding">
        <img
          alt="Adventure Banner Image"
          src="https://images.unsplash.com/photo-1697668076790-e77f7acedf1f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI4fHxkcmFnb24lMjBmcnVpdHxlbnwwfHx8fDE3NjUxMjc4MjZ8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="dragon-fruit-banner-image thq-img-ratio-16-9"
        />
        <div className="dragon-fruit-banner-thq-max-width-elm thq-section-max-width">
          <div className="dragon-fruit-banner-container2">
            <h2 className="dragon-fruit-banner-thq-title-elm thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_obCRQW'),
                }}
              ></span>
            </h2>
            <h3 className="dragon-fruit-banner-text1 thq-heading-3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_V41iQX'),
                }}
              ></span>
            </h3>
          </div>
          <Link href="/dragon-fruit">
            <a className="dragon-fruit-banner-link thq-button-filled">
              <span className="dragon-fruit-banner-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZlKE35'),
                  }}
                ></span>
              </span>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .dragon-fruit-banner-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .dragon-fruit-banner-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .dragon-fruit-banner-thq-max-width-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .dragon-fruit-banner-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .dragon-fruit-banner-thq-title-elm {
            color: rgb(255, 255, 255);
            text-align: center;
          }
          .dragon-fruit-banner-text1 {
            color: #ffffff;
            text-align: center;
          }
          .dragon-fruit-banner-link {
            text-decoration: none;
          }
          .dragon-fruit-banner-text2 {
            font-size: 16px;
          }
          @media (max-width: 767px) {
            .dragon-fruit-banner-thq-title-elm {
              color: rgb(255, 255, 255);
              font-size: 25px;
              text-align: center;
            }
            .dragon-fruit-banner-text1 {
              color: rgb(255, 255, 255);
              font-size: 18px;
              text-align: center;
            }
            .dragon-fruit-banner-text2 {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .dragon-fruit-banner-thq-title-elm {
              color: rgb(255, 255, 255);
              font-size: 25px;
              text-align: center;
            }
            .dragon-fruit-banner-text1 {
              color: rgb(255, 255, 255);
              font-size: 12px;
              text-align: center;
            }
            .dragon-fruit-banner-text2 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default DragonFruitBanner
