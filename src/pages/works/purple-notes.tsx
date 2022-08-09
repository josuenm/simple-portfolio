import Layout from '@components/layouts/layout'
import P from '@components/paragraph'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '@components/work'
import { NextPage } from 'next'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const PurpleNotes: NextPage = () => (
  <Layout title='Purple Notes'>
    <Container>
      <Title>
        Purple Notes <Badge>2021 - 2022</Badge>
      </Title>
      <P>
        É uma aplicação full-stack para anotações. Você pode acessar de qualquer
        lugar porque fica tudo salvo na nuvem!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href=''>
            https://purplenotes.vercel.app <ExternalLinkIcon mx={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web</span>
        </ListItem>
      </List>

      <WorkImage src='/images/works/purplenotes_01.png' alt='Purple Notes' />
    </Container>
  </Layout>
)

export default PurpleNotes
