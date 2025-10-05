import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features1-layout251 thq-section-padding">
        <div className="features1-max-width thq-section-max-width">
          <div className="thq-flex-row features1-section-title">
            <div className="features1-column thq-flex-column">
              <span className="thq-body-small">
                {props.slogan ?? (
                  <Fragment>
                    <span className="features1-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Rdq3S4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <h2 className="thq-heading-2 features1-text11">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features1-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-uQOdg'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
            </div>
            <span className="thq-body-small">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features1-text23">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_-CQcUD'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features1-content1">
            <div className="features1-row thq-flex-row">
              <div className="features1-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature1-image"
                />
                <div className="features1-content2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features1-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_lWFR33'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features1-text15">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_NUUEWS'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features1-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature2-image"
                />
                <div className="features1-content3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features1-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_bhzQ5z'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features1-text14">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_at_tHC'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features1-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature3-image"
                />
                <div className="features1-content4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features1-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_pzBwCR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features1-text18">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_z8UHCU'),
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
          <div className="features1-actions">
            <button className="thq-button-filled features1-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features1-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_uSdO-U'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features1-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features1-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_O0ih-Z'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features1-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-column {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-row {
            align-items: flex-start;
          }
          .features1-feature1 {
            flex: 1;
          }
          .features1-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature2 {
            flex: 1;
          }
          .features1-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature3 {
            flex: 1;
          }
          .features1-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features1-text13 {
            display: inline-block;
          }
          .features1-text14 {
            display: inline-block;
          }
          .features1-text15 {
            display: inline-block;
          }
          .features1-text16 {
            display: inline-block;
          }
          .features1-text17 {
            display: inline-block;
          }
          .features1-text18 {
            display: inline-block;
          }
          .features1-text19 {
            display: inline-block;
          }
          .features1-text20 {
            display: inline-block;
          }
          .features1-text21 {
            display: inline-block;
          }
          .features1-text22 {
            display: inline-block;
          }
          .features1-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features1-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features1-feature1-image {
              height: 260px;
            }
            .features1-feature2-image {
              height: 260px;
            }
            .features1-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features1-column {
              width: 100%;
            }
            .features1-text11 {
              text-align: center;
            }
            .features1-row {
              flex-direction: column;
            }
            .features1-feature1-image {
              width: 100%;
            }
            .features1-feature2 {
              width: auto;
            }
            .features1-feature2-image {
              width: 100%;
            }
            .features1-feature3 {
              width: auto;
            }
            .features1-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features1-actions {
              width: 100%;
              flex-direction: column;
            }
            .features1-button1 {
              width: 100%;
            }
            .features1-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features1.defaultProps = {
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1694825588875-190db201a997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTA5MDgwNXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1626029913631-13de269bb071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTA5MDgwNXw&ixlib=rb-4.1.0&q=80&w=1080',
  sectionTitle: undefined,
  feature2Description: undefined,
  feature1Description: undefined,
  feature2Title: undefined,
  slogan: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1546470427-227e2f27f02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTA5MDgwNXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3Description: undefined,
  feature3ImageAlt: 'Global Network',
  feature1ImageAlt: 'Variety of Products',
  secondaryAction: undefined,
  feature2ImageAlt: 'Quality Standards',
  mainAction: undefined,
  feature3Title: undefined,
  feature1Title: undefined,
  sectionDescription: undefined,
}

Features1.propTypes = {
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Title: PropTypes.element,
  slogan: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  mainAction: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
  sectionDescription: PropTypes.element,
}

export default Features1
