import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

export const Title = ({ children }: { children: string | React.ReactNode }) => {
  const { t } = useTranslation()

  return (
    <Box>
      <NextLink href='/works'>
        <Link>{t('works:title')}</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
      </span>
      <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export const WorkImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} borderRadius='lg' w='full' mb={4} />
)

export const Meta = ({ children }: { children: string }) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
)
