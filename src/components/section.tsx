import { motion, MotionProps } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

interface SectionProps {
  children: React.ReactNode | React.ReactNode[]
  delay?: number
}

const StyledDiv = chakra(motion.div, {
  shouldForwardsProp: (prop: string) => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay } as any}
  >
    {children}
  </StyledDiv>
)

export default Section
