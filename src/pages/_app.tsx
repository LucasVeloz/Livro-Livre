import type { AppProps } from 'next/app'
import { BookCopyIcon, LibraryBigIcon, TextSearchIcon, User2Icon } from "lucide-react";

import './globals.css'
import { Wrapper } from '@/components'
import Link from 'next/link';


// import { Inter } from "next/font/google";


// const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
      <div className="fixed bottom-0 left-0 w-full px-8 py-5 bg-custom-white rounded-t-lg flex items-center justify-between border border-custom-lightGray shadow-base">
        <Link href="/consulta" className="flex flex-col text-xs leading-none font-semibold text-primary items-center gap-[0.375rem]">
          <LibraryBigIcon size={18} />
          <p>Consulta</p>
        </Link>
        <Link href="/consulta" className="flex flex-col text-xs leading-none font-semibold text-tertiary items-center gap-[0.375rem]">
          <TextSearchIcon size={18} />
          <p>Busca</p>
        </Link>
        <Link href="/consulta" className="flex flex-col text-xs leading-none font-semibold text-tertiary items-center gap-[0.375rem]">
          <BookCopyIcon size={18} />
          <p>Empréstimos</p>
        </Link>
        <Link href="/consulta" className="flex flex-col text-xs leading-none font-semibold text-tertiary items-center gap-[0.375rem]">
          <User2Icon size={18} />
          <p>Perfil</p>
        </Link>
      </div>
    </Wrapper>
  )
}
