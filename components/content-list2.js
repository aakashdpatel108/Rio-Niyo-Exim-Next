import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentList2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="content-list2-container thq-section-padding">
        <div className="content-list2-max-width thq-flex-column thq-section-max-width">
          <div className="content-list2-content10 thq-flex-column">
            <ul>
              <li className="content-list2-li1 thq-flex-column list-item">
                <h2 className="content-list2-heading1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="content-list2-text10">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Mtl-Z2'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list2-content1 thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="content-list2-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_J9ucG8'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list2-ul2 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading2 ?? (
                        <Fragment>
                          <span className="content-list2-text21">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_kykGjO'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="content-list2-text14">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_M4mpJ-'),
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
                          <span className="content-list2-text19">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_dSncvJ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content3 ?? (
                        <Fragment>
                          <span className="content-list2-text15">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_GlhOTB'),
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
                          <span className="content-list2-text13">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_UucZav'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content4 ?? (
                        <Fragment>
                          <span className="content-list2-text23">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_OCWhkv'),
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
                          <span className="content-list2-text11">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_W22k_6'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content5 ?? (
                        <Fragment>
                          <span className="content-list2-text17">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_UK4KAJ'),
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
                          <span className="content-list2-text24">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_iHfgdq'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content6 ?? (
                        <Fragment>
                          <span className="content-list2-text26">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_GvBJY9'),
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
          <div className="content-list2-content11 thq-flex-column">
            <ul>
              <li className="content-list2-li7 thq-flex-column list-item">
                <h2 className="content-list2-heading7 thq-heading-2">
                  {props.heading7 ?? (
                    <Fragment>
                      <span className="content-list2-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_-DJ4LW'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list2-content7 thq-body-small">
                  {props.content7 ?? (
                    <Fragment>
                      <span className="content-list2-text12">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MRO-F9'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list2-ul4 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading8 ?? (
                        <Fragment>
                          <span className="content-list2-text22">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_45zKNw'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="content-list2-text14">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_M4mpJ-'),
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
                          <span className="content-list2-text20">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_41pTMB'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content9 ?? (
                        <Fragment>
                          <span className="content-list2-text18">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6zlcw_'),
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
          .content-list2-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list2-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list2-content10 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list2-li1 {
            align-items: flex-start;
          }
          .content-list2-heading1 {
            align-self: flex-start;
          }
          .content-list2-content1 {
            align-self: flex-start;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list2-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list2-content11 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list2-li7 {
            align-items: flex-start;
          }
          .content-list2-heading7 {
            align-self: flex-start;
          }
          .content-list2-content7 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list2-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list2-text10 {
            display: inline-block;
          }
          .content-list2-text11 {
            display: inline-block;
          }
          .content-list2-text12 {
            display: inline-block;
          }
          .content-list2-text13 {
            display: inline-block;
          }
          .content-list2-text14 {
            display: inline-block;
          }
          .content-list2-text15 {
            display: inline-block;
          }
          .content-list2-text16 {
            display: inline-block;
          }
          .content-list2-text17 {
            display: inline-block;
          }
          .content-list2-text18 {
            display: inline-block;
          }
          .content-list2-text19 {
            display: inline-block;
          }
          .content-list2-text20 {
            display: inline-block;
          }
          .content-list2-text21 {
            display: inline-block;
          }
          .content-list2-text22 {
            display: inline-block;
          }
          .content-list2-text23 {
            display: inline-block;
          }
          .content-list2-text24 {
            display: inline-block;
          }
          .content-list2-text25 {
            display: inline-block;
          }
          .content-list2-text26 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .content-list2-ul2 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list2-ul4 {
              padding-left: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list2-ul2 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list2-ul4 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList2.defaultProps = {
  heading1: undefined,
  heading5: undefined,
  content7: undefined,
  heading4: undefined,
  content2: undefined,
  content3: undefined,
  content1: undefined,
  content5: undefined,
  content9: undefined,
  heading3: undefined,
  heading9: undefined,
  heading2: undefined,
  heading8: undefined,
  content4: undefined,
  heading6: undefined,
  heading7: undefined,
  content6: undefined,
}

ContentList2.propTypes = {
  heading1: PropTypes.element,
  heading5: PropTypes.element,
  content7: PropTypes.element,
  heading4: PropTypes.element,
  content2: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
  content5: PropTypes.element,
  content9: PropTypes.element,
  heading3: PropTypes.element,
  heading9: PropTypes.element,
  heading2: PropTypes.element,
  heading8: PropTypes.element,
  content4: PropTypes.element,
  heading6: PropTypes.element,
  heading7: PropTypes.element,
  content6: PropTypes.element,
}

export default ContentList2
