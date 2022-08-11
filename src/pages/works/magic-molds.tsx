import Layout from 'src/components/layouts/layout'
import P from 'src/components/paragraph'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from 'src/components/work'
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
        'magic_molds',
        'header',
        'footer'
      ]))
    }
  }
}

const MagicMolds: NextPage = () => {
  const { t } = useTranslation()
  return (
    <Layout title={t('magic_molds:title')}>
      <Container>
        <Title>
          {t('magic_molds:title')} <Badge mt={[2.5, 0, 0]}>2022 - 2022</Badge>
        </Title>
        <P>{t('magic_molds:description')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://moldesmagicos.com' target='_blank'>
              https://moldesmagicos.com <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('works:repository_title')}</Meta>
            <Link href='https://github.com/josuenm/lp-fabiano' target='_blank'>
              https://github.com/josuenm/lp-fabiano
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
          src='/images/works/magic-molds_01.png'
          alt={t('magic_molds:title')}
        />
      </Container>
    </Layout>
  )
}

export default MagicMolds
