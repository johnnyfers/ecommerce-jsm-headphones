import React from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}