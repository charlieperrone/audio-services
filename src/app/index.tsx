/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import Navigation from './components/Navigation';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as BootstrapProvider } from 'react-bootstrap';
import { ResetStyle } from 'styles/reset';

const theme = {
  mainRed: '#000000',
  mainBlue: '#0CC0DF',
  primaryFont: 'Fredoka One',
  secondaryFont: 'Varela Round',
};

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <BootstrapProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      >
        <ThemeProvider theme={theme}>
          <Helmet
            titleTemplate="Audio Services"
            defaultTitle="Audio Services"
            htmlAttributes={{ lang: i18n.language }}
          >
            <meta name="description" content="Audio Services business page" />
          </Helmet>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <GlobalStyle />
          <ResetStyle />
        </ThemeProvider>
      </BootstrapProvider>
    </BrowserRouter>
  );
}
