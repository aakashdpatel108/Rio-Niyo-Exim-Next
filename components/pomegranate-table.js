import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const PomegranateTable = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`pomegranate-table-container1 ${props.rootClassName} `}>
        <div className="pomegranate-table-container2">
          <h2 className="pomegranate-table-text10">
            {props.heading ?? (
              <Fragment>
                <span className="pomegranate-table-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kZ647T'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="pomegranate-table-container3">
            <table className="pomegranate-table-table">
              <thead className="pomegranate-table-thead">
                <tr>
                  <th className="pomegranate-table-th1">
                    <span className="pomegranate-table-text11">
                      {props.text ?? (
                        <Fragment>
                          <span className="pomegranate-table-text54">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_WcXHE3'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </th>
                  <th className="pomegranate-table-th2">
                    <span>
                      {props.text1 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text46">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_L9fA9O'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onmouseout="this.style.background='white'; this.style.transform='scale(1)'"
                  onmouseover="this.style.background='#d8ffe8'; this.style.transform='scale(1.01)'"
                  className="pomegranate-table-tr2"
                >
                  <td className="pomegranate-table-td10">
                    <span className="pomegranate-table-text13">
                      {props.text2 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text35">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_z3IikF'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="pomegranate-table-td11">
                    <span className="pomegranate-table-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_A6AnJW'),
                        }}
                      ></span>
                    </span>
                    <span className="pomegranate-table-text15">
                      {props.text4 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text41">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_He9GIa'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="pomegranate-table-text16">
                      {props.text5 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text50">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_NS_wJb'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="pomegranate-table-text17">
                      {props.text6 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text38">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_l9az3H'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                </tr>
                <tr
                  onmouseout="this.style.background='white'; this.style.transform='scale(1)'"
                  onmouseover="this.style.background='#d8ffe8'; this.style.transform='scale(1.01)'"
                  className="pomegranate-table-tr3"
                >
                  <td className="pomegranate-table-td12">
                    <span className="pomegranate-table-text18">
                      {props.text7 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_RWD3dB'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="pomegranate-table-td13">
                    <span className="pomegranate-table-text19">
                      {props.text8 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text43">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_EsxohA'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                </tr>
                <tr
                  onmouseout="this.style.background='white'; this.style.transform='scale(1)'"
                  onmouseover="this.style.background='#d8ffe8'; this.style.transform='scale(1.01)'"
                  className="pomegranate-table-tr4"
                >
                  <td className="pomegranate-table-td14">
                    <span className="pomegranate-table-text20">
                      {props.text9 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text45">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xwE81L'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="pomegranate-table-td15">
                    <span className="pomegranate-table-text21">
                      {props.text10 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text39">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_PrhxXY'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                </tr>
                <tr
                  onmouseout="this.style.background='white'; this.style.transform='scale(1)'"
                  onmouseover="this.style.background='#d8ffe8'; this.style.transform='scale(1.01)'"
                  className="pomegranate-table-tr5"
                >
                  <td className="pomegranate-table-td16">
                    <span className="pomegranate-table-text22">
                      {props.text11 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text33">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_kGO3h1'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="pomegranate-table-td17">
                    <span className="pomegranate-table-text23">
                      {props.text12 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text32">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_3NquhJ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="pomegranate-table-text24">
                      {props.text13 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text53">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_99hFvY'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="pomegranate-table-text25">
                      {props.text131 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text51">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_tequIr'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                </tr>
                <tr
                  onmouseout="this.style.background='white'; this.style.transform='scale(1)'"
                  onmouseover="this.style.background='#d8ffe8'; this.style.transform='scale(1.01)'"
                  className="pomegranate-table-tr6"
                >
                  <td className="pomegranate-table-td18">
                    <span className="pomegranate-table-text26">
                      {props.text14 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text34">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_D0LoLv'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="pomegranate-table-td19">
                    <span className="pomegranate-table-text27">
                      {props.text15 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text37">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ZV930F'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="pomegranate-table-text28">
                      {props.text16 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text47">
                            <span>Magnesium – 12 mg</span>
                            <br />
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="pomegranate-table-text29">
                      {props.text18 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text42">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_12Xzb3'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                </tr>
                <tr
                  onmouseout="this.style.background='white'; this.style.transform='scale(1)'"
                  onmouseover="this.style.background='#d8ffe8'; this.style.transform='scale(1.01)'"
                  className="pomegranate-table-tr7"
                >
                  <td className="pomegranate-table-td20">
                    <span className="pomegranate-table-text30">
                      {props.text71 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text52">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6jQGNj'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="pomegranate-table-td21">
                    <span className="pomegranate-table-text31">
                      {props.text81 ?? (
                        <Fragment>
                          <span className="pomegranate-table-text40">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Z8zPQj'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pomegranate-table-container1 {
            width: 100%;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            max-width: 900px;
            font-family: Arial, sans-serif;
          }
          .pomegranate-table-container2 {
            width: 100%;
            border: 2px solid #17a058;
            padding: 16px;
            background: #ffffff;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-radius: 14px;
          }
          .pomegranate-table-text10 {
            color: rgb(0, 0, 0);
            margin: 0 0 14px;
            font-size: 20px;
            font-weight: 700;
          }
          .pomegranate-table-container3 {
            width: 100%;
            border: 1px solid #17a058;
            overflow-x: auto;
            border-radius: 12px;
          }
          .pomegranate-table-table {
            color: #000;
            width: 100%;
            font-size: 15px;
            background: white;
            border-collapse: collapse;
          }
          .pomegranate-table-thead {
            background: linear-gradient(90deg, #0f4d2c, #17a058);
          }
          .pomegranate-table-th1 {
            color: white;
            font-size: 12px;
            text-align: left;
            font-weight: 600;
            padding-top: 14px;
            padding-left: 14px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            letter-spacing: 0.1em;
            padding-bottom: 14px;
            text-transform: uppercase;
          }
          .pomegranate-table-th2 {
            color: white;
            padding: 14px;
            font-size: 12px;
            text-align: left;
            font-weight: 600;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .pomegranate-table-tr2 {
            background: white;
            transition: all 180ms ease;
          }
          .pomegranate-table-td10 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-td11 {
            gap: var(--dl-layout-space-halfunit);
            color: #333;
            display: grid;
            padding: 14px;
            padding-left: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-tr3 {
            background: white;
            transition: all 180ms ease;
          }
          .pomegranate-table-td12 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-td13 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-tr4 {
            background: white;
            transition: all 180ms ease;
          }
          .pomegranate-table-td14 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-td15 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-tr5 {
            background: white;
            transition: all 180ms ease;
          }
          .pomegranate-table-td16 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-td17 {
            gap: var(--dl-layout-space-halfunit);
            color: #333;
            display: grid;
            padding: 14px;
            padding-left: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-tr6 {
            background: white;
            transition: all 180ms ease;
          }
          .pomegranate-table-td18 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-td19 {
            gap: var(--dl-layout-space-halfunit);
            color: #333;
            display: grid;
            padding: 14px;
            padding-left: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-tr7 {
            background: white;
            transition: all 180ms ease;
          }
          .pomegranate-table-td20 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-td21 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .pomegranate-table-text32 {
            display: inline-block;
          }
          .pomegranate-table-text33 {
            display: inline-block;
          }
          .pomegranate-table-text34 {
            display: inline-block;
          }
          .pomegranate-table-text35 {
            display: inline-block;
          }
          .pomegranate-table-text36 {
            display: inline-block;
          }
          .pomegranate-table-text37 {
            display: inline-block;
          }
          .pomegranate-table-text38 {
            display: inline-block;
          }
          .pomegranate-table-text39 {
            display: inline-block;
          }
          .pomegranate-table-text40 {
            display: inline-block;
          }
          .pomegranate-table-text41 {
            display: inline-block;
          }
          .pomegranate-table-text42 {
            display: inline-block;
          }
          .pomegranate-table-text43 {
            display: inline-block;
          }
          .pomegranate-table-text44 {
            display: inline-block;
          }
          .pomegranate-table-text45 {
            display: inline-block;
          }
          .pomegranate-table-text46 {
            display: inline-block;
          }
          .pomegranate-table-text47 {
            display: inline-block;
          }
          .pomegranate-table-text50 {
            display: inline-block;
          }
          .pomegranate-table-text51 {
            display: inline-block;
          }
          .pomegranate-table-text52 {
            display: inline-block;
          }
          .pomegranate-table-text53 {
            display: inline-block;
          }
          .pomegranate-table-text54 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .pomegranate-table-text11 {
              font-family: Taviraj;
            }
            .pomegranate-table-text13 {
              font-family: Open Sans;
            }
            .pomegranate-table-text14 {
              font-family: Open Sans;
            }
            .pomegranate-table-text15 {
              font-family: Open Sans;
            }
            .pomegranate-table-text16 {
              font-family: Open Sans;
            }
            .pomegranate-table-text17 {
              font-family: Open Sans;
            }
            .pomegranate-table-text18 {
              font-family: Open Sans;
            }
            .pomegranate-table-text19 {
              font-family: Open Sans;
            }
            .pomegranate-table-text20 {
              font-family: Open Sans;
            }
            .pomegranate-table-text21 {
              font-family: Open Sans;
            }
            .pomegranate-table-text22 {
              font-family: Open Sans;
            }
            .pomegranate-table-text23 {
              font-family: Open Sans;
            }
            .pomegranate-table-text24 {
              font-family: Open Sans;
            }
            .pomegranate-table-text25 {
              font-family: Open Sans;
            }
            .pomegranate-table-text26 {
              font-family: Open Sans;
            }
            .pomegranate-table-text27 {
              font-family: Open Sans;
            }
            .pomegranate-table-text28 {
              font-family: Open Sans;
            }
            .pomegranate-table-text29 {
              font-family: Open Sans;
            }
            .pomegranate-table-text30 {
              font-family: Open Sans;
            }
            .pomegranate-table-text31 {
              font-family: Open Sans;
            }
            .pomegranate-table-text35 {
              font-family: Open Sans;
            }
            .pomegranate-table-text36 {
              font-family: Open Sans;
            }
            .pomegranate-table-text46 {
              font-family: Taviraj;
            }
          }
        `}
      </style>
    </>
  )
}

PomegranateTable.defaultProps = {
  text12: undefined,
  text11: undefined,
  text14: undefined,
  text2: undefined,
  heading: undefined,
  text15: undefined,
  text6: undefined,
  text10: undefined,
  text81: undefined,
  text4: undefined,
  text18: undefined,
  text8: undefined,
  text7: undefined,
  text9: undefined,
  text1: undefined,
  text16: undefined,
  rootClassName: '',
  text5: undefined,
  text131: undefined,
  text71: undefined,
  text13: undefined,
  text: undefined,
}

PomegranateTable.propTypes = {
  text12: PropTypes.element,
  text11: PropTypes.element,
  text14: PropTypes.element,
  text2: PropTypes.element,
  heading: PropTypes.element,
  text15: PropTypes.element,
  text6: PropTypes.element,
  text10: PropTypes.element,
  text81: PropTypes.element,
  text4: PropTypes.element,
  text18: PropTypes.element,
  text8: PropTypes.element,
  text7: PropTypes.element,
  text9: PropTypes.element,
  text1: PropTypes.element,
  text16: PropTypes.element,
  rootClassName: PropTypes.string,
  text5: PropTypes.element,
  text131: PropTypes.element,
  text71: PropTypes.element,
  text13: PropTypes.element,
  text: PropTypes.element,
}

export default PomegranateTable
