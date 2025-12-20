import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CouldNotFindTheProduct = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="thq-section-max-width">
          <div className="could-not-find-the-product-thq-accent2-bg-elm">
            <div className="could-not-find-the-product-thq-accent1-bg-elm">
              <div className="could-not-find-the-product-container2">
                <div className="could-not-find-the-product-thq-content-elm">
                  <span className="thq-heading-2 could-not-find-the-product-text1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_cTw3Er'),
                      }}
                    ></span>
                  </span>
                  <p className="thq-body-large could-not-find-the-product-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_FDhLjL'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="could-not-find-the-product-thq-actions-elm">
                  <button
                    type="button"
                    className="thq-button-filled could-not-find-the-product-button"
                  >
                    <Link href="/contact-us">
                      <a className="could-not-find-the-product-link">
                        {props.action1 ?? (
                          <Fragment>
                            <span className="could-not-find-the-product-text3">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_VUKWqk'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .could-not-find-the-product-thq-accent2-bg-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent2);
          }
          .could-not-find-the-product-thq-accent2-bg-elm:hover {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          .could-not-find-the-product-thq-accent1-bg-elm {
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent1);
          }
          .could-not-find-the-product-container2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fourunits);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .could-not-find-the-product-container2:hover {
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .could-not-find-the-product-thq-content-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .could-not-find-the-product-thq-actions-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .could-not-find-the-product-link {
            text-decoration: none;
          }
          .could-not-find-the-product-text3 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .could-not-find-the-product-container2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .could-not-find-the-product-thq-content-elm {
              align-items: center;
            }
            .could-not-find-the-product-text1 {
              font-size: 25px;
              text-align: center;
            }
            .could-not-find-the-product-text2 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .could-not-find-the-product-thq-actions-elm {
              flex-wrap: wrap;
              align-self: stretch;
              justify-content: center;
            }
            .could-not-find-the-product-button {
              flex: 1;
            }
          }
          @media (max-width: 344px) {
            .could-not-find-the-product-text2 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

CouldNotFindTheProduct.defaultProps = {
  action1: undefined,
  rootClassName: '',
}

CouldNotFindTheProduct.propTypes = {
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CouldNotFindTheProduct
