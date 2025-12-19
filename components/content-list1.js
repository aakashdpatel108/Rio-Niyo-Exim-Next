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
        <div className="content-list1-thq-max-width-elm thq-section-max-width">
          <div className="content-list1-thq-content-elm thq-flex-column">
            <ul className="content-list1-ul thq-flex-column">
              <li className="thq-flex-column list-item">
                <h2 className="content-list1-thq-heading1-elm thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SFI8n-'),
                    }}
                  ></span>
                </h2>
                <p className="thq-body-small content-list1-thq-content1-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fY4KHn'),
                    }}
                  ></span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3 content-list1-thq-heading2-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GRxCJC'),
                    }}
                  ></span>
                </h3>
                <p className="thq-body-small content-list1-thq-content2-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rloAPN'),
                    }}
                  ></span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3 content-list1-thq-heading3-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_cp13Q6'),
                    }}
                  ></span>
                </h3>
                <p className="thq-body-small content-list1-thq-content3-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_k_T0zu'),
                    }}
                  ></span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3 content-list1-thq-heading4-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Wjf9Wn'),
                    }}
                  ></span>
                </h3>
                <p className="thq-body-small content-list1-thq-content4-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uxFg1A'),
                    }}
                  ></span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3 content-list1-thq-heading5-elm">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9GvFYo'),
                    }}
                  ></span>
                </h3>
                <p className="thq-body-small content-list1-thq-content5-elm">
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
          .content-list1-thq-max-width-elm {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list1-thq-content-elm {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list1-ul {
            align-items: flex-start;
          }
          .content-list1-thq-heading1-elm {
            font-size: 35px;
            align-self: flex-start;
          }
          @media (max-width: 991px) {
            .content-list1-thq-heading1-elm {
              align-self: flex-start;
            }
          }
          @media (max-width: 767px) {
            .content-list1-thq-heading1-elm {
              font-size: 25px;
              align-self: flex-start;
            }
            .content-list1-thq-content1-elm {
              font-size: 12px;
            }
            .content-list1-thq-heading2-elm {
              font-size: 18px;
            }
            .content-list1-thq-content2-elm {
              font-size: 12px;
            }
            .content-list1-thq-heading3-elm {
              font-size: 18px;
            }
            .content-list1-thq-content3-elm {
              font-size: 12px;
            }
            .content-list1-thq-heading4-elm {
              font-size: 18px;
            }
            .content-list1-thq-content4-elm {
              font-size: 12px;
            }
            .content-list1-thq-heading5-elm {
              font-size: 18px;
            }
            .content-list1-thq-content5-elm {
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
