import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import LeadershipSection from "@/components/portfolio/LeadershipSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import AchievementShowcase from "@/components/portfolio/AchievementShowcase";
import PhotoGallery from "@/components/portfolio/PhotoGallery";
import ContactSection from "@/components/portfolio/ContactSection";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";

const Portfolio = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* 🔍 SEO & Identity Section */}
          <section className="mt-10 px-4 md:px-8 text-sm text-muted max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
              Who is Aditya Deshmukh?
            </h2>
            <p className="mb-2">
              I am Aditya Deshmukh, a B.Tech graduate from IIIT Allahabad, with hands-on experience in modern web development, 
              AI-based tools, and full-stack projects using React, Node.js, Firebase, and more.
            </p>
            <p className="mb-2">
              I have qualified JEE twice, cleared MHT-CET, and also represented Maharashtra as an NCC Cadet. I participated in 
              a government-led cybersecurity awareness program and have successfully built impactful platforms like CampusConnect, 
              GitaGPT, and Bindisa Agritech.
            </p>
            <p>
              People search for me as: <strong>
              Aditya Deshmukh IIITA, Aditya Deshmukh NIT, Aditya Deshmukh NIT Nagpur, 
              Aditya Deshmukh NCC Cadet, Aditya Deshmukh Maharashtra, Aditya Deshmukh Adobe, 
              Aditya Deshmukh Amazon, Aditya Deshmukh Portfolio</strong> — and this is my official portfolio.
            </p>
          </section>

          {/* About Section */}
          <AboutSection />

          {/* Education Section */}
          <EducationSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Leadership Section */}
          <LeadershipSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Achievement Showcase */}
          <AchievementShowcase />

          {/* Photo Gallery */}
          <PhotoGallery />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-deep-blue-900 text-white py-12"
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-electric-yellow-400">
                    Aditya Deshmukh
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
                    B.Tech in Electronics & Communication Engineering from
                    IIIT-A. Passionate about technology, leadership, and making
                    a positive impact through innovation.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/aditya-deshmukh-linkdin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-electric-yellow-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/adi_deshmukh_07/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-electric-yellow-400 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="mailto:deshmukhaditya833@gmail.com"
                      className="text-blue-300 hover:text-electric-yellow-400 transition-colors"
                    >
                      Email
                    </a>
                  </div>
                </div>

                {/* Middle Column */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-electric-yellow-400">
                    Quick Links
                  </h4>
                  <div className="space-y-2">
                    {[
                      "About",
                      "Education",
                      "Experience",
                      "Leadership",
                      "Skills",
                      "Contact",
                    ].map((link) => (
                      <button
                        key={link}
                        onClick={() =>
                          document
                            .getElementById(link.toLowerCase())
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="block text-blue-200 hover:text-electric-yellow-400 transition-colors"
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-electric-yellow-400">
                    Get In Touch
                  </h4>
                  <div className="space-y-2 text-blue-200">
                    <p>📧 deshmukhaditya833@gmail.com</p>
                    <p>📱 +91 8830069369</p>
                    <p>🎓 IIIT-A, Allahabad</p>
                    <p>🌟 Available for opportunities</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-blue-800 mt-8 pt-8 text-center">
                <p className="text-blue-300">
                  © 2024 Aditya Deshmukh. Made with ❤️ using React & Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </motion.footer>
        </main>

        {/* Scroll to Top Button */}
        <ScrollToTop />

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;

