import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer L1',
    company: 'ZeroNorth (Formerly Alpha Ori Technologies)',
    location: 'Chennai, India',
    period: 'Oct 2022 - Present',
    type: 'Full-time',
    description: 'Continued the role after Alpha Ori\'s acquisition by ZeroNorth, contributing to the development and deployment of advanced data-driven tools for maritime operations.',
    achievements: [
      // 'Contributed to development of Voyagemate, Smart Voyager, and Smartship applications',
      // 'Helped enable better decision-making and performance tracking across maritime operations',
      // 'Honored by leadership for consistently exceeding project goals',
      // 'Contributed to enterprise-wide product improvements',
      'Built responsive UI components using Angular, TypeScript and RxJS for data-driven maritime applications',
      'Developed reusable, scalable UI components using SCSS and TypeScript interfaces, reducing UI defects by 30%',
      'Led the implementation of ZNAP, a Kubernetes-based application delivery platform on AWS EKS, enabling containerized deployments with CI/CD pipelines',
      'Backend integrations with Node.js and Express.js for internal tools and API, improving request handling efficiency',
      'Migrated monolithic client-server architecture into microservices, improving deployment speed and reliability by 30%',
      'Recognized as a Star Performer for exceeding project goals and driving product-level improvements',
      'Collaborated with Product Managers, QA, and DevOps teams in Agile sprints to deliver high-quality features',
      'Led and mentored junior developers, driving best practices in Angular, RxJS, and clean code principles'
    ],
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'Restful API', 'Docker', 'Kubernetes', 'AWS', 'Node.js', 'Express.js', 'RxJS', 'SCSS'],
    current: true
  },
  {
    title: 'Intern',
    company: 'Alpha Ori Technologies',
    location: 'Chennai, India',
    period: 'Apr 2022 - Oct 2022',
    type: 'Internship',
    description: 'Worked on software development assignments using JavaScript, Angular, and related technologies for maritime web applications.',
    achievements: [
      // 'Gained hands-on experience in building user-friendly interfaces',
      // 'Contributed to enhancing application functionality and usability',
      // 'Worked in real-world maritime software development environments',
      // 'Successfully transitioned to full-time role after internship completion',
      'Worked on JavaScript and Angular assignments, gaining practical exposure to frontend workflows',
      'Enhanced UI usability and contributed to feature improvements in maritime web applications',
      'Contributed to debugging, feature development, and API testing as part of Agile teams',
      'Successfully transitioned to full-time role after internship completion'
    ],
    technologies: ['JavaScript', 'Angular', 'HTML', 'CSS', 'SCSS', 'Git', 'Node.js', 'Express.js'],
    current: false
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey at ZeroNorth, showcasing growth from intern to Software Engineer 
            and contributing to advanced maritime technology solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 hidden lg:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background z-10 hidden lg:block" />
                
                <Card className={`card-3d p-8 lg:ml-20 ${exp.current ? 'card-glow-primary' : 'hover:card-glow-secondary'} transition-all duration-500`}>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1 gradient-text-secondary">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                            <span className="font-medium">{exp.company}</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2 mt-2 sm:mt-0">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant={exp.current ? "default" : "outline"} className={exp.current ? "bg-gradient-accent" : ""}>
                              {exp.type}
                            </Badge>
                            {exp.current && (
                              <Badge className="bg-gradient-primary text-primary-foreground">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-accent" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-sm text-muted-foreground flex items-start gap-3"
                              >
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                                <span className="leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-primary" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}