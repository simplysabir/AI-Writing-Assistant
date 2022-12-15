import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="DeepWrite AI" key="title"/>
        <meta property="og:description" content="Sabir Khan" key="description"/>
        <meta
          property="og:image"
          content="https://i.pinimg.com/564x/19/bb/98/19bb9825cd713c7d58ab6d107eec9884.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
