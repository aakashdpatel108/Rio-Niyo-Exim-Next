import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentList6 = (props) => {
  const translate = useTranslations()
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  return (
    <>
      <div className="content-list6-container1 thq-section-padding">
        <div className="content-list6-max-width thq-section-max-width">
          <div className="content-list6-container2 thq-flex-column">
            {isTermsVisible === true && (
              <button
                onClick={() => {
                  setIsTermsVisible(true)
                  setIsRefundVisible(false)
                  setIsPrivacyVisible(false)
                }}
                className="thq-button-filled"
              >
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="content-list6-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_XZM3eD'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isTermsVisible === false && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsRefundVisible(false)
                  setIsTermsVisible(true)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="content-list6-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_XZM3eD'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isPrivacyVisible === false && (
              <button
                onClick={() => {
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(true)
                  setIsRefundVisible(false)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="content-list6-text38">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8PgPCN'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isPrivacyVisible === true && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(true)
                  setIsRefundVisible(false)
                  setIsTermsVisible(false)
                }}
                className="thq-button-filled"
              >
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="content-list6-text38">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8PgPCN'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isRefundVisible === false && (
              <button
                onClick={() => {
                  setIsRefundVisible(true)
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(false)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button2 ?? (
                    <Fragment>
                      <span className="content-list6-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_XzJ1uN'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isRefundVisible === true && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(false)
                  setIsRefundVisible(true)
                }}
                className="thq-button-filled"
              >
                <span>
                  {props.button2 ?? (
                    <Fragment>
                      <span className="content-list6-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_XzJ1uN'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
          </div>
          <div className="content-list6-container3 thq-flex-column">
            {isTermsVisible === true && (
              <div className="content-list6-container4">
                <ul className="content-list6-ul1 thq-flex-column">
                  <li className="content-list6-li10 thq-flex-column list-item">
                    <h2 className="content-list6-heading7 thq-heading-2">
                      {props.heading7 ?? (
                        <Fragment>
                          <span className="content-list6-text33">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qTWh65'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h2>
                    <p className="thq-body-small">
                      {props.content7 ?? (
                        <Fragment>
                          <span className="content-list6-text35">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_A6Nobd'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <ul className="content-list6-ul2 thq-flex-column">
                      <li className="list-item">
                        <h3 className="thq-heading-3">
                          {props.heading8 ?? (
                            <Fragment>
                              <span className="content-list6-text19">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_9rwAN7'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h3>
                        <p className="thq-body-small">
                          {props.content2 ?? (
                            <Fragment>
                              <span className="content-list6-text28">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_C-sPn0'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </p>
                      </li>
                      <li className="list-item">
                        <h3 className="thq-heading-3">
                          {props.heading9 ?? (
                            <Fragment>
                              <span className="content-list6-text37">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_vFx6nQ'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h3>
                        <p className="thq-body-small">
                          {props.content9 ?? (
                            <Fragment>
                              <span className="content-list6-text36">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_SEqvRD'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
            {isPrivacyVisible === true && (
              <div className="content-list6-container5">
                <ul className="thq-flex-column">
                  <li className="content-list6-li13 thq-flex-column list-item">
                    <h1 className="content-list6-heading1 thq-heading-2">
                      {props.heading1 ?? (
                        <Fragment>
                          <span className="content-list6-text16">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_FwVDWl'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="thq-body-small">
                      {props.content1 ?? (
                        <Fragment>
                          <span className="content-list6-text29">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_SlNs2j'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <ul className="content-list6-ul4 thq-flex-column">
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading2 ?? (
                            <Fragment>
                              <span className="content-list6-text32">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_e7HIBg'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <p className="thq-body-small">
                          {props.content2 ?? (
                            <Fragment>
                              <span className="content-list6-text28">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_C-sPn0'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </p>
                      </li>
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading3 ?? (
                            <Fragment>
                              <span className="content-list6-text34">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_e6mp8a'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content3 ?? (
                            <Fragment>
                              <span className="content-list6-text31">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_WGWzkQ'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading4 ?? (
                            <Fragment>
                              <span className="content-list6-text43">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_C4urpF'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content4 ?? (
                            <Fragment>
                              <span className="content-list6-text40">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_2X_z0Y'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading5 ?? (
                            <Fragment>
                              <span className="content-list6-text39">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_Hs6Q8H'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content5 ?? (
                            <Fragment>
                              <span className="content-list6-text22">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_CtXDTZ'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading6 ?? (
                            <Fragment>
                              <span className="content-list6-text24">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_3K2-Pg'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content6 ?? (
                            <Fragment>
                              <span className="content-list6-text42">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_61B6Wq'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
            {isRefundVisible === true && (
              <div className="content-list6-container6">
                <ul className="content-list6-ul5 thq-flex-column">
                  <li className="content-list6-li19 thq-flex-column list-item">
                    <h1 className="content-list6-heading10 thq-heading-2">
                      {props.heading10 ?? (
                        <Fragment>
                          <span className="content-list6-text41">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_uRe98h'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="thq-body-small">
                      {props.content10 ?? (
                        <Fragment>
                          <span className="content-list6-text21">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_cks-8w'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <ul className="content-list6-ul6 thq-flex-column">
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading11 ?? (
                            <Fragment>
                              <span className="content-list6-text30">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_6qyVTA'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content11 ?? (
                            <Fragment>
                              <span className="content-list6-text25">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_YliIC0'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading12 ?? (
                            <Fragment>
                              <span className="content-list6-text23">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_QQamns'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content12 ?? (
                            <Fragment>
                              <span className="content-list6-text18">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_iky0aN'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading13 ?? (
                            <Fragment>
                              <span className="content-list6-text20">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_RMW-xZ'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content13 ?? (
                            <Fragment>
                              <span className="content-list6-text17">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_7KxhPK'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list6-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list6-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            flex-direction: row;
          }
          .content-list6-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: stretch;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .content-list6-container3 {
            width: auto;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
          }
          .content-list6-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list6-ul1 {
            align-items: flex-start;
          }
          .content-list6-li10 {
            align-items: flex-start;
          }
          .content-list6-heading7 {
            align-self: center;
            text-align: center;
          }
          .content-list6-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list6-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list6-li13 {
            align-items: flex-start;
          }
          .content-list6-heading1 {
            align-self: center;
            text-align: center;
          }
          .content-list6-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list6-container6 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list6-ul5 {
            align-items: flex-start;
          }
          .content-list6-li19 {
            align-items: flex-start;
          }
          .content-list6-heading10 {
            align-self: center;
            text-align: center;
          }
          .content-list6-ul6 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list6-text16 {
            display: inline-block;
          }
          .content-list6-text17 {
            display: inline-block;
          }
          .content-list6-text18 {
            display: inline-block;
          }
          .content-list6-text19 {
            display: inline-block;
          }
          .content-list6-text20 {
            display: inline-block;
          }
          .content-list6-text21 {
            display: inline-block;
          }
          .content-list6-text22 {
            display: inline-block;
          }
          .content-list6-text23 {
            display: inline-block;
          }
          .content-list6-text24 {
            display: inline-block;
          }
          .content-list6-text25 {
            display: inline-block;
          }
          .content-list6-text26 {
            display: inline-block;
          }
          .content-list6-text27 {
            display: inline-block;
          }
          .content-list6-text28 {
            display: inline-block;
          }
          .content-list6-text29 {
            display: inline-block;
          }
          .content-list6-text30 {
            display: inline-block;
          }
          .content-list6-text31 {
            display: inline-block;
          }
          .content-list6-text32 {
            display: inline-block;
          }
          .content-list6-text33 {
            display: inline-block;
          }
          .content-list6-text34 {
            display: inline-block;
          }
          .content-list6-text35 {
            display: inline-block;
          }
          .content-list6-text36 {
            display: inline-block;
          }
          .content-list6-text37 {
            display: inline-block;
          }
          .content-list6-text38 {
            display: inline-block;
          }
          .content-list6-text39 {
            display: inline-block;
          }
          .content-list6-text40 {
            display: inline-block;
          }
          .content-list6-text41 {
            display: inline-block;
          }
          .content-list6-text42 {
            display: inline-block;
          }
          .content-list6-text43 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .content-list6-max-width {
              align-items: center;
              flex-direction: column;
            }
            .content-list6-container2 {
              align-self: center;
            }
            .content-list6-container3 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .content-list6-ul2 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list6-ul4 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list6-ul6 {
              padding-left: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list6-max-width {
              flex-direction: column;
            }
            .content-list6-container2 {
              align-self: center;
            }
            .content-list6-ul2 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list6-ul4 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list6-ul6 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList6.defaultProps = {
  heading1: undefined,
  content13: undefined,
  content12: undefined,
  heading8: undefined,
  heading13: undefined,
  content10: undefined,
  content5: undefined,
  heading12: undefined,
  heading6: undefined,
  content11: undefined,
  button2: undefined,
  button: undefined,
  content2: undefined,
  content1: undefined,
  heading11: undefined,
  content3: undefined,
  heading2: undefined,
  heading7: undefined,
  heading3: undefined,
  content7: undefined,
  content9: undefined,
  heading9: undefined,
  button1: undefined,
  heading5: undefined,
  content4: undefined,
  heading10: undefined,
  content6: undefined,
  heading4: undefined,
}

ContentList6.propTypes = {
  heading1: PropTypes.element,
  content13: PropTypes.element,
  content12: PropTypes.element,
  heading8: PropTypes.element,
  heading13: PropTypes.element,
  content10: PropTypes.element,
  content5: PropTypes.element,
  heading12: PropTypes.element,
  heading6: PropTypes.element,
  content11: PropTypes.element,
  button2: PropTypes.element,
  button: PropTypes.element,
  content2: PropTypes.element,
  content1: PropTypes.element,
  heading11: PropTypes.element,
  content3: PropTypes.element,
  heading2: PropTypes.element,
  heading7: PropTypes.element,
  heading3: PropTypes.element,
  content7: PropTypes.element,
  content9: PropTypes.element,
  heading9: PropTypes.element,
  button1: PropTypes.element,
  heading5: PropTypes.element,
  content4: PropTypes.element,
  heading10: PropTypes.element,
  content6: PropTypes.element,
  heading4: PropTypes.element,
}

export default ContentList6
