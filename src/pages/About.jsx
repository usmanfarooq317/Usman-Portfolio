import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiBookOpen, FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 82 },
    { name: 'Node.js', level: 85 },
    { name: 'NestJS', level: 90 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Python', level: 78 },
    { name: 'Django', level: 75 }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Backend Developer Intern',
      company: 'AG Infotech',
      description: 'Contributed to backend development creating REST APIs with NestJS, managing databases using PostgreSQL and Prisma ORM, implementing JWT authentication.',
      type: 'work'
    },
    {
      year: '2021-2025',
      title: 'BS Computer Science',
      company: 'National University of Modern Languages',
      description: 'Studying core subjects including Mobile App Development, Computer Graphics, Web Programming, Database Systems, and Operating Systems.',
      type: 'education'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a dedicated and ambitious backend Developer with a strong passion for 
              development and continuous learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-card rounded-full border border-border flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary">UF</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">
                Passionate Developer & Problem Solver
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I thrive on solving complex problems and am committed to improving my skills 
                through hands-on experience and new challenges in the field of development. 
                My journey in technology started with curiosity and has evolved into a passion 
                for creating innovative web solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
  Having completed my BS in Computer Science at National University of Modern Languages, I've gained practical experience through my internship at AG Infotech, where I worked on backend development using modern technologies like NestJS, PostgreSQL, and Prisma ORM. Currently, I'm working as a Backend Developer at <a href="https://www.linkedin.com/company/ash-tech-virtual-software-house/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ASH Tech's</a> company, a Virtual Software House.
</p>


              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                  <FiDownload className="mr-2" />
                  Download Resume
                </button>
                <Link
  to="mailto:usmanfarooq317@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground rounded-md font-medium hover:bg-accent transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies I work with and my proficiency levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              My Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my education and professional experience
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-20 bg-border"></div>
                )}
                
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-4 border-border flex items-center justify-center ${
                  item.type === 'work' ? 'bg-primary' : 'bg-accent'
                }`}>
                  {item.type === 'work' ? (
                    <FiTarget className="text-primary-foreground" size={20} />
                  ) : (
                    <FiBookOpen className="text-accent-foreground" size={20} />
                  )}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>
                    <p className="text-accent font-medium mb-2">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Achievements & Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition and certifications that validate my skills and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <FiAward className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Internship Certificate</h3>
                  <p className="text-sm text-muted-foreground">AG Infotech</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Successfully completed backend development internship, contributing to REST API development 
                and database management projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <FiTarget className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">CTF Participation</h3>
                  <p className="text-sm text-muted-foreground">Military College of Signals</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Participated in Capture The Flag cybersecurity competition, demonstrating 
                problem-solving skills and technical knowledge.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

