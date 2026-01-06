import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Export the projects array so other pages can reuse the data without importing the component
export const projects = [
    {
      id: 1,
      title: 'Grafana Monitoring App with Prometheus',
      description: 'A comprehensive system monitoring solution featuring Python Flask metrics exporter, Prometheus data collection, and Grafana visualization dashboards...',
      longDescription: 'This production-ready monitoring stack demonstrates DevOps observability best practices by combining multiple industry-standard tools into a cohesive monitoring solution...',
      tech: ['Grafana', 'Prometheus', 'Flask', 'Docker', 'Docker Compose', 'Python', 'psutil', 'prometheus_client', 'System Monitoring', 'Metrics', 'Observability'],
      category: 'devops',
      github: 'https://github.com/usmanfarooq317/grafana-monitoring-app.git',
      image: '/grafana.png',
      featured: true
    }
    ,{
      id: 2,
      title: 'Kafka Real-time Dashboard with Elasticsearch',
      description: 'A complete real-time messaging system with Kafka streaming, live web dashboard, Elasticsearch storage, and Kibana visualization for data analysis...',
      longDescription: 'This comprehensive real-time data streaming platform demonstrates advanced message broker architecture and data pipeline engineering. Built with Apache Kafka for high-throughput message...',
      tech: ['Apache Kafka', 'Elasticsearch', 'Kibana', 'Logstash', 'Flask', 'SocketIO', 'Docker', 'Docker Compose', 'Python', 'WebSocket', 'Zookeeper', 'REST API'],
      category: 'fullstack',
      github: 'https://github.com/usmanfarooq317/Kafka-producer-consumer-project.git',
      image: '/kafka.png',
      featured: true
    }
    ,{
      id: 3,
      title: 'System Monitoring Dashboard with Kibana',
      description: 'A comprehensive real-time system monitoring solution collecting machine statistics and displaying them in beautiful Kibana dashboards with matrix-style visualizations...',
      longDescription: 'This enterprise-grade monitoring platform provides complete visibility into system performance across multiple machines. Built with Python for efficient metrics collection, Elasticsearch for ...',
      tech: ['Python', 'Elasticsearch', 'Kibana', 'Docker', 'Docker Compose', 'psutil', 'System Monitoring', 'Time-series Data', 'Data Visualization', 'Metrics Collection'],
      category: 'devops',
      github: 'https://github.com/usmanfarooq317/Kibana-System-Monitor-App.git',
      image: '/kibana.png',
      featured: true
    }
    ,{
      id: 4,
      title: 'Jenkins Pipeline Python CI/CD App',
      description: 'A lightweight Flask application with integrated Jenkins CI/CD pipeline, API testing UI, and automated logging system...',
      longDescription: 'This single-file Python Flask project demonstrates DevOps expertise by combining frontend and backend on one port with full Jenkins pipeline integration...',
      tech: ['Python', 'Flask', 'Jenkins', 'Docker', 'AWS EC2', 'CI/CD', 'REST API', 'Logging'],
      category: 'devops',
      github: 'https://github.com/usmanfarooq317/api-testing-jenkins.git',
      image: '/jenkins.png',
      featured: true
    }
    ,{
      id: 5,
      title: 'Login App - Full-Stack Authentication System',
      description: 'A secure authentication application with user registration, login, and JWT-based protected routes...',
      longDescription: 'This full-stack login and registration application showcases secure authentication implementation using industry-standard practices...',
      tech: ['React', 'Vite', 'NestJS', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Docker', 'nginx', 'Axios'],
      category: 'fullstack',
      github: 'https://github.com/usmanfarooq317/docker-login-app.git',
      image: '/docker.png',
      featured: false
    }
    ,{
      id: 6,
      title: 'E-commerce Full-Stack Application',
      description: 'A comprehensive e-commerce platform built with modern technologies...',
      longDescription: 'This full-stack e-commerce application demonstrates my ability...',
      tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/usmanfarooq317/E-commerce-App.git',
      
      image: '/ecommerceapp.png',
      featured: true
    },
    {
      id: 7,
      title: 'Kidney Stone Prediction System',
      description: 'AI-powered medical prediction system...',
      longDescription: 'An innovative healthcare application that uses machine learning...',
      tech: ['Python', 'Django', 'SQLite', 'Machine Learning', 'Scikit-learn', 'Pandas'],
      category: 'ai',
      github: 'https://github.com/ahsanm7911/kidney-stone-prediction.git',
      
      image: '/kidneystone.jpg',
      featured: true
    },
    {
      id: 8,
      title: 'User Authentication System',
      description: 'Secure user login and registration system...',
      longDescription: 'A complete authentication system built with Node.js and Express...',
      tech: ['Node.js', 'Express', 'JavaScript', 'EJS', 'CSS', 'MongoDB'],
      category: 'backend',
      github: 'https://github.com/usmanfarooq317/User-Login.git',
      
      image: '/userauthentication.jpg',
      featured: false
    },
    {
      id: 9,
      title: 'Ecommerce REST APIs',
      description: 'Comprehensive RESTful API system...',
      longDescription: 'A robust backend API system built with NestJS and TypeScript...',
      tech: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Swagger', 'JWT'],
      category: 'backend',
      github: 'https://github.com/usmanfarooq317/Ecommerce-APIs.git',
      
      image: '/ecommerceapis.jpg',
      featured: false
    },
    {
      id: 10,
      title: 'Designer Trellis Backend',
      description: 'Scalable backend system...',
      longDescription: 'A sophisticated backend system built for a design collaboration platform...',
      tech: ['NestJS', 'Prisma', 'PostgreSQL', 'TypeScript', 'WebSocket', 'Redis'],
      category: 'backend',
      github: 'https://github.com/usmanfarooq317/Desinger-trellis-BE.git',
      
      image: '/designertrellis.png',
      featured: false
    },
    {
      id: 11,
      title: 'Fast Food Store Website',
      description: 'Responsive restaurant website...',
      longDescription: 'A complete restaurant website built as a learning project...',
      tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'JavaScript', 'MySQL'],
      category: 'frontend',
      github: 'https://github.com/usmanfarooq317/Fast-Food-Restaurant.git',
      
      image: '/fastfood.png',
      featured: false
    }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

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
                <div className="w-full aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <div className="w-full aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
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
