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
        { name: 'C++', icon: '' },
        { name: 'Java', icon: '' },
        { name: 'PHP', icon: '' },
      ],
    },
    {
      name: 'Frameworks & Libraries',
      icon: FiTool,
      tools: [
        
        
        { name: 'Node.js', icon: '/nodejs.png' },
        { name: 'NestJS', icon: '/nestjs.png' },
        { name: 'Next.js', icon: '/nextjs.png' },
        { name: 'Express.js', icon: '' },
        { name: 'Django', icon: '/django.png' },
        { name: 'React', icon: '/react.png' },
        { name: 'Tailwind CSS', icon: '' },
        { name: 'Bootstrap', icon: '' },
        { name: 'Framer Motion', icon: '' },
      ],
    },
    {
      name: 'Databases',
      icon: FiDatabase,
      tools: [
        { name: 'PostgreSQL', icon: '/postgresql.png' },
        { name: 'Prisma ORM', icon: '' },
        { name: 'MongoDB', icon: '/mongodb.jpg' },
        { name: 'MySQL', icon: '' },
        { name: 'SQLite', icon: '' },
        
      ],
    },
    {
      name: 'Tools & Platforms',
      icon: FiCloud,
      tools: [
        { name: 'Git', icon: '' },
        { name: 'GitHub', icon: '' },
        { name: 'Postman', icon: '' },
        { name: 'VS Code', icon: '' },
        { name: 'Netlify', icon: '' },
        { name: 'Swagger', icon: '' },
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
              My Tools & Technologies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive list of the programming languages, frameworks, databases, and tools I use
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
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
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.name}
                  </h2>
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
                        <img src={tool.icon} alt={tool.name} className="w-6 h-6 object-contain" />
                      ) : (
                        <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-bold text-muted-foreground">
                          {tool.name.charAt(0)}
                        </div>
                      )}
                      <span className="text-sm font-medium text-foreground">{tool.name}</span>
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

