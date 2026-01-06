import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiBookOpen, FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'NestJS', level: 90 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Python', level: 78 },
    { name: 'Django', level: 75 },
    { name: 'Docker', level: 80 },
    { name: 'Jenkins', level: 75 },
  ];

  const timeline = [
    {
      year: '2025 – Present',
      title: 'IT Support Engineer',
      company: 'ArcanaInfo',
      description:
        'Monitoring and maintaining IT systems to ensure reliability and SLA compliance, performing root cause analysis, and managing client transitions from staging to production.',
      type: 'work',
    },
    {
      year: '2024',
      title: 'Backend Developer Intern',
      company: 'AG Infotech',
      description:
        'Worked on backend development using NestJS, PostgreSQL, and Prisma ORM. Implemented REST APIs, JWT-based authentication, and collaborated with senior developers on production-ready systems.',
      type: 'work',
    },
    {
      year: '2021 – 2025',
      title: 'BS in Computer Science',
      company: 'National University of Modern Languages',
      description:
        'Studied core subjects including Web Programming, Operating Systems, Database Systems, Computer Networks, and Advanced Object-Oriented Programming.',
      type: 'education',
    },
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Backend-focused Computer Science graduate with hands-on experience in API development,
              system reliability, and DevOps practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
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

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Backend Developer & System-Oriented Engineer</h2>

              <p className="text-muted-foreground leading-relaxed">
                I am a Computer Science graduate with a strong interest in backend development,
                system design, and deployment automation. I enjoy solving real-world problems
                by building reliable, scalable, and secure backend services.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                During my internship at AG Infotech, I worked extensively with NestJS,
                PostgreSQL, Prisma ORM, and JWT authentication to build RESTful APIs.
                Currently, I am working as an IT Support Engineer at ArcanaInfo, where I focus on
                system monitoring, troubleshooting, and ensuring operational reliability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                  <FiDownload className="mr-2" />
                  Download Resume
                </button>

                <Link
                  to="mailto:usmanfarooq317@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background rounded-md font-medium hover:bg-accent transition-colors"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with in backend development and DevOps workflows
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
              >
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Education and professional experience shaping my backend engineering career
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex mb-12"
              >
                <div
                  className={`w-12 h-12 rounded-full border-4 border-border flex items-center justify-center ${
                    item.type === 'work' ? 'bg-primary' : 'bg-accent'
                  }`}
                >
                  {item.type === 'work' ? (
                    <FiTarget className="text-primary-foreground" />
                  ) : (
                    <FiBookOpen className="text-accent-foreground" />
                  )}
                </div>

                <div className="ml-8 flex-1 bg-card p-6 rounded-lg border border-border">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-sm text-primary">{item.year}</span>
                  </div>
                  <p className="text-accent font-medium mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Achievements & Certifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg border border-border">
              <FiAward className="text-primary mb-3" size={28} />
              <h3 className="font-semibold">Backend Internship Certificate</h3>
              <p className="text-muted-foreground">AG Infotech</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <FiTarget className="text-accent mb-3" size={28} />
              <h3 className="font-semibold">CTF Participation</h3>
              <p className="text-muted-foreground">Military College of Signals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
