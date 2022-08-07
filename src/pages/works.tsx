import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '@components/grid-item'
import { NextPage } from 'next'
import Layout from '@components/layouts/layout'
import Section from '@components/section'

const Works: NextPage = () => {
  return (
    <Layout title='Projects'>
      <Container>
        <Heading as='h3' fontSize={20} mb={2}>
          Projetos
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              title='Purple Notes'
              id='purple-notes'
              thumbnail='/images/purplenotes-thumb.jpg'
            >
              É uma aplicação full-stack para anotações. Você pode acessar de
              qualquer lugar porque fica tudo salvo na nuvem!
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              title='Linkedin Clone'
              id='linkedin-clone'
              thumbnail='/images/linkedinclone-thumb.jpg'
            >
              Essa aplicação é um clone do Linkedin, foi usado React e firebase
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              title='Netflix Clone'
              id='netflix-clone'
              thumbnail='/images/netflixclone-thumb.jpg'
            >
              Essa aplicação é um clone do Netflix, tudo foi feito apenas com o
              front-end e uma API do The Movie DB
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
