import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const PomegranateHero = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`pomegranate-hero-thq-header26-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="pomegranate-hero-thq-max-width-elm thq-flex-column thq-section-max-width">
          <div className="pomegranate-hero-thq-column-elm">
            <div className="pomegranate-hero-thq-content-elm">
              <h1 className="pomegranate-hero-thq-text-elm1 thq-heading-1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gJm5jQ'),
                  }}
                ></span>
              </h1>
              <p className="pomegranate-hero-thq-text-elm2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_C3ne2z'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pomegranate-hero-thq-header26-elm {
            gap: var(--dl-layout-space-twounits);
          }
          .pomegranate-hero-thq-max-width-elm {
            align-self: center;
          }
          .pomegranate-hero-thq-column-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pomegranate-hero-thq-content-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pomegranate-hero-thq-text-elm1 {
            font-size: 35px;
            text-align: center;
          }
          .pomegranate-hero-thq-text-elm2 {
            font-size: 16px;
            text-align: center;
          }

          @media (max-width: 1200px) {
            .pomegranate-hero-thq-text-elm1 {
              text-align: center;
            }
            .pomegranate-hero-thq-text-elm2 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .pomegranate-hero-thq-text-elm1 {
              font-size: 25px;
              text-align: center;
              font-family: Taviraj;
            }
            .pomegranate-hero-thq-text-elm2 {
              font-size: 12px;
              text-align: center;
            }
          }
          @media (max-width: 344px) {
            .pomegranate-hero-thq-text-elm1 {
              font-size: 25px;
              text-align: center;
              font-family: Taviraj;
            }
            .pomegranate-hero-thq-text-elm2 {
              font-size: 12px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

PomegranateHero.defaultProps = {
  rootClassName: '',
}

PomegranateHero.propTypes = {
  rootClassName: PropTypes.string,
}

export default PomegranateHero
