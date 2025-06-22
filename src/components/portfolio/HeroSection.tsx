import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 dark:from-sky-800 dark:via-sky-900 dark:to-blue-900 animate-gradient-shift" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-electric-yellow-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-40 h-40 mx-auto mb-8 relative"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-electric-yellow-400 shadow-2xl animate-pulse-glow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F91dee6dff05e4edeb389ea8ac7a33180%2F3c4dff8a72304e0bab6339bcf78e61ce"
                alt="Aditya Deshmukh"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Hi, I'm{" "}
            <span className="text-electric-yellow-400">Aditya Deshmukh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
          >
            Web Developer | Leader | NCC Under Officer | IIIT-A Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate B.Tech student in Electronics & Communication Engineering
            from IIIT Allahabad, with a strong foundation in problem-solving,
            leadership, and development. From clearing national-level
            engineering entrance exams to leading technical teams.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-electric-yellow-400 text-deep-blue-900 hover:bg-electric-yellow-500 font-semibold px-8 py-4 text-lg group"
              onClick={() => scrollToSection("projects")}
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-electric-yellow-400 text-electric-yellow-400 hover:bg-electric-yellow-400 hover:text-deep-blue-900 font-semibold px-8 py-4 text-lg group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-deep-blue-900 font-semibold px-8 py-4 text-lg group"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-electric-yellow-400 transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
