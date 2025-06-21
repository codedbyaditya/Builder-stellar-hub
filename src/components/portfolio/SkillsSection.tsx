import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Palette,
  Database,
  Cloud,
  Users,
  Mic,
  Brain,
  Zap,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "C++", level: 90, category: "programming" },
      { name: "JavaScript", level: 85, category: "programming" },
      { name: "Python", level: 80, category: "programming" },
      { name: "HTML/CSS", level: 95, category: "programming" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Zap className="h-6 w-6" />,
    color: "from-green-500 to-blue-600",
    skills: [
      { name: "React.js", level: 90, category: "framework" },
      { name: "Node.js", level: 85, category: "framework" },
      { name: "Express.js", level: 80, category: "framework" },
      { name: "TailwindCSS", level: 95, category: "framework" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Database className="h-6 w-6" />,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "Git & GitHub", level: 90, category: "tools" },
      { name: "Figma", level: 75, category: "tools" },
      { name: "Postman", level: 80, category: "tools" },
      { name: "MongoDB", level: 70, category: "tools" },
    ],
  },
  {
    title: "AI/ML & Emerging Tech",
    icon: <Brain className="h-6 w-6" />,
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Natural Language Processing", level: 75, category: "ai" },
      { name: "Chatbot Development", level: 80, category: "ai" },
      { name: "Machine Learning Basics", level: 70, category: "ai" },
      { name: "AI Integration", level: 75, category: "ai" },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    color: "from-teal-500 to-green-600",
    skills: [
      { name: "Leadership", level: 95, category: "soft" },
      { name: "Team Management", level: 90, category: "soft" },
      { name: "Public Speaking", level: 85, category: "soft" },
      { name: "Communication", level: 90, category: "soft" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gradient mb-4"
            >
              Technical Skills
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-electric-yellow-400 mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto"
            >
              A comprehensive overview of my technical expertise and
              professional skills developed through hands-on experience and
              continuous learning.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.3 + categoryIndex * 0.2,
                }}
              >
                <Card className="h-full card-hover bg-white dark:bg-gray-800 overflow-hidden">
                  {/* Category Header */}
                  <div
                    className={`p-6 bg-gradient-to-r ${category.color} text-white`}
                  >
                    <div className="flex items-center space-x-3">
                      {category.icon}
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="p-6 space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative">
                          <Progress
                            value={isInView ? skill.level : 0}
                            className="h-2"
                          />
                          <motion.div
                            initial={{ width: 0 }}
                            animate={
                              isInView
                                ? { width: `${skill.level}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 1,
                              delay:
                                0.7 + categoryIndex * 0.2 + skillIndex * 0.1,
                            }}
                            className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
            id="projects"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Featured Projects
              </h3>
              <div className="h-1 w-20 bg-electric-yellow-400 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* GitaGPT Project */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <Card className="card-hover bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Brain className="h-8 w-8 text-purple-600" />
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        GitaGPT
                      </h4>
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                        AI/ML
                      </Badge>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      A multilingual AI chatbot inspired by Bhagavad Gītā for
                      answering life questions with original shlokas and
                      personalized advice. Featured in newspaper articles for
                      innovation.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Features:
                        </h5>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            Multilingual support for broader accessibility
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            Original Sanskrit shloka integration
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            Personalized life guidance system
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            Featured in newspaper for innovation
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {["NLP", "Python", "AI/ML", "Chatbot"].map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-purple-50 dark:bg-purple-900"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* eVISION Platform */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <Card className="card-hover bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Zap className="h-8 w-8 text-blue-600" />
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        eVISION – Hybrid Learning Platform
                      </h4>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        EdTech
                      </Badge>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      An affordable hybrid (online + offline) education platform
                      for Classes 5–10 & competitive exams (JEE, NEET, MHT-CET,
                      NDA), supporting English, Hindi, and Marathi languages.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Features:
                        </h5>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            UI designed in Figma with rural usability focus
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            Responsive frontend built in React.js
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            Firebase Auth & Google Drive API integration
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            Course-wise routing & material upload system
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "React.js",
                          "Node.js",
                          "Firebase",
                          "Figma",
                          "Google Drive API",
                        ].map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-blue-50 dark:bg-blue-900"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 pt-2">
                        <span>📅 Mar 2024 – Jun 2024</span>
                        <span>👥 Team Size: 4</span>
                        <span>🚀 Status: Live</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
