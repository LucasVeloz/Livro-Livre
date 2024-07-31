import Head from 'next/head';
import React, { ReactNode } from 'react';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <Head>
      <title>Livro Livre</title>
    </Head>
    {children}
    </>
  )
}
