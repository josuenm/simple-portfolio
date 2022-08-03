import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const BioContainer = styled(Box)`
  & + & {
    margin-top: 0.5rem;
  }
`

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1rem;
`

export { BioContainer, BioYear }
