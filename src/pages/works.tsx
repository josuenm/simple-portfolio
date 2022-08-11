import Layout from 'src/components/layouts/layout'
import Section from 'src/components/section'
import listOfWorks from 'src/lib/works/listOfWorks'
import { Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from 'src/components/grid-item'
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

interface ProjectProps {
  id: string
  title: string
  short_description: string
  thumb_path: string
}

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
        'home',
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
      <Flex direction='column' gap={20}>
        {listOfWorks.map(project => (
          <Container key={project.title}>
            <Heading as='h3' fontSize={20} mb={2}>
              {t(project.title)}
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              {project.projects.map((project: ProjectProps) => (
                <Section key={project.id}>
                  <WorkGridItem
                    title={t(project.title)}
                    id={project.id}
                    thumbnail={project.thumb_path}
                  >
                    {t(project.short_description)}
                  </WorkGridItem>
                </Section>
              ))}
            </SimpleGrid>
          </Container>
        ))}
      </Flex>
    </Layout>
  )
}

export default Works
