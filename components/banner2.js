import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="banner2-container1 thq-section-padding">
        <div className="banner2-max-width thq-section-max-width">
          <div className="banner2-container2">
            <h2 className="banner2-title thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_alav-S'),
                }}
              ></span>
            </h2>
            <h3 className="banner2-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner2-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_KV8d_S'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <video
            src={props.video1Src}
            loop="true"
            muted="true"
            poster={props.video1Poster}
            autoPlay="true"
            className="banner2-video"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .banner2-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner2-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner2-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner2-title {
            text-align: center;
            background-image: linear-gradient(
              90deg,
              rgb(189, 195, 199) 0%,
              rgb(135, 223, 87) 100%
            );
          }
          .banner2-text1 {
            text-align: center;
          }
          .banner2-video {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .banner2-text2 {
            display: inline-block;
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

Banner2.defaultProps = {
  video1Src: '',
  content1: undefined,
  video1Poster: 'example.com/video1Poster.jpg',
}

Banner2.propTypes = {
  video1Src: PropTypes.string,
  content1: PropTypes.element,
  video1Poster: PropTypes.string,
}

export default Banner2
