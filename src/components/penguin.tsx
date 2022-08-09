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
  <Box m='20px auto' position='relative' w={[150, 200, 250]} h={[90, 150, 150]}>
    <Image
      src={`/penguin-${useColorModeValue('dark', 'light')}.svg`}
      alt='Penguin'
      layout='fill'
    />
  </Box>
)

export default Penguin
