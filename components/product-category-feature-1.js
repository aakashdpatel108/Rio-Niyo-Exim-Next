import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ProductCategoryFeature1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="product-category-feature-1-layout301 thq-section-padding">
        <div className="product-category-feature-1-max-width thq-section-max-width">
          <h2 className="product-category-feature-1-text1 thq-heading-2">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_1z36Hh'),
              }}
            ></span>
          </h2>
          <div className="product-category-feature-1-row1 thq-grid-auto-300">
            <Link href="/fruits">
              <a>
                <div className="product-category-feature-1-feature21">
                  <img
                    alt="Fruits"
                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGZyZXNoJTIwZnJ1aXRzfGVufDB8fHx8MTc2MTMxODYyN3ww&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="product-category-feature-1-content1 thq-flex-column">
                    <div className="product-category-feature-1-section-title1 thq-flex-column">
                      <strong className="product-category-feature-1-title21 thq-heading-3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_qA_II7'),
                          }}
                        ></span>
                      </strong>
                      <span className="product-category-feature-1-description21 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ix4_7n'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="product-category-feature-1-action1 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small product-category-feature-1-action21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_0Oydqg'),
                            }}
                          ></span>
                        </span>
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/vegetables">
              <a>
                <div className="product-category-feature-1-feature22">
                  <img
                    alt="Vegetables"
                    src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGZyZXNoJTIwdmVnZXRhYmxlc3xlbnwwfHx8fDE3NjEzMTg2NjN8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="product-category-feature-1-content2 thq-flex-column">
                    <div className="product-category-feature-1-section-title2 thq-flex-column">
                      <strong className="product-category-feature-1-title22 thq-heading-3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_YZ1nT-'),
                          }}
                        ></span>
                      </strong>
                      <span className="product-category-feature-1-description22 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_tCcGGR'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="product-category-feature-1-action3 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small product-category-feature-1-action22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_tOVdxS'),
                            }}
                          ></span>
                        </span>
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/spices">
              <a>
                <div className="product-category-feature-1-feature23">
                  <img
                    alt="Spices"
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHNwaWNlc3xlbnwwfHx8fDE3NjEzMTg2ODd8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="product-category-feature-1-content3 thq-flex-column">
                    <div className="product-category-feature-1-section-title3 thq-flex-column">
                      <strong className="product-category-feature-1-title23 thq-heading-3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_wfjC81'),
                          }}
                        ></span>
                      </strong>
                      <span className="product-category-feature-1-description23 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_WctWdl'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="product-category-feature-1-action4 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small product-category-feature-1-action23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_6S8WSC'),
                            }}
                          ></span>
                        </span>
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/dry-fruits">
              <a>
                <div className="product-category-feature-1-feature24">
                  <img
                    alt="nuts and dried fruits"
                    src="https://images.unsplash.com/photo-1616252576862-bd9abd7467f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fG51dHN8ZW58MHx8fHwxNzYxMzE4OTgzfDA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="product-category-feature-1-content4 thq-flex-column">
                    <div className="product-category-feature-1-section-title4 thq-flex-column">
                      <strong className="product-category-feature-1-title24 thq-heading-3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_J7dzxl'),
                          }}
                        ></span>
                      </strong>
                      <span className="product-category-feature-1-description24 thq-body-small">
                        {props.feature2Description1 ?? (
                          <Fragment>
                            <span className="product-category-feature-1-text2">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_EslWDy'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="product-category-feature-1-action5 thq-flex-row">
                      <button className="thq-button-flat product-category-feature-1-button4">
                        <span className="thq-body-small product-category-feature-1-action24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_7FySmb'),
                            }}
                          ></span>
                        </span>
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="product-category-feature-1-row2 thq-grid-auto-300">
            <Link href="/grains-and-cereal">
              <a>
                <div className="product-category-feature-1-feature25">
                  <img
                    alt="Grains &amp; Cereals"
                    src="https://images.unsplash.com/photo-1621956838481-f8f616950454?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGdyYWluc3xlbnwwfHx8fDE3NjIxMDM1Mzl8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="product-category-feature-1-content5 thq-flex-column">
                    <div className="product-category-feature-1-section-title5 thq-flex-column">
                      <strong className="product-category-feature-1-title25 thq-heading-3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_eElsNP'),
                          }}
                        ></span>
                      </strong>
                      <span className="product-category-feature-1-description25 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_91-NRj'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="product-category-feature-1-action6 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small product-category-feature-1-action25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('action2_QZ3mJs'),
                            }}
                          ></span>
                        </span>
                        <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                          <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <div className="product-category-feature-1-feature26">
              <img
                alt="pulses"
                src="https://images.unsplash.com/photo-1705475388190-775066fd69a5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHB1bHNlc3xlbnwwfHx8fDE3NjIwNDA4MDN8MA&amp;ixlib=rb-4.1.0&amp;h=800"
                className="thq-img-ratio-4-3"
              />
              <div className="product-category-feature-1-content6 thq-flex-column">
                <div className="product-category-feature-1-section-title6 thq-flex-column">
                  <strong className="product-category-feature-1-title26 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tIOYIp'),
                      }}
                    ></span>
                  </strong>
                  <span className="product-category-feature-1-description26 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_xTsS_w'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="product-category-feature-1-action7 thq-flex-row">
                  <button className="thq-button-flat">
                    <span className="thq-body-small product-category-feature-1-action26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('action2_xsjkOr'),
                        }}
                      ></span>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .product-category-feature-1-layout301 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .product-category-feature-1-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .product-category-feature-1-text1 {
            text-align: center;
          }
          .product-category-feature-1-row1 {
            width: 100%;
          }
          .product-category-feature-1-feature21 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            text-decoration: none;
          }
          .product-category-feature-1-content1 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-section-title1 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-title21 {
            text-align: center;
          }
          .product-category-feature-1-description21 {
            text-align: center;
          }
          .product-category-feature-1-action1 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .product-category-feature-1-feature22 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            text-decoration: none;
          }
          .product-category-feature-1-content2 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-section-title2 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-title22 {
            text-align: center;
          }
          .product-category-feature-1-description22 {
            text-align: center;
          }
          .product-category-feature-1-action3 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .product-category-feature-1-feature23 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            text-decoration: none;
          }
          .product-category-feature-1-content3 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-section-title3 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-title23 {
            text-align: center;
          }
          .product-category-feature-1-description23 {
            text-align: center;
          }
          .product-category-feature-1-action4 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .product-category-feature-1-feature24 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            text-decoration: none;
          }
          .product-category-feature-1-content4 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-section-title4 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-title24 {
            text-align: center;
          }
          .product-category-feature-1-description24 {
            text-align: center;
          }
          .product-category-feature-1-action5 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .product-category-feature-1-row2 {
            width: 100%;
          }
          .product-category-feature-1-feature25 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            text-decoration: none;
          }
          .product-category-feature-1-content5 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-section-title5 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-title25 {
            text-align: center;
          }
          .product-category-feature-1-description25 {
            text-align: center;
          }
          .product-category-feature-1-action6 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .product-category-feature-1-feature26 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            height: 704px;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            text-decoration: none;
          }
          .product-category-feature-1-content6 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-section-title6 {
            align-self: stretch;
            align-items: center;
          }
          .product-category-feature-1-title26 {
            text-align: center;
          }
          .product-category-feature-1-description26 {
            text-align: center;
          }
          .product-category-feature-1-action7 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .product-category-feature-1-text2 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .product-category-feature-1-row1 {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .product-category-feature-1-feature21 {
              width: 100%;
            }
            .product-category-feature-1-feature22 {
              width: 100%;
            }
            .product-category-feature-1-feature23 {
              width: 100%;
            }
            .product-category-feature-1-title23 {
              font-size: 30px;
            }
            .product-category-feature-1-description23 {
              font-size: 15px;
            }
            .product-category-feature-1-action23 {
              font-size: 15px;
            }
            .product-category-feature-1-feature24 {
              width: 100%;
            }
            .product-category-feature-1-title24 {
              font-size: 30px;
            }
            .product-category-feature-1-description24 {
              font-size: 15px;
            }
            .product-category-feature-1-action24 {
              font-size: 15px;
            }
            .product-category-feature-1-row2 {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .product-category-feature-1-feature25 {
              width: 100%;
            }
            .product-category-feature-1-title25 {
              font-size: 30px;
            }
            .product-category-feature-1-description25 {
              font-size: 15px;
            }
            .product-category-feature-1-action25 {
              font-size: 15px;
            }
            .product-category-feature-1-feature26 {
              width: 100%;
            }
            .product-category-feature-1-title26 {
              font-size: 30px;
            }
            .product-category-feature-1-description26 {
              font-size: 15px;
            }
            .product-category-feature-1-action26 {
              font-size: 15px;
            }
          }
          @media (max-width: 767px) {
            .product-category-feature-1-text1 {
              font-size: 25px;
              text-align: center;
            }
            .product-category-feature-1-title21 {
              font-size: 25px;
            }
            .product-category-feature-1-description21 {
              font-size: 12px;
            }
            .product-category-feature-1-action21 {
              font-size: 12px;
            }
            .product-category-feature-1-title22 {
              font-size: 25px;
            }
            .product-category-feature-1-description22 {
              font-size: 12px;
            }
            .product-category-feature-1-action22 {
              font-size: 12px;
            }
            .product-category-feature-1-title23 {
              font-size: 25px;
            }
            .product-category-feature-1-description23 {
              font-size: 12px;
            }
            .product-category-feature-1-action23 {
              font-size: 12px;
            }
            .product-category-feature-1-title24 {
              font-size: 25px;
            }
            .product-category-feature-1-description24 {
              font-size: 12px;
            }
            .product-category-feature-1-action24 {
              font-size: 12px;
            }
            .product-category-feature-1-title25 {
              font-size: 25px;
            }
            .product-category-feature-1-description25 {
              font-size: 12px;
            }
            .product-category-feature-1-action25 {
              font-size: 12px;
            }
            .product-category-feature-1-title26 {
              font-size: 25px;
            }
            .product-category-feature-1-description26 {
              font-size: 12px;
            }
            .product-category-feature-1-action26 {
              font-size: 12px;
            }
          }
          @media (max-width: 479px) {
            .product-category-feature-1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 344px) {
            .product-category-feature-1-text1 {
              font-size: 25px;
            }
            .product-category-feature-1-title21 {
              font-size: 25px;
            }
            .product-category-feature-1-description21 {
              font-size: 12px;
            }
            .product-category-feature-1-title22 {
              font-size: 25px;
            }
            .product-category-feature-1-description22 {
              font-size: 12px;
            }
            .product-category-feature-1-button4 {
              font-size: 12px;
            }
            .product-category-feature-1-action24 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

ProductCategoryFeature1.defaultProps = {
  feature2Description1: undefined,
}

ProductCategoryFeature1.propTypes = {
  feature2Description1: PropTypes.element,
}

export default ProductCategoryFeature1
