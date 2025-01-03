import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'

const experiences = [
  {
    title: "Engineer CL2-1",
    company: "Samsung Electro Mechanics",
    period: "July 2023 – Present",
    points: [
      "Led deployment operations in an agile environment",
      "Developed using Angular and React with 30% performance improvement",
      "Implemented micro-frontend architecture using module federation",
      "Built robust backend services with Node.js and Spring Boot",
      "Deployed applications in Kubernetes clusters with CI/CD pipelines"
    ]
  },
  {
    title: "Member Technical Staff - Frontend",
    company: "Gofrugal Technologies",
    period: "May 2021 – June 2023",
    points: [
      "Worked on inventory management web application",
      "Implemented lazy loading for enhanced performance",
      "Led UI revamp of Stock Pick module",
      "Contributed to design and architecture improvements",
      "Gained expertise in React, Redux, and Redux Saga"
    ]
  }
]

const education = {
  degree: "Bachelor of Technology in Computer Science",
  institution: "SASTRA Deemed to be University",
  location: "Thanjavur, Tamil Nadu, India",
  period: "2017 - 2021"
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute w-4 h-4 bg-primary/20 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-muted-foreground text-sm">
                    • {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: experiences.length * 0.2 }}
            className="relative pl-8 border-l-2 border-border"
          >
            <div className="absolute w-4 h-4 bg-primary/20 rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-bold text-foreground">
              {education.degree}
            </h3>
            <p className="text-muted-foreground">{education.institution}</p>
            <p className="text-sm text-muted-foreground">
              {education.location}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {education.period}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (experiences.length + 1) * 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            View Resume
            <FileDown className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

