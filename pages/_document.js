import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='h-full bg-gradient-to-r from-indigo-400 to-indigo-200'>
      <Head />
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
