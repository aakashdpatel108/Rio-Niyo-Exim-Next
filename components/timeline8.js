import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Timeline8 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline8-max-width thq-section-max-width">
          <div className="timeline8-container11">
            <h2 className="timeline8-text10 thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span className="timeline8-text53">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Em73uN'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="timeline8-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline8-text42">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ssHomq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline8-container12">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="timeline8-text43">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ib4jco'),
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
                      <span className="timeline8-text51">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_V6fRl4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline8-timeline-container">
            <div className="timeline8-step1">
              <div className="timeline8-container13">
                <div className="timeline8-container14"></div>
                <div className="timeline8-progress01"></div>
              </div>
              <div className="timeline8-container15">
                <div className="timeline8-container16 thq-card">
                  <h3 className="thq-heading-3">
                    {props.date1 ?? (
                      <Fragment>
                        <span className="timeline8-text36">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_W0fAdH'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <h3 className="timeline8-text15 thq-heading-3">
                    {props.card1Heading ?? (
                      <Fragment>
                        <span className="timeline8-text49">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_zqL-Ih'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.card1Content ?? (
                      <Fragment>
                        <span className="timeline8-text57">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_GGb9It'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="timeline8-container17">
                    <button type="button" className="thq-button-filled">
                      <span>
                        {props.card1Action1 ?? (
                          <Fragment>
                            <span className="timeline8-text56">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_i5ljaW'),
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
                            <span className="timeline8-text50">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ndmsPv'),
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
            <div className="timeline8-step2">
              <div className="timeline8-container18">
                <div className="timeline8-container19"></div>
                <div className="timeline8-progress02"></div>
              </div>
              <div className="timeline8-container20">
                <div className="timeline8-container21 thq-card">
                  <h3 className="thq-heading-3">
                    {props.date2 ?? (
                      <Fragment>
                        <span className="timeline8-text35">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_7GXOnH'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <h3 className="timeline8-text20 thq-heading-3">
                    {props.card2Heading ?? (
                      <Fragment>
                        <span className="timeline8-text39">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_cgfpKp'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.card2Content ?? (
                      <Fragment>
                        <span className="timeline8-text38">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_B64Gth'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="timeline8-container22">
                    <button type="button" className="thq-button-filled">
                      <span>
                        {props.card2Action1 ?? (
                          <Fragment>
                            <span className="timeline8-text54">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_8dbTya'),
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
                            <span className="timeline8-text48">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_hSL9MC'),
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
            <div className="timeline8-step3">
              <div className="timeline8-container23">
                <div className="timeline8-container24"></div>
                <div className="timeline8-progress03"></div>
              </div>
              <div className="timeline8-container25">
                <div className="timeline8-container26 thq-card">
                  <h3 className="thq-heading-3">
                    {props.date3 ?? (
                      <Fragment>
                        <span className="timeline8-text40">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_VZ2-CD'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <h3 className="timeline8-text25 thq-heading-3">
                    {props.card3Heading ?? (
                      <Fragment>
                        <span className="timeline8-text41">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_6Dt9q2'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.card3Content ?? (
                      <Fragment>
                        <span className="timeline8-text34">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_VA6ijX'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="timeline8-container27">
                    <button type="button" className="thq-button-filled">
                      <span>
                        {props.card3Action1 ?? (
                          <Fragment>
                            <span className="timeline8-text55">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_i6Jp5J'),
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
                            <span className="timeline8-text37">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text__qfcSc'),
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
            <div className="timeline8-step4">
              <div className="timeline8-container28">
                <div className="timeline8-container29"></div>
                <div className="timeline8-progress04"></div>
              </div>
              <div className="timeline8-container30">
                <div className="timeline8-container31 thq-card">
                  <h3 className="thq-heading-3">
                    {props.date4 ?? (
                      <Fragment>
                        <span className="timeline8-text46">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ujygDk'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <h3 className="timeline8-text30 thq-heading-3">
                    {props.card4Heading ?? (
                      <Fragment>
                        <span className="timeline8-text44">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Z4lLip'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.card4Content ?? (
                      <Fragment>
                        <span className="timeline8-text47">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ep9okp'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="timeline8-container32">
                    <button type="button" className="thq-button-filled">
                      <span>
                        {props.card4Action1 ?? (
                          <Fragment>
                            <span className="timeline8-text52">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_NVILvS'),
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
                            <span className="timeline8-text45">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_6SBb4B'),
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
      </div>
      <style jsx>
        {`
          .timeline8-max-width {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline8-container11 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline8-text10 {
            text-align: center;
          }
          .timeline8-text11 {
            text-align: left;
          }
          .timeline8-container12 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline8-timeline-container {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline8-step1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline8-container13 {
            flex: 1;
            left: var(--dl-layout-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline8-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline8-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline8-container15 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline8-container16 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .timeline8-text15 {
            text-align: left;
          }
          .timeline8-container17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline8-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline8-container18 {
            flex: 1;
            left: var(--dl-layout-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline8-container19 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline8-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline8-container20 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline8-container21 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .timeline8-text20 {
            text-align: left;
          }
          .timeline8-container22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline8-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline8-container23 {
            flex: 1;
            left: var(--dl-layout-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline8-container24 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline8-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline8-container25 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline8-container26 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .timeline8-text25 {
            text-align: left;
          }
          .timeline8-container27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline8-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline8-container28 {
            flex: 1;
            left: var(--dl-layout-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline8-container29 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline8-progress04 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline8-container30 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline8-container31 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .timeline8-text30 {
            text-align: left;
          }
          .timeline8-container32 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline8-text34 {
            display: inline-block;
          }
          .timeline8-text35 {
            display: inline-block;
          }
          .timeline8-text36 {
            display: inline-block;
          }
          .timeline8-text37 {
            display: inline-block;
          }
          .timeline8-text38 {
            display: inline-block;
          }
          .timeline8-text39 {
            display: inline-block;
          }
          .timeline8-text40 {
            display: inline-block;
          }
          .timeline8-text41 {
            display: inline-block;
          }
          .timeline8-text42 {
            display: inline-block;
          }
          .timeline8-text43 {
            display: inline-block;
          }
          .timeline8-text44 {
            display: inline-block;
          }
          .timeline8-text45 {
            display: inline-block;
          }
          .timeline8-text46 {
            display: inline-block;
          }
          .timeline8-text47 {
            display: inline-block;
          }
          .timeline8-text48 {
            display: inline-block;
          }
          .timeline8-text49 {
            display: inline-block;
          }
          .timeline8-text50 {
            display: inline-block;
          }
          .timeline8-text51 {
            display: inline-block;
          }
          .timeline8-text52 {
            display: inline-block;
          }
          .timeline8-text53 {
            display: inline-block;
          }
          .timeline8-text54 {
            display: inline-block;
          }
          .timeline8-text55 {
            display: inline-block;
          }
          .timeline8-text56 {
            display: inline-block;
          }
          .timeline8-text57 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .timeline8-max-width {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .timeline8-max-width {
              flex-direction: column;
            }
            .timeline8-text11 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline8-text15 {
              text-align: left;
            }
            .timeline8-text20 {
              text-align: left;
            }
            .timeline8-text25 {
              text-align: left;
            }
            .timeline8-text30 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline8-container17 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline8-container22 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline8-container27 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline8-container32 {
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

Timeline8.defaultProps = {
  card3Content: undefined,
  date2: undefined,
  date1: undefined,
  card3Action2: undefined,
  card2Content: undefined,
  card2Heading: undefined,
  date3: undefined,
  card3Heading: undefined,
  content1: undefined,
  action1: undefined,
  card4Heading: undefined,
  card4Action2: undefined,
  date4: undefined,
  card4Content: undefined,
  card2Action2: undefined,
  card1Heading: undefined,
  card1Action2: undefined,
  action2: undefined,
  card4Action1: undefined,
  title1: undefined,
  card2Action1: undefined,
  card3Action1: undefined,
  card1Action1: undefined,
  card1Content: undefined,
}

Timeline8.propTypes = {
  card3Content: PropTypes.element,
  date2: PropTypes.element,
  date1: PropTypes.element,
  card3Action2: PropTypes.element,
  card2Content: PropTypes.element,
  card2Heading: PropTypes.element,
  date3: PropTypes.element,
  card3Heading: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  card4Heading: PropTypes.element,
  card4Action2: PropTypes.element,
  date4: PropTypes.element,
  card4Content: PropTypes.element,
  card2Action2: PropTypes.element,
  card1Heading: PropTypes.element,
  card1Action2: PropTypes.element,
  action2: PropTypes.element,
  card4Action1: PropTypes.element,
  title1: PropTypes.element,
  card2Action1: PropTypes.element,
  card3Action1: PropTypes.element,
  card1Action1: PropTypes.element,
  card1Content: PropTypes.element,
}

export default Timeline8
