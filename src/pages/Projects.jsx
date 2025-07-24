import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Full-Stack Application',
      description: 'A comprehensive e-commerce platform built with modern technologies...',
      longDescription: 'This full-stack e-commerce application demonstrates my ability...',
      tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/usmanfarooq317/E-commerce-App.git',
      demo: '#',
      image: '/ecommerceapp.png',
      featured: true
    },
    {
      id: 2,
      title: 'Kidney Stone Prediction System',
      description: 'AI-powered medical prediction system...',
      longDescription: 'An innovative healthcare application that uses machine learning...',
      tech: ['Python', 'Django', 'SQLite', 'Machine Learning', 'Scikit-learn', 'Pandas'],
      category: 'ai',
      github: '#',
      demo: '#',
      image: '/kidneystone.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'User Authentication System',
      description: 'Secure user login and registration system...',
      longDescription: 'A complete authentication system built with Node.js and Express...',
      tech: ['Node.js', 'Express', 'JavaScript', 'EJS', 'CSS', 'MongoDB'],
      category: 'backend',
      github: 'https://github.com/usmanfarooq317/User-Login.git',
      demo: '#',
      image: '/userauthentication.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Ecommerce REST APIs',
      description: 'Comprehensive RESTful API system...',
      longDescription: 'A robust backend API system built with NestJS and TypeScript...',
      tech: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Swagger', 'JWT'],
      category: 'backend',
      github: 'https://github.com/usmanfarooq317/Ecommerce-APIs.git',
      demo: '#',
      image: '/ecommerceapis.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Designer Trellis Backend',
      description: 'Scalable backend system...',
      longDescription: 'A sophisticated backend system built for a design collaboration platform...',
      tech: ['NestJS', 'Prisma', 'PostgreSQL', 'TypeScript', 'WebSocket', 'Redis'],
      category: 'backend',
      github: '#',
      demo: '#',
      image: '/designertrellis.png',
      featured: false
    },
    {
      id: 6,
      title: 'Fast Food Store Website',
      description: 'Responsive restaurant website...',
      longDescription: 'A complete restaurant website built as a learning project...',
      tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'JavaScript', 'MySQL'],
      category: 'frontend',
      github: '#',
      demo: '#',
      image: '/fastfood.png',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Featured Projects */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all group"
              >
                <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link
  to={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-accent transition-colors"
>
  <FiGithub className="mr-2" size={16} /> Code
</Link>
                    <button className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                      <FiExternalLink className="mr-2" size={16} /> Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all group"
              >
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">+{project.tech.length - 3} more</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link
  to={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-3 py-2 border border-border bg-background text-foreground text-sm rounded-md hover:bg-accent transition-colors"
>
  <FiGithub className="mr-2" size={14} /> Code
</Link>
                    <button className="inline-flex items-center px-3 py-2 text-foreground text-sm rounded-md hover:bg-accent transition-colors">
                      <FiExternalLink className="mr-2" size={14} /> Demo
                    </button>
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

export default Projects;
