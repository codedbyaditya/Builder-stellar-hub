import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  Trophy,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface LeadershipItem {
  id: number;
  title: string;
  organization: string;
  duration: string;
  type: "leadership" | "cultural" | "sports" | "social";
  description: string;
  achievements: string[];
  image?: string;
  gallery?: string[];
}

const leadershipData: LeadershipItem[] = [
  {
    id: 2,
    title: "Technical Executive",
    organization: "Effervescence – IIIT-A Fest",
    duration: "2023-2024 (2nd Year)",
    type: "leadership",
    description:
      "Organized various cultural and technical sub-events, managed logistics, and participated in flashmob events.",
    achievements: [
      "Organized 15+ technical events",
      "Managed event logistics",
      "Flashmob participation",
      "Student engagement initiatives",
    ],
  },
  {
    id: 3,
    title: "Alumni Affairs Coordinator",
    organization: "IIITA Alumni Affairs",
    duration: "Aug–Oct 2024",
    type: "leadership",
    description:
      "Organized GAM-24, the 25-year alumni meet-up, facilitating connections between current students and alumni.",
    achievements: [
      "Organized GAM-24 (25-year alumni meet)",
      "Connected 500+ alumni with students",
      "Event planning and coordination",
      "Network building initiatives",
    ],
  },
  {
    id: 4,
    title: "Hospitality Executive - Aproksha Tech Fest",
    organization: "Aproksha (Tech Fest) - IIIT-A",
    duration: "2024",
    type: "leadership",
    description:
      "Managed logistics and coordination for participants, ensuring seamless execution of the annual college tech fest.",
    achievements: [
      "Event logistics management",
      "Participant coordination",
      "Seamless fest execution",
      "Technical event organization",
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.20.44-am-5e1846?format=webp&width=800",
  },
  {
    id: 9,
    title: "Hospitality Executive - Asmita Sports Fest",
    organization: "Asmita (Sports Fest) - IIIT-A",
    duration: "2024",
    type: "sports",
    description:
      "Managed logistics and stay for participants from 21 IIITs during the annual sports festival.",
    achievements: [
      "Coordinated sports events logistics",
      "Managed participant accommodation",
      "Ensured smooth sports fest operations",
      "Built inter-college sports networks",
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.21.58-am-380ad9?format=webp&width=800",
  },
  {
    id: 5,
    title: "ECL Cricket Tournament Organizer",
    organization: "IIIT-A Sports Committee",
    duration: "2023-2024",
    type: "sports",
    description:
      "Successfully conducted college cricket league with scheduling, umpiring, logistics, and prize distribution.",
    achievements: [
      "Organized complete cricket tournament",
      "Managed scheduling and umpiring",
      "Logistics coordination",
      "Prize distribution ceremony",
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-3.52.10-am-ed77dc?format=webp&width=800",
  },
  {
    id: 6,
    title: "Effervescence 2024 - Team Member",
    organization: "Effervescence - IIIT-A",
    duration: "2024",
    type: "cultural",
    description:
      "Active team member in organizing one of North India's largest college cultural and technical festivals.",
    achievements: [
      "Cultural and technical event coordination",
      "Student engagement and participation",
      "Festival logistics management",
      "Inter-college collaboration",
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.23.03-am-01cc8c?format=webp&width=800",
  },
  {
    id: 10,
    title: "Cultural Events Organizer",
    organization: "IIIT-A Cultural Committee",
    duration: "2022-2025",
    type: "cultural",
    description:
      "Lead organizer for major cultural celebrations including Ganpati Utsav, Shivjayanti, and traditional festivals.",
    achievements: [
      "Organized Ganpati Utsav celebrations",
      "Shivjayanti event coordination",
      "Traditional festival management",
      "Cultural heritage promotion",
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.35.26-am-307f5b?format=webp&width=800",
  },
  {
    id: 7,
    title: "PRAYAAS Volunteer",
    organization: "IIITA Social Service",
    duration: "2022-Present",
    type: "social",
    description:
      "Student volunteer teaching underprivileged students on weekends, contributing to educational development and community service.",
    achievements: [
      "Weekend teaching sessions",
      "Underprivileged student support",
      "Educational development impact",
      "Community service contribution",
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.28.05-am-9ed753?format=webp&width=800",
  },
  {
    id: 8,
    title: "Hostel & Mess Committee Member",
    organization: "IIIT-A Student Affairs",
    duration: "1st and 2nd Year",
    type: "leadership",
    description:
      "Managed day-to-day mess feedback, food quality control, and hostel discipline maintenance.",
    achievements: [
      "Mess quality improvement",
      "Student feedback management",
      "Hostel discipline maintenance",
      "Student welfare initiatives",
    ],
  },
  {
    id: 11,
    title: "Event Organizer & Recognition",
    organization: "Various Cultural Events",
    duration: "2022-2025",
    type: "cultural",
    description:
      "Organized multiple cultural and social events, received recognition from college administration.",
    achievements: [
      "Event planning and coordination",
      "Cultural program management",
      "Administrative recognition",
      "Community engagement",
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.31.02-am-55b517?format=webp&width=800",
  },
  {
    id: 12,
    title: "Adobe SDE Meet - Industry Connect",
    organization: "Adobe Career Connect",
    duration: "2024",
    type: "leadership",
    description:
      "Connected with Adobe Software Development Engineers, gaining industry insights and professional networking.",
    achievements: [
      "Industry professional networking",
      "Technical insights from Adobe SDEs",
      "Career guidance and mentorship",
      "Technology trends understanding",
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.34.48-am-61eb91?format=webp&width=800",
  },
];

const LeadershipSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case "leadership":
        return <Users className="h-5 w-5" />;
      case "cultural":
        return <Star className="h-5 w-5" />;
      case "sports":
        return <Trophy className="h-5 w-5" />;
      case "social":
        return <Heart className="h-5 w-5" />;
      default:
        return <Users className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "leadership":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "cultural":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "sports":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "social":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section
      id="leadership"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
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
              Leadership & Events
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
              From organizing major college festivals to leading social
              initiatives, here's my journey in leadership and community
              building.
            </motion.p>
          </div>

          {/* Leadership Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                  rotateX: -15,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                      }
                    : {
                        opacity: 0,
                        y: 50,
                        scale: 0.9,
                        rotateX: -15,
                      }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="hover:translate-y-[-5px] transition-transform duration-300"
              >
                <Card className="h-full card-hover bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900 overflow-hidden relative group">
                  {/* Simple border glow */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-electric-yellow-400/20 to-deep-blue-600/20 -z-10" />
                  {/* Image */}
                  {item.image && (
                    <div className="aspect-video overflow-hidden cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage(item.image!)}
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {getIcon(item.type)}
                        </div>
                        <div className="hover:scale-105 hover:translate-y-[-2px] transition-transform duration-200">
                          <Badge className={getTypeColor(item.type)}>
                            <motion.span
                              initial={{ opacity: 0, y: 10 }}
                              animate={
                                isInView
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 10 }
                              }
                              transition={{
                                duration: 0.5,
                                delay: 0.4 + index * 0.1,
                              }}
                            >
                              {item.type.charAt(0).toUpperCase() +
                                item.type.slice(1)}
                            </motion.span>
                          </Badge>
                        </div>
                      </div>
                      <motion.div
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-electric-yellow-500 transition-colors duration-300 hover:scale-105"
                        initial={{ opacity: 0, x: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: 20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.1,
                        }}
                      >
                        <Calendar className="h-4 w-4 mr-1 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-xs font-medium">
                          {item.duration}
                        </span>
                      </motion.div>
                    </div>

                    {/* Title and Organization */}
                    <motion.h3
                      className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-deep-blue-600 group-hover:to-electric-yellow-400 group-hover:bg-clip-text transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.1,
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      className="text-md font-semibold text-deep-blue-600 dark:text-electric-yellow-400 mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + index * 0.1,
                      }}
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {item.organization}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.1,
                      }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.1,
                      }}
                    >
                      <motion.h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm hover:text-electric-yellow-500 transition-colors duration-300">
                        Key Achievements:
                      </motion.h4>
                      <ul className="space-y-1">
                        {item.achievements
                          .slice(0, 3)
                          .map((achievement, aIndex) => (
                            <motion.li
                              key={aIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={
                                isInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -10 }
                              }
                              transition={{
                                duration: 0.4,
                                delay: 0.7 + index * 0.1 + aIndex * 0.05,
                              }}
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                              className="text-xs text-gray-600 dark:text-gray-400 flex items-start group/achievement"
                            >
                              <span className="w-1.5 h-1.5 bg-electric-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-200" />
                              <span className="group-hover/achievement:text-gray-800 dark:group-hover/achievement:text-gray-200 transition-colors duration-200">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        {item.achievements.length > 3 && (
                          <motion.li
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 1 + index * 0.1,
                            }}
                            className="text-xs text-gray-500 dark:text-gray-500 italic"
                          >
                            +{item.achievements.length - 3} more achievements
                          </motion.li>
                        )}
                      </ul>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Special Highlight: Group Photos */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                📸 Memorable Moments
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.19.43-am-a0f623?format=webp&width=800",
                    )
                  }
                >
                  <img
                    src="https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.19.43-am-a0f623?format=webp&width=800"
                    alt="Memorable Moments"
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <h4 className="text-white text-xl font-bold text-center">
                      📸 Memorable Moments
                    </h4>
                  </div>
                </div>

                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.30.06-am-16b750?format=webp&width=800",
                    )
                  }
                >
                  <img
                    src="https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.30.06-am-16b750?format=webp&width=800"
                    alt="Memorable Moments"
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <h4 className="text-white text-xl font-bold text-center">
                      🎭 Cultural Events
                    </h4>
                  </div>
                </div>

                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.35.50-am-075f9c?format=webp&width=800",
                    )
                  }
                >
                  <img
                    src="https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.35.50-am-075f9c?format=webp&width=800"
                    alt="Ganesh Utsav Celebration"
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <h4 className="text-white text-xl font-bold text-center"></h4>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default LeadershipSection;
