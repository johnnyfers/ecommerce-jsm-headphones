import React from 'react';
import Head from 'next/head';

import Navbar from './navbar';
import Footer from './footer';

export default function Layout({children}) {
    return (
      <div className="layout">
        <Head>
          <title>JS Mastery Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }