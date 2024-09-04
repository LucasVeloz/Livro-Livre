import type { AppProps } from 'next/app'

import './globals.css'
import { Wrapper } from '@/components'


// import { Inter } from "next/font/google";


// const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}
