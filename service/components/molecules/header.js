import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  const { t } = useTranslation();
  const title = t("common:title");
  return (
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://hoprnet.org/" />
      <meta name="theme-color" content="#ffffa0" />
      <meta
        name="description"
        content="The HOPR protocol ensures everyone has control of their privacy, data, and identity."
      />
      {/* <meta property="og:image" content="/assets/brand/meta.jpg" />
      <meta property="og:image:alt" ccontent="assets/brand/meta.jpg" /> */}
      <meta charset="utf-8" />
      <meta name="keywords" content="crypto, data privacy, network-level" />
      <meta name="author" content="HOPR" />
      <meta name="copyright" content=" HOPR" />
      <meta name="robots" content="index,nofollow" />
      <meta http-equiv="cache-control" content="no-cache" />
      <meta http-equiv="expires" content="43200" />
      <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
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
