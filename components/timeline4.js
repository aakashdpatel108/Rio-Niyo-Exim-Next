import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Timeline4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline4-max-width thq-section-max-width">
          <div className="timeline4-container11">
            <h2 className="thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span className="timeline4-text51">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_OM7OBu'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="timeline4-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline4-text56">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_VzL2Qm'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline4-container12">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="timeline4-text38">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1jyb_X'),
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
                      <span className="timeline4-text42">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_lAW-Mw'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline4-timeline-container">
            <div className="timeline4-step1">
              <div className="timeline4-container13">
                <div className="timeline4-container14"></div>
                <div className="timeline4-progress01"></div>
              </div>
              <div className="timeline4-container15">
                <h3 className="thq-heading-3">
                  {props.date1 ?? (
                    <Fragment>
                      <span className="timeline4-text35">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_apu2aR'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline4-text15 thq-heading-3">
                  {props.card1Heading ?? (
                    <Fragment>
                      <span className="timeline4-text49">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_5_WCsk'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline4-text48">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3cdg_U'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline4-container16">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline4-text39">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_aqTTZ3'),
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
                          <span className="timeline4-text36">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_rZnScO'),
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
            <div className="timeline4-step2">
              <div className="timeline4-container17">
                <div className="timeline4-container18"></div>
                <div className="timeline4-progress02"></div>
              </div>
              <div className="timeline4-container19">
                <h3 className="thq-heading-3">
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline4-text57">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_as2JCX'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline4-text20 thq-heading-3">
                  {props.card2Heading ?? (
                    <Fragment>
                      <span className="timeline4-text41">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_r4OC-u'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline4-text43">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Nv1hAZ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline4-container20">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline4-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qftXe_'),
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
                          <span className="timeline4-text45">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_CsQzeS'),
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
            <div className="timeline4-step3">
              <div className="timeline4-container21">
                <div className="timeline4-container22"></div>
                <div className="timeline4-progress03"></div>
              </div>
              <div className="timeline4-container23">
                <h3 className="thq-heading-3">
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline4-text40">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_W5S9RE'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline4-text25 thq-heading-3">
                  {props.card3Heading ?? (
                    <Fragment>
                      <span className="timeline4-text37">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_o5Pn_S'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline4-text34">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NL03nc'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline4-container24">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline4-text54">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ikcmin'),
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
                          <span className="timeline4-text47">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_UWZt2F'),
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
            <div className="timeline4-step4">
              <div className="timeline4-container25">
                <div className="timeline4-container26"></div>
                <div className="timeline4-progress04"></div>
              </div>
              <div className="timeline4-container27">
                <h3 className="thq-heading-3">
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline4-text53">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_zLxU6H'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline4-text30 thq-heading-3">
                  {props.card4Heading ?? (
                    <Fragment>
                      <span className="timeline4-text52">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_tTkcTT'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline4-text50">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_yXPTb7'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline4-container28">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline4-text46">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_iizdeN'),
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
                          <span className="timeline4-text55">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_RrVvh3'),
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
          .timeline4-max-width {
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline4-container11 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline4-text11 {
            text-align: left;
          }
          .timeline4-container12 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline4-timeline-container {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline4-step1 {
            display: flex;
            position: relative;
            justify-content: center;
          }
          .timeline4-container13 {
            flex: 1;
            left: var(--dl-layout-space-halfunit);
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline4-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline4-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text15 {
            text-align: left;
          }
          .timeline4-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline4-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container17 {
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
          .timeline4-container18 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline4-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container19 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text20 {
            text-align: left;
          }
          .timeline4-container20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline4-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container21 {
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
          .timeline4-container22 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline4-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container23 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text25 {
            text-align: left;
          }
          .timeline4-container24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline4-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container25 {
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
          .timeline4-container26 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline4-progress04 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container27 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text30 {
            text-align: left;
          }
          .timeline4-container28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline4-text34 {
            display: inline-block;
          }
          .timeline4-text35 {
            display: inline-block;
          }
          .timeline4-text36 {
            display: inline-block;
          }
          .timeline4-text37 {
            display: inline-block;
          }
          .timeline4-text38 {
            display: inline-block;
          }
          .timeline4-text39 {
            display: inline-block;
          }
          .timeline4-text40 {
            display: inline-block;
          }
          .timeline4-text41 {
            display: inline-block;
          }
          .timeline4-text42 {
            display: inline-block;
          }
          .timeline4-text43 {
            display: inline-block;
          }
          .timeline4-text44 {
            display: inline-block;
          }
          .timeline4-text45 {
            display: inline-block;
          }
          .timeline4-text46 {
            display: inline-block;
          }
          .timeline4-text47 {
            display: inline-block;
          }
          .timeline4-text48 {
            display: inline-block;
          }
          .timeline4-text49 {
            display: inline-block;
          }
          .timeline4-text50 {
            display: inline-block;
          }
          .timeline4-text51 {
            display: inline-block;
          }
          .timeline4-text52 {
            display: inline-block;
          }
          .timeline4-text53 {
            display: inline-block;
          }
          .timeline4-text54 {
            display: inline-block;
          }
          .timeline4-text55 {
            display: inline-block;
          }
          .timeline4-text56 {
            display: inline-block;
          }
          .timeline4-text57 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .timeline4-max-width {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .timeline4-max-width {
              flex-direction: column;
            }
            .timeline4-text11 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline4-text15 {
              text-align: left;
            }
            .timeline4-text20 {
              text-align: left;
            }
            .timeline4-text25 {
              text-align: left;
            }
            .timeline4-text30 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline4-container11 {
              gap: var(--dl-layout-space-unit);
            }
            .timeline4-container12 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline4-timeline-container {
              width: 100%;
            }
            .timeline4-container16 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline4-container20 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline4-container24 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline4-container28 {
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

Timeline4.defaultProps = {
  card3Content: undefined,
  date1: undefined,
  card1Action2: undefined,
  card3Heading: undefined,
  action1: undefined,
  card1Action1: undefined,
  date3: undefined,
  card2Heading: undefined,
  action2: undefined,
  card2Content: undefined,
  card2Action1: undefined,
  card2Action2: undefined,
  card4Action1: undefined,
  card3Action2: undefined,
  card1Content: undefined,
  card1Heading: undefined,
  card4Content: undefined,
  title1: undefined,
  card4Heading: undefined,
  date4: undefined,
  card3Action1: undefined,
  card4Action2: undefined,
  content1: undefined,
  date2: undefined,
}

Timeline4.propTypes = {
  card3Content: PropTypes.element,
  date1: PropTypes.element,
  card1Action2: PropTypes.element,
  card3Heading: PropTypes.element,
  action1: PropTypes.element,
  card1Action1: PropTypes.element,
  date3: PropTypes.element,
  card2Heading: PropTypes.element,
  action2: PropTypes.element,
  card2Content: PropTypes.element,
  card2Action1: PropTypes.element,
  card2Action2: PropTypes.element,
  card4Action1: PropTypes.element,
  card3Action2: PropTypes.element,
  card1Content: PropTypes.element,
  card1Heading: PropTypes.element,
  card4Content: PropTypes.element,
  title1: PropTypes.element,
  card4Heading: PropTypes.element,
  date4: PropTypes.element,
  card3Action1: PropTypes.element,
  card4Action2: PropTypes.element,
  content1: PropTypes.element,
  date2: PropTypes.element,
}

export default Timeline4
