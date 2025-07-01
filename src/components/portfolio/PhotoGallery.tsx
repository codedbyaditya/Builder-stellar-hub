import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn, Heart, Camera } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
  date: string;
}

const photos = [
  {
    id: 1,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.20.44-am-5e1846?format=webp&width=800",
    title: "Aproksha Tech Fest",
    category: "Events",
    description: "Hospitality Executive at Aproksha Tech Fest",
    date: "2024",
  },
  {
    id: 2,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.21.58-am-380ad9?format=webp&width=800",
    title: "Asmita Sports Fest",
    category: "Sports",
    description: "Asmita Sports Festival - Hospitality Executive",
    date: "2024",
  },
  {
    id: 3,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.23.03-am-01cc8c?format=webp&width=800",
    title: "Effervescence 2024",
    category: "Cultural",
    description: "Team member at Effervescence - IIIT-A's cultural fest",
    date: "2024",
  },
  {
    id: 6,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.24.01-am-a74633?format=webp&width=800",
    title: "GitaGPT Newspaper Feature",
    category: "Achievement",
    description: "AI chatbot project featured in newspaper",
    date: "2024",
  },
  {
    id: 7,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.25.09-am-b5f207?format=webp&width=800",
    title: "Bindisa Agritech Team",
    category: "Professional",
    description: "Web Development Team Lead at Bindisa Agritech",
    date: "2025",
  },
  {
    id: 8,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.26.01-am-ac2779?format=webp&width=800",
    title: "Adobe Career Academy",
    category: "Certification",
    description: "Adobe Career Academy Certificate of Completion",
    date: "2024",
  },
  {
    id: 9,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.28.05-am-9ed753?format=webp&width=800",
    title: "PRAYAAS with Children",
    category: "Social",
    description: "Volunteering with children through PRAYAAS initiative",
    date: "2024",
  },
  {
    id: 10,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.28.44-am-a597f1?format=webp&width=800",
    title: "JEE Achievement",
    category: "Academic",
    description: "JEE examination results and achievement",
    date: "2020",
  },
  {
    id: 11,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-22-at-5.41.09-pm-513bb5?format=webp&width=800",
    title: "College Friends Memory",
    category: "Life",
    description: "Beautiful college memories with friends",
    date: "2024",
  },
  {
    id: 12,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.31.02-am-55b517?format=webp&width=800",
    title: "Event Organizer Recognition",
    category: "Recognition",
    description: "Certificate and recognition for event organizing",
    date: "2024",
  },
  {
    id: 13,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.31.44-am-43e6ef?format=webp&width=800",
    title: "Ganesh Utsav Celebration",
    category: "Cultural",
    description: "Organizing and celebrating Ganesh Utsav",
    date: "2024",
  },
  {
    id: 14,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.32.19-am-c68058?format=webp&width=800",
    title: "Cultural Event",
    category: "Cultural",
    description: "Leading cultural events and celebrations",
    date: "2024",
  },
  {
    id: 15,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.33.21-am-1281f7?format=webp&width=800",
    title: "Assistant Director Certificate",
    category: "Recognition",
    description: "Recognition for work and dedication",
    date: "2024",
  },
  {
    id: 16,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.34.09-am-6154b4?format=webp&width=800",
    title: "NCC Dress Uniform",
    category: "NCC",
    description: "Proudly wearing the NCC dress uniform",
    date: "2023",
  },
  {
    id: 17,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.34.48-am-61eb91?format=webp&width=800",
    title: "Adobe SDE Meet",
    category: "Professional",
    description: "Meeting with Mahima Hans, Adobe SDE",
    date: "2024",
  },
  {
    id: 18,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.35.26-am-307f5b?format=webp&width=800",
    title: "Traditional Celebration",
    category: "Cultural",
    description: "Traditional festival celebrations with friends",
    date: "2024",
  },
  {
    id: 19,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-4.35.50-am-075f9c?format=webp&width=800",
    title: "Cricket Stars Meet",
    category: "Sports",
    description:
      "Special moment with Michel Santner and Daryl Smith at Taj Hotel",
    date: "2024",
  },

  {
    id: 21,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-5.00.48-am-4d6fb3?format=webp&width=800",
    title: "Traditional Attire",
    category: "Cultural",
    description: "Proudly wearing traditional Marathi attire with turban",
    date: "2024",
  },
  {
    id: 22,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-5.01.28-am-ffcba8?format=webp&width=800",
    title: "Evening Celebration",
    category: "Events",
    description: "Beautiful evening event with decorative lighting",
    date: "2024",
  },
  {
    id: 23,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-5.01.46-am-69f7b0?format=webp&width=800",
    title: "Victory Moment",
    category: "Life",
    description: "Celebrating life with open arms and positive energy",
    date: "2024",
  },
  {
    id: 24,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-5.02.00-am-f6048d?format=webp&width=800",
    title: "College Friends",
    category: "Life",
    description: "Memorable moments with close college friends",
    date: "2024",
  },
  {
    id: 25,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-5.02.39-am-765540?format=webp&width=800",
    title: "Adventure Travel",
    category: "Life",
    description: "Mountain adventures, ATV rides, and travel experiences",
    date: "2024",
  },
  {
    id: 26,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-5.02.59-am-216233?format=webp&width=800",
    title: "College Gathering",
    category: "Events",
    description: "Large college group gathering and networking event",
    date: "2024",
  },
  {
    id: 27,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-5.03.21-am-9bebd4?format=webp&width=800",
    title: "Hostel Week Champion",
    category: "Recognition",
    description: "IIIT-A Hostel Week celebrations with championship trophies",
    date: "2025",
  },
  {
    id: 28,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-5.03.45-am-b64c3f?format=webp&width=800",
    title: "Night Out with Friends",
    category: "Life",
    description: "Evening gathering with close college friends",
    date: "2024",
  },
  {
    id: 29,
    src: "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-5.04.14-am-08ac71?format=webp&width=800",
    title: "Team Unity",
    category: "Life",
    description: "Coordinated team photo showcasing friendship and unity",
    date: "2024",
  },
];

