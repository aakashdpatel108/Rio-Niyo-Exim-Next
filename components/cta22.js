import React from 'react'

import { useTranslations } from 'next-intl'

const CTA22 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="cta22-container thq-section-padding">
        <div className="cta22-thq-max-width-elm thq-section-max-width">
          <img
            src="https://images.unsplash.com/photo-1530107973768-581951e62d34?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGxvb2tpbmclMjB1cHxlbnwwfHx8fDE3NjYyNzE4MDh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1400"
            alt="CTA Image"
            className="cta22-image thq-img-ratio-16-9"
          />
          <div className="cta22-thq-row-elm">
            <div className="cta22-thq-content-elm">
              <h2 className="cta22-thq-heading1-elm thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dV6GyD'),
                  }}
                ></span>
              </h2>
              <p className="cta22-thq-content1-elm thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kXPw_g'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta22-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta22-thq-max-width-elm {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta22-image {
            height: 500px;
            align-self: stretch;
            object-fit: cover;
          }
          .cta22-thq-row-elm {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .cta22-thq-content-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .cta22-thq-heading1-elm {
            text-align: center;
          }
          .cta22-thq-content1-elm {
            text-align: center;
          }
          @media (max-width: 767px) {
            .cta22-thq-heading1-elm {
              font-size: 25px;
              text-align: center;
            }
            .cta22-thq-content1-elm {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .cta22-thq-heading1-elm {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default CTA22
