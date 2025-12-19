import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DragonFruitTable = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`dragon-fruit-table-container1 ${props.rootClassName} `}>
        <div className="dragon-fruit-table-container2">
          <h2 className="dragon-fruit-table-text10">
            {props.heading ?? (
              <Fragment>
                <span className="dragon-fruit-table-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JGxbLK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="dragon-fruit-table-container3">
            <table className="dragon-fruit-table-table">
              <thead className="dragon-fruit-table-thead">
                <tr>
                  <th className="dragon-fruit-table-th1">
                    <span className="dragon-fruit-table-text11">
                      {props.text ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text34">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_p3pIYC'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </th>
                  <th className="dragon-fruit-table-th2">
                    <span>
                      {props.text1 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text37">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_XMgvTp'),
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
                  className="dragon-fruit-table-tr2"
                >
                  <td className="dragon-fruit-table-td10">
                    <span className="dragon-fruit-table-text13">
                      {props.text2 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text54">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_OUdVWL'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="dragon-fruit-table-td11">
                    <span className="dragon-fruit-table-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ha8tti'),
                        }}
                      ></span>
                    </span>
                    <span className="dragon-fruit-table-text15">
                      {props.text4 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text36">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_HAoqTY'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="dragon-fruit-table-text16">
                      {props.text5 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text47">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_jpdTdx'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="dragon-fruit-table-text17">
                      {props.text6 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text50">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_1b2npp'),
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
                  className="dragon-fruit-table-tr3"
                >
                  <td className="dragon-fruit-table-td12">
                    <span className="dragon-fruit-table-text18">
                      {props.text7 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text51">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_dSiI37'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="dragon-fruit-table-td13">
                    <span className="dragon-fruit-table-text19">
                      {props.text8 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_7g8sgZ'),
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
                  className="dragon-fruit-table-tr4"
                >
                  <td className="dragon-fruit-table-td14">
                    <span className="dragon-fruit-table-text20">
                      {props.text9 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text45">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_fgrcV2'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="dragon-fruit-table-td15">
                    <span className="dragon-fruit-table-text21">
                      {props.text10 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text40">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_lxWpMS'),
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
                  className="dragon-fruit-table-tr5"
                >
                  <td className="dragon-fruit-table-td16">
                    <span className="dragon-fruit-table-text22">
                      {props.text11 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text38">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_G2JO3L'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="dragon-fruit-table-td17">
                    <span className="dragon-fruit-table-text23">
                      {props.text12 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text53">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_KgOo1o'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="dragon-fruit-table-text24">
                      {props.text13 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text39">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_SLmDil'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="dragon-fruit-table-text25">
                      {props.text131 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text33">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qGrccX'),
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
                  className="dragon-fruit-table-tr6"
                >
                  <td className="dragon-fruit-table-td18">
                    <span className="dragon-fruit-table-text26">
                      {props.text14 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text46">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_8WqT08'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="dragon-fruit-table-td19">
                    <span className="dragon-fruit-table-text27">
                      {props.text15 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text48">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6V3H_e'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="dragon-fruit-table-text28">
                      {props.text16 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text41">
                            <span>Magnesium - 10 mg</span>
                            <br />
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="dragon-fruit-table-text29">
                      {props.text18 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text35">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_B7r2U_'),
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
                  className="dragon-fruit-table-tr7"
                >
                  <td className="dragon-fruit-table-td20">
                    <span className="dragon-fruit-table-text30">
                      {props.text71 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text52">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_yc8S6f'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="dragon-fruit-table-td21">
                    <span className="dragon-fruit-table-text31">
                      {props.text81 ?? (
                        <Fragment>
                          <span className="dragon-fruit-table-text32">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_jbd4Nw'),
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
          .dragon-fruit-table-container1 {
            width: 100%;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            max-width: 900px;
            font-family: Arial, sans-serif;
          }
          .dragon-fruit-table-container2 {
            width: 100%;
            border: 2px solid #17a058;
            padding: 16px;
            background: #ffffff;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-radius: 14px;
          }
          .dragon-fruit-table-text10 {
            color: rgb(0, 0, 0);
            margin: 0 0 14px;
            font-size: 20px;
            font-weight: 700;
          }
          .dragon-fruit-table-container3 {
            width: 100%;
            border: 1px solid #17a058;
            overflow-x: auto;
            border-radius: 12px;
          }
          .dragon-fruit-table-table {
            color: #000;
            width: 100%;
            font-size: 15px;
            background: white;
            border-collapse: collapse;
          }
          .dragon-fruit-table-thead {
            background: linear-gradient(90deg, #0f4d2c, #17a058);
          }
          .dragon-fruit-table-th1 {
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
          .dragon-fruit-table-th2 {
            color: white;
            padding: 14px;
            font-size: 12px;
            text-align: left;
            font-weight: 600;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .dragon-fruit-table-tr2 {
            background: white;
            transition: all 180ms ease;
          }
          .dragon-fruit-table-td10 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-td11 {
            gap: var(--dl-layout-space-halfunit);
            color: #333;
            display: grid;
            padding: 14px;
            padding-left: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-tr3 {
            background: white;
            transition: all 180ms ease;
          }
          .dragon-fruit-table-td12 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-td13 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-tr4 {
            background: white;
            transition: all 180ms ease;
          }
          .dragon-fruit-table-td14 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-td15 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-tr5 {
            background: white;
            transition: all 180ms ease;
          }
          .dragon-fruit-table-td16 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-td17 {
            gap: var(--dl-layout-space-halfunit);
            color: #333;
            display: grid;
            padding: 14px;
            padding-left: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-tr6 {
            background: white;
            transition: all 180ms ease;
          }
          .dragon-fruit-table-td18 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-td19 {
            gap: var(--dl-layout-space-halfunit);
            color: #333;
            display: grid;
            padding: 14px;
            padding-left: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-tr7 {
            background: white;
            transition: all 180ms ease;
          }
          .dragon-fruit-table-td20 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-td21 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .dragon-fruit-table-text32 {
            display: inline-block;
          }
          .dragon-fruit-table-text33 {
            display: inline-block;
          }
          .dragon-fruit-table-text34 {
            display: inline-block;
          }
          .dragon-fruit-table-text35 {
            display: inline-block;
          }
          .dragon-fruit-table-text36 {
            display: inline-block;
          }
          .dragon-fruit-table-text37 {
            display: inline-block;
          }
          .dragon-fruit-table-text38 {
            display: inline-block;
          }
          .dragon-fruit-table-text39 {
            display: inline-block;
          }
          .dragon-fruit-table-text40 {
            display: inline-block;
          }
          .dragon-fruit-table-text41 {
            display: inline-block;
          }
          .dragon-fruit-table-text44 {
            display: inline-block;
          }
          .dragon-fruit-table-text45 {
            display: inline-block;
          }
          .dragon-fruit-table-text46 {
            display: inline-block;
          }
          .dragon-fruit-table-text47 {
            display: inline-block;
          }
          .dragon-fruit-table-text48 {
            display: inline-block;
          }
          .dragon-fruit-table-text49 {
            display: inline-block;
          }
          .dragon-fruit-table-text50 {
            display: inline-block;
          }
          .dragon-fruit-table-text51 {
            display: inline-block;
          }
          .dragon-fruit-table-text52 {
            display: inline-block;
          }
          .dragon-fruit-table-text53 {
            display: inline-block;
          }
          .dragon-fruit-table-text54 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .dragon-fruit-table-text11 {
              font-family: Taviraj;
            }
            .dragon-fruit-table-text13 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text14 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text15 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text16 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text17 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text18 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text19 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text20 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text21 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text22 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text23 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text24 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text25 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text26 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text27 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text28 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text29 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text30 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text31 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text37 {
              font-family: Taviraj;
            }
            .dragon-fruit-table-text49 {
              font-family: Open Sans;
            }
            .dragon-fruit-table-text54 {
              font-family: Open Sans;
            }
          }
        `}
      </style>
    </>
  )
}

DragonFruitTable.defaultProps = {
  text81: undefined,
  text131: undefined,
  text: undefined,
  text18: undefined,
  text4: undefined,
  text1: undefined,
  text11: undefined,
  text13: undefined,
  text10: undefined,
  text16: undefined,
  text8: undefined,
  rootClassName: '',
  text9: undefined,
  text14: undefined,
  text5: undefined,
  text15: undefined,
  heading: undefined,
  text6: undefined,
  text7: undefined,
  text71: undefined,
  text12: undefined,
  text2: undefined,
}

DragonFruitTable.propTypes = {
  text81: PropTypes.element,
  text131: PropTypes.element,
  text: PropTypes.element,
  text18: PropTypes.element,
  text4: PropTypes.element,
  text1: PropTypes.element,
  text11: PropTypes.element,
  text13: PropTypes.element,
  text10: PropTypes.element,
  text16: PropTypes.element,
  text8: PropTypes.element,
  rootClassName: PropTypes.string,
  text9: PropTypes.element,
  text14: PropTypes.element,
  text5: PropTypes.element,
  text15: PropTypes.element,
  heading: PropTypes.element,
  text6: PropTypes.element,
  text7: PropTypes.element,
  text71: PropTypes.element,
  text12: PropTypes.element,
  text2: PropTypes.element,
}

export default DragonFruitTable
