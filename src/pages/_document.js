import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/primeflex@latest/primeflex.css" />
        <title>Github Profile Helper</title>
      </Head>
      <body>
        <Main />
        <a href="https://github.com/rivanchandra" target="_blank"><img src="profile.png" style={{position:'fixed',bottom:'5px',right:'5px'}} /></a>
        <NextScript />
      </body>
    </Html>
  )
}
