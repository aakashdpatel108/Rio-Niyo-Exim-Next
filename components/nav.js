import React, { useState, Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Nav = (props) => {
  const translate = useTranslations()
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <>
      <header className={`nav-container1 ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="nav-navbar-interactive">
          <img
            alt="RioNiyo EXIM Logo"
            src="/rioniyoexim.svg"
            className="nav-image1"
          />
          <div data-thq="thq-navbar-nav" className="nav-desktop-menu">
            <nav className="nav-links1">
              <Link href="/">
                <a className="nav-link5 thq-body-small thq-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('link1_dFMFNM'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/about-us">
                <a className="nav-link6 thq-body-small thq-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('link2_tHtuHa'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/certificates">
                <a className="nav-link7 thq-body-small thq-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('link3_Q0-Pyo'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/contact-us">
                <a className="nav-link8 thq-body-small thq-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('link3_d0wioP'),
                    }}
                  ></span>
                </a>
              </Link>
              <div className="nav-container2">
                <div
                  onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
                  className="nav-link4-dropdown-trigger"
                >
                  <span className="thq-body-small thq-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('link4_FJCjLB'),
                      }}
                    ></span>
                  </span>
                  <div className="nav-icon-container1">
                    {link5DropdownVisible === true && (
                      <div className="nav-container3">
                        <svg viewBox="0 0 1024 1024" className="nav-icon10">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {link5DropdownVisible === false && (
                      <div className="nav-container4">
                        <svg viewBox="0 0 1024 1024" className="nav-icon12">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5DropdownVisible === true && (
                  <div className="nav-container5 thq-box-shadow">
                    <div className="nav-menu-item1">
                      <div className="nav-content1">
                        <a
                          href={props.linkUrlPage1}
                          className="nav-page11 thq-body-large"
                        >
                          {props.page1 ?? (
                            <Fragment>
                              <span className="nav-text2">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_EDSfO4'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="nav-menu-item2">
                      <div className="nav-content2">
                        <a
                          href={props.linkUrlPage2}
                          className="nav-page21 thq-body-large"
                        >
                          {props.page2 ?? (
                            <Fragment>
                              <span className="nav-text3">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_sckdO2'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="nav-menu-item3">
                      <div className="nav-content3">
                        <a
                          href={props.linkUrlPage3}
                          className="nav-page31 thq-body-large"
                        >
                          {props.page3 ?? (
                            <Fragment>
                              <span className="nav-text4">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_bmDZsm'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="nav-menu-item4">
                      <div className="nav-content4">
                        <a
                          href={props.linkUrlPage4}
                          className="nav-page41 thq-body-large"
                        >
                          {props.page4 ?? (
                            <Fragment>
                              <span className="nav-text1">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_7ow-M-'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="nav-burger-menu">
            <svg viewBox="0 0 1024 1024" className="nav-icon14">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="nav-mobile-menu">
            <div className="nav-nav">
              <div className="nav-top">
                <img
                  alt="RioNiyo EXIM Logo"
                  src="/rioniyoexim.svg"
                  className="nav-logo"
                />
                <div data-thq="thq-close-menu" className="nav-close-menu">
                  <svg viewBox="0 0 1024 1024" className="nav-icon16">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="nav-links2">
                <Link href="/">
                  <a className="nav-link9 thq-body-small thq-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('link1_hbuQ9x'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/about-us">
                  <a className="nav-link10 thq-body-small thq-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('link2_dJg7gl'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/certificates">
                  <a className="nav-link13 thq-body-small thq-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('link3_DFODdZ'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/contact-us">
                  <a className="nav-link14 thq-body-small thq-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('link3_jiTdIq'),
                      }}
                    ></span>
                  </a>
                </Link>
                <div className="nav-link4-accordion">
                  <div
                    onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                    className="nav-trigger"
                  >
                    <span className="thq-body-small thq-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('link4_f46XrC'),
                        }}
                      ></span>
                    </span>
                    <div className="nav-icon-container2">
                      {link5AccordionOpen === true && (
                        <div className="nav-container6">
                          <svg viewBox="0 0 1024 1024" className="nav-icon18">
                            <path d="M298 426h428l-214 214z"></path>
                          </svg>
                        </div>
                      )}
                      {link5AccordionOpen === false && (
                        <div className="nav-container7">
                          <svg viewBox="0 0 1024 1024" className="nav-icon20">
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {link5AccordionOpen === true && (
                    <div className="nav-container8">
                      <div className="nav-menu-item5">
                        <div className="nav-content5">
                          <a
                            href={props.linkUrlPage1}
                            className="nav-page12 thq-body-large"
                          >
                            {props.page1 ?? (
                              <Fragment>
                                <span className="nav-text2">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_EDSfO4'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </a>
                        </div>
                      </div>
                      <div className="nav-menu-item6">
                        <div className="nav-content6">
                          <a
                            href={props.linkUrlPage2}
                            className="nav-page22 thq-body-large"
                          >
                            {props.page2 ?? (
                              <Fragment>
                                <span className="nav-text3">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_sckdO2'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </a>
                        </div>
                      </div>
                      <div className="nav-menu-item7">
                        <div className="nav-content7">
                          <a
                            href={props.linkUrlPage3}
                            className="nav-page32 thq-body-large"
                          >
                            {props.page3 ?? (
                              <Fragment>
                                <span className="nav-text4">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_bmDZsm'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </a>
                        </div>
                      </div>
                      <div className="nav-menu-item8">
                        <div className="nav-content8">
                          <a
                            href={props.linkUrlPage4}
                            className="nav-page42 thq-body-large"
                          >
                            {props.page4 ?? (
                              <Fragment>
                                <span className="nav-text1">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_7ow-M-'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
            <div className="nav-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="nav-icon24 thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="nav-icon26 thq-icon-x-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        {link5DropdownVisible === true && (
          <div
            onClick={() => setLink5DropdownVisible(false)}
            className="nav-container9"
          ></div>
        )}
      </header>
      <style jsx>
        {`
          .nav-container1 {
            width: 100%;
            display: flex;
            z-index: 10000;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .nav-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: space-between;
          }
          .nav-image1 {
            width: 124px;
            height: 112px;
          }
          .nav-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .nav-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-link5 {
            text-decoration: none;
          }
          .nav-link6 {
            text-decoration: none;
          }
          .nav-link7 {
            text-decoration: none;
          }
          .nav-link8 {
            text-decoration: none;
          }
          .nav-container2 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-link4-dropdown-trigger {
            gap: 4px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-icon-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-icon10 {
            width: 24px;
            height: 24px;
          }
          .nav-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-icon12 {
            width: 24px;
            height: 24px;
          }
          .nav-container5 {
            top: 30px;
            right: 0px;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            animation-name: fadeInDown;
            flex-direction: column;
            animation-delay: 0s;
            background-color: var(--dl-color-theme-neutral-light);
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .nav-menu-item1 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-page11 {
            white-space: nowrap;
          }
          .nav-menu-item2 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-page21 {
            white-space: nowrap;
          }
          .nav-menu-item3 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-page31 {
            white-space: nowrap;
          }
          .nav-menu-item4 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-page41 {
            white-space: nowrap;
          }
          .nav-burger-menu {
            display: none;
          }
          .nav-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .nav-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .nav-nav {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .nav-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .nav-logo {
            height: 2rem;
          }
          .nav-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .nav-links2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .nav-link9 {
            text-decoration: none;
          }
          .nav-link10 {
            text-decoration: none;
          }
          .nav-link13 {
            text-decoration: none;
          }
          .nav-link14 {
            text-decoration: none;
          }
          .nav-link4-accordion {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-trigger {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .nav-icon-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-container6 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-icon18 {
            width: 24px;
            height: 24px;
          }
          .nav-container7 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-icon20 {
            width: 24px;
            height: 24px;
          }
          .nav-container8 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .nav-menu-item5 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .nav-content5 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .nav-page12 {
            white-space: nowrap;
          }
          .nav-menu-item6 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .nav-content6 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .nav-page22 {
            white-space: nowrap;
          }
          .nav-menu-item7 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .nav-content7 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .nav-page32 {
            white-space: nowrap;
          }
          .nav-menu-item8 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .nav-content8 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .nav-page42 {
            white-space: nowrap;
          }
          .nav-icon-group {
            gap: var(--dl-layout-space-twounits);
            display: flex;
          }
          .nav-icon24 {
            height: var(--dl-layout-size-xsmall);
          }
          .nav-icon26 {
            height: var(--dl-layout-size-xsmall);
          }
          .nav-container9 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-text1 {
            display: inline-block;
          }
          .nav-text2 {
            display: inline-block;
          }
          .nav-text3 {
            display: inline-block;
          }
          .nav-text4 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .nav-logo {
              width: 67px;
              height: 52px;
            }
          }
          @media (max-width: 767px) {
            .nav-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .nav-image1 {
              width: 73px;
              height: 81px;
            }
            .nav-desktop-menu {
              display: none;
            }
            .nav-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .nav-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .nav-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Nav.defaultProps = {
  linkUrlPage3: 'https://www.teleporthq.io',
  linkUrlPage1: 'https://www.teleporthq.io',
  linkUrlPage2: 'https://www.teleporthq.io',
  page4: undefined,
  rootClassName: '',
  page1: undefined,
  page2: undefined,
  linkUrlPage4: 'https://www.teleporthq.io',
  page3: undefined,
}

Nav.propTypes = {
  linkUrlPage3: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  linkUrlPage2: PropTypes.string,
  page4: PropTypes.element,
  rootClassName: PropTypes.string,
  page1: PropTypes.element,
  page2: PropTypes.element,
  linkUrlPage4: PropTypes.string,
  page3: PropTypes.element,
}

export default Nav
