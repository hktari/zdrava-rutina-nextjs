const transition = {
  ease: "easeIn",
  duration: 0.6,
}
const viewport = { once: true }

export const fadeInAnimationProps = {
  initial: { opacity: 0 },
  transition: { transition },
  whileInView: { opacity: 1 },
  viewport,
}
