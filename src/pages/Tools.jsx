import { motion } from 'framer-motion';
import { FiTool, FiCode, FiDatabase, FiCloud } from 'react-icons/fi';

const Tools = () => {
  const toolCategories = [
    {
      name: 'Programming Languages',
      icon: FiCode,
      tools: [
        { name: 'JavaScript', icon: '/javascript.png' },
        { name: 'TypeScript', icon: '/typescript.png' },
        { name: 'Python', icon: '/python.png' },
      ],
    },
    {
      name: 'Frameworks & Libraries',
      icon: FiTool,
      tools: [
        { name: 'Node.js', icon: '/nodejs.png' },
        { name: 'NestJS', icon: '/nestjs.png' },
        { name: 'Express.js', icon: '/express.svg' },
        { name: 'Flask', icon: 'flask.svg' },
        { name: 'Django', icon: '/django.png' },
        { name: 'React', icon: '/react.png' },
        { name: 'Next.js', icon: '/nextjs.png' },
        { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
        { name: 'Framer Motion', icon: 'framer.svg' },
      ],
    },
    {
      name: 'Databases & ORM',
      icon: FiDatabase,
      tools: [
        { name: 'PostgreSQL', icon: '/postgresql.png' },
        { name: 'MongoDB', icon: '/mongodb.jpg' },
        { name: 'SQLite', icon: 'sqlite.svg' },
        { name: 'Prisma ORM', icon: 'prisma.svg' },
      ],
    },
    {
      name: 'DevOps, Cloud & Tools',
      icon: FiCloud,
      tools: [
        { name: 'Docker', icon: '/docker.svg' },
        { name: 'Docker Hub', icon: 'dockerhub.svg' },
        { name: 'Jenkins (CI/CD)', icon: '/jenkins.svg' },
        { name: 'AWS EC2', icon: 'awsec2.svg' },
        { name: 'IBM Cloud', icon: 'ibmcloud.svg' },
        { name: 'Nginx', icon: 'nginx.svg' },
        { name: 'Git', icon: 'git.svg' },
        { name: 'GitHub', icon: 'github.svg' },
        { name: 'Postman', icon: 'postman.svg' },
        { name: 'Swagger UI', icon: 'swagger.svg' },
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
              Tools & Technologies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies I use to build, deploy, and maintain scalable backend systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {toolCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-lg border border-border"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="text-primary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: toolIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-background rounded-md border border-border hover:border-primary/50 transition-all"
                    >
                      {tool.icon ? (
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-bold text-muted-foreground">
                          {tool.name.charAt(0)}
                        </div>
                      )}
                      <span className="text-sm font-medium">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
