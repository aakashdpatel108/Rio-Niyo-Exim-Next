import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery10 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="gallery10-thq-gallery3-elm thq-section-padding">
        <div className="gallery10-thq-max-width-elm thq-section-max-width">
          <div className="gallery10-thq-section-title-elm">
            <h2 className="gallery10-thq-text-elm1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery10-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_eI6Bt3'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="gallery10-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery10-text1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_W35GIo'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery10-container">
            <div className="gallery10-thq-content-elm">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery10-thq-image1-elm thq-img-ratio-4-6"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery10-thq-image2-elm thq-img-ratio-4-6"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery10-thq-image6-elm thq-img-ratio-4-6"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery10-thq-image7-elm thq-img-ratio-4-6"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery10-thq-gallery3-elm {
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
          .gallery10-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery10-thq-section-title-elm {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery10-thq-text-elm1 {
            text-align: center;
          }
          .gallery10-thq-text-elm2 {
            text-align: center;
          }
          .gallery10-container {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery10-thq-content-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            height: 600px;
            display: flex;
            overflow: auto;
          }
          .gallery10-thq-image1-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery10-thq-image2-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery10-thq-image6-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery10-thq-image7-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery10-text1 {
            display: inline-block;
          }
          .gallery10-text2 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .gallery10-thq-section-title-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .gallery10-thq-content-elm {
              height: 450px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery10.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image2Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1400',
  image2Alt: 'Photography showcase',
  image4Alt: 'Mixed media installation',
  image1Alt: 'Abstract painting',
  image3Alt: 'Sculpture exhibition',
  content1: undefined,
  image4Src:
    'https://images.unsplash.com/photo-1564089957880-517edea1afc5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400',
  image3Src:
    'https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400',
  heading1: undefined,
}

Gallery10.propTypes = {
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.element,
  image4Src: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default Gallery10
