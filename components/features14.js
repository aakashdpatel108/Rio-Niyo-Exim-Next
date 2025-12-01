import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features14 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features14-layout216 thq-section-padding">
        <div className="features14-max-width thq-section-max-width">
          <div className="features14-content1 thq-flex-row">
            <div className="thq-flex-column">
              <img
                alt={props.iconAlt}
                src={props.iconSrc}
                className="thq-img-ratio-4-3"
              />
              <h2 className="features14-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="features14-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_XKH2oJ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
            </div>
            <div className="thq-flex-column">
              <div className="thq-flex-row">
                <span className="features14-text11 thq-body-small">
                  {props.featureDescription ?? (
                    <Fragment>
                      <span className="features14-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_zHQXw5'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="thq-flex-row features14-container2">
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features14-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_W-QZ79'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features14-text17">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_cWRFYX'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features14-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_h-iyNv'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features14-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_CXwwJX'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <video
            src={props.feature1VideoSrc}
            loop="true"
            muted="true"
            poster={props.feature1VideoPoster}
            autoPlay="true"
            className="features14-video thq-img-ratio-16-9"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .features14-layout216 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features14-max-width {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features14-content1 {
            flex-direction: column;
          }
          .features14-text10 {
            width: 100%;
            align-self: center;
            text-align: center;
          }
          .features14-text11 {
            width: 100%;
          }
          .features14-video {
            width: 100%;
          }
          .features14-text16 {
            display: inline-block;
          }
          .features14-text17 {
            display: inline-block;
          }
          .features14-text18 {
            display: inline-block;
          }
          .features14-text19 {
            display: inline-block;
          }
          .features14-text20 {
            display: inline-block;
          }
          .features14-text21 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features14-layout216 {
              width: 100%;
            }
            .features14-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .features14-text11 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features14-container2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features14.defaultProps = {
  feature2Description: undefined,
  iconSrc:
    'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature1VideoSrc: '',
  feature1Description: undefined,
  heading1: undefined,
  feature1Title: undefined,
  iconAlt: 'Illustration of ease of use',
  featureDescription: undefined,
  feature1VideoPoster: 'example_video_poster.jpg',
  feature2Title: undefined,
}

Features14.propTypes = {
  feature2Description: PropTypes.element,
  iconSrc: PropTypes.string,
  feature1VideoSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  heading1: PropTypes.element,
  feature1Title: PropTypes.element,
  iconAlt: PropTypes.string,
  featureDescription: PropTypes.element,
  feature1VideoPoster: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features14
