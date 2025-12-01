import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Timeline9 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline9-max-width thq-section-max-width">
          <div className="timeline9-heading">
            <h2 className="timeline9-text10 thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span className="timeline9-text50">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_7DNydc'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="timeline9-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline9-text38">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8sXd2O'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline9-container11">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="timeline9-text51">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_poy68J'),
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
                      <span className="timeline9-text41">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_tWUBrq'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline9-timeline-container">
            <div className="timeline9-step1">
              <div className="timeline9-container12">
                <div className="timeline9-container13"></div>
                <div className="timeline9-progress01"></div>
              </div>
              <div className="timeline9-container14">
                <h3 className="thq-heading-3">
                  {props.card1Date ?? (
                    <Fragment>
                      <span className="timeline9-text54">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_dEVmgd'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline9-text15 thq-heading-3">
                  {props.card1Heading ?? (
                    <Fragment>
                      <span className="timeline9-text45">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_l6NS7j'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline9-text34">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9wxhHN'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline9-container15">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline9-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_NegXJY'),
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
                          <span className="timeline9-text53">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_JbFrxk'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <img
                  alt={props.card1ImageAlt}
                  src={props.card1ImageSrc}
                  className="timeline9-image1 thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div className="timeline9-step2">
              <div className="timeline9-container16">
                <div className="timeline9-container17"></div>
                <div className="timeline9-progress02"></div>
              </div>
              <div className="timeline9-container18">
                <h3 className="thq-heading-3">
                  {props.card2Date ?? (
                    <Fragment>
                      <span className="timeline9-text47">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_rwV995'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline9-text20 thq-heading-3">
                  {props.card2Heading ?? (
                    <Fragment>
                      <span className="timeline9-text55">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_nO6SQg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline9-text46">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_e-g-H9'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline9-container19">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline9-text35">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_IXiXEq'),
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
                          <span className="timeline9-text43">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_5W_2Zt'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <img
                  alt={props.card2ImageAlt}
                  src={props.card2ImageSrc}
                  className="timeline9-image2 thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div className="timeline9-step3">
              <div className="timeline9-container20">
                <div className="timeline9-container21"></div>
                <div className="timeline9-progress03"></div>
              </div>
              <div className="timeline9-container22">
                <h3 className="thq-heading-3">
                  {props.card3Date ?? (
                    <Fragment>
                      <span className="timeline9-text37">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_IKuFhP'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline9-text25 thq-heading-3">
                  {props.card3Heading ?? (
                    <Fragment>
                      <span className="timeline9-text57">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_GHXIeh'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline9-text48">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9DoO4p'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline9-container23">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline9-text49">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_N6RdC2'),
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
                          <span className="timeline9-text52">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_gTYcOB'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <img
                  alt={props.card3ImageAlt}
                  src={props.card3ImageSrc}
                  className="timeline9-image3 thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div className="timeline9-step4">
              <div className="timeline9-container24">
                <div className="timeline9-container25"></div>
                <div className="timeline9-progress04"></div>
              </div>
              <div className="timeline9-container26">
                <h3 className="thq-heading-3">
                  {props.card4Date ?? (
                    <Fragment>
                      <span className="timeline9-text39">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_jRpKXe'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline9-text30 thq-heading-3">
                  {props.card4Heading ?? (
                    <Fragment>
                      <span className="timeline9-text56">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_mpRr7O'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline9-text36">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_YV1hv6'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline9-container27">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline9-text42">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_0F6BKg'),
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
                          <span className="timeline9-text40">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_IRCmpb'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <img
                  alt={props.card4ImageAlt}
                  src={props.card4ImageSrc}
                  className="timeline9-image4 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline9-max-width {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline9-heading {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline9-text10 {
            text-align: left;
          }
          .timeline9-text11 {
            text-align: left;
          }
          .timeline9-container11 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline9-timeline-container {
            width: 70%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline9-step1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline9-container12 {
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
          .timeline9-container13 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-progress01 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-container14 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline9-text15 {
            text-align: left;
          }
          .timeline9-container15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline9-image1 {
            height: auto;
          }
          .timeline9-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline9-container16 {
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
          .timeline9-container17 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-progress02 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-container18 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline9-text20 {
            text-align: left;
          }
          .timeline9-container19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline9-image2 {
            height: auto;
          }
          .timeline9-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline9-container20 {
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
          .timeline9-container21 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-progress03 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-container22 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline9-text25 {
            text-align: left;
          }
          .timeline9-container23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline9-image3 {
            height: auto;
          }
          .timeline9-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline9-container24 {
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
          .timeline9-container25 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-progress04 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-container26 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline9-text30 {
            text-align: left;
          }
          .timeline9-container27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline9-image4 {
            height: auto;
          }
          .timeline9-text34 {
            display: inline-block;
          }
          .timeline9-text35 {
            display: inline-block;
          }
          .timeline9-text36 {
            display: inline-block;
          }
          .timeline9-text37 {
            display: inline-block;
          }
          .timeline9-text38 {
            display: inline-block;
          }
          .timeline9-text39 {
            display: inline-block;
          }
          .timeline9-text40 {
            display: inline-block;
          }
          .timeline9-text41 {
            display: inline-block;
          }
          .timeline9-text42 {
            display: inline-block;
          }
          .timeline9-text43 {
            display: inline-block;
          }
          .timeline9-text44 {
            display: inline-block;
          }
          .timeline9-text45 {
            display: inline-block;
          }
          .timeline9-text46 {
            display: inline-block;
          }
          .timeline9-text47 {
            display: inline-block;
          }
          .timeline9-text48 {
            display: inline-block;
          }
          .timeline9-text49 {
            display: inline-block;
          }
          .timeline9-text50 {
            display: inline-block;
          }
          .timeline9-text51 {
            display: inline-block;
          }
          .timeline9-text52 {
            display: inline-block;
          }
          .timeline9-text53 {
            display: inline-block;
          }
          .timeline9-text54 {
            display: inline-block;
          }
          .timeline9-text55 {
            display: inline-block;
          }
          .timeline9-text56 {
            display: inline-block;
          }
          .timeline9-text57 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .timeline9-text11 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline9-timeline-container {
              width: 100%;
            }
            .timeline9-text15 {
              text-align: left;
            }
            .timeline9-text20 {
              text-align: left;
            }
            .timeline9-text25 {
              text-align: left;
            }
            .timeline9-text30 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline9-container15 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline9-container19 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline9-container23 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline9-container27 {
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

Timeline9.defaultProps = {
  card1Content: undefined,
  card3ImageAlt: 'Innovation Image',
  card2Action1: undefined,
  card4Content: undefined,
  card3Date: undefined,
  content1: undefined,
  card4Date: undefined,
  card4Action2: undefined,
  card2ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  action2: undefined,
  card4Action1: undefined,
  card1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  card1ImageAlt: 'Establishment Image',
  card2Action2: undefined,
  card1Action1: undefined,
  card1Heading: undefined,
  card2Content: undefined,
  card2ImageAlt: 'Expansion Image',
  card2Date: undefined,
  card3Content: undefined,
  card3Action1: undefined,
  card3ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  card4ImageAlt: 'Achievement Image',
  title1: undefined,
  action1: undefined,
  card3Action2: undefined,
  card1Action2: undefined,
  card1Date: undefined,
  card2Heading: undefined,
  card4Heading: undefined,
  card4ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  card3Heading: undefined,
}

Timeline9.propTypes = {
  card1Content: PropTypes.element,
  card3ImageAlt: PropTypes.string,
  card2Action1: PropTypes.element,
  card4Content: PropTypes.element,
  card3Date: PropTypes.element,
  content1: PropTypes.element,
  card4Date: PropTypes.element,
  card4Action2: PropTypes.element,
  card2ImageSrc: PropTypes.string,
  action2: PropTypes.element,
  card4Action1: PropTypes.element,
  card1ImageSrc: PropTypes.string,
  card1ImageAlt: PropTypes.string,
  card2Action2: PropTypes.element,
  card1Action1: PropTypes.element,
  card1Heading: PropTypes.element,
  card2Content: PropTypes.element,
  card2ImageAlt: PropTypes.string,
  card2Date: PropTypes.element,
  card3Content: PropTypes.element,
  card3Action1: PropTypes.element,
  card3ImageSrc: PropTypes.string,
  card4ImageAlt: PropTypes.string,
  title1: PropTypes.element,
  action1: PropTypes.element,
  card3Action2: PropTypes.element,
  card1Action2: PropTypes.element,
  card1Date: PropTypes.element,
  card2Heading: PropTypes.element,
  card4Heading: PropTypes.element,
  card4ImageSrc: PropTypes.string,
  card3Heading: PropTypes.element,
}

export default Timeline9
