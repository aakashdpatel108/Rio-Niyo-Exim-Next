import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner21 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="banner21-container1 thq-section-padding">
        <div className="banner21-max-width thq-section-max-width">
          <div className="banner21-container2">
            <h2 className="banner21-title thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_81G-9t'),
                }}
              ></span>
            </h2>
          </div>
          <Link href="/product-categories">
            <a className="banner21-link thq-button-filled">
              <span className="banner21-text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ES_rkI'),
                  }}
                ></span>
              </span>
            </a>
          </Link>
          <video
            src={props.video1Src}
            loop="true"
            muted="true"
            poster={props.video1Poster}
            autoPlay="true"
            className="banner21-video"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .banner21-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner21-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner21-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner21-title {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            text-align: center;
          }
          .banner21-link {
            z-index: 100;
            text-decoration: none;
          }
          .banner21-video {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .banner21-title {
              color: var(--dl-color-theme-secondary1);
              font-size: 25px;
              font-family: Taviraj;
            }
            .banner21-link {
              width: 140px;
              padding-left: 3px;
              padding-right: 0px;
            }
            .banner21-text {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

Banner21.defaultProps = {
  video1Poster:
    'https://images.pexels.com/videos/3365440/pictures/preview-0.jpg',
  video1Src:
    'https://videos.pexels.com/video-files/3365440/3365440-hd_1280_720_30fps.mp4',
}

Banner21.propTypes = {
  video1Poster: PropTypes.string,
  video1Src: PropTypes.string,
}

export default Banner21
