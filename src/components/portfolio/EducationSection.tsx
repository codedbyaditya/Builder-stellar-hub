import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  status: string;
  activities: string[];
  image?: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institution:
      "Indian Institute of Information Technology, Allahabad (IIIT-A)",
    degree: "B.Tech in Electronics and Communication Engineering",
    duration: "Nov 2022 – Jul 2026",
    location: "Allahabad, India",
    status: "Current",
    activities: [
      "PRAYAAS (student teaching)",
      "Effervescence (college fest)",
      "Alumni Affairs (GAM-24)",
      "NCC",
      "Hostel and Mess Committee",
      "Event organizing",
    ],
  },
  {
    id: 2,
    institution: "Visvesvaraya National Institute of Technology (VNIT), Nagpur",
    degree: "B.Tech in Civil Engineering (incomplete)",
    duration: "Jan 2021 – Jun 2022",
    location: "Nagpur, India",
    status: "Transferred",
    activities: ["Cultural Judge at Aarohi Fest", "Cricket Team Member"],
  },
  {
    id: 3,
    institution: "Dr. Chandrabhanu Sonawane Junior College, Latur",
    degree: "PCM (Physics, Chemistry, Math)",
    duration: "Jan 2019 – Jul 2021",
    location: "Latur, India",
    status: "Completed",
    activities: [],
  },
  {
    id: 4,
    institution: "Shri Marwadi Rajasthan Vidyalaya, Latur",
    degree: "SSC, Semi-English Medium",
    duration: "Jan 2014 – Feb 2019",
    location: "Latur, India",
    status: "Completed",
    activities: [],
  },
];

const EducationSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
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
              Education Journey
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-electric-yellow-400 mx-auto rounded-full"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute left-4 md:left-1/2 w-1 bg-gradient-to-b from-deep-blue-600 to-electric-yellow-400 rounded-full transform md:-translate-x-1/2"
            />

            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row-reverse md:text-right"
                      : "md:flex-row md:text-left"
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-electric-yellow-400 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"
                  />

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="p-6 card-hover bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900 border-l-4 border-deep-blue-600">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2 text-deep-blue-600 dark:text-electric-yellow-400">
                          <GraduationCap className="h-5 w-5" />
                          <Badge
                            variant={
                              item.status === "Current"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.institution}
                      </h3>

                      <p className="text-lg font-semibold text-deep-blue-600 dark:text-electric-yellow-400 mb-4">
                        {item.degree}
                      </p>

                      {item.activities.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                            Activities & Involvement:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.activities.map((activity, actIndex) => (
                              <Badge
                                key={actIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 text-white">
              <h3 className="text-2xl font-bold mb-4">
                🏆 Entrance Exams Cleared
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">JEE Mains</div>
                  <div className="text-sm opacity-90">Qualified Two Times</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white opacity-30" />
                <div className="text-center">
                  <div className="text-3xl font-bold">MHT-CET</div>
                  <div className="text-sm opacity-90">Qualified</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
