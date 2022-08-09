import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

interface LinkItemProps {
  href: string
  path: string
  children: React.ReactNode[] | React.ReactNode
}

interface NavbarProps {
  path: string
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        borderRadius={5}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props: NavbarProps) => {
  const { path } = props

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        flexWrap='wrap'
        alignItems='center'
        justifyContent='space-between'
        gap={6}
      >
        <Flex alignItems='center'>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          flex={1}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/works' path={path}>
            Trabalhos
          </LinkItem>
          <Link
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            href='https://github.com/josuenm'
            target='_blank'
          >
            Github
          </Link>
        </Stack>

        <Flex align='center'>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-flex', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                borderWidth={2}
                borderColor={useColorModeValue('#ddd', '#454545')}
                arial-label='Opções'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>Sobre mim</MenuItem>
                </NextLink>
                <NextLink href='/projects' passHref>
                  <MenuItem as={Link}>Projetos</MenuItem>
                </NextLink>
                <Link
                  color={useColorModeValue('gray.900', 'whiteAlpha.900')}
                  href='https://github.com/josuenm'
                  target='_blank'
                >
                  <MenuItem>Github</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
