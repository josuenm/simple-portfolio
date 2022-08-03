import Section from '@components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioContainer, BioYear } from '@components/bio'
import { NextPage } from 'next'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const Home: NextPage = () => {
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

        <Flex
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
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
        </Flex>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Sobre mim
        </Heading>
        <Text as='p'>
          Josué é um desenvolvedor full stack que procura sempre evoluir.
          Atualmente esta dando um foco maior no aprendizado do back-end, mas
          sua grande paixão no começo foi querer desenvolver para mobile mas
          acabou adiando essa meta para focar em React na web e depois começar
          em React Native 😎.
        </Text>

        <Flex justify='center' paddingY={5}>
          <NextLink href='/projects'>
            <Button colorScheme='messenger' rightIcon={<ChevronRightIcon />}>
              Projetos
            </Button>
          </NextLink>
        </Flex>
      </Section>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Trabalho
        </Heading>
        <BioContainer>
          <BioYear>2021 até agora</BioYear>
          Trabalhando como Freelancer
        </BioContainer>
        <BioContainer>
          <BioYear>2022 até agora</BioYear>
          Produtor/vendedor de ebooks
        </BioContainer>
      </Section>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Gostos
        </Heading>
        <Text as='p'>Formula 1, músicas, jogos na nuvem e programar</Text>
      </Section>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Pela internet
        </Heading>
      </Section>
    </Container>
  )
}

export default Home
