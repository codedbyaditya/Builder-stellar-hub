import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Home,
  User,
  GraduationCap,
  Briefcase,
  Users,
  Code,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "education",
        "experience",
        "leadership",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(
          section === "hero" ? "" : section,
        );
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
    {
      id: "education",
      label: "Education",
      icon: <GraduationCap className="h-4 w-4" />,
    },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: <Users className="h-4 w-4" />,
    },
    { id: "skills", label: "Skills", icon: <Code className="h-4 w-4" /> },
    { id: "gallery", label: "Gallery", icon: <Users className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AD
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-electric-yellow-600 bg-electric-yellow-100 dark:bg-electric-yellow-900 dark:text-electric-yellow-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-deep-blue-600 dark:hover:text-electric-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-white dark:bg-gray-900"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gradient">
                      Aditya Deshmukh
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      Web Developer | Leader | IIIT-A Student
                    </p>
                  </div>

                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                        activeSection === item.id
                          ? "text-electric-yellow-600 bg-electric-yellow-100 dark:bg-electric-yellow-900 dark:text-electric-yellow-400"
                          : "text-gray-600 dark:text-gray-300 hover:text-deep-blue-600 dark:hover:text-electric-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.button>
                  ))}

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col space-y-3">
                      <Button
                        className="w-full bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 hover:from-deep-blue-700 hover:to-electric-yellow-500 text-white"
                        onClick={() => scrollToSection("contact")}
                      >
                        Get In Touch
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-electric-yellow-400 text-electric-yellow-600 hover:bg-electric-yellow-400 hover:text-white"
                      >
                        Download Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 origin-left"
        style={{
          scaleX: useScroll().scrollYProgress,
        }}
      />
    </motion.nav>
  );
};

export default Navigation;
