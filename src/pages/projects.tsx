import { Container, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'

const Project: NextPage = () => {
  return (
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        Projetos
      </Heading>
    </Container>
  )
}

export default Project
