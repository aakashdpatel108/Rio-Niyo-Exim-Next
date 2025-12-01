import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="steps1-container1 thq-section-padding">
        <div className="steps1-max-width thq-section-max-width">
          <div className="steps1-container2"></div>
          <div className="steps1-container3">
            <div className="steps1-container4 thq-card">
              <img
                alt="Order Image"
                src="/1.svg"
                className="steps1-image1 thq-img-ratio-1-1"
              />
              <div className="steps1-container5">
                <h2 className="thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_l616lh'),
                    }}
                  ></span>
                </h2>
                <span className="steps1-text11 thq-body-small">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps1-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9N_Ngv'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="steps1-container6 thq-card">
              <img
                alt={props.step3ImageAlt3}
                src={props.step3ImageSrc3}
                className="steps1-image2 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step3Title3 ?? (
                  <Fragment>
                    <span className="steps1-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_jgrl7m'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text13 thq-body-small">
                {props.step3Description3 ?? (
                  <Fragment>
                    <span className="steps1-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ab6pEz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps1-container7 thq-card">
              <img
                alt={props.step3ImageAlt2}
                src={props.step3ImageSrc2}
                className="steps1-image3 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step3Title2 ?? (
                  <Fragment>
                    <span className="steps1-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0EFrj2'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text15 thq-body-small">
                {props.step3Description2 ?? (
                  <Fragment>
                    <span className="steps1-text24">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_8fYcqa'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps1-container8 thq-card">
              <img
                alt={props.step3ImageAlt1}
                src={props.step3ImageSrc1}
                className="steps1-image4 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step3Title1 ?? (
                  <Fragment>
                    <span className="steps1-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_WKP9V0'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text17 thq-body-small">
                {props.step3Description1 ?? (
                  <Fragment>
                    <span className="steps1-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dQFs30'),
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
      <style jsx>
        {`
          .steps1-container1 {
            width: 100%;
            height: auto;
            display: grid;
            position: relative;
            align-items: start;
            justify-items: start;
          }
          .steps1-max-width {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column-reverse;
          }
          .steps1-container2 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps1-container3 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: grid;
          }
          .steps1-container4 {
            flex: 1;
            width: auto;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image1 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps1-text11 {
            text-align: center;
          }
          .steps1-container6 {
            flex: 1;
            width: auto;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image2 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text13 {
            text-align: center;
          }
          .steps1-container7 {
            flex: 1;
            width: auto;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image3 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text15 {
            text-align: center;
          }
          .steps1-container8 {
            flex: 1;
            width: auto;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image4 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text17 {
            text-align: center;
          }
          .steps1-text18 {
            display: inline-block;
          }
          .steps1-text19 {
            display: inline-block;
          }
          .steps1-text20 {
            display: inline-block;
          }
          .steps1-text21 {
            display: inline-block;
          }
          .steps1-text22 {
            display: inline-block;
          }
          .steps1-text23 {
            display: inline-block;
          }
          .steps1-text24 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps1-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps1-container2 {
              flex-direction: column;
            }
            .steps1-container3 {
              flex-direction: column;
            }
            .steps1-container4 {
              width: 100%;
            }
            .steps1-container6 {
              width: 100%;
            }
            .steps1-container7 {
              width: 100%;
            }
            .steps1-container8 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps1.defaultProps = {
  step3ImageAlt3: 'Order Image',
  step3ImageSrc3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step3Title2: undefined,
  step3ImageAlt2: 'Order Image',
  step3ImageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step3Description1: undefined,
  step3Description: undefined,
  step3ImageAlt1: 'Order Image',
  step3Title3: undefined,
  step3Description3: undefined,
  step3Title1: undefined,
  step3Description2: undefined,
  step3ImageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Steps1.propTypes = {
  step3ImageAlt3: PropTypes.string,
  step3ImageSrc3: PropTypes.string,
  step3Title2: PropTypes.element,
  step3ImageAlt2: PropTypes.string,
  step3ImageSrc1: PropTypes.string,
  step3Description1: PropTypes.element,
  step3Description: PropTypes.element,
  step3ImageAlt1: PropTypes.string,
  step3Title3: PropTypes.element,
  step3Description3: PropTypes.element,
  step3Title1: PropTypes.element,
  step3Description2: PropTypes.element,
  step3ImageSrc2: PropTypes.string,
}

export default Steps1
