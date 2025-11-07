'use client'
import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MyCustomContactUsComp = (props) => {
  const translate = useTranslations()

  // === States ===
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  // === Handle form submission ===
  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)

    if (!email || !message) {
      setStatus({ type: 'error', text: 'Please provide email and message.' })
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ type: 'success', text: 'Message sent — thanks!' })
        setName(''); setEmail(''); setMessage('')
      } else {
        setStatus({ type: 'error', text: data?.error || 'Failed to send message' })
      }
    } catch (err) {
      console.error(err)
      setStatus({ type: 'error', text: 'Network error — try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form className="contact-us-form" onSubmit={handleSubmit}>
        {/* === Name === */}
        <div className="contact-us-input1">
          <label
            htmlFor="contact-form-name"
            className="thq-body-small contact-us-text3"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_oFMJQG') || 'Name',
              }}
            ></span>
          </label>
          <input
            type="text"
            id="contact-form-name"
            placeholder="Name"
            className="contact-us-text-input1 thq-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* === Email === */}
        <div className="contact-us-input2">
          <label
            htmlFor="contact-form-email"
            className="thq-body-small contact-us-text4"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_IYfRJb') || 'Email',
              }}
            ></span>
          </label>
          <input
            type="email"
            id="contact-form-email"
            required
            placeholder="Email"
            className="contact-us-text-input2 thq-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* === Message === */}
        <div className="contact-us-input3">
          <label
            htmlFor="contact-form-message"
            className="thq-body-small contact-us-text5"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_T9R41w') || 'Message',
              }}
            ></span>
          </label>
          <textarea
            id="contact-form-message"
            rows="3"
            placeholder="Enter your message"
            className="contact-us-textarea thq-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* === Submit button === */}
        <button type="submit" className="thq-button-filled" disabled={loading}>
          <span className="thq-body-small contact-us-action1">
            {loading ? 'Sending...' : (
              props.action ?? (
                <Fragment>
                  <span className="contact-us-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Palvmu') || 'Send Message',
                      }}
                    ></span>
                  </span>
                </Fragment>
              )
            )}
          </span>
        </button>

        {/* === Status message === */}
        {status && (
          <p
            style={{
              color: status.type === 'error' ? 'red' : 'green',
              marginTop: '8px',
            }}
          >
            {status.text}
          </p>
        )}
      </form>

      {/* === Styles === */}
      <style jsx>{`
        .contact-us-form {
          gap: var(--dl-layout-space-oneandhalfunits);
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          width: 100%;
          max-width: 600px;
        }
        .contact-us-input1,
        .contact-us-input2,
        .contact-us-input3 {
          gap: 8px;
          display: flex;
          align-self: stretch;
          align-items: flex-start;
          flex-direction: column;
        }
        .contact-us-text-input1,
        .contact-us-text-input2,
        .contact-us-textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 16px;
          font-family: Inter, sans-serif;
        }
        .thq-button-filled {
          background-color: #fd744f;
          color: #fff;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.2s;
          border: none;
        }
        .thq-button-filled:hover {
          background-color: #e33203;
        }
        .contact-us-text6 {
          display: inline-block;
        }
        @media (max-width: 414px) {
          .contact-us-form {
            width: 100%;
          }
          .contact-us-text3,
          .contact-us-text4,
          .contact-us-text5,
          .contact-us-action1 {
            font-size: 15px;
            font-family: Inter;
          }
        }
      `}</style>
    </>
  )
}

MyCustomContactUsComp.defaultProps = {
  action: undefined,
}

MyCustomContactUsComp.propTypes = {
  action: PropTypes.element,
}

export default MyCustomContactUsComp
