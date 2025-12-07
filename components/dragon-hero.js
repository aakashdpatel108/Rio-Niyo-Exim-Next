import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DragonHero = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`dragon-hero-header26 thq-section-padding ${props.rootClassName} `}
      >
        <div className="dragon-hero-max-width thq-flex-column thq-section-max-width">
          <div className="dragon-hero-column">
            <div className="dragon-hero-content">
              <h1 className="dragon-hero-text1 thq-heading-1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IibKFW'),
                  }}
                ></span>
              </h1>
              <p className="dragon-hero-text2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8y1TGq'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .dragon-hero-header26 {
            gap: var(--dl-layout-space-twounits);
          }
          .dragon-hero-max-width {
            align-self: center;
          }
          .dragon-hero-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dragon-hero-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .dragon-hero-text1 {
            font-size: 35px;
            text-align: center;
          }
          .dragon-hero-text2 {
            font-size: 16px;
            text-align: center;
          }

          @media (max-width: 1200px) {
            .dragon-hero-text1 {
              text-align: center;
            }
            .dragon-hero-text2 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .dragon-hero-text1 {
              font-size: 25px;
              text-align: center;
              font-family: Taviraj;
            }
            .dragon-hero-text2 {
              font-size: 12px;
              text-align: center;
            }
          }
          @media (max-width: 344px) {
            .dragon-hero-text1 {
              font-size: 25px;
              text-align: center;
              font-family: Taviraj;
            }
            .dragon-hero-text2 {
              font-size: 12px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

DragonHero.defaultProps = {
  rootClassName: '',
}

DragonHero.propTypes = {
  rootClassName: PropTypes.string,
}

export default DragonHero
