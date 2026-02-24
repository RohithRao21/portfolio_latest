import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Mechanical Engineering',
    school: 'MAR ATHANASIUS COLLEGE OF ENGINEERING',
    location: 'Kerala, India',
    period: '2018 - 2022',
    gpa: '8.0/10.0',
    description: 'Comprehensive engineering education with strong foundation in problem-solving, mathematics, and analytical thinking that translates well to software development.',
    achievements: [
      'CGPA of 8.0 demonstrating consistent academic excellence',
      'Developed strong analytical and problem-solving skills',
      'Gained experience in project management and teamwork'
    ],
    courses: ['Engineering Mathematics', 'Programming Fundamentals', 'Project Management', 'System Design']
  },
  {
    degree: 'Higher Secondary Education (HSE)',
    school: 'S.N.M HIGHER SECONDARY SCHOOL',
    location: 'Kerala, India',
    period: '2016 - 2018',
    gpa: '100%',
    description: 'Exceptional performance in higher secondary education with perfect scores, demonstrating dedication and academic excellence.',
    achievements: [
      'Perfect score of 100% in final examinations',
      'Strong foundation in mathematics and sciences',
      'Developed disciplined study habits and time management skills'
    ],
    courses: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
  }
];

const certifications = [
  {
    name: 'Python Programming',
    issuer: 'University of Michigan',
    date: '2022',
    credentialId: 'UMICH-PYTHON-2022'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My educational background in engineering and professional certifications that provided 
            a strong foundation for my transition into software development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="card-3d card-glow-primary p-8 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <GraduationCap className="w-full h-full" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-gradient-primary rounded-lg">
                            <GraduationCap className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 gradient-text-secondary">
                              {edu.degree}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{edu.school}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.period}</span>
                              </div>
                              <Badge variant="outline" className="bg-gradient-accent text-accent-foreground">
                                GPA: {edu.gpa}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {edu.description}
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Award className="w-4 h-4 text-accent" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Relevant Courses */}
                          <div>
                            <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course) => (
                                <Badge key={course} variant="outline" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text-secondary">Professional Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="card-3d hover:card-glow-secondary transition-all duration-300 p-6 text-center h-full group-hover:scale-105">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-secondary rounded-full flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h4 className="font-bold mb-2 text-sm leading-tight">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono opacity-50">
                    ID: {cert.credentialId}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}