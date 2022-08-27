import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'
import Navbar from '@components/navbar'
import Penguin from '@components/penguin'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { NextRouter } from 'next/router'

interface MainProps {
  children: React.ReactNode[] | React.ReactNode
  router: NextRouter
}

const Main = ({ children, router }: MainProps) => {
  const { t } = useTranslation()

  return (
    <Box as='main' pb='8'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Josué's homepage" />
        <meta name='author' content='Josué Mendonça' />
        <meta name='author' content='josuenm' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='twitter:title' content='Josué Mendonça' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:site_name' content='Josué Mendonça' />
        <meta name='og:title' content='Josué Mendonça' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://josuenm-portfolio.vercel.app/images/penguin.jpg'
        />

        <title>Josué Mendonça | {t('home:title')}</title>
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
            2022 Josué Mendonça &copy; {t('footer:rights')}
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Main
