import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'
import { NextRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '@components/navbar'
import Penguin from '@components/penguin'

interface MainProps {
  children: React.ReactNode[] | React.ReactNode
  router: NextRouter
}

const Main = ({ children, router }: MainProps) => (
  <Box as='main' pb='8'>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>Josué Mendonça | Homepage</title>
    </Head>

    <Navbar path={router.asPath} />

    <Container maxW='container.md' pt='14' pb='1'>
      <Penguin />
      {children}

      <Box as='footer' textAlign='center' mt={10}>
        <Text
          fontWeight='light'
          fontSize={14}
          color={useColorModeValue('gray.500', 'whiteAlpha.400')}
        >
          2022 Josué Mendonça &copy; Todos direitos reservados
        </Text>
      </Box>
    </Container>
  </Box>
)

export default Main
