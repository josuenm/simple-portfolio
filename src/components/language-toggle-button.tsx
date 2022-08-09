import NextLink from 'next/link'
import { Button, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const LanguageToggleButton = () => {
  const router = useRouter()

  function handleLocale() {
    if (router.locale === 'en') {
      return 'pt-BR'
    }
    return 'en'
  }

  return (
    <motion.div
      style={{ display: 'inline-block' }}
      key={router.locale}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <NextLink href={router.pathname} locale={handleLocale()}>
        <Button
          colorScheme={useColorModeValue('purple', 'orange')}
          color={useColorModeValue('whiteAlpha.900', 'gray.900')}
          fontWeight='medium'
          fontSize={[12, 14, 16]}
          p={[2, 3.5, 3.5]}
        >
          {router.locale === 'pt-BR' && 'PT'}
          {router.locale === 'en' && 'EN'}
        </Button>
      </NextLink>
    </motion.div>
  )
}

export default LanguageToggleButton
