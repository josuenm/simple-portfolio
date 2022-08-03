import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '@components/section'
import { NextPage } from 'next'

const page: NextPage = () => {
  return (
    <Container>
      <Box
        bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')}
        textAlign='center'
        borderRadius='lg'
        p={1.5}
        mb={6}
      >
        <Text as='span'>
          Olá, sou um desenvolvedor Full Stack de Jacareí, SP - Brasil
        </Text>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2'>Josué Mendonça</Heading>
          <Text as='p'>CactusOutlier (desenvolvedor, info-produtor)</Text>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          display='flex'
          justifyContent={{ base: 'center' }}
          alignItems='center'
        >
          <Image
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxW='100px'
            display='inline-block'
            borderRadius='full'
            src='/images/profile-picture.jpg'
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Trabalho
        </Heading>
        <Text as='p'>
          Josué é um desenvolvedor full stack que procura sempre evoluir.
          Atualmente esta dando um foco maior no aprendizado do back-end, mas
          sua grande paixão no começo foi querer desenvolver para mobile mas
          acabou adiando essa meta para focar em React na web e depois começar
          em React Native 😎.
        </Text>
      </Section>
    </Container>
  )
}

export default page
