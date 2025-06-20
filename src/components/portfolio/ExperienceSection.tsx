import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calendar,
  ExternalLink,
  Users,
  Trophy,
  Rocket,
} from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  type: "work" | "project" | "mentorship" | "achievement";
  description: string;
  highlights: string[];
  image?: string;
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Web Development Team Lead",
    company: "Bindisa Agritech Pvt Ltd",
    duration: "May 2025 – Present",
    type: "work",
    description:
      "Leading a team in building a scalable, multilingual agriculture-tech platform with focus on project management, team coordination, and full-stack development.",
    highlights: [
      "Project management and team coordination",
      "Full-stack development",
      "Scalable platform architecture",
      "Multilingual implementation",
    ],
    skills: ["React.js", "Node.js", "MongoDB", "Team Leadership"],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-3.53.26-am-f3acf1?format=webp&width=800",
  },
  {
    id: 2,
    title: "GitaGPT Project",
    company: "Research & Development",
    duration: "2024",
    type: "project",
    description:
      "Built a multilingual AI chatbot inspired by Bhagavad Gītā for answering life questions with original shlokas and personalized advice.",
    highlights: [
      "Multilingual AI chatbot development",
      "Featured in newspaper articles",
      "Original shloka integration",
      "Personalized life guidance system",
    ],
    skills: ["NLP", "AI/ML", "Python", "Chatbot Development"],
  },
  {
    id: 3,
    title: "Adobe Mentee",
    company: "Adobe",
    duration: "Apr 2024 – May 2024",
    type: "mentorship",
    description:
      "Selected as part of a highly competitive student mentorship program focused on design, innovation, and communication skills.",
    highlights: [
      "Highly competitive selection",
      "Design and innovation training",
      "Industry professional mentorship",
      "Communication skills development",
    ],
    skills: ["Design Thinking", "Innovation", "Communication"],
  },
  {
    id: 4,
    title: "Amazon Mentorship Program",
    company: "Amazon",
    duration: "Jun 2024 – Jul 2024",
    type: "mentorship",
    description:
      "Trained in software development principles and cloud technologies by Amazon engineers.",
    highlights: [
      "Software development principles",
      "Cloud technologies training",
      "Direct mentorship from Amazon engineers",
      "Industry best practices",
    ],
    skills: ["AWS", "Cloud Computing", "Software Development"],
  },
  {
    id: 5,
    title: "NEET Achievement",
    company: "Academic Excellence",
    duration: "2020",
    type: "achievement",
    description: "Achieved outstanding results in NEET with 170/180 score.",
    highlights: [
      "170/180 NEET Score",
      "90 Percentile Achievement",
      "Academic Excellence Recognition",
    ],
    skills: ["Academic Excellence", "Problem Solving"],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-3.52.58-am-84b763?format=webp&width=800",
  },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-5 w-5" />;
      case "project":
        return <Rocket className="h-5 w-5" />;
      case "mentorship":
        return <Users className="h-5 w-5" />;
      case "achievement":
        return <Trophy className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "project":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "mentorship":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "achievement":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section
      id="experience"
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
              Experience & Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-electric-yellow-400 mx-auto rounded-full"
            />
          </div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full card-hover bg-white dark:bg-gray-800 overflow-hidden">
                  {/* Image */}
                  {item.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {getIcon(item.type)}
                        <Badge className={getTypeColor(item.type)}>
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.duration}
                      </div>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg font-semibold text-deep-blue-600 dark:text-electric-yellow-400 mb-4">
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-1">
                        {item.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="w-2 h-2 bg-electric-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, sIndex) => (
                        <Badge
                          key={sIndex}
                          variant="outline"
                          className="text-xs bg-blue-50 dark:bg-blue-900"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* NCC Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 text-white overflow-hidden relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 opacity-20"
              >
                <Trophy className="h-16 w-16" />
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 flex items-center">
                  <Trophy className="mr-3 h-8 w-8" />
                  NCC & Defence Training
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      🎖️ Under Officer (Jan 2022 – Jun 2024)
                    </h4>
                    <ul className="space-y-2 text-blue-100">
                      <li>• Participated in Republic Day Parade</li>
                      <li>• Completed 10-day NCC camp</li>
                      <li>• Rifle handling and firing training</li>
                      <li>• Physical endurance development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      🏆 Training & Achievements
                    </h4>
                    <ul className="space-y-2 text-blue-100">
                      <li>• Leadership & discipline training</li>
                      <li>• Represented college in NCC parades</li>
                      <li>• Physical fitness excellence</li>
                      <li>• Team coordination skills</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.18.49-am-f3cd07?format=webp&width=800"
                    alt="NCC Training Group"
                    className="w-full max-w-md rounded-lg object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
