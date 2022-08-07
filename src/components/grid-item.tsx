import { Box, Flex, LinkBox, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

interface WorkGridItem {
  id: string
  thumbnail: string
  title: string
  children: string
}

export const WorkGridItem = ({
  id,
  title,
  thumbnail,
  children
}: WorkGridItem) => {
  return (
    <Flex direction='column'>
      <NextLink href={`works/${id}`}>
        <LinkBox cursor='pointer'>
          <Box position='relative' w='100%' h={[160, 250, 130]}>
            <Image
              src={thumbnail}
              alt={title}
              className='grid-item-thumbnail'
              placeholder='blur'
              blurDataURL='L6PZfSi_.AyE_3t7t7R**0o#DgR4'
              style={{ borderRadius: '12px' }}
              layout='fill'
            />
          </Box>
          <Text mt={3} fontSize={20} textAlign='center'>
            {title}
          </Text>
          <Text fontSize={14} textAlign='center'>
            {children}
          </Text>
        </LinkBox>
      </NextLink>
    </Flex>
  )
}
