import React from 'react'

import { useTranslations } from 'next-intl'

const FruitsFeature41 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="fruits-feature-41-thq-thq-layout349-elm-elm thq-section-padding">
        <div className="fruits-feature-41-thq-thq-max-width-elm-elm thq-section-max-width">
          <div className="fruits-feature-41-thq-thq-content-elm-elm1">
            <div className="fruits-feature-41-thq-thq-section-title-elm-elm">
              <span className="thq-body-small fruits-feature-41-thq-thq-text-elm-elm1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TlTuox'),
                  }}
                ></span>
              </span>
              <div className="fruits-feature-41-thq-thq-content-elm-elm2">
                <h2 className="thq-heading-2 fruits-feature-41-thq-thq-text-elm-elm2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UWGJH8'),
                    }}
                  ></span>
                </h2>
                <p className="thq-body-large fruits-feature-41-thq-thq-text-elm-elm3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7JG8mF'),
                    }}
                  ></span>
                </p>
                <button
                  type="button"
                  className="fruits-feature-41-button thq-button-filled"
                >
                  <span className="fruits-feature-41-text">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_yuZ8XR'),
                      }}
                    ></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="fruits-feature-41-thq-thq-image-container-elm-elm">
            <img
              alt="Mango"
              src="https://images.unsplash.com/photo-1519096845289-95806ee03a1a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxNYW5nb3xlbnwwfHx8fDE3NTk1OTQ4NDZ8MA&amp;ixlib=rb-4.1.0&amp;w=1400"
              className="thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .fruits-feature-41-thq-thq-layout349-elm-elm {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .fruits-feature-41-thq-thq-max-width-elm-elm {
            display: flex;
            align-items: center;
          }
          .fruits-feature-41-thq-thq-content-elm-elm1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-41-thq-thq-section-title-elm-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-41-thq-thq-content-elm-elm2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .fruits-feature-41-button {
            text-decoration: none;
          }
          .fruits-feature-41-text {
            font-family: 'Open Sans';
          }
          .fruits-feature-41-thq-thq-image-container-elm-elm {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          @media (max-width: 991px) {
            .fruits-feature-41-thq-thq-max-width-elm-elm {
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 767px) {
            .fruits-feature-41-thq-thq-text-elm-elm1 {
              font-size: 12px;
            }
            .fruits-feature-41-thq-thq-text-elm-elm2 {
              font-size: 18px;
            }
            .fruits-feature-41-thq-thq-text-elm-elm3 {
              font-size: 12px;
            }
            .fruits-feature-41-text {
              font-size: 12px;
            }
          }
          @media (max-width: 344px) {
            .fruits-feature-41-thq-thq-text-elm-elm1 {
              font-size: 12px;
            }
            .fruits-feature-41-thq-thq-text-elm-elm2 {
              font-size: 18px;
            }
            .fruits-feature-41-thq-thq-text-elm-elm3 {
              font-size: 12px;
            }
            .fruits-feature-41-button {
              width: 171px;
              margin-right: 0px;
            }
            .fruits-feature-41-text {
              font-size: 12px;
              font-family: Open Sans;
            }
          }
        `}
      </style>
    </>
  )
}

export default FruitsFeature41
