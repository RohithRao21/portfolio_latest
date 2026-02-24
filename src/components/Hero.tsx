import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Linkedin } from 'lucide-react';
import { Scene3D } from './Scene3D';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Mesh overlay */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Name & Title */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="gradient-text-primary">Rohith Rao</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-light"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="gradient-text-secondary">Software Engineer | React & Angular</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Software Engineer with 3+ years of experience building scalable web applications using React and Angular. Excel at writing clean, efficient code and solving complex problems.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group"
              onClick={() => scrollToSection('projects')}
            >
              <span className="mr-2">View My Work</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                <a href="/Rohith_Rao_SDE(S1-ADV).pdf" download>
                  Resume
                </a>
              </Button>
              
              <Button 
              
                variant="outline" 
                size="lg"
                className="border-secondary/30 hover:border-secondary hover:shadow-glow-secondary transition-all duration-300"
              >
                <a target="_blank" href='https://linkedin.com/in/rohith-rao-a0398b217'>
                  <i className="mr-2 fa-brands fa-linkedin"></i>
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: -100,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </section>
  );
}