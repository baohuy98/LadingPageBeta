import '@/styles/globals.css'
import '@/styles/bsignSection.css'
import '@/styles/bmarketSection.css'
import '@/styles/infoSection.css'
import '@/styles/bsignalSection.css'
import '@/styles/footer.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
