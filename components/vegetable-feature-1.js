import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const VegetableFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`vegetable-feature-1-thq-layout251-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="vegetable-feature-1-thq-max-width-elm thq-section-max-width">
          <div className="thq-flex-row vegetable-feature-1-thq-section-title-elm">
            <div className="vegetable-feature-1-thq-column-elm thq-flex-column">
              <h2 className="thq-heading-2 vegetable-feature-1-thq-text-elm">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CQW7Kd'),
                  }}
                ></span>
              </h2>
            </div>
          </div>
          <div className="vegetable-feature-1-thq-content-elm10">
            <div className="vegetable-feature-1-thq-row-elm1 thq-flex-row">
              <div className="vegetable-feature-1-thq-feature1-elm1 thq-flex-column">
                <img
                  alt="Onion"
                  src="https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fG9uaW9uc3xlbnwwfHx8fDE3NjIwMzg1MTl8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="vegetable-feature-1-thq-feature1-image-elm1 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm11 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature1-title-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_kdFr9V'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="vegetable-feature-1-thq-feature2-elm1 thq-flex-column">
                <img
                  alt="Green Chilli"
                  src="https://images.unsplash.com/photo-1524593410820-38510f580a77?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGdyZWVuJTIwY2hpbGxpfGVufDB8fHx8MTc2MjAzODUzN3ww&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="vegetable-feature-1-thq-feature2-image-elm1 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm12 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature2-title-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_G10Ptr'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="vegetable-feature-1-thq-feature3-elm1 thq-flex-column">
                <img
                  alt="Lady Finger"
                  src="https://images.unsplash.com/photo-1664289242854-e99d345cfa92?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGxhZHklMjBmaW5nZXJ8ZW58MHx8fHwxNzYyMDM4NTU2fDA&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="vegetable-feature-1-thq-feature3-image-elm1 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm13 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature3-title-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Title_biHwnT'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="vegetable-feature-1-thq-row-elm2 thq-flex-row">
              <div className="vegetable-feature-1-thq-feature1-elm2 thq-flex-column">
                <img
                  alt="Potato"
                  src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFBvdGF0b3xlbnwwfHx8fDE3NjYwNjg0NTZ8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="vegetable-feature-1-thq-feature1-image-elm2 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm14 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature1-title-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_HY-Q1n'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="vegetable-feature-1-thq-feature2-elm2 thq-flex-column">
                <img
                  alt="Indian Eggplant"
                  src="https://images.unsplash.com/photo-1694152417806-e42b0d469990?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxlZ2dwbGFudCUyMGluZGlhbnxlbnwwfHx8fDE3NjYwNjg1MjV8MA&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="vegetable-feature-1-thq-feature2-image-elm2 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm15 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature2-title-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_WX0u0o'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="vegetable-feature-1-thq-feature3-elm2 thq-flex-column">
                <img
                  alt="Tindora"
                  src="/Veg/young-ivy-gourd-tindora-300h.webp"
                  className="vegetable-feature-1-thq-feature3-image-elm2 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm16 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature3-title-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Title_V37cd3'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="vegetable-feature-1-thq-row-elm3 thq-flex-row">
              <div className="vegetable-feature-1-thq-feature1-elm3 thq-flex-column">
                <img
                  alt="Drumstick"
                  src="/Veg/drumsticks-1400w.webp"
                  className="vegetable-feature-1-thq-feature1-image-elm3 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm17 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature1-title-elm3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_3tSQd3'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="vegetable-feature-1-thq-feature2-elm3 thq-flex-column">
                <img
                  alt="Bitter Gourd/Karela"
                  src="/Veg/karela-300h.jpg"
                  className="vegetable-feature-1-thq-feature2-image-elm3 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm18 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature2-title-elm3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_2RoF_-'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="vegetable-feature-1-thq-feature3-elm3 thq-flex-column">
                <img
                  alt="Ginger"
                  src="https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGdpbmdlcnxlbnwwfHx8fDE3NjYwNjgwNDR8MA&amp;ixlib=rb-4.1.0&amp;h=300"
                  className="vegetable-feature-1-thq-feature3-image-elm3 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm19 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature3-title-elm3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Title_bsoTQz'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="vegetable-feature-1-thq-row-elm4 thq-flex-row">
              <div className="vegetable-feature-1-thq-feature1-elm4 thq-flex-column">
                <img
                  alt="Dry\xA0Garlic"
                  src="https://images.unsplash.com/photo-1615477550927-6ec8445fcfe6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGdhcmxpY3xlbnwwfHx8fDE3NjYwNjk0NzV8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
                  className="vegetable-feature-1-thq-feature1-image-elm4 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm20 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature1-title-elm4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature1Title_UI3T_f'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="vegetable-feature-1-thq-feature2-elm4 thq-flex-column">
                <img
                  alt="Elephant Yam / Suran"
                  src="/Veg/elephant%20yam%20suran-300h.webp"
                  className="vegetable-feature-1-thq-feature2-image-elm4 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm21 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature2-title-elm4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature2Title_7f61IQ'),
                      }}
                    ></span>
                  </h3>
                </div>
              </div>
              <div className="vegetable-feature-1-thq-feature3-elm4 thq-flex-column">
                <img
                  alt="Purple Yam / Ratalu"
                  src="/Veg/ratalu-300h.jpg"
                  className="vegetable-feature-1-thq-feature3-image-elm4 thq-img-ratio-4-3"
                />
                <div className="vegetable-feature-1-thq-content-elm22 thq-flex-column">
                  <h3 className="thq-heading-3 vegetable-feature-1-thq-feature3-title-elm4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('feature3Title_wkTk08'),
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
          .vegetable-feature-1-thq-layout251-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .vegetable-feature-1-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .vegetable-feature-1-thq-column-elm {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .vegetable-feature-1-thq-content-elm10 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .vegetable-feature-1-thq-row-elm1 {
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature1-elm1 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature1-image-elm1 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .vegetable-feature-1-thq-feature2-elm1 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature2-image-elm1 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm12 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature3-elm1 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature3-image-elm1 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm13 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-row-elm2 {
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature1-elm2 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature1-image-elm2 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm14 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature2-elm2 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature2-image-elm2 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm15 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature3-elm2 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature3-image-elm2 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm16 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-row-elm3 {
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature1-elm3 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature1-image-elm3 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm17 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature2-elm3 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature2-image-elm3 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm18 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature3-elm3 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature3-image-elm3 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm19 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-row-elm4 {
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature1-elm4 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature1-image-elm4 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm20 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature2-elm4 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature2-image-elm4 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm21 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .vegetable-feature-1-thq-feature3-elm4 {
            flex: 1;
          }
          .vegetable-feature-1-thq-feature3-image-elm4 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vegetable-feature-1-thq-content-elm22 {
            gap: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }

          @media (max-width: 991px) {
            .vegetable-feature-1-thq-section-title-elm {
              align-items: flex-start;
              flex-direction: column;
            }
            .vegetable-feature-1-thq-feature1-image-elm1 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature2-image-elm1 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature3-image-elm1 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature1-image-elm2 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature2-image-elm2 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature3-image-elm2 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature1-image-elm3 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature2-image-elm3 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature3-image-elm3 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature1-image-elm4 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature2-image-elm4 {
              height: 260px;
            }
            .vegetable-feature-1-thq-feature3-image-elm4 {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .vegetable-feature-1-thq-column-elm {
              width: 100%;
            }
            .vegetable-feature-1-thq-text-elm {
              font-size: 25px;
              text-align: center;
            }
            .vegetable-feature-1-thq-row-elm1 {
              flex-direction: column;
            }
            .vegetable-feature-1-thq-feature1-image-elm1 {
              width: 100%;
            }
            .vegetable-feature-1-thq-feature1-title-elm1 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature2-elm1 {
              width: auto;
            }
            .vegetable-feature-1-thq-feature2-image-elm1 {
              width: 100%;
            }
            .vegetable-feature-1-thq-feature2-title-elm1 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature3-elm1 {
              width: auto;
            }
            .vegetable-feature-1-thq-feature3-title-elm1 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-row-elm2 {
              flex-direction: column;
            }
            .vegetable-feature-1-thq-feature1-image-elm2 {
              width: 100%;
            }
            .vegetable-feature-1-thq-feature1-title-elm2 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature2-elm2 {
              width: auto;
            }
            .vegetable-feature-1-thq-feature2-image-elm2 {
              width: 100%;
            }
            .vegetable-feature-1-thq-feature2-title-elm2 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature3-elm2 {
              width: auto;
            }
            .vegetable-feature-1-thq-feature3-title-elm2 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-row-elm3 {
              flex-direction: column;
            }
            .vegetable-feature-1-thq-feature1-image-elm3 {
              width: 100%;
            }
            .vegetable-feature-1-thq-feature1-title-elm3 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature2-elm3 {
              width: auto;
            }
            .vegetable-feature-1-thq-feature2-image-elm3 {
              width: 100%;
            }
            .vegetable-feature-1-thq-feature2-title-elm3 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature3-elm3 {
              width: auto;
            }
            .vegetable-feature-1-thq-feature3-title-elm3 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-row-elm4 {
              flex-direction: column;
            }
            .vegetable-feature-1-thq-feature1-image-elm4 {
              width: 100%;
            }
            .vegetable-feature-1-thq-feature1-title-elm4 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature2-elm4 {
              width: auto;
            }
            .vegetable-feature-1-thq-feature2-image-elm4 {
              width: 100%;
            }
            .vegetable-feature-1-thq-feature2-title-elm4 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature3-elm4 {
              width: auto;
            }
            .vegetable-feature-1-thq-feature3-title-elm4 {
              font-size: 18px;
            }
          }
          @media (max-width: 344px) {
            .vegetable-feature-1-thq-text-elm {
              font-size: 25px;
            }
            .vegetable-feature-1-thq-feature1-title-elm1 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature2-title-elm1 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature3-title-elm1 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature1-title-elm2 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature2-title-elm2 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature3-title-elm2 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature1-title-elm3 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature2-title-elm3 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature3-title-elm3 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature1-title-elm4 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature2-title-elm4 {
              font-size: 18px;
            }
            .vegetable-feature-1-thq-feature3-title-elm4 {
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  )
}

VegetableFeature1.defaultProps = {
  rootClassName: '',
}

VegetableFeature1.propTypes = {
  rootClassName: PropTypes.string,
}

export default VegetableFeature1
