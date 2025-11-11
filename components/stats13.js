import React from 'react'

import { useTranslations } from 'next-intl'

const Stats13 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="thq-section-padding">
        <div className="stats13-max-width thq-section-max-width">
          <div className="stats13-container2">
            <h2 className="stats13-title thq-heading-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_X61cVG'),
                }}
              ></span>
            </h2>
            <span className="stats13-content thq-body-small">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_qMMqNN'),
                }}
              ></span>
            </span>
          </div>
          <div className="stats13-container3 thq-grid-3">
            <div className="stats13-container4 thq-card">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                className="stats13-icon1"
              >
                <path
                  fill="currentColor"
                  d="M1 23v-5h2v3h3v2zm17 0v-2h3v-3h2v5zm-6-4.5q-3 0-5.437-1.775T3 12q1.125-2.95 3.563-4.725T12 5.5t5.438 1.775T21 12q-1.125 2.95-3.562 4.725T12 18.5m0-2q2.2 0 4.025-1.2t2.8-3.3q-.975-2.1-2.8-3.3T12 7.5T7.975 8.7t-2.8 3.3q.975 2.1 2.8 3.3T12 16.5m0-1q1.45 0 2.475-1.025T15.5 12t-1.025-2.475T12 8.5T9.525 9.525T8.5 12t1.025 2.475T12 15.5m0-2q-.625 0-1.063-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5M1 6V1h5v2H3v3zm20 0V3h-3V1h5v5zm-9 6"
                ></path>
              </svg>
              <h2 className="stats13-text1 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1pPazq'),
                  }}
                ></span>
              </h2>
              <p className="stats13-text2 thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XwjUYC'),
                  }}
                ></span>
              </p>
            </div>
            <div className="stats13-container5 thq-card">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stats13-icon3"
              >
                <path
                  d="M18 16v-2h1V4H6v10.035Q6.245 14 6.5 14H8v2H6.5a1.5 1.5 0 0 0 0 3H10v2H6.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-4v-2h3v-3zM7 5h2v2H7zm0 3h2v2H7zm7 9v6h-2v-6H9l4-5l4 5z"
                  fill="currentColor"
                ></path>
              </svg>
              <h2 className="stats13-text3 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Lyu99c'),
                  }}
                ></span>
              </h2>
              <span className="stats13-text4 thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8jXh2b'),
                  }}
                ></span>
              </span>
            </div>
            <div className="stats13-container6 thq-card">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="stats13-icon5"
              >
                <path
                  d="M17.603 7.519a7.999 7.999 0 1 1-5.117-5.126L11.439 3.44q-.086.086-.158.185a6.5 6.5 0 1 0 5.088 5.098a1.5 1.5 0 0 0 .192-.162zM14.898 9q.1.486.1 1A5 5 0 1 1 11 5.1v1.546A3.5 3.5 0 1 0 13.353 9zm-4.9 2.5a1.5 1.5 0 0 0 1.45-1.887L13.03 8.03l.03-.03h2.44a.5.5 0 0 0 .354-.146l2-2A.5.5 0 0 0 17.5 5H15V2.5a.5.5 0 0 0-.853-.354l-2 2A.5.5 0 0 0 12 4.5v2.44l-.03.03l-1.582 1.581a1.5 1.5 0 0 0-1.89 1.45a1.5 1.5 0 0 0 1.5 1.5"
                  fill="currentColor"
                ></path>
              </svg>
              <h2 className="stats13-text5 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dtdgCe'),
                  }}
                ></span>
              </h2>
              <p className="stats13-text6 thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_k-kGC1'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </div>
        <img
          alt="Image of happy customers"
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTc2MjEwNzQzMHww&amp;ixlib=rb-4.1.0&amp;w=1500"
          className="stats13-image thq-img-ratio-16-9"
        />
      </div>
      <style jsx>
        {`
          .stats13-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .stats13-container2 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .stats13-title {
            color: #ffffff;
            text-align: center;
          }
          .stats13-content {
            color: rgb(255, 255, 255);
            font-size: 16px;
            text-align: center;
          }
          .stats13-container3 {
            width: 100%;
            z-index: 100;
          }
          .stats13-container4 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats13-icon1 {
            width: 70px;
            height: 60px;
          }
          .stats13-text1 {
            text-align: center;
          }
          .stats13-text2 {
            text-align: center;
          }
          .stats13-container5 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats13-icon3 {
            width: 70px;
            height: 60px;
          }
          .stats13-text3 {
            text-align: center;
          }
          .stats13-text4 {
            text-align: center;
          }
          .stats13-container6 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats13-icon5 {
            width: 70px;
            height: 60px;
          }
          .stats13-text5 {
            text-align: center;
          }
          .stats13-text6 {
            text-align: center;
          }
          .stats13-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .stats13-text2 {
              height: 365px;
            }
          }
          @media (max-width: 767px) {
            .stats13-max-width {
              flex-direction: column;
            }
            .stats13-title {
              font-size: 25px;
              text-align: center;
            }
            .stats13-content {
              font-size: 12px;
            }
            .stats13-container4 {
              height: 244px;
              position: relative;
              align-self: flex-start;
            }
            .stats13-icon1 {
              width: 26px;
              height: 164px;
            }
            .stats13-text1 {
              font-size: 18px;
              align-self: center;
            }
            .stats13-text2 {
              height: 123px;
              font-size: 12px;
              text-align: center;
            }
            .stats13-container5 {
              align-self: flex-start;
            }
            .stats13-icon3 {
              width: 52px;
              height: 46px;
            }
            .stats13-text3 {
              font-size: 18px;
              align-self: center;
            }
            .stats13-text4 {
              font-size: 12px;
            }
            .stats13-container6 {
              align-self: flex-start;
            }
            .stats13-icon5 {
              width: 52px;
              height: 46px;
            }
            .stats13-text5 {
              font-size: 18px;
              align-self: center;
            }
            .stats13-text6 {
              font-size: 12px;
            }
          }
          @media (max-width: 479px) {
            .stats13-title {
              align-self: center;
              text-align: center;
            }
          }
          @media (max-width: 344px) {
            .stats13-text2 {
              height: 135px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Stats13
