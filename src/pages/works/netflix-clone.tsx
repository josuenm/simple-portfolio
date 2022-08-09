import Layout from '@components/layouts/layout'
import P from '@components/paragraph'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '@components/work'
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export const getStaticProps: GetStaticProps = async ({
  locale
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'works',
        'linkedin_clone',
        'header',
        'footer'
      ]))
    }
  }
}

const NetflixClone: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout title={t('linkedin_clone:title')}>
      <Container>
        <Title>
          {t('linkedin_clone:title')} <Badge>2021</Badge>
        </Title>
        <P>{t('linkedin_clone:description')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://josuenm.github.io/netflix'>
              https://josuenm.github.io/netflix <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('works:platform_title')}</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Javascript, SASS</span>
          </ListItem>
        </List>

        <WorkImage
          src='/images/works/netflix-clone_01.png'
          alt='Netflix Clone'
        />
      </Container>
    </Layout>
  )
}

export default NetflixClone
