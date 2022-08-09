import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '@components/grid-item'
import { NextPage } from 'next'
import Layout from '@components/layouts/layout'
import Section from '@components/section'

const Works: NextPage = () => (
  <Layout title='Trabalhos'>
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
            Faça anotações e acesse aonde quiser!
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title='Linkedin Clone'
            id='linkedin-clone'
            thumbnail='/images/linkedinclone-thumb.jpg'
          >
            O clone da maior rede social profissional do mundo, acesse já o
            clone do Linkedin
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title='Netflix Clone'
            id='netflix-clone'
            thumbnail='/images/netflixclone-thumb.jpg'
          >
            A plataforma de streaming mais popular, acesse já o clone do Netflix
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
