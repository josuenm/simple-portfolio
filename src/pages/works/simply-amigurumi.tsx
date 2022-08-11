import Layout from 'components/layouts/layout'
import P from 'components/paragraph'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from 'components/work'
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
        'simply_amigurumi',
        'header',
        'footer'
      ]))
    }
  }
}

const SimplyAmigurumi: NextPage = () => {
  const { t } = useTranslation()
  return (
    <Layout title={t('simply_amigurumi:title')}>
      <Container>
        <Title>
          {t('simply_amigurumi:title')}{' '}
          <Badge mt={[2.5, 0, 0]}>2022 - 2022</Badge>
        </Title>
        <P>{t('simply_amigurumi:description')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href='https://amigurumiultrasecreto.com.br/pt/'
              target='_blank'
            >
              https://amigurumiultrasecreto.com.br/pt/{' '}
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('works:repository_title')}</Meta>
            <Link href='https://github.com/josuenm/lp-croche' target='_blank'>
              https://github.com/josuenm/lp-croche
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
          src='/images/works/simply-amigurumi_01.png'
          alt={t('simply_amigurumi:title')}
        />
      </Container>
    </Layout>
  )
}

export default SimplyAmigurumi
