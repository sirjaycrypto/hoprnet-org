import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export default function Header() {
  const { t } = useTranslation();

  return (
    <Head>
      <title>HOPR | Blockchain Data Protection and Privacy</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://hoprnet.org/" />
      <meta name="theme-color" content="#ffffa0" />
      <meta
        name="description"
        content="The HOPR protocol ensures everyone has control of their privacy and data."
      />
      <meta charSet="utf-8" />
      <meta name="keywords" content="crypto, data privacy, network-level" />
      <meta name="author" content="HOPR" />
      <meta name="copyright" content=" HOPR" />
      <meta name="robots" content="index,nofollow" />
      <meta httpEquiv="cache-control" content="no-cache" />
      <meta httpEquiv="expires" content="43200" />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
  );
}
