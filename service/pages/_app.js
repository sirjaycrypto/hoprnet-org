import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import Loader from '../components/atoms/loader';
import I18nProvider from 'next-translate/I18nProvider';
import Router, { useRouter } from 'next/router';

import 'aos/dist/aos.css';
import '../styles/main.scss';

export async function loadNamespaces(namespaces, lang) {
  let res = {};
  for (let ns of namespaces) {
    res[ns] = await import(`../locales/${lang}/${ns}.json`).then(
      (m) => m.default
    );
  }

  return res;
}

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  Router.onRouteChangeStart = () => {
    setLoading(true);
  };

  Router.onRouteChangeComplete = () => {
    setLoading(false);
  };

  Router.onRouteChangeError = () => {
    setLoading(false);
  };

  const onFinishLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    window.addEventListener('load', onFinishLoading);

    // add fathom analytics
    const script = insertScript('https://panther.hoprnet.org/script.js');
    script.setAttribute('site', 'ZXTSKLDN');
    script.setAttribute('spa', 'auto');

    return () => window.removeEventListener('load', onFinishLoading);
  }, []);

  return (
    <I18nProvider lang={router.locale} namespaces={pageProps._ns}>
      <>
        {loading && <Loader />}
        <Component {...pageProps} setLoading={setLoading} />
      </>
    </I18nProvider>
  );
}

export default MyApp;
