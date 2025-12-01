import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentList5 = (props) => {
  const translate = useTranslations()
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  return (
    <>
      <div className="content-list5-container1 thq-section-padding">
        <div className="content-list5-max-width thq-flex-column thq-section-max-width">
          <div className="content-list5-container2 thq-flex-row thq-section-max-width">
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
                      <span className="content-list5-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_CLB-ft'),
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
                  setIsRefundVisible(false)
                  setIsTermsVisible(true)
                  setIsPrivacyVisible(false)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="content-list5-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_CLB-ft'),
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
                  setIsRefundVisible(false)
                  setIsPrivacyVisible(true)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="content-list5-text33">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_axC2_j'),
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
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(true)
                  setIsRefundVisible(false)
                }}
                className="thq-button-filled"
              >
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="content-list5-text33">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_axC2_j'),
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
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(false)
                  setIsRefundVisible(true)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button2 ?? (
                    <Fragment>
                      <span className="content-list5-text38">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9k5sk9'),
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
                      <span className="content-list5-text38">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9k5sk9'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
          </div>
          <div className="content-list5-container3 thq-flex-column">
            {isTermsVisible === true && (
              <div className="content-list5-container4">
                <ul className="thq-flex-column">
                  <li className="content-list5-li10 thq-flex-column list-item">
                    <h2 className="content-list5-heading7 thq-heading-2">
                      {props.heading7 ?? (
                        <Fragment>
                          <span className="content-list5-text24">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_AY4dGw'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h2>
                    <p className="thq-body-small">
                      {props.content7 ?? (
                        <Fragment>
                          <span className="content-list5-text19">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_McYirC'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <ul className="content-list5-ul2 thq-flex-column">
                      <li className="list-item">
                        <h3 className="thq-heading-3">
                          {props.heading8 ?? (
                            <Fragment>
                              <span className="content-list5-text32">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_6X6tSR'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h3>
                        <p className="thq-body-small">
                          {props.content2 ?? (
                            <Fragment>
                              <span className="content-list5-text36">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_fr9Cep'),
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
                              <span className="content-list5-text43">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_5YUqsX'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h3>
                        <p className="thq-body-small">
                          {props.content9 ?? (
                            <Fragment>
                              <span className="content-list5-text42">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_W9g5gs'),
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
              <div className="content-list5-container5">
                <ul className="thq-flex-column">
                  <li className="content-list5-li13 thq-flex-column list-item">
                    <h1 className="content-list5-heading1 thq-heading-2">
                      {props.heading1 ?? (
                        <Fragment>
                          <span className="content-list5-text18">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ZCPPDL'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="thq-body-small">
                      {props.content1 ?? (
                        <Fragment>
                          <span className="content-list5-text27">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_YXbUsj'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <ul className="content-list5-ul4 thq-flex-column">
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading2 ?? (
                            <Fragment>
                              <span className="content-list5-text41">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_59KjxH'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <p className="thq-body-small">
                          {props.content2 ?? (
                            <Fragment>
                              <span className="content-list5-text36">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_fr9Cep'),
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
                              <span className="content-list5-text35">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_aq7UIp'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content3 ?? (
                            <Fragment>
                              <span className="content-list5-text28">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_BvOC1B'),
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
                              <span className="content-list5-text23">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_aeZYDQ'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content4 ?? (
                            <Fragment>
                              <span className="content-list5-text25">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_HV4CIt'),
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
                              <span className="content-list5-text30">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_FGJAIp'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content5 ?? (
                            <Fragment>
                              <span className="content-list5-text39">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_6idghp'),
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
                              <span className="content-list5-text29">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_PKDc91'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content6 ?? (
                            <Fragment>
                              <span className="content-list5-text26">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_8Hyy5g'),
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
              <div className="content-list5-container6">
                <ul className="thq-flex-column">
                  <li className="content-list5-li19 thq-flex-column list-item">
                    <h1 className="content-list5-heading10 thq-heading-2">
                      {props.heading10 ?? (
                        <Fragment>
                          <span className="content-list5-text22">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6fHLZZ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="thq-body-small">
                      {props.content10 ?? (
                        <Fragment>
                          <span className="content-list5-text37">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_9-vWEc'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <ul className="content-list5-ul6 thq-flex-column">
                      <li className="list-item">
                        <h1 className="thq-heading-3">
                          {props.heading11 ?? (
                            <Fragment>
                              <span className="content-list5-text20">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_yQPhzs'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content11 ?? (
                            <Fragment>
                              <span className="content-list5-text34">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_9V_-OO'),
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
                              <span className="content-list5-text31">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_4xcsZU'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content12 ?? (
                            <Fragment>
                              <span className="content-list5-text16">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_t0_vjr'),
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
                              <span className="content-list5-text40">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_qVQsQu'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="thq-body-small">
                          {props.content13 ?? (
                            <Fragment>
                              <span className="content-list5-text21">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_aKKP4_'),
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
          .content-list5-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list5-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list5-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .content-list5-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-list5-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list5-li10 {
            align-items: flex-start;
          }
          .content-list5-heading7 {
            align-self: center;
            text-align: center;
          }
          .content-list5-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list5-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list5-li13 {
            align-items: flex-start;
          }
          .content-list5-heading1 {
            align-self: center;
            text-align: center;
          }
          .content-list5-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list5-container6 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list5-li19 {
            align-items: flex-start;
          }
          .content-list5-heading10 {
            align-self: center;
            text-align: center;
          }
          .content-list5-ul6 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list5-text16 {
            display: inline-block;
          }
          .content-list5-text17 {
            display: inline-block;
          }
          .content-list5-text18 {
            display: inline-block;
          }
          .content-list5-text19 {
            display: inline-block;
          }
          .content-list5-text20 {
            display: inline-block;
          }
          .content-list5-text21 {
            display: inline-block;
          }
          .content-list5-text22 {
            display: inline-block;
          }
          .content-list5-text23 {
            display: inline-block;
          }
          .content-list5-text24 {
            display: inline-block;
          }
          .content-list5-text25 {
            display: inline-block;
          }
          .content-list5-text26 {
            display: inline-block;
          }
          .content-list5-text27 {
            display: inline-block;
          }
          .content-list5-text28 {
            display: inline-block;
          }
          .content-list5-text29 {
            display: inline-block;
          }
          .content-list5-text30 {
            display: inline-block;
          }
          .content-list5-text31 {
            display: inline-block;
          }
          .content-list5-text32 {
            display: inline-block;
          }
          .content-list5-text33 {
            display: inline-block;
          }
          .content-list5-text34 {
            display: inline-block;
          }
          .content-list5-text35 {
            display: inline-block;
          }
          .content-list5-text36 {
            display: inline-block;
          }
          .content-list5-text37 {
            display: inline-block;
          }
          .content-list5-text38 {
            display: inline-block;
          }
          .content-list5-text39 {
            display: inline-block;
          }
          .content-list5-text40 {
            display: inline-block;
          }
          .content-list5-text41 {
            display: inline-block;
          }
          .content-list5-text42 {
            display: inline-block;
          }
          .content-list5-text43 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .content-list5-ul2 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list5-ul4 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list5-ul6 {
              padding-left: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list5-container2 {
              align-items: stretch;
              flex-direction: column;
            }
            .content-list5-ul2 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list5-ul4 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list5-ul6 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList5.defaultProps = {
  content12: undefined,
  button: undefined,
  heading1: undefined,
  content7: undefined,
  heading11: undefined,
  content13: undefined,
  heading10: undefined,
  heading4: undefined,
  heading7: undefined,
  content4: undefined,
  content6: undefined,
  content1: undefined,
  content3: undefined,
  heading6: undefined,
  heading5: undefined,
  heading12: undefined,
  heading8: undefined,
  button1: undefined,
  content11: undefined,
  heading3: undefined,
  content2: undefined,
  content10: undefined,
  button2: undefined,
  content5: undefined,
  heading13: undefined,
  heading2: undefined,
  content9: undefined,
  heading9: undefined,
}

ContentList5.propTypes = {
  content12: PropTypes.element,
  button: PropTypes.element,
  heading1: PropTypes.element,
  content7: PropTypes.element,
  heading11: PropTypes.element,
  content13: PropTypes.element,
  heading10: PropTypes.element,
  heading4: PropTypes.element,
  heading7: PropTypes.element,
  content4: PropTypes.element,
  content6: PropTypes.element,
  content1: PropTypes.element,
  content3: PropTypes.element,
  heading6: PropTypes.element,
  heading5: PropTypes.element,
  heading12: PropTypes.element,
  heading8: PropTypes.element,
  button1: PropTypes.element,
  content11: PropTypes.element,
  heading3: PropTypes.element,
  content2: PropTypes.element,
  content10: PropTypes.element,
  button2: PropTypes.element,
  content5: PropTypes.element,
  heading13: PropTypes.element,
  heading2: PropTypes.element,
  content9: PropTypes.element,
  heading9: PropTypes.element,
}

export default ContentList5
