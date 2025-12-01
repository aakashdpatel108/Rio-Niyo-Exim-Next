import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Timeline3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline3-max-width thq-section-max-width">
          <div className="timeline3-container11">
            <h2 className="timeline3-text10 thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span className="timeline3-text26">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tTV398'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="timeline3-text11 thq-body-small">
              {props.heading1 ?? (
                <Fragment>
                  <span className="timeline3-text28">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ovp4su'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline3-container12">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="timeline3-text31">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_BIM7g3'),
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
                      <span className="timeline3-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_JPWPzR'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline3-timeline-container">
            <div className="timeline3-step1">
              <div className="timeline3-container13">
                <div className="timeline3-progress010"></div>
                <div className="timeline3-container14"></div>
                <div className="timeline3-progress011"></div>
              </div>
              <div className="timeline3-container15">
                <h3 className="thq-heading-3">
                  {props.card1Date ?? (
                    <Fragment>
                      <span className="timeline3-text30">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_sbw4Sc'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="timeline3-text15 thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline3-text29">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_BMHa7f'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="timeline3-step2">
              <div className="timeline3-container16">
                <div className="timeline3-progress012"></div>
                <div className="timeline3-container17"></div>
                <div className="timeline3-progress013"></div>
              </div>
              <div className="timeline3-container18">
                <h3 className="thq-heading-3">
                  {props.card2Date ?? (
                    <Fragment>
                      <span className="timeline3-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_a5M1qD'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="timeline3-text17 thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline3-text33">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_M3bsZS'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="timeline3-step3">
              <div className="timeline3-container19">
                <div className="timeline3-progress014"></div>
                <div className="timeline3-container20"></div>
                <div className="timeline3-progress015"></div>
              </div>
              <div className="timeline3-container21">
                <h3 className="thq-heading-3">
                  {props.card3Date ?? (
                    <Fragment>
                      <span className="timeline3-text32">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_kCIP1C'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="timeline3-text19 thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline3-text24">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_TU3GIv'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="timeline3-step4">
              <div className="timeline3-container22">
                <div className="timeline3-progress016"></div>
                <div className="timeline3-container23"></div>
                <div className="timeline3-progress017"></div>
              </div>
              <div className="timeline3-container24">
                <h3 className="thq-heading-3">
                  {props.card4Date ?? (
                    <Fragment>
                      <span className="timeline3-text34">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Sz4KWg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="timeline3-text21 thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline3-text37">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Wf10Hf'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="timeline3-step5">
              <div className="timeline3-container25">
                <div className="timeline3-progress018"></div>
                <div className="timeline3-container26"></div>
                <div className="timeline3-progress019"></div>
              </div>
              <div className="timeline3-container27">
                <h3 className="thq-heading-3">
                  {props.card5Date ?? (
                    <Fragment>
                      <span className="timeline3-text35">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Xi94EA'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="timeline3-text23 thq-body-small">
                  {props.card5Content ?? (
                    <Fragment>
                      <span className="timeline3-text36">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ERDztQ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline3-max-width {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .timeline3-container11 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .timeline3-text10 {
            text-align: center;
          }
          .timeline3-text11 {
            text-align: center;
            padding-left: var(--dl-layout-space-sixunits);
            padding-right: var(--dl-layout-space-sixunits);
          }
          .timeline3-container12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
          }
          .timeline3-timeline-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .timeline3-step1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline3-container13 {
            gap: 0;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .timeline3-progress010 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline3-progress011 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container15 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .timeline3-text15 {
            text-align: center;
          }
          .timeline3-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline3-container16 {
            gap: 0;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .timeline3-progress012 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container17 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline3-progress013 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container18 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .timeline3-text17 {
            text-align: center;
          }
          .timeline3-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline3-container19 {
            gap: 0;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .timeline3-progress014 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container20 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline3-progress015 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container21 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .timeline3-text19 {
            text-align: center;
          }
          .timeline3-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline3-container22 {
            gap: 0;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .timeline3-progress016 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container23 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline3-progress017 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container24 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .timeline3-text21 {
            text-align: center;
          }
          .timeline3-step5 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline3-container25 {
            gap: 0;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .timeline3-progress018 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container26 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline3-progress019 {
            flex: 1;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline3-container27 {
            gap: var(--dl-layout-space-halfunit);
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .timeline3-text23 {
            text-align: center;
          }
          .timeline3-text24 {
            display: inline-block;
          }
          .timeline3-text25 {
            display: inline-block;
          }
          .timeline3-text26 {
            display: inline-block;
          }
          .timeline3-text27 {
            display: inline-block;
          }
          .timeline3-text28 {
            display: inline-block;
          }
          .timeline3-text29 {
            display: inline-block;
          }
          .timeline3-text30 {
            display: inline-block;
          }
          .timeline3-text31 {
            display: inline-block;
          }
          .timeline3-text32 {
            display: inline-block;
          }
          .timeline3-text33 {
            display: inline-block;
          }
          .timeline3-text34 {
            display: inline-block;
          }
          .timeline3-text35 {
            display: inline-block;
          }
          .timeline3-text36 {
            display: inline-block;
          }
          .timeline3-text37 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .timeline3-text11 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline3-timeline-container {
              flex-direction: column;
            }
            .timeline3-step1 {
              height: auto;
              align-items: flex-start;
              flex-direction: row;
            }
            .timeline3-container13 {
              top: 0px;
              left: 0px;
              width: auto;
              height: 100%;
              position: absolute;
              flex-direction: column;
            }
            .timeline3-progress010 {
              display: none;
            }
            .timeline3-progress011 {
              height: 100%;
            }
            .timeline3-container15 {
              height: auto;
              align-items: flex-start;
              padding-top: 0px;
              padding-left: var(--dl-layout-space-twounits);
              padding-bottom: 0px;
            }
            .timeline3-text15 {
              text-align: left;
            }
            .timeline3-step2 {
              height: auto;
              align-items: flex-start;
              flex-direction: row;
            }
            .timeline3-container16 {
              top: 0px;
              left: 0px;
              width: auto;
              height: 100%;
              position: absolute;
              flex-direction: column;
            }
            .timeline3-progress012 {
              display: none;
            }
            .timeline3-progress013 {
              height: 100%;
            }
            .timeline3-container18 {
              height: auto;
              align-items: flex-start;
              padding-top: 0px;
              padding-left: var(--dl-layout-space-twounits);
              padding-bottom: 0px;
            }
            .timeline3-text17 {
              text-align: left;
            }
            .timeline3-step3 {
              height: auto;
              align-items: flex-start;
              flex-direction: row;
            }
            .timeline3-container19 {
              top: 0px;
              left: 0px;
              width: auto;
              height: 100%;
              position: absolute;
              flex-direction: column;
            }
            .timeline3-progress014 {
              display: none;
            }
            .timeline3-progress015 {
              height: 100%;
            }
            .timeline3-container21 {
              height: auto;
              align-items: flex-start;
              padding-top: 0px;
              padding-left: var(--dl-layout-space-twounits);
              padding-bottom: 0px;
            }
            .timeline3-text19 {
              text-align: left;
            }
            .timeline3-step4 {
              height: auto;
              align-items: flex-start;
              flex-direction: row;
            }
            .timeline3-container22 {
              top: 0px;
              left: 0px;
              width: auto;
              height: 100%;
              position: absolute;
              flex-direction: column;
            }
            .timeline3-progress016 {
              display: none;
            }
            .timeline3-progress017 {
              height: 100%;
            }
            .timeline3-container24 {
              height: auto;
              align-items: flex-start;
              padding-top: 0px;
              padding-left: var(--dl-layout-space-twounits);
              padding-bottom: 0px;
            }
            .timeline3-text21 {
              text-align: left;
            }
            .timeline3-step5 {
              height: auto;
              align-items: flex-start;
              flex-direction: row;
            }
            .timeline3-container25 {
              top: 0px;
              left: 0px;
              width: auto;
              height: 100%;
              position: absolute;
              flex-direction: column;
            }
            .timeline3-progress018 {
              display: none;
            }
            .timeline3-progress019 {
              height: 100%;
            }
            .timeline3-container27 {
              height: auto;
              align-items: flex-start;
              padding-top: 0px;
              padding-left: var(--dl-layout-space-twounits);
              padding-bottom: 0px;
            }
            .timeline3-text23 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline3-container12 {
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

Timeline3.defaultProps = {
  card3Content: undefined,
  card2Date: undefined,
  title1: undefined,
  action2: undefined,
  heading1: undefined,
  card1Content: undefined,
  card1Date: undefined,
  action1: undefined,
  card3Date: undefined,
  card2Content: undefined,
  card4Date: undefined,
  card5Date: undefined,
  card5Content: undefined,
  card4Content: undefined,
}

Timeline3.propTypes = {
  card3Content: PropTypes.element,
  card2Date: PropTypes.element,
  title1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
  card1Content: PropTypes.element,
  card1Date: PropTypes.element,
  action1: PropTypes.element,
  card3Date: PropTypes.element,
  card2Content: PropTypes.element,
  card4Date: PropTypes.element,
  card5Date: PropTypes.element,
  card5Content: PropTypes.element,
  card4Content: PropTypes.element,
}

export default Timeline3
