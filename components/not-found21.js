import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NotFound21 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="not-found21-container1 thq-section-padding">
        <div className="not-found21-container2">
          <h1 className="not-found21-text1 thq-heading-1">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_-UgSvE'),
              }}
            ></span>
          </h1>
          <h2 className="not-found21-text2 thq-heading-2">
            {props.heading2 ?? (
              <Fragment>
                <span className="not-found21-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OsTMH4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <Link href="/">
            <a className="not-found21-link thq-button-filled thq-button-outline">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="not-found21-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_DVKDtE'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
          </Link>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="not-found21-image"
        />
        <div className="not-found21-container3"></div>
      </div>
      <style jsx>
        {`
          .not-found21-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .not-found21-container2 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found21-text1 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 100px;
          }
          .not-found21-text2 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-weight: 400;
          }
          .not-found21-link {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-threeunits);
            text-decoration: none;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .not-found21-image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .not-found21-container3 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.7);
          }
          .not-found21-text3 {
            display: inline-block;
          }
          .not-found21-text4 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .not-found21-container1 {
              align-items: center;
              justify-content: center;
            }
            .not-found21-container2 {
              width: 100%;
              align-items: center;
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .not-found21-container2 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

NotFound21.defaultProps = {
  image1Alt: 'image',
  action1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fG5vdCUyMGZvdW5kfGVufDB8fHx8MTcxMzI3MTcwNXww&ixlib=rb-4.0.3&w=1500',
  heading2: undefined,
}

NotFound21.propTypes = {
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  image1Src: PropTypes.string,
  heading2: PropTypes.element,
}

export default NotFound21
