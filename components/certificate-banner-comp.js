import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CertificateBannerComp = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <img
          alt={props.backgroundImageAlt}
          src={props.backgroundImageSrc}
          className="certificate-banner-comp-background-image thq-img-ratio-16-9"
        />
        <div className="certificate-banner-comp-container thq-flex-row">
          <h2 className="certificate-banner-comp-text1 thq-heading-2">
            {props.heading11 ?? (
              <Fragment>
                <span className="certificate-banner-comp-text6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jbW35s'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="certificate-banner-comp-content">
            <p className="certificate-banner-comp-text2 thq-body-large">
              {props.content11 ?? (
                <Fragment>
                  <span className="certificate-banner-comp-text7">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_XEeJP8'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="certificate-banner-comp-actions">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="certificate-banner-comp-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_bVrutg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button type="button" className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="certificate-banner-comp-text8">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7Zu-wD'),
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
      </div>
      <style jsx>
        {`
          .certificate-banner-comp-background-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .certificate-banner-comp-container {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            overflow: visible;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-banner-comp-text1 {
            color: #ffffff;
            font-family: 'Inter';
          }
          .certificate-banner-comp-content {
            gap: 24px;
            width: 616px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .certificate-banner-comp-text2 {
            color: #ffffff;
            font-family: 'Inter';
          }
          .certificate-banner-comp-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .certificate-banner-comp-text5 {
            display: inline-block;
          }
          .certificate-banner-comp-text6 {
            display: inline-block;
          }
          .certificate-banner-comp-text7 {
            display: inline-block;
          }
          .certificate-banner-comp-text8 {
            display: inline-block;
          }
          .certificate-banner-comproot-class-name {
            height: auto;
            min-height: auto;
          }
          .certificate-banner-comproot-class-name1 {
            height: auto;
            min-height: auto;
          }
          @media (max-width: 991px) {
            .certificate-banner-comp-container {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .certificate-banner-comp-content {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .certificate-banner-comp-container {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

CertificateBannerComp.defaultProps = {
  action1: undefined,
  heading11: undefined,
  backgroundImageAlt: 'Image of fresh fruits and vegetables',
  content11: undefined,
  action2: undefined,
  rootClassName: '',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1563268381-06ddf2b1f46d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxibGFja3xlbnwwfHx8fDE3NTk0OTkwMDB8MA&ixlib=rb-4.1.0&w=1500',
}

CertificateBannerComp.propTypes = {
  action1: PropTypes.element,
  heading11: PropTypes.element,
  backgroundImageAlt: PropTypes.string,
  content11: PropTypes.element,
  action2: PropTypes.element,
  rootClassName: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
}

export default CertificateBannerComp
