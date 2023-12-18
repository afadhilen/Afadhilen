import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Education() {
  const [bsc] = useTypewriter({
    words: ['B.Sc'],
    loop: false,
  })
  const [msc] = useTypewriter({
    words: ['M.Sc'],
    loop: false,
  })
  const [phd] = useTypewriter({
    words: ['Ph.D'],
    loop: false,
  })

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('experience')
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
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
      <div className="full-height-section grid justify-items-center" id="education">
        <div className="text-5xl grid place-items-center mb-6">Education</div>
        <div className="edu">
          <ul className="timeline">
            <li>
              <div className="timeline-start">
                <div className="stat-value">
                  {bsc}
                  <Cursor cursorColor="gold" />
                </div>
                2012-2016
              </div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                <div className="text-lg font-black">Bachelor Degree </div> President University
                <p className="text-left">
                  Thesis: Hospital Information (Hospitalization) <br />
                  application using Web scraping Method
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">
                <div className="text-lg font-black">Master Degree </div> President University
                <p className="text-left">
                  Thesis: Auto Email Recommendation & <br /> Prediction using Machine Learning
                </p>
              </div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end">
                2016-2018
                <div className="stat-value">
                  {msc}
                  <Cursor cursorColor="gold" />
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">
                <div className="stat-value">
                  {phd}
                  <Cursor cursorColor="gold" />
                </div>
                2019-2023
              </div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                <div className="text-lg font-black">Doctoral Degree </div> Universiti Kebangsaan Malaysia <br />
                <p className="text-left">
                  Thesis: Phishing Feature Embedding with Deep Learning <br /> for Phishing Email Classification
                </p>
              </div>
            </li>
          </ul>
        </div>
        <span className="arrow-down text-5xl" style={{ cursor: 'pointer' }} onClick={scrollToNextSection}>
          ↓
        </span>
      </div>
      <div className="divider"></div>
      <div className="full-height-section grid justify-items-center" id="experience">
        <div className="text-5xl mb-6 mt-6">Experience</div>
        <div className="w-3/4 mb-4">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2015</time>
                <div className="text-lg font-black">Kreydle, Malaysia</div>
                Software Developer Internship
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10 text-left">
                <time className="font-mono italic">2017</time>
                <div className="text-lg font-black">INASGOC, Jakarta</div>
                Human Resource Department on IT division
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10 text-left">
                <time className="font-mono italic">2021</time>
                <div className="text-lg font-black">Lecturer at Politeknik Kesehatan Jambi</div>
                Sistem Informasi Lab & Database, Graphic Design (Web Design)
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10 text-left">
                <time className="font-mono italic">2022</time>
                <div className="text-lg font-black">Lecturer at Universitas Multimedia Nusantara</div>
                Deep Learning, Data Modelling, Database Management System
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 text-left">
                <time className="font-mono italic">2022 - Present</time>
                <div className="text-lg font-black">Team Project</div>
                Front-End Developer
              </div>
              <hr />
            </li>
          </ul>
        </div>
        <span className="text-5xl mt-4" style={{ cursor: 'pointer' }} onClick={scrollToTop}>
          ↑
        </span>
      </div>
    </motion.div>
  )
}

export default Education
