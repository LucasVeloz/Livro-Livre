import type { AppProps } from 'next/app'
import './globals.css'
import { Wrapper } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}
