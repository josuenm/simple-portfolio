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

const PrettyForm: NextPage = () => {
  const { t } = useTranslation()
  return (
    <Layout title={t('pretty_form:title')}>
      <Container>
        <Title>
          {t('pretty_form:title')} <Badge mt={[2.5, 0, 0]}>2022 - 2022</Badge>
        </Title>
        <P>{t('pretty_form:description')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://pretty-form.web.app' target='_blank'>
              https://pretty-form.web.app <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('works:repository_title')}</Meta>
            <Link href='https://github.com/josuenm/pretty-form' target='_blank'>
              https://github.com/josuenm/pretty-form
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('works:platform_title')}</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, SASS, Javascript</span>
          </ListItem>
        </List>

        <WorkImage
          src='/images/works/pretty-form_01.png'
          alt={t('pretty_form:title')}
        />
      </Container>
    </Layout>
  )
}

export default PrettyForm
