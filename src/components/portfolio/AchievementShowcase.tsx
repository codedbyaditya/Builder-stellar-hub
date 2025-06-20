import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Target } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  image?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "JEE Mains Qualified",
    description:
      "Cleared JEE Mains examination twice, demonstrating consistent academic excellence",
    category: "Academic",
    date: "2021-2022",
    icon: <Trophy className="h-6 w-6" />,
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 2,
    title: "MHT-CET Qualified",
    description: "Successfully qualified Maharashtra Common Entrance Test",
    category: "Academic",
    date: "2021",
    icon: <Star className="h-6 w-6" />,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 3,
    title: "Adobe Mentorship",
    description:
      "Selected for highly competitive Adobe student mentorship program",
    category: "Professional",
    date: "Apr-May 2024",
    icon: <Award className="h-6 w-6" />,
    color: "from-red-500 to-pink-600",
  },
  {
    id: 4,
    title: "Amazon Mentorship",
    description:
      "Trained by Amazon engineers in software development and cloud technologies",
    category: "Professional",
    date: "Jun-Jul 2024",
    icon: <Target className="h-6 w-6" />,
    color: "from-orange-500 to-yellow-600",
  },
  {
    id: 5,
    title: "JEE Achievement",
    description:
      "Successfully qualified JEE examination with excellent score, demonstrating academic excellence in engineering entrance",
    category: "Academic",
    date: "2020",
    icon: <Trophy className="h-6 w-6" />,
    color: "from-purple-500 to-blue-600",
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.28.44-am-a597f1?format=webp&width=800",
  },
  {
    id: 7,
    title: "GitaGPT Featured",
    description:
      "AI chatbot project featured in newspaper articles for innovation",
    category: "Innovation",
    date: "2024",
    icon: <Star className="h-6 w-6" />,
    color: "from-orange-500 to-red-600",
  },
  {
    id: 6,
    title: "NCC Under Officer",
    description:
      "Served as Under Officer with Republic Day Parade participation",
    category: "Leadership",
    date: "2022-2024",
    icon: <Trophy className="h-6 w-6" />,
    color: "from-green-500 to-teal-600",
  },
];

const AchievementShowcase = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
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
              🏆 Achievements
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
              Milestones that define my journey of continuous learning and
              excellence
            </motion.p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.9 }
                }
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Header */}
                  <div
                    className={`p-6 bg-gradient-to-r ${achievement.color} text-white relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full transform translate-x-6 -translate-y-6"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="p-3 bg-white bg-opacity-20 rounded-full">
                        {achievement.icon}
                      </div>
                      <Badge className="bg-white bg-opacity-20 text-white border-white border-opacity-30">
                        {achievement.date}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-deep-blue-600 group-hover:to-electric-yellow-400 group-hover:bg-clip-text transition-all duration-300">
                          {achievement.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {achievement.category}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Achievement indicator */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${achievement.color}`}
                      />
                      <span>Achievement Unlocked</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 text-white text-center">
              <h3 className="text-2xl font-bold mb-6">Journey Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">6+</div>
                  <div className="text-sm opacity-90">Major Achievements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2</div>
                  <div className="text-sm opacity-90">
                    Entrance Exams Cleared
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-sm opacity-90">Leadership Positions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">
                    Commitment to Excellence
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementShowcase;
