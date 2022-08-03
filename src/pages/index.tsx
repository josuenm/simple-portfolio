import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { NextPage } from 'next'

const page: NextPage = () => {
  return (
    <Container>
      <Box bg='beige' textAlign='center' borderRadius='lg' p={1.5} mb={6}>
        Olá, sou um desenvolvedor Full Stack de Jacareí, SP - Brasil
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2'>Josué Mendonça</Heading>
          <Text as='p'>Outlier (desenvolvedor, info-produtor)</Text>
        </Box>
      </Box>
    </Container>
  )
}

export default page
