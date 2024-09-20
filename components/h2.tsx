import React from "react"

import { motion } from "framer-motion"

const H2 = ({
  children,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  transition = {
    ease: "easeIn",
    duration: 0.6,
  },
  viewport = { once: true },
}) => {
  return (
    <motion.h2
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
    >
      {children}
    </motion.h2>
  )
}

export default H2
