import Head from 'next/head';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client = new QueryClient();

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={client}>
    <Head>
      <title>Livro Livre</title>
      <link rel="icon" href="/assets/favicon.ico" />
    </Head>
    {children}
    <ToastContainer />
    </QueryClientProvider>
  )
}
