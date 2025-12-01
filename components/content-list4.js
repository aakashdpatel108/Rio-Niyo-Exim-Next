import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentList4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="content-list4-container thq-section-padding">
        <div className="content-list4-max-width thq-flex-column thq-section-max-width">
          <div className="content-list4-content14 thq-flex-column">
            <ul className="content-list4-ul1 thq-flex-column">
              <li className="content-list4-li10 thq-flex-column list-item">
                <h2 className="content-list4-heading7 thq-heading-2">
                  {props.heading7 ?? (
                    <Fragment>
                      <span className="content-list4-text34">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_fc9hv1'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list4-content7 thq-body-small">
                  {props.content7 ?? (
                    <Fragment>
                      <span className="content-list4-text12">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Yqf8RR'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list4-ul2 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading8 ?? (
                        <Fragment>
                          <span className="content-list4-text32">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_HAb-gB'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="content-list4-text16">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ZHd03B'),
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
                          <span className="content-list4-text30">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_3Achg2'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content9 ?? (
                        <Fragment>
                          <span className="content-list4-text27">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_LK3YEg'),
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
          <div className="content-list4-content15 thq-flex-column">
            <ul className="content-list4-ul3 thq-flex-column">
              <li className="content-list4-li13 thq-flex-column list-item">
                <h2 className="content-list4-heading1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="content-list4-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_uy1vSF'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list4-content1 thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="content-list4-text24">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_r7-cxA'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list4-ul4 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading2 ?? (
                        <Fragment>
                          <span className="content-list4-text11">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_tsAzky'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="content-list4-text16">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ZHd03B'),
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
                          <span className="content-list4-text19">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_u7JiUr'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content3 ?? (
                        <Fragment>
                          <span className="content-list4-text25">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_vW_tCh'),
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
                          <span className="content-list4-text21">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qs__01'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content4 ?? (
                        <Fragment>
                          <span className="content-list4-text28">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qN9oiC'),
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
                          <span className="content-list4-text10">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_kiX6Ct'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content5 ?? (
                        <Fragment>
                          <span className="content-list4-text14">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ZUW5GO'),
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
                          <span className="content-list4-text15">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_og-9Mc'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content6 ?? (
                        <Fragment>
                          <span className="content-list4-text17">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ZqgP7C'),
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
          <div className="content-list4-content16 thq-flex-column">
            <ul className="content-list4-ul5 thq-flex-column">
              <li className="content-list4-li19 thq-flex-column list-item">
                <h2 className="content-list4-heading10 thq-heading-2">
                  {props.heading10 ?? (
                    <Fragment>
                      <span className="content-list4-text33">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_YEcDP5'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list4-content10 thq-body-small">
                  {props.content10 ?? (
                    <Fragment>
                      <span className="content-list4-text13">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_qoK_KL'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list4-ul6 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading11 ?? (
                        <Fragment>
                          <span className="content-list4-text26">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_S96azy'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content11 ?? (
                        <Fragment>
                          <span className="content-list4-text20">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_iEcX9-'),
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
                          <span className="content-list4-text23">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xinOdz'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content12 ?? (
                        <Fragment>
                          <span className="content-list4-text29">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Y5SRyM'),
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
                          <span className="content-list4-text22">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_k8y_AH'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content13 ?? (
                        <Fragment>
                          <span className="content-list4-text31">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_3Cuq_T'),
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
          .content-list4-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list4-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list4-content14 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list4-ul1 {
            align-items: flex-start;
          }
          .content-list4-li10 {
            align-items: flex-start;
          }
          .content-list4-heading7 {
            align-self: center;
            text-align: center;
          }
          .content-list4-content7 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list4-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list4-content15 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list4-ul3 {
            align-items: flex-start;
          }
          .content-list4-li13 {
            align-items: flex-start;
          }
          .content-list4-heading1 {
            align-self: center;
            text-align: center;
          }
          .content-list4-content1 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list4-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list4-content16 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list4-ul5 {
            align-items: flex-start;
          }
          .content-list4-li19 {
            align-items: flex-start;
          }
          .content-list4-heading10 {
            align-self: center;
            text-align: center;
          }
          .content-list4-content10 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list4-ul6 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list4-text10 {
            display: inline-block;
          }
          .content-list4-text11 {
            display: inline-block;
          }
          .content-list4-text12 {
            display: inline-block;
          }
          .content-list4-text13 {
            display: inline-block;
          }
          .content-list4-text14 {
            display: inline-block;
          }
          .content-list4-text15 {
            display: inline-block;
          }
          .content-list4-text16 {
            display: inline-block;
          }
          .content-list4-text17 {
            display: inline-block;
          }
          .content-list4-text18 {
            display: inline-block;
          }
          .content-list4-text19 {
            display: inline-block;
          }
          .content-list4-text20 {
            display: inline-block;
          }
          .content-list4-text21 {
            display: inline-block;
          }
          .content-list4-text22 {
            display: inline-block;
          }
          .content-list4-text23 {
            display: inline-block;
          }
          .content-list4-text24 {
            display: inline-block;
          }
          .content-list4-text25 {
            display: inline-block;
          }
          .content-list4-text26 {
            display: inline-block;
          }
          .content-list4-text27 {
            display: inline-block;
          }
          .content-list4-text28 {
            display: inline-block;
          }
          .content-list4-text29 {
            display: inline-block;
          }
          .content-list4-text30 {
            display: inline-block;
          }
          .content-list4-text31 {
            display: inline-block;
          }
          .content-list4-text32 {
            display: inline-block;
          }
          .content-list4-text33 {
            display: inline-block;
          }
          .content-list4-text34 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .content-list4-ul2 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list4-ul4 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list4-ul6 {
              padding-left: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list4-ul2 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list4-ul4 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list4-ul6 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList4.defaultProps = {
  heading5: undefined,
  heading2: undefined,
  content7: undefined,
  content10: undefined,
  content5: undefined,
  heading6: undefined,
  content2: undefined,
  content6: undefined,
  heading1: undefined,
  heading3: undefined,
  content11: undefined,
  heading4: undefined,
  heading13: undefined,
  heading12: undefined,
  content1: undefined,
  content3: undefined,
  heading11: undefined,
  content9: undefined,
  content4: undefined,
  content12: undefined,
  heading9: undefined,
  content13: undefined,
  heading8: undefined,
  heading10: undefined,
  heading7: undefined,
}

ContentList4.propTypes = {
  heading5: PropTypes.element,
  heading2: PropTypes.element,
  content7: PropTypes.element,
  content10: PropTypes.element,
  content5: PropTypes.element,
  heading6: PropTypes.element,
  content2: PropTypes.element,
  content6: PropTypes.element,
  heading1: PropTypes.element,
  heading3: PropTypes.element,
  content11: PropTypes.element,
  heading4: PropTypes.element,
  heading13: PropTypes.element,
  heading12: PropTypes.element,
  content1: PropTypes.element,
  content3: PropTypes.element,
  heading11: PropTypes.element,
  content9: PropTypes.element,
  content4: PropTypes.element,
  content12: PropTypes.element,
  heading9: PropTypes.element,
  content13: PropTypes.element,
  heading8: PropTypes.element,
  heading10: PropTypes.element,
  heading7: PropTypes.element,
}

export default ContentList4
