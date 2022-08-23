import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@components/layouts/main'
import Fonts from '@lib/fonts'
import theme from '@lib/theme'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'

const Website = ({ Component, pageProps, router }: AppProps) => {
  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default appWithTranslation(Website)
