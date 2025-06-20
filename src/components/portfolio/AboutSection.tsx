import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface CounterProps {
  value: number;
  duration?: number;
  label: string;
}

const AnimatedCounter = ({ value, duration = 2, label }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <div className="text-center">
      <div
        ref={ref}
        className="text-4xl font-bold text-electric-yellow-400 mb-2"
      >
        0
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-electric-yellow-400 mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 rounded-2xl transform rotate-6 animate-pulse-glow"></div>
                <img
                  src="https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/screenshot-2025-06-21-at-3.53.37-am-ae18f2?format=webp&width=800"
                  alt="Aditya Deshmukh"
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm{" "}
                  <span className="font-semibold text-deep-blue-600 dark:text-electric-yellow-400">
                    Aditya Deshmukh
                  </span>
                  , a passionate and highly motivated student pursuing a
                  Bachelor of Technology in
                  <span className="font-semibold">
                    {" "}
                    Electronics and Communication Engineering
                  </span>{" "}
                  from the Indian Institute of Information Technology, Allahabad
                  (IIIT-A).
                </p>

                <p>
                  With a strong foundation in problem-solving, leadership, and
                  development, I've consistently taken on opportunities to grow
                  both technically and personally. From clearing national-level
                  engineering entrance exams to leading technical teams, my
                  journey reflects a drive for excellence.
                </p>

                <p>
                  Currently serving as{" "}
                  <span className="font-semibold text-deep-blue-600 dark:text-electric-yellow-400">
                    Web Development Team Lead
                  </span>{" "}
                  at Bindisa Agritech Pvt Ltd, I'm passionate about building
                  scalable, innovative solutions that make a real impact.
                </p>
              </div>

              {/* Animated Counters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
              >
                <Card className="p-4 text-center card-hover bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <AnimatedCounter value={15} label="Projects Completed" />
                </Card>

                <Card className="p-4 text-center card-hover bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <AnimatedCounter value={25} label="Events Managed" />
                </Card>

                <Card className="p-4 text-center card-hover bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <AnimatedCounter value={3} label="Leadership Roles" />
                </Card>

                <Card className="p-4 text-center card-hover bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <AnimatedCounter value={2} label="Entrance Exams Cleared" />
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
