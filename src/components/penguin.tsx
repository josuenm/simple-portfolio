import { Box, useColorModeValue } from '@chakra-ui/react'
import NextImage from 'next/image'
import styled from '@emotion/styled'

const Image = styled(NextImage)`
  cursor: pointer;
  transition: ease 0.2s transform;

  &:active {
    transform: rotate(20deg);
  }

  @media screen and (min-width: 991px) {
    &:hover {
      transform: rotate(20deg);
    }
  }
`

const Penguin = () => (
  <Box p='10'>
    <Image
      src={`/penguin-${useColorModeValue('dark', 'light')}.svg`}
      alt='Penguin'
      layout='responsive'
      width='100%'
      height={30}
    />
  </Box>
)

export default Penguin
