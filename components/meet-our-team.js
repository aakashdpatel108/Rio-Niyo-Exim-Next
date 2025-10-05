import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MeetOurTeam = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="meet-our-team-max-width thq-section-max-width">
          <div className="meet-our-team-section-title">
            <div className="meet-our-team-content1">
              <h2 className="meet-our-team-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="meet-our-team-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_emGNiI'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="meet-our-team-text11 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="meet-our-team-text24">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ce1InA'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="meet-our-team-content2">
            <div className="meet-our-team-content3">
              <div className="meet-our-team-row1">
                <div className="meet-our-team-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="thq-img-ratio-1-1 meet-our-team-placeholder-image1"
                  />
                  <div className="meet-our-team-content4">
                    <div className="meet-our-team-title1">
                      <span className="meet-our-team-text12 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="meet-our-team-text18">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_QBvoGT'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="meet-our-team-text13 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="meet-our-team-text21">
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
                    <span className="meet-our-team-text14 thq-body-small">
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="meet-our-team-text19">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_wIHbj6'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="meet-our-team-social-icons1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="meet-our-team-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="thq-img-ratio-1-1 meet-our-team-placeholder-image2"
                  />
                  <div className="meet-our-team-content5">
                    <div className="meet-our-team-title2">
                      <span className="meet-our-team-text15 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="meet-our-team-text25">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_vBm7Co'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="meet-our-team-text16 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="meet-our-team-text23">
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
                    <span className="meet-our-team-text17 thq-body-small">
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="meet-our-team-text20">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ufvdzF'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="meet-our-team-social-icons2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="meet-our-team-row2"></div>
            </div>
            <div className="meet-our-team-content6">
              <div className="meet-our-team-content7"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .meet-our-team-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .meet-our-team-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .meet-our-team-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-text10 {
            align-self: flex-start;
          }
          .meet-our-team-text11 {
            align-self: flex-start;
          }
          .meet-our-team-content2 {
            gap: 96px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .meet-our-team-content3 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-row1 {
            gap: 48px;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .meet-our-team-card1 {
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
          .meet-our-team-content4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-text12 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .meet-our-team-text13 {
            align-self: flex-start;
          }
          .meet-our-team-text14 {
            align-self: flex-start;
          }
          .meet-our-team-social-icons1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .meet-our-team-card2 {
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
          .meet-our-team-content5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .meet-our-team-text15 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .meet-our-team-text16 {
            align-self: flex-start;
          }
          .meet-our-team-text17 {
            align-self: flex-start;
          }
          .meet-our-team-social-icons2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .meet-our-team-row2 {
            gap: 48px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .meet-our-team-content6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .meet-our-team-content7 {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .meet-our-team-text18 {
            display: inline-block;
          }
          .meet-our-team-text19 {
            display: inline-block;
          }
          .meet-our-team-text20 {
            display: inline-block;
          }
          .meet-our-team-text21 {
            display: inline-block;
          }
          .meet-our-team-text22 {
            display: inline-block;
          }
          .meet-our-team-text23 {
            display: inline-block;
          }
          .meet-our-team-text24 {
            display: inline-block;
          }
          .meet-our-team-text25 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .meet-our-team-row1 {
              align-items: center;
              flex-direction: row;
            }
            .meet-our-team-row2 {
              align-items: center;
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .meet-our-team-row1 {
              flex-direction: column;
            }
            .meet-our-team-row2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .meet-our-team-placeholder-image1 {
              height: 450px;
            }
            .meet-our-team-placeholder-image2 {
              height: 450px;
            }
          }
        `}
      </style>
    </>
  )
}

MeetOurTeam.defaultProps = {
  member1: undefined,
  member1Content: undefined,
  member2Content: undefined,
  member1Alt: 'Image of John Doe',
  member1Job: undefined,
  heading1: undefined,
  member2Job: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1583314965950-cd54a8b6db84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTA5MjkxM3w&ixlib=rb-4.1.0&q=80&w=1080',
  content2: undefined,
  member2Alt: 'Image of Jane Smith',
  member2: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1740252117027-4275d3f84385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTA5MjkxM3w&ixlib=rb-4.1.0&q=80&w=1080',
}

MeetOurTeam.propTypes = {
  member1: PropTypes.element,
  member1Content: PropTypes.element,
  member2Content: PropTypes.element,
  member1Alt: PropTypes.string,
  member1Job: PropTypes.element,
  heading1: PropTypes.element,
  member2Job: PropTypes.element,
  member1Src: PropTypes.string,
  content2: PropTypes.element,
  member2Alt: PropTypes.string,
  member2: PropTypes.element,
  member2Src: PropTypes.string,
}

export default MeetOurTeam
