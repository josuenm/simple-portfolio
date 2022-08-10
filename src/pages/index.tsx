import Section from '@components/section'
import NextLink from 'next/link'
import Layout from '@components/layouts/layout'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioContainer, BioYear } from '@components/bio'
import { GetStaticPropsContext, NextPage, GetStaticProps } from 'next'
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  List,
  ListItem,
  Link,
  Icon
} from '@chakra-ui/react'

export const getStaticProps: GetStaticProps = async ({
  locale
}: GetStaticPropsContext) => {
  const projects = [
    'purple_notes',
    'linkedin_clone',
    'netflix_clone',
    'magic_molds',
    'mold_pack',
    'simply_amigurumi'
  ]

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'not_found',
        'home',
        'works',
        'header',
        'footer',
        ...projects
      ]))
    }
  }
}

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Container>
        <Box
          bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')}
          textAlign='center'
          borderRadius='lg'
          p={1.5}
          mb={6}
        >
          <Text as='span'>{t('home:presentation_msg')}</Text>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2'>Josué Mendonça</Heading>
            <Text as='p'>{t('home:area_msg')}</Text>
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
            {t('home:about-me_title')}
          </Heading>
          <Text as='p'>{t('home:about-me_msg')} 😎.</Text>

          <Flex justify='center' pt={4}>
            <NextLink href='/works'>
              <Button colorScheme='teal' rightIcon={<ChevronRightIcon />}>
                {t('home:work_button')}
              </Button>
            </NextLink>
          </Flex>
        </Section>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            {t('home:my-stack_title')}
          </Heading>
          <Text as='p'>
            HTML, CSS, SASS, Bootstrap, Javascript, Typescript, React.js,
            Next.js, ChakraUI, Node.js, Express, MongoDB
          </Text>
        </Section>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            {t('home:professionally_title')}
          </Heading>
          <BioContainer>
            <BioYear>2021 {t('home:yet_msg')}</BioYear>
            {t('home:first-work_msg')}
          </BioContainer>
        </Section>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            {t('home:ilove_title')} ❤
          </Heading>
          <Text as='p'>{t('home:ilove_msg')}</Text>
        </Section>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            {t('home:on-the-web_title')}
          </Heading>

          <List>
            <ListItem>
              <Link href='https://www.github.com/josuenm' target='_blank'>
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @josuenm
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://www.linkedin.com/in/josuenm/' target='_blank'>
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @josuenm
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='mailto:direct.josue@gmail.com' target='_blank'>
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<Icon as={IoMdMail} />}
                >
                  @direct.josue
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
