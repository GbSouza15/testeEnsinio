import GlobalStyle from "../components/globalStyles"
import { Inter } from 'next/font/google'
import {NextIntlProvider} from 'next-intl';

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <GlobalStyle />
        <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp
