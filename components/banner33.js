import React from 'react'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

const Banner33 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="banner33-container1 thq-section-padding">
        <img
          alt="Nuts and dried fruits"
          src="https://images.unsplash.com/photo-1693812879904-b8161644ce5a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxudXRzfGVufDB8fHx8MTc2MjEyMTI1Nnww&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="banner33-image thq-img-ratio-16-9"
        />
        <div className="banner33-thq-max-width-elm thq-section-max-width">
          <div className="banner33-container2">
            <h2 className="banner33-thq-title-elm thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_0ZouBH'),
                }}
              ></span>
            </h2>
            <h3 className="banner33-text1 thq-heading-3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_GS7Ugo'),
                }}
              ></span>
            </h3>
          </div>
          <Link href="/contact-us">
            <a className="banner33-link thq-button-filled">
              <span className="banner33-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OF37ZY'),
                  }}
                ></span>
              </span>
              {/* <span 
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_v5NSPI'),
                }}
              ></span> */}
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .banner33-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner33-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .banner33-thq-max-width-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner33-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner33-thq-title-elm {
            color: #ffffff;
            text-align: center;
          }
          .banner33-text1 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 400;
          }
          .banner33-link {
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .banner33-thq-title-elm {
              font-size: 25px;
            }
            .banner33-text1 {
              font-size: 12px;
            }
            .banner33-text2 {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .banner33-thq-title-elm {
              color: #ffffff;
              font-size: 20px;
            }
            .banner33-text1 {
              color: #ffffff;
              font-size: 10px;
            }
            .banner33-link {
              width: 101px;
            }
            .banner33-text2 {
              font-size: 10px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Banner33
