import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Timeline7 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding timeline7-container10">
        <div className="timeline7-max-width thq-section-max-width">
          <div className="timeline7-container11">
            <h2 className="timeline7-text10 thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_r6Rfgz'),
                }}
              ></span>
            </h2>
            <span className="timeline7-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline7-text35">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_GHLhao'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline7-container12"></div>
          </div>
          <div className="timeline7-timeline-container">
            <div className="timeline7-step1">
              <div className="timeline7-container13">
                <div className="timeline7-container14"></div>
                <div className="timeline7-progress01"></div>
              </div>
              <div className="timeline7-container15">
                <h3 className="thq-heading-3">
                  {props.date1 ?? (
                    <Fragment>
                      <span className="timeline7-text33">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_zsYpyT'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small timeline7-text13">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline7-text31">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_pzd7_U'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline7-container16">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline7-text36">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qn4Bq4'),
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
                          <span className="timeline7-text47">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_oUhXje'),
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
            <div className="timeline7-step2">
              <div className="timeline7-container17">
                <div className="timeline7-container18"></div>
                <div className="timeline7-progress02"></div>
              </div>
              <div className="timeline7-container19">
                <h3 className="thq-heading-3">
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline7-text43">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_cLE9qw'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline7-text17 thq-heading-3">
                  {props.card2Heading ?? (
                    <Fragment>
                      <span className="timeline7-text42">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3ByufO'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline7-text41">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7uy-59'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline7-container20">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline7-text49">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_QMaXPR'),
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
                          <span className="timeline7-text32">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_jcPeA-'),
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
            <div className="timeline7-step3">
              <div className="timeline7-container21">
                <div className="timeline7-container22"></div>
                <div className="timeline7-progress03"></div>
              </div>
              <div className="timeline7-container23">
                <h3 className="thq-heading-3">
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline7-text50">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_mMk1UT'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline7-text22 thq-heading-3">
                  {props.card3Heading ?? (
                    <Fragment>
                      <span className="timeline7-text34">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_poUdZz'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline7-text48">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Qac8PE'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline7-container24">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline7-text37">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_U7TIMk'),
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
                          <span className="timeline7-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_otDNtF'),
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
            <div className="timeline7-step4">
              <div className="timeline7-container25">
                <div className="timeline7-container26"></div>
                <div className="timeline7-progress04"></div>
              </div>
              <div className="timeline7-container27">
                <h3 className="thq-heading-3">
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline7-text39">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_OqPgcY'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline7-text27 thq-heading-3">
                  {props.card4Heading ?? (
                    <Fragment>
                      <span className="timeline7-text40">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_fjP7RV'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline7-text38">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_EWJQ5V'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline7-container28">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline7-text45">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_FxS25O'),
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
                          <span className="timeline7-text46">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_puGkd8'),
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
          .timeline7-max-width {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline7-container11 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline7-text10 {
            text-align: center;
          }
          .timeline7-text11 {
            text-align: left;
          }
          .timeline7-container12 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline7-timeline-container {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline7-step1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container13 {
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
          .timeline7-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline7-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container15 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline7-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline7-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container17 {
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
          .timeline7-container18 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline7-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container19 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline7-text17 {
            text-align: left;
          }
          .timeline7-container20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline7-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container21 {
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
          .timeline7-container22 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline7-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container23 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline7-text22 {
            text-align: left;
          }
          .timeline7-container24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline7-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container25 {
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
          .timeline7-container26 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline7-progress04 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container27 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline7-text27 {
            text-align: left;
          }
          .timeline7-container28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline7-text31 {
            display: inline-block;
          }
          .timeline7-text32 {
            display: inline-block;
          }
          .timeline7-text33 {
            display: inline-block;
          }
          .timeline7-text34 {
            display: inline-block;
          }
          .timeline7-text35 {
            display: inline-block;
          }
          .timeline7-text36 {
            display: inline-block;
          }
          .timeline7-text37 {
            display: inline-block;
          }
          .timeline7-text38 {
            display: inline-block;
          }
          .timeline7-text39 {
            display: inline-block;
          }
          .timeline7-text40 {
            display: inline-block;
          }
          .timeline7-text41 {
            display: inline-block;
          }
          .timeline7-text42 {
            display: inline-block;
          }
          .timeline7-text43 {
            display: inline-block;
          }
          .timeline7-text44 {
            display: inline-block;
          }
          .timeline7-text45 {
            display: inline-block;
          }
          .timeline7-text46 {
            display: inline-block;
          }
          .timeline7-text47 {
            display: inline-block;
          }
          .timeline7-text48 {
            display: inline-block;
          }
          .timeline7-text49 {
            display: inline-block;
          }
          .timeline7-text50 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .timeline7-max-width {
              gap: var(--dl-layout-space-twounits);
            }
            .timeline7-text10 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .timeline7-container10 {
              padding: 0px;
            }
            .timeline7-max-width {
              padding: var(--dl-layout-space-halfunit);
              flex-direction: column;
            }
            .timeline7-text11 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline7-timeline-container {
              flex: auto;
              width: auto;
            }
            .timeline7-container15 {
              width: auto;
            }
            .timeline7-text13 {
              text-align: justify;
            }
            .timeline7-text17 {
              text-align: left;
            }
            .timeline7-text22 {
              text-align: left;
            }
            .timeline7-text27 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline7-max-width {
              padding: var(--dl-layout-space-unit);
            }
            .timeline7-container16 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline7-container20 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline7-container24 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline7-container28 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
          }
          @media (max-width: 344px) {
            .timeline7-max-width {
              width: 100%;
              padding: var(--dl-layout-space-halfunit);
            }
            .timeline7-container15 {
              width: auto;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline7.defaultProps = {
  card1Content: undefined,
  card2Action2: undefined,
  date1: undefined,
  card3Heading: undefined,
  content1: undefined,
  card1Action1: undefined,
  card3Action1: undefined,
  card4Content: undefined,
  date4: undefined,
  card4Heading: undefined,
  card2Content: undefined,
  card2Heading: undefined,
  date2: undefined,
  card3Action2: undefined,
  card4Action1: undefined,
  card4Action2: undefined,
  card1Action2: undefined,
  card3Content: undefined,
  card2Action1: undefined,
  date3: undefined,
}

Timeline7.propTypes = {
  card1Content: PropTypes.element,
  card2Action2: PropTypes.element,
  date1: PropTypes.element,
  card3Heading: PropTypes.element,
  content1: PropTypes.element,
  card1Action1: PropTypes.element,
  card3Action1: PropTypes.element,
  card4Content: PropTypes.element,
  date4: PropTypes.element,
  card4Heading: PropTypes.element,
  card2Content: PropTypes.element,
  card2Heading: PropTypes.element,
  date2: PropTypes.element,
  card3Action2: PropTypes.element,
  card4Action1: PropTypes.element,
  card4Action2: PropTypes.element,
  card1Action2: PropTypes.element,
  card3Content: PropTypes.element,
  card2Action1: PropTypes.element,
  date3: PropTypes.element,
}

export default Timeline7
