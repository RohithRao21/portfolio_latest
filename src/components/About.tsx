import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const skills = [
  { name: 'Angular', level: 80, category: 'Frontend' },
  { name: 'React', level: 70, category: 'Frontend' },
  { name: 'JavaScript', level: 80, category: 'Language' },
  { name: 'TypeScript', level: 80, category: 'Language' },
  { name: 'Python', level: 70, category: 'Language' },
  { name: 'Tailwind CSS', level: 70, category: 'Frontend' },
  { name: 'Firebase', level: 70, category: 'Backend' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Git', level: 80, category: 'DevOps' },
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'German', level: 'A1' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Malayalam', level: 'Native' },
  { name: 'Tamil', level: 'Fluent' },
];

const values = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code'
  },
  {
    icon: Palette,
    title: 'Design Focus',
    description: 'Creating beautiful and intuitive user experiences'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Staying current with emerging technologies and trends'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Skilled in collaborating within Agile teams to deliver high-quality solutions.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Software Engineer with 3+ years of experience developing scalable web applications using Angular, React,
          TypeScript, JavaScript.Skilled in UI/UX design integration, performance optimization, and CI/CD
          deployments. Experienced in collaborating with Product Managers, QA, and cross-functional teams to deliver
          high-quality software in Agile environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio & Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="card-3d p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text-secondary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I began my professional journey at Alpha Ori Technologies during my final semester of college, 
                where I was selected as an intern through campus placements. Alongside managing semester examinations, 
                internal assessments, academic projects, and seminars, I simultaneously worked on real-world product assignments. 
                This phase played a key role in shaping my time-management skills and professional discipline early in my career.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">

                Following my internship, I was converted to a full-time Software Engineer, where I worked closely with product managers, 
                team leads, and managers across multiple time zones. Operating in a fast-paced, startup-like environment with tight sprint 
                cycles and continuous feature-rich releases trained me to perform effectively under pressure while maintaining quality and ownership.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond development responsibilities, I actively participated in campus hiring initiatives, 
                conducted placement drives across colleges, and mentored three interns—guiding them through onboarding, 
                technical training, and project delivery. A defining phase of my career was navigating the company’s acquisition, 
                where I successfully demonstrated my value and adaptability to remain part of the organization. I also contributed to 
                key migration and transformation projects, reinforcing my ability to handle critical systems and business-impacting changes.
              </p>
              {/* <p className="text-muted-foreground leading-relaxed">
                I'm passionate about writing clean, efficient code and have been honored by leadership for consistently 
                exceeding project goals and contributing to enterprise-wide product improvements. I excel at adapting 
                to new technologies and thrive in agile, team-driven environments.
              </p> */}
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-3d p-6 text-center hover:card-glow-accent transition-all duration-300">
                    <value.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="card-3d card-glow-primary p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text-primary">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {skill.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="card-3d card-glow-secondary p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors"
                  >
                    <div className="font-semibold mb-1">{language.name}</div>
                    <Badge variant="secondary" className="text-xs">
                      {language.level}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}