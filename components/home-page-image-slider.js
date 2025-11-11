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
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_PysO3i'),
                }}
              ></span>
            </p>
          </div>
          <div className="home-page-image-slider-actions">
            <button className="thq-button-filled home-page-image-slider-button">
              <Link href="/product-categories">
                <a className="home-page-image-slider-link thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="home-page-image-slider-text4">
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
                alt="Sesame seeds"
                src="https://images.unsplash.com/photo-1628317321557-68729bee6644?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFNlc2FtZSUyMHNlZWRzfGVufDB8fHx8MTc2MjEwNDQwMnww&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="lady fingers"
                src="https://images.unsplash.com/photo-1664289242854-e99d345cfa92?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGxhZHklMjBmaW5nZXJ8ZW58MHx8fHwxNzYyMDM4NTU2fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="rice"
                src="https://images.unsplash.com/photo-1686820740687-426a7b9b2043?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHJpY2V8ZW58MHx8fHwxNzYyMDM3NzAwfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="kidney beans"
                src="https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1fHxraWRuZXklMjBiZWFuc3xlbnwwfHx8fDE3NjIwMzk2MzJ8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="coriander"
                src="https://images.unsplash.com/photo-1608797179072-4268dd68eff2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGNvcmlhbmRlcnxlbnwwfHx8fDE3NjE1MTM1NjF8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
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
                alt="Onions"
                src="https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fE9uaW9uc3xlbnwwfHx8fDE3NjIxMDQ0NTJ8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Turmeric"
                src="https://images.unsplash.com/photo-1606951444141-e5533feb55be?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFR1cm1lcmljfGVufDB8fHx8MTc2MjEwNDE5OXww&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="banana"
                src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGJhbmFuYXxlbnwwfHx8fDE3NTk2OTg4ODV8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Cumin"
                src="https://images.unsplash.com/photo-1676619357571-b4f086f81299?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fEN1bWlufGVufDB8fHx8MTc2MjEwNDIxNnww&amp;ixlib=rb-4.1.0&amp;w=1500"
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
                alt="Papaya"
                src="https://images.unsplash.com/photo-1702040242599-46809572ffce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxwYXBheWF8ZW58MHx8fHwxNzYyMTA1MDczfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="home-page-image-slider-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Cloves"
                src="https://images.unsplash.com/photo-1733938942778-c2e510c02dc9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxDbG92ZXN8ZW58MHx8fHwxNzYyMTA1MjI5fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Dragon fruit"
                src="https://images.unsplash.com/photo-1740759781409-9d1d6985c866?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxEcmFnb24lMjBmcnVpdHxlbnwwfHx8fDE3NjIxMDQxNTJ8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Chickpeas"
                src="https://images.unsplash.com/photo-1724418020207-144b3ba54d2d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxDaGlja3BlYXN8ZW58MHx8fHwxNzYyMTA0ODUwfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Cinnamon"
                src="https://images.unsplash.com/photo-1553499944-e4297a0af1bd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fENpbm5hbW9ufGVufDB8fHx8MTc2MjEwNDc3Nnww&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt="Guava"
                src="https://images.unsplash.com/photo-1689996647099-a7a0b67fd2f6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fEd1YXZhfGVufDB8fHx8MTc2MjEwNDU3Nnww&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Soya beans"
                src="https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFNveWElMjBiZWFuc3xlbnwwfHx8fDE3NjIxMDQ1MDd8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Green chilli"
                src="https://images.unsplash.com/photo-1524593410820-38510f580a77?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGdyZWVuJTIwcGVwcGVyfGVufDB8fHx8MTc2MjAzODg2N3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
                className="home-page-image-slider-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Cardamom"
                src="https://images.unsplash.com/photo-1701166627787-12d9fdd437cc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNhcmRhbW9tfGVufDB8fHx8MTc2MjEwNDk0N3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
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
              font-size: 35px;
            }
          }
          @media (max-width: 767px) {
            .home-page-image-slider-content1 {
              width: 541px;
            }
            .home-page-image-slider-text1 {
              width: 249px;
              font-size: 25px;
              text-align: center;
              margin-right: 0px;
            }
            .home-page-image-slider-text2 {
              width: 514px;
              font-size: 18px;
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
          @media (max-width: 344px) {
            .home-page-image-slider-text1 {
              width: 194px;
              font-size: 20px;
              padding-right: 0px;
            }
            .home-page-image-slider-text2 {
              width: 231px;
              font-size: 15px;
            }
            .home-page-image-slider-button {
              width: 100%;
            }
            .home-page-image-slider-link {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

HomePageImageSlider.defaultProps = {
  image8Src:
    'https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFNveWElMjBiZWFuc3xlbnwwfHx8fDE3NjIxMDQ1MDd8MA&ixlib=rb-4.1.0&w=1500',
  rootClassName: '',
  image11Src:
    'https://images.unsplash.com/photo-1583663848850-46af132dc08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTMyNjcxMXw&ixlib=rb-4.1.0&q=80&w=1500',
  image1Alt: 'Fresh fruits and vegetables',
  action1: undefined,
  image8Alt: 'International quality standards',
  image1Src:
    'https://images.unsplash.com/photo-1519096845289-95806ee03a1a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxtYW5nb3xlbnwwfHx8fDE3NTk2OTg3NDh8MA&ixlib=rb-4.1.0&w=1500',
  image11Alt: 'Delivering freshness worldwide',
}

HomePageImageSlider.propTypes = {
  image8Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image11Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  image8Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image11Alt: PropTypes.string,
}

export default HomePageImageSlider
