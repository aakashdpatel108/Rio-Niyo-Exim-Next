import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FruitsFeature4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="fruits-feature-4-layout251 thq-section-padding">
        <div className="fruits-feature-4-max-width thq-section-max-width">
          <div className="thq-flex-row fruits-feature-4-section-title">
            <div className="fruits-feature-4-column thq-flex-column">
              <span className="thq-body-small">
                {props.slogan ?? (
                  <Fragment>
                    <span className="fruits-feature-4-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_BD_YbJ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <h2 className="thq-heading-2 fruits-feature-4-text11">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="fruits-feature-4-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_6O5JpG'),
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
                  <span className="fruits-feature-4-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_B0r4sT'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="fruits-feature-4-content1">
            <div className="fruits-feature-4-row thq-flex-row">
              <div className="fruits-feature-4-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 fruits-feature-4-feature1-image"
                />
                <div className="fruits-feature-4-content2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="fruits-feature-4-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_69pwAz'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="fruits-feature-4-text14">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_hEpSQ9'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="fruits-feature-4-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 fruits-feature-4-feature2-image"
                />
                <div className="fruits-feature-4-content3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="fruits-feature-4-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_NDnjFW'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="fruits-feature-4-text13">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_mGToPn'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="fruits-feature-4-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 fruits-feature-4-feature3-image"
                />
                <div className="fruits-feature-4-content4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="fruits-feature-4-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Nf1xLD'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="fruits-feature-4-text18">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_vM-rhK'),
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
          <div className="fruits-feature-4-actions">
            <button className="thq-button-filled fruits-feature-4-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="fruits-feature-4-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2NigCB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline fruits-feature-4-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="fruits-feature-4-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_WFYSY7'),
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
          .fruits-feature-4-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .fruits-feature-4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-4-column {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .fruits-feature-4-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-4-row {
            align-items: flex-start;
          }
          .fruits-feature-4-feature1 {
            flex: 1;
          }
          .fruits-feature-4-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .fruits-feature-4-feature2 {
            flex: 1;
          }
          .fruits-feature-4-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .fruits-feature-4-feature3 {
            flex: 1;
          }
          .fruits-feature-4-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .fruits-feature-4-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .fruits-feature-4-text13 {
            display: inline-block;
          }
          .fruits-feature-4-text14 {
            display: inline-block;
          }
          .fruits-feature-4-text15 {
            display: inline-block;
          }
          .fruits-feature-4-text16 {
            display: inline-block;
          }
          .fruits-feature-4-text17 {
            display: inline-block;
          }
          .fruits-feature-4-text18 {
            display: inline-block;
          }
          .fruits-feature-4-text19 {
            display: inline-block;
          }
          .fruits-feature-4-text20 {
            display: inline-block;
          }
          .fruits-feature-4-text21 {
            display: inline-block;
          }
          .fruits-feature-4-text22 {
            display: inline-block;
          }
          .fruits-feature-4-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .fruits-feature-4-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .fruits-feature-4-feature1-image {
              height: 260px;
            }
            .fruits-feature-4-feature2-image {
              height: 260px;
            }
            .fruits-feature-4-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .fruits-feature-4-column {
              width: 100%;
            }
            .fruits-feature-4-text11 {
              text-align: center;
            }
            .fruits-feature-4-row {
              flex-direction: column;
            }
            .fruits-feature-4-feature1-image {
              width: 100%;
            }
            .fruits-feature-4-feature2 {
              width: auto;
            }
            .fruits-feature-4-feature2-image {
              width: 100%;
            }
            .fruits-feature-4-feature3 {
              width: auto;
            }
            .fruits-feature-4-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .fruits-feature-4-actions {
              width: 100%;
              flex-direction: column;
            }
            .fruits-feature-4-button1 {
              width: 100%;
            }
            .fruits-feature-4-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FruitsFeature4.defaultProps = {
  feature2ImageAlt: 'Global Reach Image',
  feature2Description: undefined,
  feature1Description: undefined,
  feature1ImageAlt: 'Wide Range of Products Image',
  feature3ImageAlt: 'Quality Assurance Image',
  mainAction: undefined,
  sectionDescription: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1554589855-c54e5c81caef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTUwMTQ4Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1511546865855-fe4788edf4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTUwMTQ3OXw&ixlib=rb-4.1.0&q=80&w=1080',
  slogan: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1654248568717-b1840d35c8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTUwMTQ4MHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3Description: undefined,
  feature3Title: undefined,
  sectionTitle: undefined,
  feature1Title: undefined,
  feature2Title: undefined,
  secondaryAction: undefined,
}

FruitsFeature4.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  mainAction: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
  secondaryAction: PropTypes.element,
}

export default FruitsFeature4
