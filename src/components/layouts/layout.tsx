import { motion } from 'framer-motion'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
  title?: string
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }: LayoutProps) => (
  <motion.div
    initial='hidden'
    animate='enter'
    exit='exit'
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    {title && (
      <Head>
        <title>{title} | Josué Mendonça</title>
      </Head>
    )}
    {children}
  </motion.div>
)

export default Layout
