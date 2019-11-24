import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import fonts from '../config/fonts';
import theme from '../config/theme';

export default class MyApp extends App {
  componentDidMount() {
    fonts();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
