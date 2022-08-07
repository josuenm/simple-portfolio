import { Box, Container } from '@chakra-ui/react'
import { NextRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '@components/navbar'

interface MainProps {
  children: React.ReactNode[] | React.ReactNode
  router: NextRouter
}

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as='main' pb='8'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Josué Mendonça | Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt='32' pb='16'>
        {children}
      </Container>
    </Box>
  )
}

export default Main
