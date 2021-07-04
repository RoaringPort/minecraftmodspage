/* eslint-disable react/prop-types */
import React from 'react';

// App initializer for global styles
export default function App({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
