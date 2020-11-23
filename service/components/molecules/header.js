import Head from 'next/head';

export default function Header() {
  return (
    <Head>
      <title>HOPR</title>
    
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="robot-data.io" />
      <meta name="theme-color" content="#ffffa0" />
      <meta
        name="description"
        content=""
      />
      {/* <meta property="og:image" content="/assets/brand/meta.jpg" />
      <meta property="og:image:alt" ccontent="assets/brand/meta.jpg" /> */}
      <meta charset="utf-8" />
      <meta
        name="keywords"
        content=""
      />
      <meta name="author" content="" />
      <meta name="copyright" content="" />
      <meta name="robots" content="index,nofollow" />
      <meta http-equiv="cache-control" content="no-cache" />
      <meta http-equiv="expires" content="43200" />
    </Head>
  );
}
