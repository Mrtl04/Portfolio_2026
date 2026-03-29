import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Network, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Database, 
  Mail, 
  Phone, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  Stethoscope, 
  Monitor 
} from "lucide-react";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full"
    />
  </div>
);

export default function Home() {
  const skills = [
    { name: "Problem Solving", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Analytical Thinking", icon: <Terminal className="w-5 h-5" /> },
    { name: "Troubleshooting", icon: <Cpu className="w-5 h-5" /> },
    { name: "Network Performance", icon: <Network className="w-5 h-5" /> },
    { name: "Technical Proficiency", icon: <Code2 className="w-5 h-5" /> },
    { name: "Relational Database", icon: <Database className="w-5 h-5" /> },
    { name: "IT Support", icon: <Phone className="w-5 h-5" /> }
  ];

  const techStacks = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }
  ];

  const tools = [
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg" },
    { name: "Microsoft", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" },
    { name: "Excel", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftexcel.svg" },
    { name: "PowerPoint", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftpowerpoint.svg" },
    { name: "TeamViewer", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/teamviewer.svg" },
    { name: "AnyDesk", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anydesk.svg" }
  ];

  const projects = [
    {
      title: "Furbe",
      description: "Dog Mood Detector App. A mobile application designed to detect a dog's mood by analyzing its facial cues. It also includes functionality to track the dog's mood throughout the day.",
      tags: ["AI", "Mobile App", "Health Tracking"],
      image: "/project-images/furbe.png"
    },
    {
      title: "Twist & Bloom",
      description: "An online shop application for handmade products. It specializes in customizable chenille wire flower bouquets and keychains.",
      tags: ["E-commerce", "React", "Design"],
      image: "/project-images/twist-bloom.png"
    },
    {
      title: "PCOS Care App",
      description: "A mobile application developed to help users monitor and manage symptoms associated with Polycystic Ovary Syndrome (PCOS). Features AI-based recommendations and health-tracking tools.",
      tags: ["AI", "HealthTech", "Women's Health"],
      image: "/project-images/pcos-care.png"
    }
  ];

  const certifications = [
    "Professional Networking For Career Growth (2026)",
    "Getting Started With Cisco Packet Tracer (2026)",
    "Introduction To Cybersecurity (2026)",
    "Computer Hardware Basics (2026)",
    "Relational Database V8 (2026)",
    "Data Analytics Essentials (2025)",
    "Information Assurance & Security (2025)",
    "CCNA Introduction To Networks (2024)",
    "English For IT 1 (2024)"
  ];

  const experience = [
    {
      company: "Clark Outsourcing",
      role: "Junior Network Operations Center Intern Trainee",
      period: "Nov 2025 – Mar 2026",
      details: [
        "Monitored network performance and system alerts.",
        "Troubleshot hardware, software, and connectivity issues.",
        "Resolved support tickets through the ticketing system.",
        "Escalated complex incidents to senior engineers.",
        "Assisted in maintaining network stability and system uptime."
      ]
    },
    {
      company: "Twirl Project",
      role: "Booth Operator, Technical Support, And Driver",
      period: "Dec 2022 – Mar 2026",
      details: [
        "Part-time technical support for events.",
        "Responsible for preparing, testing, and troubleshooting IT and AV equipment.",
        "Managed setup and configuration of systems during events.",
        "Handled transportation and logistics of technical equipment."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="text-primary font-medium text-sm tracking-wide uppercase">Available for Opportunities</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            Mykel Robert <span className="text-gradient">Lusung</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10"
          >
            Aspiring Computer Scientist specializing in <span className="text-foreground font-semibold italic">Network Operations</span> and <span className="text-foreground font-semibold italic">System Administration</span>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 text-lg font-semibold h-14" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-semibold h-14" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">About <span className="text-primary">Me</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a dedicated Computer Science student from Holy Angel University, driven by a passion for continuous learning and professional growth. My objective is to enhance my skills and knowledge to become the best version of myself in the tech industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With a background in both technical support and network operations, I have developed a unique blend of hardware proficiency and system monitoring capabilities. I thrive in challenging environments where I can apply my problem-solving and analytical skills.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Pampanga, PH</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Education</h4>
                  <p className="text-muted-foreground">BS Computer Science</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Languages</h4>
                  <p className="text-muted-foreground">English, Filipino, Kapampangan</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Experience</h4>
                  <p className="text-muted-foreground">3+ Years Part-time Tech</p>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-background/50 border border-border flex flex-col items-center text-center group hover:border-primary/50 transition-colors"
                >
                  <div className="mb-4 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Experience</h2>
              </div>
              
              <div className="space-y-12 relative border-l-2 border-border pl-8 ml-4">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">{exp.period}</span>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, j) => (
                        <li key={j} className="text-muted-foreground flex items-start gap-2">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Education</h2>
                </div>
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-secondary/20 border border-border"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                        <p className="text-muted-foreground">Holy Angel University</p>
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary font-bold">2026 (Exp.)</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Award className="w-4 h-4" />
                      Consistent Dean's Lister
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-secondary/20 border border-border"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Senior High School - STEM</h3>
                        <p className="text-muted-foreground">Holy Angel University</p>
                      </div>
                      <Badge variant="outline">2022</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Award className="w-4 h-4" />
                      With Honors
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Seminars</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      1st
                    </div>
                    <p className="font-medium">1st Regional AI Conference Certification (2026)</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <p className="font-medium">Blockchain Conference attendee (2024)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/10">
        <div className="container">
          <SectionTitle subtitle="Showcasing innovative solutions in AI, Mobile, and E-commerce">Featured Projects</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="h-48 flex items-center justify-center bg-background/90 group-hover:scale-105 transition-transform duration-500">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full w-full">
                        <span className="text-primary text-3xl">{project.title.slice(0, 2)}</span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] uppercase font-bold tracking-wider">{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed italic">"{project.description}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack + Tools Section */}
      <section id="tech" className="py-24 bg-background/30">
        <div className="container">
          <SectionTitle subtitle="Core technologies I work with">Tech Stack</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {techStacks.map((tech) => (
              <div key={tech.name} className="group p-4 rounded-2xl bg-secondary/20 border border-border text-center transition-all hover:border-primary/50 hover:bg-primary/10">
                <img src={tech.icon} alt={tech.name} className="h-12 w-12 mx-auto mb-2 object-contain" />
                <span className="text-sm font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>

          <SectionTitle subtitle="Design, productivity and remote tools">Tools</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="group p-4 rounded-2xl bg-secondary/20 border border-border text-center transition-all hover:border-primary/50 hover:bg-primary/10">
                <div className="mx-auto mb-2 p-2 rounded-lg bg-background/70 group-hover:bg-primary/20">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="h-12 w-12 mx-auto object-contain"
                    onError={(e) => {
                      // Fallback image for PuTTY style icon (please drop /tech-icons/putty.png)
                      if (tool.name === "PuTTY") {
                        (e.target as HTMLImageElement).src = "/tech-icons/putty.png";
                      }
                    }}
                  />
                </div>
                <span className="text-sm font-semibold">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <SectionTitle subtitle="Professional credentials and technical expertise">Certifications</SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/20 border border-border group hover:bg-primary/5 hover:border-primary/30 transition-all"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm leading-tight">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Let's build something <br/><span className="text-black/40">extraordinary</span> together.</h2>
            <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
              I am currently looking for internship or junior positions in Network Operations, System Administration, or Full-stack Development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <a href="mailto:mrt.lusung@gmail.com" className="flex items-center justify-center gap-4 p-8 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all group">
                <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-sm uppercase font-bold tracking-widest opacity-60">Email Me</p>
                  <p className="text-xl font-bold">mrt.lusung@gmail.com</p>
                </div>
              </a>
              <a href="tel:09393482881" className="flex items-center justify-center gap-4 p-8 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all group">
                <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-sm uppercase font-bold tracking-widest opacity-60">Call Me</p>
                  <p className="text-xl font-bold">09393482881</p>
                </div>
              </a>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Button size="lg" variant="secondary" className="rounded-full px-10 h-16 text-xl font-bold" asChild>
                <a href="http://mykellusung.jobs180.com" target="_blank" rel="noopener noreferrer">
                  View Full Resume <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <p className="opacity-70 font-medium">Manibaug Paralaya, Porac Pampanga, Central Luzon (Region III) 2008</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container text-center text-muted-foreground font-medium">
          <p>© 2026 Mykel Robert Lusung. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
