import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '@components/layouts/layout'
import P from '@components/paragraph'
import { Meta, Title, WorkImage } from '@components/work'
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps: GetStaticProps = async ({
  locale
}: GetStaticPropsContext) => {
  const projects = [
    'spotify_homepage_clone',
    'pretty_form',
    'purple_notes',
    'linkedin_clone',
    'netflix_clone',
    'magic_molds',
    'mold_pack',
    'simply_amigurumi'
  ]

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        ...projects,
        'works',
        'header',
        'footer'
      ]))
    }
  }
}

const PurpleNotes: NextPage = () => {
  const { t } = useTranslation()
  return (
    <Layout title={t('purple_notes:title')}>
      <Container>
        <Title>
          {t('purple_notes:title')} <Badge mt={[2.5, 0, 0]}>2021 - 2022</Badge>
        </Title>
        <P>{t('purple_notes:description')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://purplenotes.vercel.app' target='_blank'>
              https://purplenotes.vercel.app <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('works:repository_title')}</Meta>
            <Link
              href='https://github.com/josuenm/purplenotes-frontend'
              target='_blank'
            >
              https://github.com/josuenm/purplenotes-frontend
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('works:platform_title')}</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React, Javascript, Styled-@components, Context-API, Node.js,
              Express, MongoDB
            </span>
          </ListItem>
        </List>

        <WorkImage
          src='/images/works/purplenotes_01.png'
          alt={t('purple_notes:title')}
        />
      </Container>
    </Layout>
  )
}

export default PurpleNotes
