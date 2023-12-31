import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Carlos Hall" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Desarrollo,web,ecommerce,coderhouse,proyect,next,node,API"
        />
        <meta
          name="description"
          content="Bienvenido a TechCommerce, tu sitio de confianza 😁."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
