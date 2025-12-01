import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Timeline10 from './timeline10'

const Timeline41 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline41-max-width thq-section-max-width">
          <div className="timeline41-container11">
            <h2 className="thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span className="timeline41-text71">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_po41yb'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="timeline41-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline41-text79">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_jjHs4i'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline41-container12">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="timeline41-text77">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_IdYFqf'),
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
                      <span className="timeline41-text75">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_cdTWaU'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline41-timeline-container">
            <div className="timeline41-step1">
              <div className="timeline41-container13">
                <h3 className="thq-heading-3">
                  {props.date1 ?? (
                    <Fragment>
                      <span className="timeline41-text67">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_a9u-3_'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline41-text15 thq-heading-3">
                  {props.card1Heading ?? (
                    <Fragment>
                      <span className="timeline41-text81">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_lZVOET'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline41-text61">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_R1EIgh'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline41-container14">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline41-text72">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_B0IZyJ'),
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
                          <span className="timeline41-text59">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_sYR70a'),
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
            <div className="timeline41-step2">
              <div className="timeline41-container15">
                <div className="timeline41-container16"></div>
                <div className="timeline41-progress01"></div>
              </div>
              <div className="timeline41-container17">
                <h3 className="thq-heading-3">
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline41-text60">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_TqU67L'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline41-text20 thq-heading-3">
                  {props.card2Heading ?? (
                    <Fragment>
                      <span className="timeline41-text58">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NQHifi'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline41-text80">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_lopQpK'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline41-container18">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline41-text70">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_H4KiqY'),
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
                          <span className="timeline41-text62">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_cUjLB-'),
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
            <div className="timeline41-step3">
              <div className="timeline41-container19">
                <div className="timeline41-container20"></div>
                <div className="timeline41-progress02"></div>
              </div>
              <div className="timeline41-container21">
                <h3 className="thq-heading-3">
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline41-text76">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_tkMl6s'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline41-text25 thq-heading-3">
                  {props.card3Heading ?? (
                    <Fragment>
                      <span className="timeline41-text73">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3LmYAG'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline41-text64">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MgVr-J'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline41-container22">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline41-text66">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_VWvh3c'),
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
                          <span className="timeline41-text63">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_z93Vpb'),
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
            <div className="timeline41-step4">
              <div className="timeline41-container23">
                <div className="timeline41-container24"></div>
                <div className="timeline41-progress03"></div>
              </div>
              <div className="timeline41-container25">
                <h3 className="thq-heading-3">
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline41-text68">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_v8ZOT-'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline41-text30 thq-heading-3">
                  {props.card4Heading ?? (
                    <Fragment>
                      <span className="timeline41-text65">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_OhSr25'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline41-text69">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Tk0eoq'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline41-container26">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline41-text74">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_nu88cD'),
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
                          <span className="timeline41-text78">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_TMI9kj'),
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
        <Timeline10
          title1={
            <Fragment>
              <span className="timeline41-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4brdVM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="timeline41-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_i-4da8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="timeline41-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gXPx8A'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="timeline41-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YgtSRd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card1Date={
            <Fragment>
              <span className="timeline41-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ntkEGC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card2Date={
            <Fragment>
              <span className="timeline41-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FKVwY4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card3Date={
            <Fragment>
              <span className="timeline41-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3iYCZJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card4Date={
            <Fragment>
              <span className="timeline41-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nJIO5n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card1Action1={
            <Fragment>
              <span className="timeline41-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4q22FE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card1Action2={
            <Fragment>
              <span className="timeline41-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XEe-hR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card1Content={
            <Fragment>
              <span className="timeline41-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ggyl3X'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card1Heading={
            <Fragment>
              <span className="timeline41-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uOvEoi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card2Action1={
            <Fragment>
              <span className="timeline41-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_e0v2dI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card2Action2={
            <Fragment>
              <span className="timeline41-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nOfPZq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card2Content={
            <Fragment>
              <span className="timeline41-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iieArF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card2Heading={
            <Fragment>
              <span className="timeline41-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GOYkvC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card3Action1={
            <Fragment>
              <span className="timeline41-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SAzk0A'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card3Action2={
            <Fragment>
              <span className="timeline41-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_si_l-m'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card3Content={
            <Fragment>
              <span className="timeline41-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GX4IDD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card3Heading={
            <Fragment>
              <span className="timeline41-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ch5q0d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card4Action1={
            <Fragment>
              <span className="timeline41-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CYwD2m'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card4Action2={
            <Fragment>
              <span className="timeline41-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WG4vNJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card4Content={
            <Fragment>
              <span className="timeline41-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Jf9pLR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          card4Heading={
            <Fragment>
              <span className="timeline41-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jUEHg-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Timeline10>
      </div>
      <style jsx>
        {`
          .timeline41-max-width {
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-container11 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline41-text11 {
            text-align: left;
          }
          .timeline41-container12 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-timeline-container {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline41-step1 {
            display: flex;
            position: relative;
            justify-content: center;
          }
          .timeline41-container13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline41-text15 {
            text-align: left;
          }
          .timeline41-container14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline41-container15 {
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
          .timeline41-container16 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline41-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline41-container17 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline41-text20 {
            text-align: left;
          }
          .timeline41-container18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline41-container19 {
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
          .timeline41-container20 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline41-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline41-container21 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline41-text25 {
            text-align: left;
          }
          .timeline41-container22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline41-container23 {
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
          .timeline41-container24 {
            width: 12px;
            height: 12px;
            margin: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            background-color: #000000;
          }
          .timeline41-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline41-container25 {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .timeline41-text30 {
            text-align: left;
          }
          .timeline41-container26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-text34 {
            display: inline-block;
          }
          .timeline41-text35 {
            display: inline-block;
          }
          .timeline41-text36 {
            display: inline-block;
          }
          .timeline41-text37 {
            display: inline-block;
          }
          .timeline41-text38 {
            display: inline-block;
          }
          .timeline41-text39 {
            display: inline-block;
          }
          .timeline41-text40 {
            display: inline-block;
          }
          .timeline41-text41 {
            display: inline-block;
          }
          .timeline41-text42 {
            display: inline-block;
          }
          .timeline41-text43 {
            display: inline-block;
          }
          .timeline41-text44 {
            display: inline-block;
          }
          .timeline41-text45 {
            display: inline-block;
          }
          .timeline41-text46 {
            display: inline-block;
          }
          .timeline41-text47 {
            display: inline-block;
          }
          .timeline41-text48 {
            display: inline-block;
          }
          .timeline41-text49 {
            display: inline-block;
          }
          .timeline41-text50 {
            display: inline-block;
          }
          .timeline41-text51 {
            display: inline-block;
          }
          .timeline41-text52 {
            display: inline-block;
          }
          .timeline41-text53 {
            display: inline-block;
          }
          .timeline41-text54 {
            display: inline-block;
          }
          .timeline41-text55 {
            display: inline-block;
          }
          .timeline41-text56 {
            display: inline-block;
          }
          .timeline41-text57 {
            display: inline-block;
          }
          .timeline41-text58 {
            display: inline-block;
          }
          .timeline41-text59 {
            display: inline-block;
          }
          .timeline41-text60 {
            display: inline-block;
          }
          .timeline41-text61 {
            display: inline-block;
          }
          .timeline41-text62 {
            display: inline-block;
          }
          .timeline41-text63 {
            display: inline-block;
          }
          .timeline41-text64 {
            display: inline-block;
          }
          .timeline41-text65 {
            display: inline-block;
          }
          .timeline41-text66 {
            display: inline-block;
          }
          .timeline41-text67 {
            display: inline-block;
          }
          .timeline41-text68 {
            display: inline-block;
          }
          .timeline41-text69 {
            display: inline-block;
          }
          .timeline41-text70 {
            display: inline-block;
          }
          .timeline41-text71 {
            display: inline-block;
          }
          .timeline41-text72 {
            display: inline-block;
          }
          .timeline41-text73 {
            display: inline-block;
          }
          .timeline41-text74 {
            display: inline-block;
          }
          .timeline41-text75 {
            display: inline-block;
          }
          .timeline41-text76 {
            display: inline-block;
          }
          .timeline41-text77 {
            display: inline-block;
          }
          .timeline41-text78 {
            display: inline-block;
          }
          .timeline41-text79 {
            display: inline-block;
          }
          .timeline41-text80 {
            display: inline-block;
          }
          .timeline41-text81 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .timeline41-max-width {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .timeline41-max-width {
              flex-direction: column;
            }
            .timeline41-text11 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline41-text15 {
              text-align: left;
            }
            .timeline41-text20 {
              text-align: left;
            }
            .timeline41-text25 {
              text-align: left;
            }
            .timeline41-text30 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline41-container11 {
              gap: var(--dl-layout-space-unit);
            }
            .timeline41-container12 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline41-timeline-container {
              width: 100%;
            }
            .timeline41-container14 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline41-container18 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline41-container22 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline41-container26 {
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

Timeline41.defaultProps = {
  card2Heading: undefined,
  card1Action2: undefined,
  date2: undefined,
  card1Content: undefined,
  card2Action2: undefined,
  card3Action2: undefined,
  card3Content: undefined,
  card4Heading: undefined,
  card3Action1: undefined,
  date1: undefined,
  date4: undefined,
  card4Content: undefined,
  card2Action1: undefined,
  title1: undefined,
  card1Action1: undefined,
  card3Heading: undefined,
  card4Action1: undefined,
  action2: undefined,
  date3: undefined,
  action1: undefined,
  card4Action2: undefined,
  content1: undefined,
  card2Content: undefined,
  card1Heading: undefined,
}

Timeline41.propTypes = {
  card2Heading: PropTypes.element,
  card1Action2: PropTypes.element,
  date2: PropTypes.element,
  card1Content: PropTypes.element,
  card2Action2: PropTypes.element,
  card3Action2: PropTypes.element,
  card3Content: PropTypes.element,
  card4Heading: PropTypes.element,
  card3Action1: PropTypes.element,
  date1: PropTypes.element,
  date4: PropTypes.element,
  card4Content: PropTypes.element,
  card2Action1: PropTypes.element,
  title1: PropTypes.element,
  card1Action1: PropTypes.element,
  card3Heading: PropTypes.element,
  card4Action1: PropTypes.element,
  action2: PropTypes.element,
  date3: PropTypes.element,
  action1: PropTypes.element,
  card4Action2: PropTypes.element,
  content1: PropTypes.element,
  card2Content: PropTypes.element,
  card1Heading: PropTypes.element,
}

export default Timeline41
