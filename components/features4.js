import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features4-layout301 thq-section-padding">
        <div className="features4-max-width thq-section-max-width">
          <h2 className="features4-text10 thq-heading-2">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features4-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UZbWJS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="features4-row1 thq-grid-auto-300">
            <Link href="/fruits">
              <a>
                <div className="features4-feature21">
                  <img
                    alt="Fruits"
                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGZyZXNoJTIwZnJ1aXRzfGVufDB8fHx8MTc2MTMxODYyN3ww&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="features4-content1 thq-flex-column">
                    <div className="features4-section-title1 thq-flex-column">
                      <strong className="features4-title21 thq-heading-3">
                        {props.feature2Title ?? (
                          <Fragment>
                            <span className="features4-text18">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_w94CmI'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="features4-description21 thq-body-small">
                        {props.feature2Description ?? (
                          <Fragment>
                            <span className="features4-text19">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_P4uKip'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="features4-action1 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small">
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
                <div className="features4-feature22">
                  <img
                    alt="Vegetables"
                    src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGZyZXNoJTIwdmVnZXRhYmxlc3xlbnwwfHx8fDE3NjEzMTg2NjN8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="features4-content2 thq-flex-column">
                    <div className="features4-section-title2 thq-flex-column">
                      <strong className="features4-title22 thq-heading-3">
                        {props.feature2Title3 ?? (
                          <Fragment>
                            <span className="features4-text11">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_KTLn-T'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="features4-description22 thq-body-small">
                        {props.feature2Description3 ?? (
                          <Fragment>
                            <span className="features4-text14">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_uo2ubm'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="features4-action3 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small">
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
                <div className="features4-feature23">
                  <img
                    alt="Spices"
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHNwaWNlc3xlbnwwfHx8fDE3NjEzMTg2ODd8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="features4-content3 thq-flex-column">
                    <div className="features4-section-title3 thq-flex-column">
                      <strong className="features4-title23 thq-heading-3">
                        {props.feature2Title2 ?? (
                          <Fragment>
                            <span className="features4-text17">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_eObcqD'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="features4-description23 thq-body-small">
                        {props.feature2Description2 ?? (
                          <Fragment>
                            <span className="features4-text16">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_GAd4vg'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="features4-action4 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small">
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
                <div className="features4-feature24">
                  <img
                    alt="nuts and dried fruits"
                    src="https://images.unsplash.com/photo-1616252576862-bd9abd7467f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fG51dHN8ZW58MHx8fHwxNzYxMzE4OTgzfDA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="features4-content4 thq-flex-column">
                    <div className="features4-section-title4 thq-flex-column">
                      <strong className="features4-title24 thq-heading-3">
                        {props.feature2Title1 ?? (
                          <Fragment>
                            <span className="features4-text12">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_4wg4FO'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="features4-description24 thq-body-small">
                        {props.feature2Description1 ?? (
                          <Fragment>
                            <span className="features4-text13">
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
                    <div className="features4-action5 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small">
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
          <div className="features4-row2 thq-grid-auto-300">
            <Link href="/grains-and-cereal">
              <a>
                <div className="features4-feature25">
                  <img
                    alt="Grains &amp; Cereals"
                    src="https://images.unsplash.com/photo-1621956838481-f8f616950454?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGdyYWluc3xlbnwwfHx8fDE3NjIxMDM1Mzl8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="features4-content5 thq-flex-column">
                    <div className="features4-section-title5 thq-flex-column">
                      <strong className="features4-title25 thq-heading-3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_eElsNP'),
                          }}
                        ></span>
                      </strong>
                      <span className="features4-description25 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_91-NRj'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="features4-action6 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small">
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
            <Link href="/pulses">
              <a>
                <div className="features4-feature26">
                  <img
                    alt="pulses"
                    src="https://images.unsplash.com/photo-1705475388190-775066fd69a5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHB1bHNlc3xlbnwwfHx8fDE3NjIwNDA4MDN8MA&amp;ixlib=rb-4.1.0&amp;h=800"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="features4-content6 thq-flex-column">
                    <div className="features4-section-title6 thq-flex-column">
                      <strong className="features4-title26 thq-heading-3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_tIOYIp'),
                          }}
                        ></span>
                      </strong>
                      <span className="features4-description26 thq-body-small">
                        {props.feature2Description31 ?? (
                          <Fragment>
                            <span className="features4-text15">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_3Q0hrF'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="features4-action7 thq-flex-row">
                      <button className="thq-button-flat">
                        <span className="thq-body-small">
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
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features4-layout301 {
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
          .features4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features4-text10 {
            text-align: center;
          }
          .features4-row1 {
            width: 100%;
          }
          .features4-feature21 {
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
          .features4-content1 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title1 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title21 {
            text-align: center;
          }
          .features4-description21 {
            text-align: center;
          }
          .features4-action1 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-feature22 {
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
          .features4-content2 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title2 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title22 {
            text-align: center;
          }
          .features4-description22 {
            text-align: center;
          }
          .features4-action3 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-feature23 {
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
          .features4-content3 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title3 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title23 {
            text-align: center;
          }
          .features4-description23 {
            text-align: center;
          }
          .features4-action4 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-feature24 {
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
          .features4-content4 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title4 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title24 {
            text-align: center;
          }
          .features4-description24 {
            text-align: center;
          }
          .features4-action5 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-row2 {
            width: 100%;
          }
          .features4-feature25 {
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
          .features4-content5 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title5 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title25 {
            text-align: center;
          }
          .features4-description25 {
            text-align: center;
          }
          .features4-action6 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-feature26 {
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
          .features4-content6 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title6 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title26 {
            text-align: center;
          }
          .features4-description26 {
            text-align: center;
          }
          .features4-action7 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-text11 {
            display: inline-block;
          }
          .features4-text12 {
            display: inline-block;
          }
          .features4-text13 {
            display: inline-block;
          }
          .features4-text14 {
            display: inline-block;
          }
          .features4-text15 {
            display: inline-block;
          }
          .features4-text16 {
            display: inline-block;
          }
          .features4-text17 {
            display: inline-block;
          }
          .features4-text18 {
            display: inline-block;
          }
          .features4-text19 {
            display: inline-block;
          }
          .features4-text20 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features4-row1 {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .features4-feature21 {
              width: 100%;
            }
            .features4-feature22 {
              width: 100%;
            }
            .features4-feature23 {
              width: 100%;
            }
            .features4-feature24 {
              width: 100%;
            }
            .features4-row2 {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .features4-feature25 {
              width: 100%;
            }
            .features4-feature26 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features4-text10 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features4-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Features4.defaultProps = {
  feature2Title3: undefined,
  feature2Title1: undefined,
  feature2Description1: undefined,
  feature2Description3: undefined,
  feature2Description31: undefined,
  feature2Description2: undefined,
  feature2Title2: undefined,
  feature2Title: undefined,
  feature2Description: undefined,
  sectionTitle: undefined,
}

Features4.propTypes = {
  feature2Title3: PropTypes.element,
  feature2Title1: PropTypes.element,
  feature2Description1: PropTypes.element,
  feature2Description3: PropTypes.element,
  feature2Description31: PropTypes.element,
  feature2Description2: PropTypes.element,
  feature2Title2: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default Features4
