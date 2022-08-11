import Layout from 'src/components/layouts/layout'
import NextLink from 'next/link'
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

export const getStaticProps: GetStaticProps = async ({
  locale
}: GetStaticPropsContext) => {
  const projects = ['purple_notes', 'linkedin_clone', 'netflix_clone']

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'not_found',
        'header',
        'footer',
        ...projects
      ]))
    }
  }
}

const NotFound: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout title={t('not_found:title')}>
      <Container>
        <Heading>{t('not_found:title')}</Heading>
        <Text>{t('not_found:msg')}</Text>
        <Divider mt={4} mb={4} />

        <Flex justify='center'>
          <NextLink href='/'>
            <Button colorScheme='teal'>{t('not_found:button_title')}</Button>
          </NextLink>
        </Flex>
      </Container>
    </Layout>
  )
}

export default NotFound
