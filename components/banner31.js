import React from 'react'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

const Banner31 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="banner31-container1 thq-section-padding">
        <img
          alt="vegetables"
          src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMDM2NzM5fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="banner31-image thq-img-ratio-16-9"
        />
        <div className="banner31-max-width thq-section-max-width">
          <div className="banner31-container2">
            <h2 className="banner31-title thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_VBUi_y'),
                }}
              ></span>
            </h2>
            <h3 className="banner31-text thq-heading-3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_6YlJRT'),
                }}
              ></span>
            </h3>
          </div>
          <button type="button" className="thq-button-filled">
            <Link href="/contact-us">
              <a className="banner31-link">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ACIzeV'),
                  }}
                ></span>
              </a>
            </Link>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner31-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner31-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .banner31-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner31-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner31-title {
            color: #ffffff;
            text-align: center;
          }
          .banner31-text {
            color: #ffffff;
            text-align: center;
          }
          .banner31-link {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Banner31
