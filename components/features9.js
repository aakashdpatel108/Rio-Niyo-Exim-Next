import React from 'react'

import { useTranslations } from 'next-intl'

const Features9 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features9-layout186 thq-section-padding">
        <div className="thq-flex-column thq-section-max-width">
          <h2 className="features9-text1 thq-heading-2">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_LX4FqK'),
              }}
            ></span>
          </h2>
          <p className="features9-text2 thq-body-large">
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
          .features9-layout186 {
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
          .features9-text1 {
            z-index: 2;
            font-style: normal;
            text-align: center;
            font-weight: 800;
          }
          .features9-text2 {
            z-index: 2;
            text-align: center;
          }
          @media (max-width: 344px) {
            .features9-text1 {
              font-size: 22px;
              font-style: normal;
              font-weight: 800;
            }
            .features9-text2 {
              font-size: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Features9
