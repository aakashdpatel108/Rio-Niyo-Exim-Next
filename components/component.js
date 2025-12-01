import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AppComponent = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="component-container1">
        <div className="component-container2">
          <h2 className="component-text10">
            {props.heading ?? (
              <Fragment>
                <span className="component-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ICoVOk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="component-container3">
            <table className="component-table">
              <thead className="component-thead">
                <tr>
                  <th className="component-th1">
                    <span>
                      {props.text ?? (
                        <Fragment>
                          <span className="component-text22">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_MAAOma'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </th>
                  <th className="component-th2">
                    <span>
                      {props.text1 ?? (
                        <Fragment>
                          <span className="component-text27">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_OjXkxI'),
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
                  className="component-tr2"
                >
                  <td className="component-td1">
                    <span>
                      {props.text2 ?? (
                        <Fragment>
                          <span className="component-text25">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_VSaEwA'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="component-td2">
                    <span>
                      {props.text3 ?? (
                        <Fragment>
                          <span className="component-text24">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_90TgeP'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                </tr>
                <tr
                  onmouseout="this.style.background='#f7f7f7'; this.style.transform='scale(1)'"
                  onmouseover="this.style.background='#d8ffe8'; this.style.transform='scale(1.01)'"
                  className="component-tr3"
                >
                  <td className="component-td3">
                    <span>
                      {props.text4 ?? (
                        <Fragment>
                          <span className="component-text19">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6HS1rW'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="component-td4">
                    <span>
                      {props.text5 ?? (
                        <Fragment>
                          <span className="component-text20">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_aDe5mg'),
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
                  className="component-tr4"
                >
                  <td className="component-td5">
                    <span>
                      {props.text6 ?? (
                        <Fragment>
                          <span className="component-text21">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_4-gE66'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </td>
                  <td className="component-td6">
                    <span>
                      {props.text7 ?? (
                        <Fragment>
                          <span className="component-text26">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_CX92gb'),
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
          .component-container1 {
            width: 100%;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            max-width: 900px;
            font-family: Arial, sans-serif;
          }
          .component-container2 {
            width: 100%;
            border: 2px solid #17a058;
            padding: 16px;
            background: #ffffff;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-radius: 14px;
          }
          .component-text10 {
            color: #000000;
            margin: 0 0 14px;
            font-size: 20px;
            font-weight: 700;
          }
          .component-container3 {
            width: 100%;
            border: 1px solid #17a058;
            overflow-x: auto;
            border-radius: 12px;
          }
          .component-table {
            color: #000;
            width: 100%;
            font-size: 15px;
            background: white;
            border-collapse: collapse;
          }
          .component-thead {
            background: linear-gradient(90deg, #0f4d2c, #17a058);
          }
          .component-th1 {
            color: white;
            padding: 14px;
            font-size: 12px;
            text-align: left;
            font-weight: 600;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .component-th2 {
            color: white;
            padding: 14px;
            font-size: 12px;
            text-align: left;
            font-weight: 600;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .component-tr2 {
            background: white;
            transition: all 180ms ease;
          }
          .component-td1 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .component-td2 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .component-tr3 {
            background: #f7f7f7;
            transition: all 180ms ease;
          }
          .component-td3 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .component-td4 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .component-tr4 {
            background: white;
            transition: all 180ms ease;
          }
          .component-td5 {
            color: #000;
            padding: 14px;
            font-weight: 600;
            border-bottom: 1px solid #cce3d5;
          }
          .component-td6 {
            color: #333;
            padding: 14px;
            border-bottom: 1px solid #cce3d5;
          }
          .component-text19 {
            display: inline-block;
          }
          .component-text20 {
            display: inline-block;
          }
          .component-text21 {
            display: inline-block;
          }
          .component-text22 {
            display: inline-block;
          }
          .component-text23 {
            display: inline-block;
          }
          .component-text24 {
            display: inline-block;
          }
          .component-text25 {
            display: inline-block;
          }
          .component-text26 {
            display: inline-block;
          }
          .component-text27 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  text4: undefined,
  text5: undefined,
  text6: undefined,
  text: undefined,
  heading: undefined,
  text3: undefined,
  text2: undefined,
  text7: undefined,
  text1: undefined,
}

AppComponent.propTypes = {
  text4: PropTypes.element,
  text5: PropTypes.element,
  text6: PropTypes.element,
  text: PropTypes.element,
  heading: PropTypes.element,
  text3: PropTypes.element,
  text2: PropTypes.element,
  text7: PropTypes.element,
  text1: PropTypes.element,
}

export default AppComponent
