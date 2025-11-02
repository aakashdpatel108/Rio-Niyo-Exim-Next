import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="stats2-container1 thq-section-padding">
        <div className="stats2-max-width thq-section-max-width">
          <div className="stats2-container2 thq-flex-column">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-1-1 stats2-image"
            />
          </div>
          <div className="stats2-container3 thq-flex-column">
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="stats2-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SiYafo'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <p className="thq-body-large">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_vR3Qrd'),
                }}
              ></span>
            </p>
            <div className="stats2-container4 thq-grid-2"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .stats2-container1 {
            width: 100%;
            flex-direction: column;
          }
          .stats2-max-width {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
          }
          .stats2-container2 {
            max-width: 50%;
          }
          .stats2-container3 {
            width: 100%;
            height: 100%;
            align-self: center;
            align-items: flex-start;
            margin-left: auto;
          }
          .stats2-container4 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .stats2-text3 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .stats2-max-width {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .stats2-container2 {
              width: 100%;
              max-width: 100%;
            }
            .stats2-container3 {
              align-self: flex-start;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .stats2-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats2.defaultProps = {
  content1: undefined,
  image1Alt: 'Global Food Exporter',
  image1Src:
    'https://images.unsplash.com/photo-1504281186-f427c16ed131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTA5MDgwNXw&ixlib=rb-4.1.0&q=80&w=1400',
}

Stats2.propTypes = {
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Stats2
