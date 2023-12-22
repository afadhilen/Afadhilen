import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Profile() {
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
      <div className="card lg:card-side shadow-xl">
        <figure>
          <img src="https://pbs.twimg.com/profile_images/1731894869055143936/Vj6CCfH8_400x400.jpg" alt="me" />
        </figure>
        <div className="card-body w-full md:w-1/2">
          <h2 className="card-title text-3xl">About Me!</h2>
          <div className="max-w-[800px] overflow-auto">
            <p className="text-justify">
              I hold a Ph.D. in Computer Science with a specialization in Data Science, Machine Learning, and Deep
              Learning, as well as Artificial Intelligence. Throughout my academic journey, I extensively employed
              Python for my dissertation, leveraging it in conjunction with data visualization libraries. My enthusiasm
              lies in exploring deeper into areas such as big data, data analysis, and data science, how it works within
              the realms of business and industries. Moreover, I am eager to translate my expertise from academia into
              practical solutions in the non-academic area. Alongside these pursuits, I nurture a strong interest in
              Front-end Web Development.
            </p>
            <br />
            <h2 className="card-title">Skill Highlights:</h2>
            <div className="flex text-left md:text-justify">
              <div className="md:mx-2">
                <ul>
                  <p className="font-bold">Data Science:</p>
                  <li>• Data Processing & Analysis</li>
                  <li>• Data Visualization</li>
                </ul>
              </div>
              <div className="mx-2">
                <ul>
                  <p className="font-bold">Artificial Intelligence:</p>
                  <li>• Machine Learning</li>
                  <li>• Deep Learning</li>
                  <li>• Natural Language Processing</li>
                  <li>• Sentiment Analysis</li>
                </ul>
              </div>
              <div className="mx-2">
                <p className="font-bold">Programming Language</p>
                <ul>
                  <li>• Python</li>
                  <li>• React</li>
                  <li>• HTML, CSS, PHP</li>
                  <li>• Django</li>
                  <li>• MySQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Profile
