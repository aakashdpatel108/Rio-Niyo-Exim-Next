import React from 'react'

import { useTranslations } from 'next-intl'

const HomeFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-feature-1-thq-layout186-elm thq-section-padding">
        <div className="thq-flex-column thq-section-max-width">
          <h2 className="home-feature-1-thq-text-elm1 thq-heading-2">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_LX4FqK'),
              }}
            ></span>
          </h2>
          <p className="home-feature-1-thq-text-elm2 thq-body-large">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_hH1rDp'),
              }}
            ></span>
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .home-feature-1-thq-layout186-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .home-feature-1-thq-text-elm1 {
            z-index: 2;
            font-style: normal;
            text-align: center;
            font-weight: 800;
          }
          .home-feature-1-thq-text-elm2 {
            z-index: 2;
            text-align: center;
          }
          @media (max-width: 767px) {
            .home-feature-1-thq-text-elm1 {
              font-size: 20px;
            }
            .home-feature-1-thq-text-elm2 {
              font-size: 15px;
            }
          }
          @media (max-width: 344px) {
            .home-feature-1-thq-text-elm1 {
              font-size: 20px;
              font-style: normal;
              font-weight: 800;
            }
            .home-feature-1-thq-text-elm2 {
              font-size: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

export default HomeFeature1
