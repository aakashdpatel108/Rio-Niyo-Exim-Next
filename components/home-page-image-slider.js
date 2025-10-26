import React, { Fragment } from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HomePageImageSlider = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`home-page-image-slider-header78 ${props.rootClassName} `}
      >
        <div className="home-page-image-slider-column thq-section-padding thq-section-max-width">
          <div className="home-page-image-slider-content1">
            <h1 className="home-page-image-slider-text1 thq-heading-1">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_7IVpwh'),
                }}
              ></span>
            </h1>
            <p className="home-page-image-slider-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="home-page-image-slider-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_YM9beO'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="home-page-image-slider-actions">
            <button className="thq-button-filled home-page-image-slider-button">
              <Link href="/product-categories">
                <a className="home-page-image-slider-link thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="home-page-image-slider-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_5ntxhO'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_QwPhGx'),
                }}
              ></span>
            </button>
          </div>
        </div>
        <div className="home-page-image-slider-content2">
          <div className="home-page-image-slider-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="home-page-image-slider-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Dragon fruit"
                src="https://images.unsplash.com/photo-1705501720577-4fe7bba7f85b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxkcmFnb24lMjBmcnVpdHxlbnwwfHx8fDE3NTk1OTU1MzF8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="papaya"
                src="https://images.unsplash.com/photo-1702040242599-46809572ffce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxwYXBheWF8ZW58MHx8fHwxNzU5Njk4ODY4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="banana"
                src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGJhbmFuYXxlbnwwfHx8fDE3NTk2OTg4ODV8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="guava"
                src="https://images.unsplash.com/photo-1629367308496-a2496ba22f88?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGd1YXZhfGVufDB8fHx8MTc1OTY5ODkwNHww&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="home-page-image-slider-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="home-page-image-slider-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="home-page-image-slider-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="papaya"
                src="https://images.unsplash.com/photo-1702040242599-46809572ffce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxwYXBheWF8ZW58MHx8fHwxNzU5Njk4ODY4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="banana"
                src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGJhbmFuYXxlbnwwfHx8fDE3NTk2OTg4ODV8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="guava"
                src="https://images.unsplash.com/photo-1629367308496-a2496ba22f88?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGd1YXZhfGVufDB8fHx8MTc1OTY5ODkwNHww&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="home-page-image-slider-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="home-page-image-slider-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="home-page-image-slider-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="home-page-image-slider-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="home-page-image-slider-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="home-page-image-slider-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="home-page-image-slider-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="home-page-image-slider-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="home-page-image-slider-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="home-page-image-slider-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="home-page-image-slider-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="home-page-image-slider-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="home-page-image-slider-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="home-page-image-slider-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="home-page-image-slider-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-page-image-slider-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            border-left-width: 6px;
            border-right-width: 6px;
            border-top-left-radius: 40%;
            border-top-right-radius: 40%;
          }
          .home-page-image-slider-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .home-page-image-slider-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-page-image-slider-text1 {
            font-size: 35px;
            text-align: center;
          }
          .home-page-image-slider-text2 {
            text-align: center;
          }
          .home-page-image-slider-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .home-page-image-slider-link {
            text-decoration: none;
          }
          .home-page-image-slider-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-page-image-slider-row-container1 {
            width: 100%;
          }
          .home-page-image-slider-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-row-container2 {
            width: 100%;
          }
          .home-page-image-slider-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-placeholder-image33 {
            width: 400px;
            height: 400px;
          }
          .home-page-image-slider-container2 {
            display: contents;
          }
          .home-page-image-slider-text4 {
            display: inline-block;
          }
          .home-page-image-slider-text5 {
            display: inline-block;
          }
          .home-page-image-sliderroot-class-name {
            background-color: #f3f3f3;
          }
          @media (max-width: 1600px) {
            .home-page-image-slider-header78 {
              border-top-width: 1px;
              border-right-width: 6px;
            }
          }
          @media (max-width: 991px) {
            .home-page-image-slider-header78 {
              border-top-width: 0px;
              border-left-width: 3px;
              border-right-width: 3px;
              border-top-left-radius: 30%;
              border-top-right-radius: 30%;
            }
            .home-page-image-slider-text1 {
              font-size: 30px;
            }
          }
          @media (max-width: 767px) {
            .home-page-image-slider-text1 {
              width: 408px;
              font-size: 35px;
            }
            .home-page-image-slider-text2 {
              width: 514px;
            }
            .home-page-image-slider-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-page-image-slider-actions {
              width: 100%;
              flex-direction: column;
            }
            .home-page-image-slider-button {
              width: 100%;
            }
          }
          @media (max-width: 414px) {
            .home-page-image-slider-text1 {
              width: 194px;
              font-size: 20px;
              padding-right: 0px;
            }
            .home-page-image-slider-text2 {
              width: 231px;
              font-size: 15px;
            }
            .home-page-image-slider-link {
              font-size: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

HomePageImageSlider.defaultProps = {
  image10Src:
    'https://images.unsplash.com/photo-1752584157962-8821ce8b732b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTMyNjcxMXw&ixlib=rb-4.1.0&q=80&w=1080',
  image12Alt: 'Your reliable food export partner',
  image8Src:
    'https://images.unsplash.com/photo-1720289024474-946b6feabfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTMyNjcxMXw&ixlib=rb-4.1.0&q=80&w=1080',
  image10Alt: 'Exotic Indian spices',
  content1: undefined,
  image9Alt: 'Premium food exports',
  image12Src:
    'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTMyNjcxMHw&ixlib=rb-4.1.0&q=80&w=1080',
  image11Src:
    'https://images.unsplash.com/photo-1583663848850-46af132dc08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTMyNjcxMXw&ixlib=rb-4.1.0&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTMyNjcxMHw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1705501720577-4fe7bba7f85b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxkcmFnb24lMjBmcnVpdHxlbnwwfHx8fDE3NTk1OTU1MzF8MA&ixlib=rb-4.1.0&w=1500',
  image1Alt: 'Fresh fruits and vegetables',
  action1: undefined,
  image8Alt: 'International quality standards',
  image7Src:
    'https://images.unsplash.com/photo-1752584157962-8821ce8b732b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTMyNjcxMXw&ixlib=rb-4.1.0&q=80&w=1080',
  image9Src:
    'https://images.unsplash.com/photo-1649562212286-dfb64636ba91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTMyNjcxMnw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Alt: 'Spices from India',
  image7Alt: 'Connecting suppliers and buyers',
  image6Alt: 'Exporting excellence',
  image1Src:
    'https://images.unsplash.com/photo-1519096845289-95806ee03a1a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxtYW5nb3xlbnwwfHx8fDE3NTk2OTg3NDh8MA&ixlib=rb-4.1.0&w=1500',
  image11Alt: 'Delivering freshness worldwide',
  rootClassName: '',
}

HomePageImageSlider.propTypes = {
  image10Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image10Alt: PropTypes.string,
  content1: PropTypes.element,
  image9Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image11Src: PropTypes.string,
  image6Src: PropTypes.string,
  image2Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  image8Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image9Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image11Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HomePageImageSlider
