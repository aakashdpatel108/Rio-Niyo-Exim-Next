import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TableComponent = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="table-component-container1">
        <div className="table-component-container2">
          <h2 className="table-component-text10">
            {props.heading ?? (
              <Fragment>
                <span className="table-component-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NOnm-I'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="table-component-container3">
            <table className="table-component-table">
              <thead className="table-component-thead">
                <tr>
                  <th className="table-component-th1">
                    <span className="table-component-text11">
                      {props.text ?? (
                        <Fragment>
                          <span className="table-component-text45">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xWqopR'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </th>
                  <th className="table-component-th2">
                    <span>
                      {props.text1 ?? (
                        <Fragment>
                          <span className="table-component-text43">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_uXrGXh'),
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
                  className="table-component-tr2"
                >
                  <td className="table-component-td10">
                    <span className="table-component-text13">
                      {props.text2 ?? (
                        <Fragment>
                          <span className="table-component-text48">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_hTLSmj'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="table-component-td11">
                    <span className="table-component-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_EcdGKF'),
                        }}
                      ></span>
                    </span>
                    <span className="table-component-text15">
                      {props.text4 ?? (
                        <Fragment>
                          <span className="table-component-text49">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_0TuBR1'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="table-component-text16">
                      {props.text5 ?? (
                        <Fragment>
                          <span className="table-component-text40">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_kamEDB'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="table-component-text17">
                      {props.text6 ?? (
                        <Fragment>
                          <span className="table-component-text30">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_saBvVg'),
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
                  className="table-component-tr3"
                >
                  <td className="table-component-td12">
                    <span className="table-component-text18">
                      {props.text7 ?? (
                        <Fragment>
                          <span className="table-component-text39">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_2wfL1k'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="table-component-td13">
                    <span className="table-component-text19">
                      {props.text8 ?? (
                        <Fragment>
                          <span className="table-component-text47">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_0V4e28'),
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
                  className="table-component-tr4"
                >
                  <td className="table-component-td14">
                    <span className="table-component-text20">
                      {props.text9 ?? (
                        <Fragment>
                          <span className="table-component-text36">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_AkI_B-'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="table-component-td15">
                    <span className="table-component-text21">
                      {props.text10 ?? (
                        <Fragment>
                          <span className="table-component-text32">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ZrqfzE'),
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
                  className="table-component-tr5"
                >
                  <td className="table-component-td16">
                    <span className="table-component-text22">
                      {props.text11 ?? (
                        <Fragment>
                          <span className="table-component-text42">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ancfZp'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="table-component-td17">
                    <span className="table-component-text23">
                      {props.text12 ?? (
                        <Fragment>
                          <span className="table-component-text37">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_MQbBJx'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="table-component-text24">
                      {props.text13 ?? (
                        <Fragment>
                          <span className="table-component-text46">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_h4bXjC'),
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
                  className="table-component-tr6"
                >
                  <td className="table-component-td18">
                    <span className="table-component-text25">
                      {props.text14 ?? (
                        <Fragment>
                          <span className="table-component-text31">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xDtWlG'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="table-component-td19">
                    <span className="table-component-text26">
                      {props.text15 ?? (
                        <Fragment>
                          <span className="table-component-text41">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_bBysX9'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="table-component-text27">
                      {props.text16 ?? (
                        <Fragment>
                          <span className="table-component-text33">
                            <span>Magnesium</span>
                            <br />
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="table-component-text28">
                      {props.text17 ?? (
                        <Fragment>
                          <span className="table-component-text38">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_UoB_dW'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="table-component-text29">
                      {props.text18 ?? (
                        <Fragment>
                          <span className="table-component-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_7YMBPL'),
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
          .table-component-container1 {
            width: 100%;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            max-width: 900px;
            font-family: Arial, sans-serif;
          }
          .table-component-container2 {
            width: 100%;
            border: 2px solid #17a058;
            padding: 16px;
            background: #ffffff;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-radius: 14px;
          }
          .table-component-text10 {
            color: rgb(0, 0, 0);
            margin: 0 0 14px;
            font-size: 20px;
            font-weight: 700;
          }
          .table-component-container3 {
            width: 100%;
            border: 1px solid #17a058;
            overflow-x: auto;
            border-radius: 12px;
          }
          .table-component-table {
            color: #000;
            width: 100%;
            font-size: 15px;
            background: white;
            border-collapse: collapse;
          }
          .table-component-thead {
            background: linear-gradient(90deg, #0f4d2c, #17a058);
          }
          .table-component-th1 {
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
          .table-component-th2 {
            color: white;
            padding: 14px;
            font-size: 12px;
            text-align: left;
            font-weight: 600;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .table-component-tr2 {
            background: white;
            transition: all 180ms ease;
          }
          .table-component-td10 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-td11 {
            gap: var(--dl-layout-space-halfunit);
            color: #333;
            display: grid;
            padding: 14px;
            padding-left: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-tr3 {
            background: white;
            transition: all 180ms ease;
          }
          .table-component-td12 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-td13 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-tr4 {
            background: white;
            transition: all 180ms ease;
          }
          .table-component-td14 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-td15 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-tr5 {
            background: white;
            transition: all 180ms ease;
          }
          .table-component-td16 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-td17 {
            gap: var(--dl-layout-space-halfunit);
            color: #333;
            display: grid;
            padding: 14px;
            padding-left: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-tr6 {
            background: white;
            transition: all 180ms ease;
          }
          .table-component-td18 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-td19 {
            gap: var(--dl-layout-space-halfunit);
            color: #333;
            display: grid;
            padding: 14px;
            padding-left: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .table-component-text30 {
            display: inline-block;
          }
          .table-component-text31 {
            display: inline-block;
          }
          .table-component-text32 {
            display: inline-block;
          }
          .table-component-text33 {
            display: inline-block;
          }
          .table-component-text36 {
            display: inline-block;
          }
          .table-component-text37 {
            display: inline-block;
          }
          .table-component-text38 {
            display: inline-block;
          }
          .table-component-text39 {
            display: inline-block;
          }
          .table-component-text40 {
            display: inline-block;
          }
          .table-component-text41 {
            display: inline-block;
          }
          .table-component-text42 {
            display: inline-block;
          }
          .table-component-text43 {
            display: inline-block;
          }
          .table-component-text44 {
            display: inline-block;
          }
          .table-component-text45 {
            display: inline-block;
          }
          .table-component-text46 {
            display: inline-block;
          }
          .table-component-text47 {
            display: inline-block;
          }
          .table-component-text48 {
            display: inline-block;
          }
          .table-component-text49 {
            display: inline-block;
          }
          .table-component-text50 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .table-component-text11 {
              font-family: Taviraj;
            }
            .table-component-text13 {
              font-family: Open Sans;
            }
            .table-component-text14 {
              font-family: Open Sans;
            }
            .table-component-text15 {
              font-family: Open Sans;
            }
            .table-component-text16 {
              font-family: Open Sans;
            }
            .table-component-text17 {
              font-family: Open Sans;
            }
            .table-component-text18 {
              font-family: Open Sans;
            }
            .table-component-text19 {
              font-family: Open Sans;
            }
            .table-component-text20 {
              font-family: Open Sans;
            }
            .table-component-text21 {
              font-family: Open Sans;
            }
            .table-component-text22 {
              font-family: Open Sans;
            }
            .table-component-text23 {
              font-family: Open Sans;
            }
            .table-component-text24 {
              font-family: Open Sans;
            }
            .table-component-text25 {
              font-family: Open Sans;
            }
            .table-component-text26 {
              font-family: Open Sans;
            }
            .table-component-text27 {
              font-family: Open Sans;
            }
            .table-component-text28 {
              font-family: Open Sans;
            }
            .table-component-text29 {
              font-family: Open Sans;
            }
            .table-component-text43 {
              font-family: Taviraj;
            }
            .table-component-text48 {
              font-family: Open Sans;
            }
            .table-component-text50 {
              font-family: Open Sans;
            }
          }
        `}
      </style>
    </>
  )
}

TableComponent.defaultProps = {
  text6: undefined,
  text14: undefined,
  text10: undefined,
  text16: undefined,
  text9: undefined,
  text12: undefined,
  text17: undefined,
  text7: undefined,
  text5: undefined,
  text15: undefined,
  text11: undefined,
  text1: undefined,
  text18: undefined,
  text: undefined,
  text13: undefined,
  text8: undefined,
  text2: undefined,
  text4: undefined,
  heading: undefined,
}

TableComponent.propTypes = {
  text6: PropTypes.element,
  text14: PropTypes.element,
  text10: PropTypes.element,
  text16: PropTypes.element,
  text9: PropTypes.element,
  text12: PropTypes.element,
  text17: PropTypes.element,
  text7: PropTypes.element,
  text5: PropTypes.element,
  text15: PropTypes.element,
  text11: PropTypes.element,
  text1: PropTypes.element,
  text18: PropTypes.element,
  text: PropTypes.element,
  text13: PropTypes.element,
  text8: PropTypes.element,
  text2: PropTypes.element,
  text4: PropTypes.element,
  heading: PropTypes.element,
}

export default TableComponent
