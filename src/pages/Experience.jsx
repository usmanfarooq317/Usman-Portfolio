import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Developer Intern',
      company: 'AG Infotech',
      duration: 'June 2024 - August 2024',
      location: 'Islamabad, Pakistan (Remote)',
      description: [
        'Contributed to the development of robust RESTful APIs using NestJS and TypeScript.',
        'Managed and optimized database interactions with PostgreSQL and Prisma ORM.',
        'Implemented secure JWT authentication and role-based access control.',
        'Collaborated with senior developers on code reviews and system design.',
        'Participated in agile development methodologies, including daily stand-ups and sprint planning.',
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
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              My Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A detailed overview of my professional and academic journey
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
                  <FiBriefcase className="text-primary-foreground" size={24} />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <FiCalendar className="mr-2" /> {exp.duration}
                      <FiMapPin className="ml-4 mr-2" /> {exp.location}
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

