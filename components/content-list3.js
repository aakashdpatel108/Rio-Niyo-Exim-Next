import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentList3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="content-list3-container thq-section-padding">
        <div className="content-list3-max-width thq-flex-column thq-section-max-width">
          <div className="content-list3-content14 thq-flex-column">
            <ul>
              <li className="content-list3-li10 thq-flex-column list-item">
                <h2 className="content-list3-heading1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="content-list3-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_a1g9xZ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list3-content1 thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="content-list3-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_EwxQ55'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list3-ul2 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading2 ?? (
                        <Fragment>
                          <span className="content-list3-text29">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_nAoqAv'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="content-list3-text31">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_h_I75r'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading3 ?? (
                        <Fragment>
                          <span className="content-list3-text16">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_uQSCSF'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content3 ?? (
                        <Fragment>
                          <span className="content-list3-text17">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_TXUZnk'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading4 ?? (
                        <Fragment>
                          <span className="content-list3-text18">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_UlAeIb'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content4 ?? (
                        <Fragment>
                          <span className="content-list3-text12">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_XpAuyv'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading5 ?? (
                        <Fragment>
                          <span className="content-list3-text20">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_rWZFb7'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content5 ?? (
                        <Fragment>
                          <span className="content-list3-text14">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Zw1mIo'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading6 ?? (
                        <Fragment>
                          <span className="content-list3-text23">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_4GA0jk'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content6 ?? (
                        <Fragment>
                          <span className="content-list3-text15">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_K_WUM5'),
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
          <div className="content-list3-content15 thq-flex-column">
            <ul>
              <li className="content-list3-li16 thq-flex-column list-item">
                <h2 className="content-list3-heading7 thq-heading-2">
                  {props.heading7 ?? (
                    <Fragment>
                      <span className="content-list3-text30">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_15ol0x'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list3-content7 thq-body-small">
                  {props.content7 ?? (
                    <Fragment>
                      <span className="content-list3-text33">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_UFFVJu'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list3-ul4 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading8 ?? (
                        <Fragment>
                          <span className="content-list3-text27">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_KJAGg4'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="content-list3-text31">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_h_I75r'),
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
                          <span className="content-list3-text10">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Y6D2Sw'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content9 ?? (
                        <Fragment>
                          <span className="content-list3-text28">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_nKIJj_'),
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
          <div className="content-list3-content16 thq-flex-column">
            <ul>
              <li className="content-list3-li19 thq-flex-column list-item">
                <h2 className="content-list3-heading10 thq-heading-2">
                  {props.heading10 ?? (
                    <Fragment>
                      <span className="content-list3-text13">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_kqWbVI'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list3-content10 thq-body-small">
                  {props.content10 ?? (
                    <Fragment>
                      <span className="content-list3-text34">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3VjkRl'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list3-ul6 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading11 ?? (
                        <Fragment>
                          <span className="content-list3-text32">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_GJrUHW'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content11 ?? (
                        <Fragment>
                          <span className="content-list3-text25">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_43vpm5'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading12 ?? (
                        <Fragment>
                          <span className="content-list3-text26">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_dfXpB7'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content12 ?? (
                        <Fragment>
                          <span className="content-list3-text19">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_X02d_6'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading13 ?? (
                        <Fragment>
                          <span className="content-list3-text11">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_TYM3-9'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content13 ?? (
                        <Fragment>
                          <span className="content-list3-text24">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_JgawpN'),
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
        </div>
      </div>
      <style jsx>
        {`
          .content-list3-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list3-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list3-content14 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list3-li10 {
            align-items: flex-start;
          }
          .content-list3-heading1 {
            align-self: flex-start;
          }
          .content-list3-content1 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list3-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list3-content15 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list3-li16 {
            align-items: flex-start;
          }
          .content-list3-heading7 {
            align-self: flex-start;
          }
          .content-list3-content7 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list3-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list3-content16 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list3-li19 {
            align-items: flex-start;
          }
          .content-list3-heading10 {
            align-self: flex-start;
          }
          .content-list3-content10 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list3-ul6 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list3-text10 {
            display: inline-block;
          }
          .content-list3-text11 {
            display: inline-block;
          }
          .content-list3-text12 {
            display: inline-block;
          }
          .content-list3-text13 {
            display: inline-block;
          }
          .content-list3-text14 {
            display: inline-block;
          }
          .content-list3-text15 {
            display: inline-block;
          }
          .content-list3-text16 {
            display: inline-block;
          }
          .content-list3-text17 {
            display: inline-block;
          }
          .content-list3-text18 {
            display: inline-block;
          }
          .content-list3-text19 {
            display: inline-block;
          }
          .content-list3-text20 {
            display: inline-block;
          }
          .content-list3-text21 {
            display: inline-block;
          }
          .content-list3-text22 {
            display: inline-block;
          }
          .content-list3-text23 {
            display: inline-block;
          }
          .content-list3-text24 {
            display: inline-block;
          }
          .content-list3-text25 {
            display: inline-block;
          }
          .content-list3-text26 {
            display: inline-block;
          }
          .content-list3-text27 {
            display: inline-block;
          }
          .content-list3-text28 {
            display: inline-block;
          }
          .content-list3-text29 {
            display: inline-block;
          }
          .content-list3-text30 {
            display: inline-block;
          }
          .content-list3-text31 {
            display: inline-block;
          }
          .content-list3-text32 {
            display: inline-block;
          }
          .content-list3-text33 {
            display: inline-block;
          }
          .content-list3-text34 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .content-list3-ul2 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list3-ul4 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list3-ul6 {
              padding-left: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list3-ul2 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list3-ul4 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list3-ul6 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList3.defaultProps = {
  heading9: undefined,
  heading13: undefined,
  content4: undefined,
  heading10: undefined,
  content5: undefined,
  content6: undefined,
  heading3: undefined,
  content3: undefined,
  heading4: undefined,
  content12: undefined,
  heading5: undefined,
  heading1: undefined,
  content1: undefined,
  heading6: undefined,
  content13: undefined,
  content11: undefined,
  heading12: undefined,
  heading8: undefined,
  content9: undefined,
  heading2: undefined,
  heading7: undefined,
  content2: undefined,
  heading11: undefined,
  content7: undefined,
  content10: undefined,
}

ContentList3.propTypes = {
  heading9: PropTypes.element,
  heading13: PropTypes.element,
  content4: PropTypes.element,
  heading10: PropTypes.element,
  content5: PropTypes.element,
  content6: PropTypes.element,
  heading3: PropTypes.element,
  content3: PropTypes.element,
  heading4: PropTypes.element,
  content12: PropTypes.element,
  heading5: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  heading6: PropTypes.element,
  content13: PropTypes.element,
  content11: PropTypes.element,
  heading12: PropTypes.element,
  heading8: PropTypes.element,
  content9: PropTypes.element,
  heading2: PropTypes.element,
  heading7: PropTypes.element,
  content2: PropTypes.element,
  heading11: PropTypes.element,
  content7: PropTypes.element,
  content10: PropTypes.element,
}

export default ContentList3