const categories = [
  "All",
  "NCC",
  "Events",
  "Cultural",
  "Professional",
  "Academic",
  "Sports",
  "Social",
  "Recognition",
  "Life",
];

const PhotoGallery = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 bg-gradient-to-br from-deep-blue-50 to-electric-yellow-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden"
    >
      {/* Advanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute w-3 h-3 bg-electric-yellow-400 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Hexagonal patterns */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute w-4 h-4 bg-deep-blue-400 opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              rotate: [0, 120, 240, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Gradient orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-16 h-16 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(37, 99, 235, 0.1) 70%, transparent 100%)`,
              filter: "blur(8px)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotateY: 0 }
                  : { opacity: 0, scale: 0.8, rotateY: -90 }
              }
              transition={{
                duration: 1.2,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="flex items-center justify-center mb-6"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Camera className="h-12 w-12 text-electric-yellow-400 mr-4" />
              </motion.div>
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-gradient"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                📸 Life in Pictures
              </motion.h2>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "150px" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 mx-auto rounded-full mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive visual documentation of my professional journey,
              academic achievements, leadership experiences, and personal growth
              throughout my career at IIIT-A and beyond.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, rotateX: 0 }
                    : { opacity: 0, y: 20, rotateX: -90 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.9 + index * 0.1,
                  type: "spring",
                  stiffness: 150,
                }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden hover:scale-105 hover:translate-y-[-3px] hover:shadow-lg ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md"
                }`}
              >
                {/* Ripple effect on active */}
                {selectedCategory === category && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                    }}
                    animate={{
                      scale: [0, 1.5],
                      opacity: [0.7, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
                <span className="relative z-10">{category}</span>
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Photo Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.8, y: 50 }
                  }
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="hover:scale-105 hover:translate-y-[-8px] transition-transform duration-300 group cursor-pointer"
                  onHoverStart={() => setHoveredPhoto(photo.id)}
                  onHoverEnd={() => setHoveredPhoto(null)}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 animated-border relative group">
                    {/* Animated border effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `conic-gradient(from 0deg, transparent, rgba(251, 191, 36, 0.4), transparent, rgba(37, 99, 235, 0.4), transparent)`,
                        padding: "2px",
                        zIndex: -1,
                      }}
                      animate={{
                        rotate: hoveredPhoto === photo.id ? 360 : 0,
                      }}
                      transition={{
                        duration: 3,
                        repeat: hoveredPhoto === photo.id ? Infinity : 0,
                        ease: "linear",
                      }}
                    />
                    <div className="relative aspect-square overflow-hidden">
                      <motion.img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            {photo.title}
                          </h4>
                          <p className="text-sm opacity-90">
                            {photo.description}
                          </p>
                        </div>

                        <div className="absolute top-4 right-4 hover:scale-110 hover:rotate-6 transition-transform duration-200">
                          <ZoomIn className="h-6 w-6 text-white" />
                        </div>
                      </motion.div>

                      {/* Floating Category Badge */}
                      <div
                        className={`absolute top-4 left-4 transition-transform duration-200 ${
                          hoveredPhoto === photo.id
                            ? "scale-110 translate-y-[-5px]"
                            : "scale-100"
                        }`}
                      >
                        <Badge className="bg-electric-yellow-400 text-deep-blue-900 font-semibold">
                          {photo.category}
                        </Badge>
                      </div>

                      {/* Love Animation */}
                      <motion.div
                        className="absolute bottom-4 right-4"
                        animate={
                          hoveredPhoto === photo.id
                            ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }
                            : { scale: 1 }
                        }
                        transition={{
                          duration: 0.5,
                          repeat: hoveredPhoto === photo.id ? Infinity : 0,
                        }}
                      >
                        <Heart className="h-5 w-5 text-red-500 fill-current" />
                      </motion.div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-gray-900 dark:text-white truncate">
                          {photo.title}
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {photo.date}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 text-white">
              <h3 className="text-3xl font-bold mb-6">📊 Gallery Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">30+</div>
                  <div className="text-sm opacity-90">Total Memories</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">9</div>
                  <div className="text-sm opacity-90">Categories</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">4</div>
                  <div className="text-sm opacity-90">Years Captured</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">∞</div>
                  <div className="text-sm opacity-90">Precious Moments</div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedPhoto.title}
                  </h3>
                  <Badge
                    className={`${
                      selectedPhoto.category === "NCC"
                        ? "bg-green-100 text-green-800"
                        : selectedPhoto.category === "Cultural"
                          ? "bg-purple-100 text-purple-800"
                          : selectedPhoto.category === "Professional"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {selectedPhoto.category}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {selectedPhoto.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📅 {selectedPhoto.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
