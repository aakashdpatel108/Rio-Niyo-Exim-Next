import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const GrainsFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`grains-feature-1-thq-layout251-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="grains-feature-1-thq-max-width-elm1 thq-section-max-width">
          <div className="thq-flex-row grains-feature-1-thq-section-title-elm">
            <div className="grains-feature-1-thq-column-elm thq-flex-column">
              <h2 className="thq-heading-2 grains-feature-1-thq-text-elm">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NlbWU1'),
                  }}
                ></span>
              </h2>
            </div>
          </div>
          <div className="grains-feature-1-thq-content-elm1">
            <div className="grains-feature-1-thq-row-elm1 thq-flex-row">
              <Link href="/rice">
                <a>
                  <div className="grains-feature-1-thq-feature1-elm thq-flex-column">
                    <img
                      alt="Rice"
                      src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJpY2V8ZW58MHx8fHwxNzY1NzMwMTI3fDA&amp;ixlib=rb-4.1.0&amp;w=1400"
                      className="grains-feature-1-thq-feature1-image-elm thq-img-ratio-4-3"
                    />
                    <div className="grains-feature-1-thq-content-elm2 thq-flex-column">
                      <h3 className="thq-heading-3 grains-feature-1-thq-feature1-title-elm">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('feature1Title_XgHSGz'),
                          }}
                        ></span>
                      </h3>
                    </div>
                  </div>
                </a>
              </Link>
              <div className="grains-feature-1-thq-feature2-elm1 thq-flex-column">
                <img
                  alt="Wheat"
                  src="/Grains and cereals/wheat-300h.jpg"
                  className="grains-feature-1-thq-feature2-image-elm1 thq-img-ratio-4-3"
                />
                <div className="grains-feature-1-thq-content-elm3 thq-flex-column">
                  <h3 className="thq-heading-3 grains-feature-1-thq-feature2-title-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_-O7Hg_'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="grains-feature-1-thq-feature3-elm1 thq-flex-column">
                <img
                  alt="Chana dal/Split chickpeas"
                  src="/Grains and cereals/chana%20dal-300h.webp"
                  className="grains-feature-1-thq-feature3-image-elm1 thq-img-ratio-4-3"
                />
                <div className="grains-feature-1-thq-content-elm4 thq-flex-column">
                  <h3 className="thq-heading-3 grains-feature-1-thq-feature3-title-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Title_E7ML23'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grains-feature-1-thq-max-width-elm2 thq-section-max-width">
          <div className="grains-feature-1-thq-content-elm5">
            <div className="grains-feature-1-thq-row-elm2 thq-flex-row">
              <div className="grains-feature-1-thq-feature2-elm2 thq-flex-column">
                <img
                  alt="Split Urad Dal"
                  src="/Grains and cereals/split%20urad%20dal-300h.jpg"
                  className="grains-feature-1-thq-feature2-image-elm2 thq-img-ratio-4-3"
                />
                <div className="grains-feature-1-thq-content-elm6 thq-flex-column">
                  <h3 className="thq-heading-3 grains-feature-1-thq-feature2-title-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_82rq3M'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="grains-feature-1-thq-feature2-elm3 thq-flex-column">
                <img
                  alt="Rajma/Kidney beans"
                  src="https://images.unsplash.com/photo-1763368397625-32c8f75fed44?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGtpZG5leSUyMGJlYW5zfGVufDB8fHx8MTc2NTczNDQ1Mnww&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="grains-feature-1-thq-feature2-image-elm3 thq-img-ratio-4-3"
                />
                <div className="grains-feature-1-thq-content-elm7 thq-flex-column">
                  <h3 className="thq-heading-3 grains-feature-1-thq-feature2-title-elm3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_qB5agd'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="grains-feature-1-thq-feature3-elm2 thq-flex-column">
                <img
                  alt="Whole Moong Dal"
                  src="/Grains and cereals/whole%20moong-300h.jpeg"
                  className="grains-feature-1-thq-feature3-image-elm2 thq-img-ratio-4-3"
                />
                <div className="grains-feature-1-thq-content-elm8 thq-flex-column">
                  <h3 className="thq-heading-3 grains-feature-1-thq-feature3-title-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Title_LKaeuo'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="grains-feature-1-thq-feature3-elm3 thq-flex-column">
                <img
                  alt="Split Moong Dal"
                  src="/Grains and cereals/split%20moong%20dal-300h.jpg"
                  className="grains-feature-1-thq-feature3-image-elm3 thq-img-ratio-4-3"
                />
                <div className="grains-feature-1-thq-content-elm9 thq-flex-column">
                  <h3 className="thq-heading-3 grains-feature-1-thq-feature3-title-elm3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Title_wBEumT'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .grains-feature-1-thq-layout251-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .grains-feature-1-thq-max-width-elm1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .grains-feature-1-thq-column-elm {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .grains-feature-1-thq-content-elm1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .grains-feature-1-thq-row-elm1 {
            align-items: flex-start;
          }
          .grains-feature-1-thq-feature1-elm {
            flex: 1;
            text-decoration: none;
          }
          .grains-feature-1-thq-feature1-image-elm {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .grains-feature-1-thq-content-elm2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .grains-feature-1-thq-feature2-elm1 {
            flex: 1;
          }
          .grains-feature-1-thq-feature2-image-elm1 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .grains-feature-1-thq-content-elm3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .grains-feature-1-thq-feature3-elm1 {
            flex: 1;
          }
          .grains-feature-1-thq-feature3-image-elm1 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .grains-feature-1-thq-content-elm4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .grains-feature-1-thq-max-width-elm2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .grains-feature-1-thq-content-elm5 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .grains-feature-1-thq-row-elm2 {
            align-items: flex-start;
          }
          .grains-feature-1-thq-feature2-elm2 {
            flex: 1;
            padding-top: var(--dl-layout-space-twounits);
          }
          .grains-feature-1-thq-feature2-image-elm2 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .grains-feature-1-thq-content-elm6 {
            align-self: stretch;
            align-items: flex-start;
          }
          .grains-feature-1-thq-feature2-elm3 {
            flex: 1;
            padding-top: var(--dl-layout-space-twounits);
          }
          .grains-feature-1-thq-feature2-image-elm3 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .grains-feature-1-thq-content-elm7 {
            align-self: stretch;
            align-items: flex-start;
          }
          .grains-feature-1-thq-feature3-elm2 {
            flex: 1;
            padding-top: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .grains-feature-1-thq-feature3-image-elm2 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .grains-feature-1-thq-content-elm8 {
            align-self: stretch;
            align-items: flex-start;
          }
          .grains-feature-1-thq-feature3-elm3 {
            flex: 1;
            padding-top: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .grains-feature-1-thq-feature3-image-elm3 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .grains-feature-1-thq-content-elm9 {
            align-self: stretch;
            align-items: flex-start;
          }

          @media (max-width: 991px) {
            .grains-feature-1-thq-section-title-elm {
              align-items: flex-start;
              flex-direction: column;
            }
            .grains-feature-1-thq-feature1-image-elm {
              height: 260px;
            }
            .grains-feature-1-thq-feature2-image-elm1 {
              height: 260px;
            }
            .grains-feature-1-thq-feature3-image-elm1 {
              height: 260px;
            }
            .grains-feature-1-thq-feature2-image-elm2 {
              height: 260px;
            }
            .grains-feature-1-thq-feature2-image-elm3 {
              height: 260px;
            }
            .grains-feature-1-thq-feature3-image-elm2 {
              height: 260px;
            }
            .grains-feature-1-thq-feature3-image-elm3 {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .grains-feature-1-thq-column-elm {
              width: 100%;
            }
            .grains-feature-1-thq-text-elm {
              font-size: 18px;
              text-align: center;
            }
            .grains-feature-1-thq-row-elm1 {
              flex-direction: column;
            }
            .grains-feature-1-thq-feature1-image-elm {
              width: 100%;
            }
            .grains-feature-1-thq-feature1-title-elm {
              font-size: 18px;
            }
            .grains-feature-1-thq-feature2-elm1 {
              width: auto;
            }
            .grains-feature-1-thq-feature2-image-elm1 {
              width: 100%;
            }
            .grains-feature-1-thq-feature2-title-elm1 {
              font-size: 18px;
            }
            .grains-feature-1-thq-feature3-elm1 {
              width: auto;
            }
            .grains-feature-1-thq-feature3-title-elm1 {
              font-size: 18px;
            }
            .grains-feature-1-thq-row-elm2 {
              flex-direction: column;
            }
            .grains-feature-1-thq-feature2-elm2 {
              width: auto;
            }
            .grains-feature-1-thq-feature2-image-elm2 {
              width: 100%;
            }
            .grains-feature-1-thq-feature2-title-elm2 {
              font-size: 18px;
            }
            .grains-feature-1-thq-feature2-elm3 {
              width: auto;
            }
            .grains-feature-1-thq-feature2-image-elm3 {
              width: 100%;
            }
            .grains-feature-1-thq-feature2-title-elm3 {
              font-size: 18px;
            }
            .grains-feature-1-thq-feature3-elm2 {
              width: auto;
            }
            .grains-feature-1-thq-feature3-title-elm2 {
              font-size: 22px;
            }
            .grains-feature-1-thq-feature3-elm3 {
              width: auto;
            }
            .grains-feature-1-thq-feature3-title-elm3 {
              font-size: 22px;
            }
          }
          @media (max-width: 344px) {
            .grains-feature-1-thq-text-elm {
              font-size: 20px;
            }
            .grains-feature-1-thq-feature1-title-elm {
              font-size: 20px;
            }
            .grains-feature-1-thq-feature2-title-elm1 {
              font-size: 20px;
            }
            .grains-feature-1-thq-feature3-title-elm1 {
              font-size: 20px;
            }
            .grains-feature-1-thq-feature2-title-elm2 {
              font-size: 20px;
            }
            .grains-feature-1-thq-feature2-title-elm3 {
              font-size: 20px;
            }
            .grains-feature-1-thq-feature3-title-elm2 {
              font-size: 20px;
            }
            .grains-feature-1-thq-feature3-title-elm3 {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

GrainsFeature1.defaultProps = {
  rootClassName: '',
}

GrainsFeature1.propTypes = {
  rootClassName: PropTypes.string,
}

export default GrainsFeature1
