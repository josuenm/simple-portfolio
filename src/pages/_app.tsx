import Layout from '@components/layouts/main'
import theme from '@lib/theme'
import Fonts from '@lib/fonts'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default appWithTranslation(Website)
