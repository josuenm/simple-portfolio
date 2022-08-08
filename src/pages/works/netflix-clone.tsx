import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '@components/work'
import { NextPage } from 'next'
import Layout from '@components/layouts/layout'
import P from '@components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const NetflixClone: NextPage = () => (
  <Layout>
    <Container>
      <Title>
        Netflix Clone <Badge>2021</Badge>
      </Title>
      <P>Essa aplicação é um clone do Netflix, foi usado React e firebase</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://josuenm.github.io/netflix'>
            https://josuenm.github.io/netflix <ExternalLinkIcon mx={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript, SASS</span>
        </ListItem>
      </List>

      <WorkImage src='/images/works/netflix-clone_01.png' alt='Netflix Clone' />
    </Container>
  </Layout>
)

export default NetflixClone
