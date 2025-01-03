import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    title: "Engineer CL2-1",
    company: "Samsung Electro Mechanics",
    period: "July 2023 – Present",
    description: "Led deployment operations, developed using Angular and React, improved application performance, implemented micro-frontend architecture, built robust backend services, and deployed full-stack applications in Kubernetes clusters."
  },
  {
    title: "Member Technical Staff - Frontend",
    company: "Gofrugal Technologies",
    period: "May 2021 – June 2023",
    description: "Worked on inventory management web application, implemented lazy loading, led UI revamp, contributed to design and architecture, and gained experience in React, JavaScript, Redux, and Redux Saga."
  }
]

export default function ExperienceTimeline() {
  const animation = useScrollAnimation()

  return (
    <motion.div {...animation} className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative pl-8 border-l-2 border-blue-700 border-opacity-50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="absolute w-4 h-4 bg-blue-700 bg-opacity-50 rounded-full -left-[9px] top-1"></div>
          <h3 className="text-xl font-bold text-blue-300">{exp.title}</h3>
          <p className="text-blue-200">{exp.company}</p>
          <p className="text-sm text-blue-100 opacity-70">{exp.period}</p>
          <p className="mt-2 text-gray-300">{exp.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

