import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const GrainsCerealsBanner = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`grains-cereals-banner-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="grains-cereals-banner-thq-max-width-elm thq-section-max-width">
          <img
            alt="Grains and Cereals"
            src="https://images.unsplash.com/photo-1621956838481-f8f616950454?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGdyYWlucyUyMHxlbnwwfHx8fDE3NjU3MzMyMjN8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
            className="grains-cereals-banner-image thq-img-ratio-16-9"
          />
          <div className="grains-cereals-banner-thq-row-elm">
            <div className="grains-cereals-banner-thq-container-elm thq-flex-row">
              <h2 className="thq-heading-2 grains-cereals-banner-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4aWC01'),
                  }}
                ></span>
              </h2>
              <div className="grains-cereals-banner-thq-content-elm">
                <p className="grains-cereals-banner-thq-text-elm thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_P9kl2x'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .grains-cereals-banner-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .grains-cereals-banner-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .grains-cereals-banner-image {
            height: 500px;
          }
          .grains-cereals-banner-thq-row-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .grains-cereals-banner-thq-container-elm {
            gap: var(--dl-layout-space-fiveunits);
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .grains-cereals-banner-thq-content-elm {
            gap: 24px;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .grains-cereals-banner-thq-text-elm {
            text-align: left;
          }

          @media (max-width: 1600px) {
            .grains-cereals-banner-thq-content-elm {
              width: auto;
            }
          }
          @media (max-width: 991px) {
            .grains-cereals-banner-thq-container-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .grains-cereals-banner-thq-max-width-elm {
              gap: var(--dl-layout-space-twounits);
            }
            .grains-cereals-banner-image {
              height: auto;
            }
            .grains-cereals-banner-text {
              font-size: 25px;
            }
            .grains-cereals-banner-thq-content-elm {
              width: auto;
            }
            .grains-cereals-banner-thq-text-elm {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .grains-cereals-banner-text {
              font-size: 25px;
            }
            .grains-cereals-banner-thq-text-elm {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

GrainsCerealsBanner.defaultProps = {
  rootClassName: '',
}

GrainsCerealsBanner.propTypes = {
  rootClassName: PropTypes.string,
}

export default GrainsCerealsBanner
