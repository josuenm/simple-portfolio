import Layout from '@components/layouts/layout'
import Section from '@components/section'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '@components/grid-item'
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export const getStaticProps: GetStaticProps = async ({
  locale
}: GetStaticPropsContext) => {
  const projects = ['purple_notes', 'linkedin_clone', 'netflix_clone']

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'works',
        'header',
        'footer',
        ...projects
      ]))
    }
  }
}

const Works: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout title={t('works:title')}>
      <Container>
        <Heading as='h3' fontSize={20} mb={2}>
          {t('works:personal-projects_title')}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              title={t('purple_notes:title')}
              id='purple-notes'
              thumbnail='/images/purplenotes-thumb.jpg'
            >
              {t('purple_notes:short_description')}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              title={t('linkedin_clone:title')}
              id='linkedin-clone'
              thumbnail='/images/linkedinclone-thumb.jpg'
            >
              {t('linkedin_clone:short_description')}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              title={t('netflix_clone:title')}
              id='netflix-clone'
              thumbnail='/images/netflixclone-thumb.jpg'
            >
              {t('netflix_clone:short_description')}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
