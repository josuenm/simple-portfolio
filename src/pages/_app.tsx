import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@components/layouts/Main'
import { AppProps } from 'next/app'

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
