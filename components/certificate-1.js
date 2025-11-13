import React, { useState } from 'react'

import { useTranslations } from 'next-intl'

const Certificate1 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="certificate-1-container1 thq-section-padding">
        <div className="certificate-1-container2 thq-section-max-width">
          <div className="certificate-1-image-container">
            {activeTab === 0 && (
              <img
                alt="OFICE"
                src="/iec-1000h.png"
                loading="eager"
                className="certificate-1-image thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="certificate-1-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="certificate-1-tab-horizontal1"
            >
              <div className="certificate-1-divider-container1">
                {activeTab === 0 && (
                  <div className="certificate-1-container3"></div>
                )}
              </div>
              <div className="certificate-1-content">
                <h2 className="thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GpXRGh'),
                    }}
                  ></span>
                </h2>
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kYG6qK'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="certificate-1-tab-horizontal2"
            >
              <div className="certificate-1-divider-container2">
                {activeTab === 1 && (
                  <div className="certificate-1-container4"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="certificate-1-tab-horizontal3"
            >
              <div className="certificate-1-divider-container3">
                {activeTab === 2 && (
                  <div className="certificate-1-container5"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .certificate-1-container1 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: inset;
            border-width: 1px;
          }
          .certificate-1-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .certificate-1-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .certificate-1-image {
            height: 990px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 3px;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .certificate-1-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .certificate-1-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-1-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-1-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-1-content {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .certificate-1-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-1-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-1-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .certificate-1-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .certificate-1-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .certificate-1-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 1600px) {
            .certificate-1-image {
              border-style: solid;
              border-width: 3px;
            }
          }
          @media (max-width: 1200px) {
            .certificate-1-image {
              width: 478px;
              height: 667px;
            }
          }
          @media (max-width: 991px) {
            .certificate-1-container1 {
              width: 795px;
            }
            .certificate-1-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .certificate-1-image-container {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .certificate-1-image-container {
              width: auto;
              height: auto;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .certificate-1-image {
              width: 478px;
              height: 667px;
            }
          }
          @media (max-width: 344px) {
            .certificate-1-image {
              width: 100%;
              height: 514px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Certificate1
