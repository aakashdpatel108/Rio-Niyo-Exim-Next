import './style.css'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps?.messages}>
      <GlobalProvider>
        <Component {...pageProps} />
        <FloatingWhatsApp /> {/* ✅ Appears on all pages */}
      </GlobalProvider>
    </NextIntlProvider>
  )
}
