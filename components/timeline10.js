import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Timeline10 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline10-max-width thq-section-max-width">
          <div className="timeline10-container11">
            <h2 className="timeline10-text10 thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span className="timeline10-text50">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_M6MHMv'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="timeline10-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline10-text47">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_LofuQ5'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline10-container12">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="timeline10-text48">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_r2vmHy'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button type="button" className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="timeline10-text51">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Q7W2rf'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline10-timeline-container">
            <div className="timeline10-step1">
              <div className="timeline10-container13">
                <div className="timeline10-container14"></div>
                <div className="timeline10-progress01"></div>
              </div>
              <div className="timeline10-container15">
                <h3 className="thq-heading-3">
                  {props.card1Date ?? (
                    <Fragment>
                      <span className="timeline10-text41">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_t8LBen'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline10-text15 thq-heading-3">
                  {props.card1Heading ?? (
                    <Fragment>
                      <span className="timeline10-text49">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_IpDEb7'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline10-text54">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_IJ3e9Y'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline10-container16">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline10-text34">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_tPsTVk'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card1Action2 ?? (
                        <Fragment>
                          <span className="timeline10-text55">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_HAZ7zP'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline10-step2">
              <div className="timeline10-container17">
                <div className="timeline10-container18"></div>
                <div className="timeline10-progress02"></div>
              </div>
              <div className="timeline10-container19">
                <h3 className="thq-heading-3">
                  {props.card2Date ?? (
                    <Fragment>
                      <span className="timeline10-text43">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_nW3Dt5'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline10-text20 thq-heading-3">
                  {props.card2Heading ?? (
                    <Fragment>
                      <span className="timeline10-text37">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_v9aOXV'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="timeline10-text21 thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline10-text46">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NzOOk4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline10-container20">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline10-text53">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_sCgBbQ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card2Action2 ?? (
                        <Fragment>
                          <span className="timeline10-text38">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Spk-UD'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline10-step3">
              <div className="timeline10-container21">
                <div className="timeline10-container22"></div>
                <div className="timeline10-progress03"></div>
              </div>
              <div className="timeline10-container23">
                <h3 className="thq-heading-3">
                  {props.card3Date ?? (
                    <Fragment>
                      <span className="timeline10-text42">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_E8Unq1'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline10-text25 thq-heading-3">
                  {props.card3Heading ?? (
                    <Fragment>
                      <span className="timeline10-text36">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_257z_t'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline10-text52">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_nKyZco'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline10-container24">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline10-text39">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6_Grve'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card3Action2 ?? (
                        <Fragment>
                          <span className="timeline10-text57">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_gLN40D'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline10-step4">
              <div className="timeline10-container25">
                <div className="timeline10-container26"></div>
                <div className="timeline10-progress04"></div>
              </div>
              <div className="timeline10-container27">
                <h3 className="thq-heading-3">
                  {props.card4Date ?? (
                    <Fragment>
                      <span className="timeline10-text35">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_OwjITv'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline10-text30 thq-heading-3">
                  {props.card4Heading ?? (
                    <Fragment>
                      <span className="timeline10-text44">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8a5yi_'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="timeline10-text31 thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline10-text45">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text__fxtIP'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline10-container28">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline10-text56">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_rV9s7D'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card4Action2 ?? (
                        <Fragment>
                          <span className="timeline10-text40">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Bl7qB4'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline10-max-width {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline10-container11 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .timeline10-text10 {
            text-align: center;
          }
          .timeline10-text11 {
            text-align: center;
          }
          .timeline10-container12 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-timeline-container {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline10-step1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .timeline10-container13 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline10-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-progress01 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-container15 {
            gap: var(--dl-layout-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline10-text15 {
            text-align: left;
          }
          .timeline10-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-step2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline10-container17 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline10-container18 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-progress02 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-container19 {
            gap: var(--dl-layout-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-end;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline10-text20 {
            text-align: right;
          }
          .timeline10-text21 {
            text-align: right;
          }
          .timeline10-container20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-step3 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .timeline10-container21 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline10-container22 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-progress03 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-container23 {
            gap: var(--dl-layout-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline10-text25 {
            text-align: left;
          }
          .timeline10-container24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-step4 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline10-container25 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline10-container26 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-progress04 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-container27 {
            gap: var(--dl-layout-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-end;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline10-text30 {
            text-align: right;
          }
          .timeline10-text31 {
            text-align: right;
          }
          .timeline10-container28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-text34 {
            display: inline-block;
          }
          .timeline10-text35 {
            display: inline-block;
          }
          .timeline10-text36 {
            display: inline-block;
          }
          .timeline10-text37 {
            display: inline-block;
          }
          .timeline10-text38 {
            display: inline-block;
          }
          .timeline10-text39 {
            display: inline-block;
          }
          .timeline10-text40 {
            display: inline-block;
          }
          .timeline10-text41 {
            display: inline-block;
          }
          .timeline10-text42 {
            display: inline-block;
          }
          .timeline10-text43 {
            display: inline-block;
          }
          .timeline10-text44 {
            display: inline-block;
          }
          .timeline10-text45 {
            display: inline-block;
          }
          .timeline10-text46 {
            display: inline-block;
          }
          .timeline10-text47 {
            display: inline-block;
          }
          .timeline10-text48 {
            display: inline-block;
          }
          .timeline10-text49 {
            display: inline-block;
          }
          .timeline10-text50 {
            display: inline-block;
          }
          .timeline10-text51 {
            display: inline-block;
          }
          .timeline10-text52 {
            display: inline-block;
          }
          .timeline10-text53 {
            display: inline-block;
          }
          .timeline10-text54 {
            display: inline-block;
          }
          .timeline10-text55 {
            display: inline-block;
          }
          .timeline10-text56 {
            display: inline-block;
          }
          .timeline10-text57 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .timeline10-text11 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline10-container13 {
              right: auto;
            }
            .timeline10-container15 {
              width: 100%;
              padding-left: var(--dl-layout-space-threeunits);
            }
            .timeline10-text15 {
              text-align: left;
            }
            .timeline10-container17 {
              right: auto;
            }
            .timeline10-container19 {
              width: 100%;
              align-items: flex-start;
              padding-left: var(--dl-layout-space-threeunits);
            }
            .timeline10-text20 {
              text-align: left;
            }
            .timeline10-text21 {
              text-align: left;
            }
            .timeline10-container21 {
              right: auto;
            }
            .timeline10-container23 {
              width: 100%;
              padding-left: var(--dl-layout-space-threeunits);
            }
            .timeline10-text25 {
              text-align: left;
            }
            .timeline10-container25 {
              right: auto;
            }
            .timeline10-container27 {
              width: 100%;
              align-items: flex-start;
              padding-left: var(--dl-layout-space-threeunits);
            }
            .timeline10-text30 {
              text-align: left;
            }
            .timeline10-text31 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline10-container12 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline10-container16 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline10-container20 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline10-container24 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline10-container28 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline10.defaultProps = {
  card1Action1: undefined,
  card4Date: undefined,
  card3Heading: undefined,
  card2Heading: undefined,
  card2Action2: undefined,
  card3Action1: undefined,
  card4Action2: undefined,
  card1Date: undefined,
  card3Date: undefined,
  card2Date: undefined,
  card4Heading: undefined,
  card4Content: undefined,
  card2Content: undefined,
  content1: undefined,
  action1: undefined,
  card1Heading: undefined,
  title1: undefined,
  action2: undefined,
  card3Content: undefined,
  card2Action1: undefined,
  card1Content: undefined,
  card1Action2: undefined,
  card4Action1: undefined,
  card3Action2: undefined,
}

Timeline10.propTypes = {
  card1Action1: PropTypes.element,
  card4Date: PropTypes.element,
  card3Heading: PropTypes.element,
  card2Heading: PropTypes.element,
  card2Action2: PropTypes.element,
  card3Action1: PropTypes.element,
  card4Action2: PropTypes.element,
  card1Date: PropTypes.element,
  card3Date: PropTypes.element,
  card2Date: PropTypes.element,
  card4Heading: PropTypes.element,
  card4Content: PropTypes.element,
  card2Content: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  card1Heading: PropTypes.element,
  title1: PropTypes.element,
  action2: PropTypes.element,
  card3Content: PropTypes.element,
  card2Action1: PropTypes.element,
  card1Content: PropTypes.element,
  card1Action2: PropTypes.element,
  card4Action1: PropTypes.element,
  card3Action2: PropTypes.element,
}

export default Timeline10
