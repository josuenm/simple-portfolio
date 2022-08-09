import NextLink from 'next/link'
import { NextPage } from 'next'
import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import Layout from '@components/layouts/layout'

const NotFound: NextPage = () => (
  <Layout title='Não encontrado'>
    <Container>
      <Heading>Não encontrado</Heading>
      <Text>A página que você esta procurando não foi encontrada</Text>
      <Divider mt={4} mb={4} />

      <Flex justify='center'>
        <NextLink href='/'>
          <Button colorScheme='teal'>Retornar para o início</Button>
        </NextLink>
      </Flex>
    </Container>
  </Layout>
)

export default NotFound
