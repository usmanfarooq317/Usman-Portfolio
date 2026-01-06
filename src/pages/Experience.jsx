import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: 'IT Support Engineer',
      company: 'ArcanaInfo',
      duration: 'September 2025 - Present',
      location: 'Islamabad, Pakistan',
      description: [
        'Proactively monitored and maintained IT systems to ensure high availability and SLA compliance.',
        'Performed root cause analysis by monitoring system logs to identify, troubleshoot, and resolve incidents.',
        'Managed client transition processes including training in staging environments and successful production migrations.',
        'Collaborated with internal teams to ensure system stability, reliability, and smooth client onboarding.',
      ],
    },
    {
      title: 'Backend Developer Intern',
      company: 'AG Infotech',
      duration: 'April 2024 - August 2024',
      location: 'Islamabad, Pakistan',
      description: [
        'Developed RESTful APIs using NestJS with a modular and scalable architecture.',
        'Designed and managed databases using PostgreSQL and Prisma ORM.',
        'Implemented secure authentication and authorization using JWT.',
        'Worked with JavaScript and TypeScript, applying dependency injection and backend best practices.',
        'Collaborated with senior developers on backend logic, API testing, and system improvements.',
      ],
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              My Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A professional overview of my industry experience and backend development journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-border"></div>
                )}

                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-border bg-primary flex items-center justify-center z-10">
                  <FiBriefcase className="text-primary-foreground" size={22} />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-2xl font-semibold mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center text-muted-foreground text-sm mb-4">
                      <span className="flex items-center mr-4">
                        <FiCalendar className="mr-2" /> {exp.duration}
                      </span>
                      <span className="flex items-center">
                        <FiMapPin className="mr-2" /> {exp.location}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
