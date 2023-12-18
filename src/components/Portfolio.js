import { motion } from 'framer-motion'
import portoData from './PortoData'
function Portofolio() {
  return (
    <motion.div
      className="flex flex-div flex-col justify-center items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
      <div className="text-4xl">My Recent Works</div>
      <p className="text-xs">Here are a few projects/publications I've worked on recently</p>
      <div className="grid grid-cols-3 gap-6 mt-10">
        {portoData.map((porto, index) => (
          <div
            className="card card-compact w-96 shadow-xl hover:scale-105 transition-transform duration-300"
            key={index}>
            <figure>
              <img src={porto.img} style={{ width: '384px', height: '240px' }} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{porto.title}</h2>
              <p className="text-justify">{porto.desc}</p>
              <div className="card-actions justify-end">
                <a href={porto.url} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">Visit</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Portofolio
