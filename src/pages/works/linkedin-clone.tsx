import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '@components/work'
import { NextPage } from 'next'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '@components/layouts/layout'
import P from '@components/paragraph'

const LinkedinClone: NextPage = () => (
  <Layout title='Linkedin Clone'>
    <Container>
      <Title>
        Linkedin Clone <Badge>2021</Badge>
      </Title>
      <P>Essa aplicação é um clone do Linkedin, foi usado React e firebase</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href=''>
            https://linkedin-clone-6deba.web.app <ExternalLinkIcon mx={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript, SASS, Firebase</span>
        </ListItem>
      </List>

      <WorkImage
        src='/images/works/linkedin-clone_01.png'
        alt='Linkedin Clone'
      />
    </Container>
  </Layout>
)

export default LinkedinClone
