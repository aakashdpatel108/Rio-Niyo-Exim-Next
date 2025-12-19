import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MeetOurTeam = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="meet-our-team-thq-max-width-elm thq-section-max-width">
          <div className="meet-our-team-thq-section-title-elm">
            <div className="meet-our-team-thq-content-elm1">
              <h2 className="meet-our-team-thq-text-elm1 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hKx0j7'),
                  }}
                ></span>
              </h2>
              <p className="meet-our-team-thq-text-elm2 thq-body-large">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PBgNGk'),
                  }}
                ></span>
              </p>
            </div>
          </div>
          <div className="meet-our-team-thq-content-elm2">
            <div className="meet-our-team-thq-content-elm3">
              <div className="meet-our-team-thq-row-elm">
                <div className="meet-our-team-thq-card-elm1">
                  <img
                    alt="Divyesh patel"
                    src="/divyesh%20patel%20profile-600w.jpg"
                    className="thq-img-ratio-1-1 meet-our-team-thq-placeholder-image-elm1"
                  />
                  <div className="meet-our-team-thq-content-elm4">
                    <div className="meet-our-team-thq-title-elm1">
                      <span className="meet-our-team-thq-text-elm3 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="meet-our-team-text1">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_QBvoGT'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="meet-our-team-thq-text-elm4 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="meet-our-team-text2">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_E01Yq3'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="meet-our-team-thq-text-elm5 thq-body-small">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Lq4cRh'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="meet-our-team-thq-social-icons-elm1">
                    <a
                      href="https://www.linkedin.com/in/divyesh-patel-47148b201/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="meet-our-team-link1"
                    >
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="meet-our-team-icon1 thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="meet-our-team-thq-card-elm2">
                  <img
                    alt="Aakash Patel"
                    src="/aakash%20patel%20profile-600w.png"
                    className="thq-img-ratio-1-1 meet-our-team-thq-placeholder-image-elm2"
                  />
                  <div className="meet-our-team-thq-content-elm5">
                    <div className="meet-our-team-thq-title-elm2">
                      <span className="meet-our-team-thq-text-elm6 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="meet-our-team-text4">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_vBm7Co'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="meet-our-team-thq-text-elm7 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="meet-our-team-text3">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_wLKY-l'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="meet-our-team-thq-text-elm8 thq-body-small">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_xILwBB'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="meet-our-team-thq-social-icons-elm2">
                    <a
                      href="https://www.linkedin.com/in/aakash-patell/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="meet-our-team-link2"
                    >
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="meet-our-team-icon3 thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .meet-our-team-thq-max-width-elm {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .meet-our-team-thq-section-title-elm {
            gap: var(--dl-layout-space-unit);
            width: 1348px;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .meet-our-team-thq-content-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-thq-text-elm1 {
            align-self: flex-start;
          }
          .meet-our-team-thq-text-elm2 {
            align-self: flex-start;
          }
          .meet-our-team-thq-content-elm2 {
            gap: 96px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .meet-our-team-thq-content-elm3 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-thq-row-elm {
            gap: 48px;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .meet-our-team-thq-card-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .meet-our-team-thq-content-elm4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-thq-title-elm1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-thq-text-elm3 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .meet-our-team-thq-text-elm4 {
            align-self: flex-start;
          }
          .meet-our-team-thq-text-elm5 {
            align-self: flex-start;
          }
          .meet-our-team-thq-social-icons-elm1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .meet-our-team-link1 {
            display: contents;
          }
          .meet-our-team-icon1 {
            text-decoration: none;
          }
          .meet-our-team-thq-card-elm2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .meet-our-team-thq-content-elm5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-thq-title-elm2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-thq-text-elm6 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .meet-our-team-thq-text-elm7 {
            align-self: flex-start;
          }
          .meet-our-team-thq-text-elm8 {
            align-self: flex-start;
          }
          .meet-our-team-thq-social-icons-elm2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .meet-our-team-link2 {
            display: contents;
          }
          .meet-our-team-icon3 {
            text-decoration: none;
          }
          .meet-our-team-text1 {
            display: inline-block;
          }
          .meet-our-team-text2 {
            display: inline-block;
          }
          .meet-our-team-text3 {
            display: inline-block;
          }
          .meet-our-team-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .meet-our-team-thq-row-elm {
              align-items: center;
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .meet-our-team-thq-section-title-elm {
              width: 395px;
            }
            .meet-our-team-thq-content-elm1 {
              width: 358px;
            }
            .meet-our-team-thq-text-elm1 {
              font-size: 25px;
              text-align: left;
            }
            .meet-our-team-thq-text-elm2 {
              width: 315px;
              font-size: 18px;
              text-align: left;
            }
            .meet-our-team-thq-row-elm {
              flex-direction: column;
            }
            .meet-our-team-thq-text-elm5 {
              font-size: 16px;
            }
            .meet-our-team-thq-text-elm8 {
              font-size: 16px;
            }
          }
          @media (max-width: 479px) {
            .meet-our-team-thq-placeholder-image-elm1 {
              height: 450px;
            }
            .meet-our-team-thq-placeholder-image-elm2 {
              height: 450px;
            }
          }
          @media (max-width: 344px) {
            .meet-our-team-thq-content-elm1 {
              width: 309px;
              margin-right: 0px;
            }
            .meet-our-team-thq-text-elm2 {
              width: 274px;
            }
          }
        `}
      </style>
    </>
  )
}

MeetOurTeam.defaultProps = {
  member1: undefined,
  member1Job: undefined,
  member2Job: undefined,
  member2: undefined,
}

MeetOurTeam.propTypes = {
  member1: PropTypes.element,
  member1Job: PropTypes.element,
  member2Job: PropTypes.element,
  member2: PropTypes.element,
}

export default MeetOurTeam
