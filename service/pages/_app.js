import I18nProvider from 'next-translate/I18nProvider';
import { useRouter } from 'next/router'

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
  const router = useRouter();
  return (
    <I18nProvider lang={router.locale} namespaces={pageProps._ns}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default MyApp;
