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
                <span className="features4-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UZbWJS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="features4-row thq-grid-auto-300">
            <div className="features4-feature21">
              <Link href="/fruits">
                <a className="features4-link1">
                  <img
                    alt="Image showing secure payment options"
                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGZyZXNoJTIwZnJ1aXRzfGVufDB8fHx8MTc2MTMxODYyN3ww&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="features4-img21 thq-img-ratio-4-3"
                  />
                </a>
              </Link>
              <div className="features4-content1 thq-flex-column">
                <div className="features4-section-title1 thq-flex-column">
                  <strong className="features4-title21 thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features4-text17">
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
                        <span className="features4-text18">
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
                  <Link href="/fruits">
                    <a className="features4-link2 thq-button-flat">
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
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="features4-feature22">
              <Link href="/vegetables">
                <a className="features4-link3">
                  <img
                    alt="Image showing secure payment options"
                    src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGZyZXNoJTIwdmVnZXRhYmxlc3xlbnwwfHx8fDE3NjEzMTg2NjN8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="features4-img22 thq-img-ratio-4-3"
                  />
                </a>
              </Link>
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
                  <Link href="/vegetables">
                    <a className="features4-link4 thq-button-flat">
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
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="features4-feature23">
              <Link href="/spices">
                <a className="features4-link5">
                  <img
                    alt="Image showing secure payment options"
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHNwaWNlc3xlbnwwfHx8fDE3NjEzMTg2ODd8MA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="features4-img23 thq-img-ratio-4-3"
                  />
                </a>
              </Link>
              <div className="features4-content3 thq-flex-column">
                <div className="features4-section-title3 thq-flex-column">
                  <strong className="features4-title23 thq-heading-3">
                    {props.feature2Title2 ?? (
                      <Fragment>
                        <span className="features4-text16">
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
                        <span className="features4-text15">
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
                  <Link href="/spices">
                    <a className="features4-link6 thq-button-flat">
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
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="features4-feature24">
              <Link href="/dry-fruits">
                <a className="features4-link7">
                  <img
                    alt="Image showing secure payment options"
                    src="https://images.unsplash.com/photo-1616252576862-bd9abd7467f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fG51dHN8ZW58MHx8fHwxNzYxMzE4OTgzfDA&amp;ixlib=rb-4.1.0&amp;w=600"
                    className="features4-img24 thq-img-ratio-4-3"
                  />
                </a>
              </Link>
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
                  <Link href="/dry-fruits">
                    <a className="features4-link8 thq-button-flat">
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
                    </a>
                  </Link>
                </div>
              </div>
            </div>
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
          .features4-row {
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
          }
          .features4-link1 {
            display: contents;
          }
          .features4-img21 {
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
          .features4-link2 {
            text-decoration: none;
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
          }
          .features4-link3 {
            display: contents;
          }
          .features4-img22 {
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
          .features4-link4 {
            text-decoration: none;
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
          }
          .features4-link5 {
            display: contents;
          }
          .features4-img23 {
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
          .features4-link6 {
            text-decoration: none;
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
          }
          .features4-link7 {
            display: contents;
          }
          .features4-img24 {
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
          .features4-link8 {
            text-decoration: none;
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
          @media (max-width: 991px) {
            .features4-row {
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
  feature2Description2: PropTypes.element,
  feature2Title2: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default Features4
