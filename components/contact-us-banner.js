import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactUsBanner = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-us-banner-container1 thq-section-padding">
        <div className="contact-us-banner-max-width thq-section-max-width">
          <div className="contact-us-banner-container2">
            <h2 className="contact-us-banner-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-us-banner-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_qAOqEt'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="contact-us-banner-text1 thq-heading-3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_kjceeZ'),
                }}
              ></span>
            </h3>
          </div>
          <video
            src={props.video1Src}
            loop="true"
            muted="true"
            poster={props.video1Poster}
            autoPlay="true"
            className="contact-us-banner-video"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .contact-us-banner-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-us-banner-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-us-banner-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .contact-us-banner-title {
            color: #fdfdfd;
            text-align: center;
          }
          .contact-us-banner-text1 {
            color: rgb(247, 247, 247);
            text-align: center;
          }
          .contact-us-banner-video {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .contact-us-banner-text2 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

ContactUsBanner.defaultProps = {
  video1Poster:
    'https://images.pexels.com/videos/5293017/pictures/preview-0.jpg',
  video1Src:
    'https://videos.pexels.com/video-files/5293017/5293017-hd_1280_720_30fps.mp4',
  heading1: undefined,
}

ContactUsBanner.propTypes = {
  video1Poster: PropTypes.string,
  video1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default ContactUsBanner
