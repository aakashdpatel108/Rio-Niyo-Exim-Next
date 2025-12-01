import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentList1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`content-list1-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="content-list1-max-width thq-section-max-width">
          <div className="content-list1-content thq-flex-column">
            <ul className="content-list1-ul thq-flex-column">
              <li className="thq-flex-column list-item">
                <h2 className="content-list1-heading1 thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SFI8n-'),
                    }}
                  ></span>
                </h2>
                <p className="thq-body-small content-list1-content1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fY4KHn'),
                    }}
                  ></span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3 content-list1-heading2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GRxCJC'),
                    }}
                  ></span>
                </h3>
                <p className="thq-body-small content-list1-content2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rloAPN'),
                    }}
                  ></span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3 content-list1-heading3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_cp13Q6'),
                    }}
                  ></span>
                </h3>
                <p className="thq-body-small content-list1-content3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_k_T0zu'),
                    }}
                  ></span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3 content-list1-heading4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Wjf9Wn'),
                    }}
                  ></span>
                </h3>
                <p className="thq-body-small content-list1-content4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uxFg1A'),
                    }}
                  ></span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3 content-list1-heading5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9GvFYo'),
                    }}
                  ></span>
                </h3>
                <p className="thq-body-small content-list1-content5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XZNFbU'),
                    }}
                  ></span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list1-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list1-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list1-content {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list1-ul {
            align-items: flex-start;
          }
          .content-list1-heading1 {
            font-size: 35px;
            align-self: flex-start;
          }
          .content-list1root-class-name {
            background-color: #faffcf;
          }
          @media (max-width: 991px) {
            .content-list1-heading1 {
              align-self: flex-start;
            }
          }
          @media (max-width: 767px) {
            .content-list1-heading1 {
              font-size: 25px;
              align-self: flex-start;
            }
            .content-list1-content1 {
              font-size: 12px;
            }
            .content-list1-heading2 {
              font-size: 18px;
            }
            .content-list1-content2 {
              font-size: 12px;
            }
            .content-list1-heading3 {
              font-size: 18px;
            }
            .content-list1-content3 {
              font-size: 12px;
            }
            .content-list1-heading4 {
              font-size: 18px;
            }
            .content-list1-content4 {
              font-size: 12px;
            }
            .content-list1-heading5 {
              font-size: 18px;
            }
            .content-list1-content5 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

ContentList1.defaultProps = {
  rootClassName: '',
}

ContentList1.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContentList1
