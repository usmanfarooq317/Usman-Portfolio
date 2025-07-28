import { Link } from "react-router-dom";

const SimpleHome = () => {
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
      title: "Kidney Stone Prediction",
      description:
        "AI-powered prediction system with appointment management functionality.",
      tech: ["Python", "Django", "SQLite", "AI/ML"],
      github: "https://github.com/ahsanm7911/kidney-stone-prediction",
      image: "/kidneystone.jpg",
    },
  ];

  const technologies = [
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "TypeScript", icon: "/typescript.png" },
    { name: "React", icon: "/react.png" },
    { name: "Next.js", icon: "/nextjs.png" },
    { name: "Node.js", icon: "/nodejs.png" },
    { name: "NestJS", icon: "/nestjs.png" },
    { name: "PostgreSQL", icon: "/postgresql.png" },
    { name: "MongoDB", icon: "/mongodb.jpg" },
    { name: "Python", icon: "/python.png" },
    { name: "Django", icon: "/django.png" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-primary font-medium text-sm sm:text-base">Hello, I'm</p>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Usman Farooq
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                <span>I'm a </span>
                <span className="text-primary font-semibold">
                  Backend Developer at <a href="https://www.linkedin.com/company/ash-tech-virtual-software-house/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline">ASH Tech's</a>
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Passionate about creating innovative web solutions and solving
              complex problems through modern technologies. Specialized in
              NestJS, PostgreSQL, and backend development with some experience in
              frontend technologies like Nextjs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors min-h-[44px] text-center"
              >
                View My Work
              </Link>
              <Link
                to="/Usman-Farooq-Resume.pdf"
                target="_blank"
                download
                className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground rounded-md font-medium hover:bg-accent transition-colors min-h-[44px] text-center"
              
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                2+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">Years Learning</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                6+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">Projects Built</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                10+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">Technologies</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                1
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">Internship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies I Work With */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Technologies I Work With
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              I'm proficient in a wide range of modern technologies and
              frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 sm:p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all min-h-[120px] sm:min-h-[140px]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-background rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 sm:h-48 w-full object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-border bg-background text-foreground text-sm rounded-md hover:bg-accent transition-colors min-h-[36px] flex-1 justify-center"
                    >
                      Code
                    </Link>
                    <button className="inline-flex items-center px-3 py-2 text-foreground text-sm rounded-md hover:bg-accent transition-colors min-h-[36px] flex-1 justify-center">
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors min-h-[44px]"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Let's Work Together
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors min-h-[44px]"
              >
                Get In Touch
              </Link>
              <Link
                to="mailto:usmanfarooq317@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground rounded-md font-medium hover:bg-accent transition-colors min-h-[44px]"
              >
                Send Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleHome;
