import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiDjango,
} from "react-icons/si";
import { Button } from "../components/ui/button.jsx";

const Home = () => {
  const techStack = [
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiDjango, name: "Django", color: "#092E20" },
  ];

  const featuredProjects = [
    {
      title: "E-commerce Full-Stack App",
      description:
        "Complete e-commerce solution with user authentication, admin panel, and order management.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
      github: "https://github.com/usmanfarooq317/E-commerce-App.git",
      image: "/ecommerceapp.png",
    },
    {
      title: "Ecommerce APIs",
      description:
        "RESTful APIs with comprehensive CRUD operations and Swagger documentation.",
      tech: ["NestJS", "TypeScript", "Prisma"],
      github: "https://github.com/usmanfarooq317/Ecommerce-APIs.git",
      image: "/ecommerceapis.jpg",
    },
    {
      title: "Kidney Stone Prediction System",
      description:
        "AI-powered prediction system with appointment management functionality.",
      tech: ["Python", "Django", "SQLite", "AI/ML"],
      github: "#",
      image: "/kidneystone.jpg",
    },
  ];

  const stats = [
    { number: "2+", label: "Years Learning" },
    { number: "6+", label: "Projects Built" },
    { number: "10+", label: "Technologies" },
    { number: "1", label: "Internship" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p className="text-primary font-medium">
                  Hello, I'm
                </motion.p>
                <motion.h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Usman Farooq
                </motion.h1>
                <motion.div className="text-2xl lg:text-3xl text-muted-foreground">
                  I'm a{" "}
                  <span className="text-primary font-semibold">
                    Full Stack Developer
                  </span>
                </motion.div>
              </div>
              <motion.p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Passionate about creating innovative web solutions and solving
                complex problems through modern technologies. Specialized in
                NestJS, Next.js, and full-stack development.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/projects">
                    View My Work
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/Usman-Farooq-Resume.pdf" download>
                  <FiDownload className="mr-2" /> Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-card rounded-full border border-border flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary">UF</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm proficient in a wide range of modern technologies and
              frameworks
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <tech.icon
                  size={48}
                  style={{ color: tech.color }}
                  className="mb-3 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        to={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <FiGithub className="mr-2" size={16} /> Code
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <FiExternalLink className="mr-2" size={16} /> Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects <FiArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Let's Work Together */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  to="mailto:usmanfarooq317@gmail.com"
                  className="flex items-center"
                >
                  <FiMail className="mr-2" />
                  Send Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
