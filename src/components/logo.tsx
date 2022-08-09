import Link from 'next/link'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  cursor: pointer;

  &:active img {
    transform: rotate(20deg);
  }

  @media screen and (min-width: 991px) {
    &:hover img {
      transform: rotate(20deg);
    }
  }
`

const Logo = () => {
  const pathLogo = `/penguin-${useColorModeValue('dark', 'light')}.svg`

  const { t } = useTranslation()

  return (
    <Link href='/'>
      <LogoBox>
        <Image
          src={pathLogo}
          layout='fixed'
          width={20}
          height={20}
          alt={t('header:logo_alt')}
        />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c'
          fontWeight='bold'
          ml={3}
        >
          Josué Mendonça
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
