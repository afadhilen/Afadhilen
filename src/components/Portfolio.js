import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function Portofolio() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
      <div className="text-4xl">Portofolio Page is under construction</div>
      <p>Please visit other page</p>
    </motion.div>
  )
}

export default Portofolio
