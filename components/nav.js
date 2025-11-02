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
          <Link href="/">
            <a className="nav-link10">
              <img
                alt="RioNiyo EXIM Logo"
                src="/rioniyoexim.svg"
                className="nav-image1"
              />
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="nav-desktop-menu">
            <nav className="nav-links1">
              <Link href="/">
                <a className="nav-link12 thq-body-small thq-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('link1_dFMFNM'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/about-us">
                <a className="nav-link13 thq-body-small thq-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('link2_tHtuHa'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/certificates">
                <a className="nav-link14 thq-body-small thq-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('link3_Q0-Pyo'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/contact-us">
                <a className="nav-link15 thq-body-small thq-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('link3_d0wioP'),
                    }}
                  ></span>
                </a>
              </Link>
              <div
                data-thq="thq-dropdown"
                className="nav-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-dropdown-toggle10"
                >
                  <span className="nav-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_HM1Gwc'),
                      }}
                    ></span>
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="nav-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="nav-icon10">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="nav-dropdown-list1">
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown10 list-item"
                  >
                    <Link href="/fruits">
                      <a data-thq="thq-dropdown-toggle">
                        <div className="nav-dropdown-toggle11">
                          <span className="nav-text11">
                            {props.text1 ?? (
                              <Fragment>
                                <span className="nav-text30">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_abaIlC'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown11 list-item"
                  >
                    <Link href="/vegetables">
                      <a data-thq="thq-dropdown-toggle">
                        <div className="nav-dropdown-toggle12">
                          <span className="nav-text12">
                            {props.text2 ?? (
                              <Fragment>
                                <span className="nav-text31">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_IT_G50'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown12 list-item"
                  >
                    <Link href="/spices">
                      <a data-thq="thq-dropdown-toggle">
                        <div className="nav-dropdown-toggle13">
                          <span className="nav-text13">
                            {props.text3 ?? (
                              <Fragment>
                                <span className="nav-text32">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_dAOo9g'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown13 list-item"
                  >
                    <Link href="/grains-and-cereal">
                      <a data-thq="thq-dropdown-toggle">
                        <div className="nav-dropdown-toggle14">
                          <span className="nav-text14">
                            {props.text31 ?? (
                              <Fragment>
                                <span className="nav-text33">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_vWBLso'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown14 list-item"
                  >
                    <Link href="/pulses">
                      <a data-thq="thq-dropdown-toggle">
                        <div className="nav-dropdown-toggle15">
                          <span className="nav-text15">
                            {props.text311 ?? (
                              <Fragment>
                                <span className="nav-text34">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_-dFJVC'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown15 list-item"
                  >
                    <Link href="/dry-fruits">
                      <a data-thq="thq-dropdown-toggle">
                        <div className="nav-dropdown-toggle16">
                          <span className="nav-text16">
                            {props.text3111 ?? (
                              <Fragment>
                                <span className="nav-text35">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: translate.raw('text_WAP2XN'),
                                    }}
                                  ></span>
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="nav-container2">
                {link5DropdownVisible === true && (
                  <div className="nav-container3 thq-box-shadow">
                    <div className="nav-menu-item10">
                      <div className="nav-content10">
                        <a
                          href="https://www.teleporthq.io"
                          className="nav-fruits thq-body-large"
                        >
                          {props.page1}
                        </a>
                      </div>
                    </div>
                    <div className="nav-menu-item11">
                      <div className="nav-content11">
                        <a
                          href="https://www.teleporthq.io"
                          className="nav-page21 thq-body-large"
                        >
                          {props.vegetables ?? (
                            <Fragment>
                              <span className="nav-text26">
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
                    <div className="nav-menu-item12">
                      <div className="nav-content12">
                        <a
                          href="https://www.teleporthq.io"
                          className="nav-page31 thq-body-large"
                        >
                          {props.page3 ?? (
                            <Fragment>
                              <span className="nav-text27">
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
                    <div className="nav-menu-item13">
                      <div className="nav-content13">
                        <a
                          href="https://www.teleporthq.io"
                          className="nav-page41 thq-body-large"
                        >
                          {props.page4 ?? (
                            <Fragment>
                              <span className="nav-text24">
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
                    <div className="nav-menu-item14">
                      <div className="nav-content14">
                        <a
                          href="https://www.teleporthq.io"
                          className="nav-page5 thq-body-large"
                        >
                          {props.page41 ?? (
                            <Fragment>
                              <span className="nav-text28">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_xacYGA'),
                                  }}
                                ></span>
                              </span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="nav-menu-item15">
                      <div className="nav-content15">
                        <a
                          href="https://www.teleporthq.io"
                          className="nav-page6 thq-body-large"
                        >
                          {props.page411 ?? (
                            <Fragment>
                              <span className="nav-text29">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_h6wdLO'),
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
            <svg viewBox="0 0 1024 1024" className="nav-icon12">
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
                  <svg viewBox="0 0 1024 1024" className="nav-icon14">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="nav-links2">
                <Link href="/">
                  <a className="nav-link23 thq-body-small thq-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('link1_hbuQ9x'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/about-us">
                  <a className="nav-link25 thq-body-small thq-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('link2_dJg7gl'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/certificates">
                  <a className="nav-link26 thq-body-small thq-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('link3_DFODdZ'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/contact-us">
                  <a className="nav-link27 thq-body-small thq-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('link3_jiTdIq'),
                      }}
                    ></span>
                  </a>
                </Link>
                <div
                  data-thq="thq-dropdown"
                  className="nav-thq-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-dropdown-toggle17"
                  >
                    <span className="nav-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Sd63cd'),
                        }}
                      ></span>
                    </span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="nav-dropdown-arrow2"
                    >
                      <svg viewBox="0 0 1024 1024" className="nav-icon16">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="nav-dropdown-list2"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="nav-dropdown16 list-item"
                    >
                      <Link href="/fruits">
                        <a data-thq="thq-dropdown-toggle">
                          <div className="nav-dropdown-toggle18">
                            <span className="nav-text18">
                              {props.text11 ?? (
                                <Fragment>
                                  <span className="nav-text36">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: translate.raw('text_ln7gg7'),
                                      }}
                                    ></span>
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="nav-dropdown17 list-item"
                    >
                      <Link href="/vegetables">
                        <a data-thq="thq-dropdown-toggle">
                          <div className="nav-dropdown-toggle19">
                            <span className="nav-text19">
                              {props.text21 ?? (
                                <Fragment>
                                  <span className="nav-text37">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: translate.raw('text_caAIqG'),
                                      }}
                                    ></span>
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="nav-dropdown18 list-item"
                    >
                      <Link href="/spices">
                        <a data-thq="thq-dropdown-toggle">
                          <div className="nav-dropdown-toggle20">
                            <span className="nav-text20">
                              {props.text32 ?? (
                                <Fragment>
                                  <span className="nav-text38">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: translate.raw('text_dGt6b4'),
                                      }}
                                    ></span>
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="nav-dropdown19 list-item"
                    >
                      <Link href="/grains-and-cereal">
                        <a data-thq="thq-dropdown-toggle">
                          <div className="nav-dropdown-toggle21">
                            <span className="nav-text21">
                              {props.text312 ?? (
                                <Fragment>
                                  <span className="nav-text39">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: translate.raw('text_BMlZEP'),
                                      }}
                                    ></span>
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="nav-dropdown20 list-item"
                    >
                      <Link href="/pulses">
                        <a data-thq="thq-dropdown-toggle">
                          <div className="nav-dropdown-toggle22">
                            <span className="nav-text22">
                              {props.text3112 ?? (
                                <Fragment>
                                  <span className="nav-text40">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: translate.raw('text_laJiqW'),
                                      }}
                                    ></span>
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="nav-dropdown21 list-item"
                    >
                      <Link href="/dry-fruits">
                        <a data-thq="thq-dropdown-toggle">
                          <div className="nav-dropdown-toggle23">
                            <span className="nav-text23">
                              {props.text31111 ?? (
                                <Fragment>
                                  <span className="nav-text41">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: translate.raw('text_HUdeYh'),
                                      }}
                                    ></span>
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-link4-accordion">
                  {link5AccordionOpen === true && (
                    <div className="nav-container4">
                      <div className="nav-menu-item16">
                        <div className="nav-content16">
                          <a
                            href="https://www.teleporthq.io"
                            className="nav-page1 thq-body-large"
                          >
                            {props.fruits ?? (
                              <Fragment>
                                <span className="nav-text25">
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
                      <div className="nav-menu-item17">
                        <div className="nav-content17">
                          <a
                            href="https://www.teleporthq.io"
                            className="nav-page22 thq-body-large"
                          >
                            {props.vegetables ?? (
                              <Fragment>
                                <span className="nav-text26">
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
                      <div className="nav-menu-item18">
                        <div className="nav-content18">
                          <a
                            href="https://www.teleporthq.io"
                            className="nav-page32 thq-body-large"
                          >
                            {props.page3 ?? (
                              <Fragment>
                                <span className="nav-text27">
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
                      <div className="nav-menu-item19">
                        <div className="nav-content19">
                          <a
                            href="https://www.teleporthq.io"
                            className="nav-page42 thq-body-large"
                          >
                            {props.page4 ?? (
                              <Fragment>
                                <span className="nav-text24">
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
                className="nav-icon20 thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="nav-icon22 thq-icon-x-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        {link5DropdownVisible === true && (
          <div
            onClick={() => setLink5DropdownVisible(false)}
            className="nav-container5"
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
          }
          .nav-link10 {
            display: contents;
          }
          .nav-image1 {
            width: 124px;
            height: 112px;
            text-decoration: none;
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
          .nav-link12 {
            text-decoration: none;
          }
          .nav-link13 {
            text-decoration: none;
          }
          .nav-link14 {
            text-decoration: none;
          }
          .nav-link15 {
            text-decoration: none;
          }
          .nav-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle10 {
            fill: #595959;
            color: #1a1a1a;
            width: 100%;
            display: inline-flex;
            align-items: center;
          }
          .nav-text10 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-right: 4px;
            vertical-align: middle;
          }
          .nav-dropdown-arrow1 {
            transition: 0.3s;
          }
          .nav-icon10 {
            fill: #000000;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .nav-dropdown-list1 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .nav-dropdown10 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle11 {
            fill: #595959;
            color: #1a1a1a;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle11:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text11 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown11 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle12 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle12:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text12 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown12 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle13 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle13:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text13 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown13 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle14 {
            fill: #595959;
            color: #1a1a1a;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle14:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text14 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown14 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle15 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle15:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text15 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown15 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle16 {
            fill: #595959;
            color: #1a1a1a;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle16:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text16 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-container2 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-container3 {
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
          .nav-menu-item10 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content10 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-fruits {
            white-space: nowrap;
          }
          .nav-menu-item11 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-page21 {
            white-space: nowrap;
          }
          .nav-menu-item12 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content12 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-page31 {
            white-space: nowrap;
          }
          .nav-menu-item13 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-page41 {
            white-space: nowrap;
          }
          .nav-menu-item14 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content14 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-page5 {
            white-space: nowrap;
          }
          .nav-menu-item15 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-content15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-page6 {
            white-space: nowrap;
          }
          .nav-burger-menu {
            display: none;
          }
          .nav-icon12 {
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
          .nav-icon14 {
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
          .nav-link23 {
            text-decoration: none;
          }
          .nav-link25 {
            text-decoration: none;
          }
          .nav-link26 {
            text-decoration: none;
          }
          .nav-link27 {
            text-decoration: none;
          }
          .nav-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle17 {
            fill: #595959;
            color: #1a1a1a;
            width: 100%;
            display: inline-flex;
            align-items: center;
          }
          .nav-text17 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            margin-right: 4px;
            vertical-align: middle;
          }
          .nav-dropdown-arrow2 {
            transition: 0.3s;
          }
          .nav-icon16 {
            fill: #000000;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .nav-dropdown-list2 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .nav-dropdown16 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle18 {
            fill: #595959;
            color: #1a1a1a;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle18:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text18 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown17 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle19 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle19:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text19 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown18 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle20 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle20:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text20 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown19 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle21 {
            fill: #595959;
            color: #1a1a1a;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle21:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text21 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown20 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle22 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle22:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text22 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown21 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .nav-dropdown-toggle23 {
            fill: #595959;
            color: #1a1a1a;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
            background-color: #ffffff;
          }
          .nav-dropdown-toggle23:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text23 {
            color: #1a1a1a;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-link4-accordion {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .nav-menu-item16 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .nav-content16 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .nav-page1 {
            white-space: nowrap;
          }
          .nav-menu-item17 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .nav-content17 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .nav-page22 {
            white-space: nowrap;
          }
          .nav-menu-item18 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .nav-content18 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .nav-page32 {
            white-space: nowrap;
          }
          .nav-menu-item19 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .nav-content19 {
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
          .nav-icon20 {
            height: var(--dl-layout-size-xsmall);
          }
          .nav-icon22 {
            height: var(--dl-layout-size-xsmall);
          }
          .nav-container5 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-text24 {
            display: inline-block;
          }
          .nav-text25 {
            display: inline-block;
          }
          .nav-text26 {
            display: inline-block;
          }
          .nav-text27 {
            display: inline-block;
          }
          .nav-text28 {
            display: inline-block;
          }
          .nav-text29 {
            display: inline-block;
          }
          .nav-text30 {
            display: inline-block;
          }
          .nav-text31 {
            display: inline-block;
          }
          .nav-text32 {
            display: inline-block;
          }
          .nav-text33 {
            display: inline-block;
          }
          .nav-text34 {
            display: inline-block;
          }
          .nav-text35 {
            display: inline-block;
          }
          .nav-text36 {
            display: inline-block;
          }
          .nav-text37 {
            display: inline-block;
          }
          .nav-text38 {
            display: inline-block;
          }
          .nav-text39 {
            display: inline-block;
          }
          .nav-text40 {
            display: inline-block;
          }
          .nav-text41 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .nav-navbar-interactive {
              justify-content: space-between;
            }
            .nav-icon12 {
              display: flex;
            }
            .nav-logo {
              width: 67px;
              height: 52px;
            }
          }
          @media (max-width: 1200px) {
            .nav-text10 {
              font-family: Open Sans;
            }
            .nav-text17 {
              font-family: Open Sans;
            }
          }
          @media (max-width: 991px) {
            .nav-navbar-interactive {
              justify-content: space-between;
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
            .nav-dropdown-toggle18 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle19 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle20 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle21 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle22 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle23 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
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
          @media (max-width: 414px) {
            .nav-dropdown-list1 {
              display: none;
            }
            .nav-dropdown-list2 {
              display: none;
            }
            .nav-dropdown-toggle18 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle19 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle20 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle21 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle22 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .nav-dropdown-toggle23 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Nav.defaultProps = {
  page4: undefined,
  rootClassName: '',
  fruits: undefined,
  vegetables: undefined,
  page3: undefined,
  page1: 'https://www.teleporthq.io',
  page41: undefined,
  page411: undefined,
  text1: undefined,
  text2: undefined,
  text3: undefined,
  text31: undefined,
  text311: undefined,
  text3111: undefined,
  text11: undefined,
  text21: undefined,
  text32: undefined,
  text312: undefined,
  text3112: undefined,
  text31111: undefined,
}

Nav.propTypes = {
  page4: PropTypes.element,
  rootClassName: PropTypes.string,
  fruits: PropTypes.element,
  vegetables: PropTypes.element,
  page3: PropTypes.element,
  page1: PropTypes.string,
  page41: PropTypes.element,
  page411: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
  text31: PropTypes.element,
  text311: PropTypes.element,
  text3111: PropTypes.element,
  text11: PropTypes.element,
  text21: PropTypes.element,
  text32: PropTypes.element,
  text312: PropTypes.element,
  text3112: PropTypes.element,
  text31111: PropTypes.element,
}

export default Nav
