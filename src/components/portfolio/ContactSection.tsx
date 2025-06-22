import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Download,
  Send,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "deshmukhaditya833@gmail.com",
      link: "mailto:deshmukhaditya833@gmail.com",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 8830069369",
      link: "tel:+918830069369",
      color: "from-green-500 to-blue-600",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Aditya Deshmukh",
      link: "https://www.linkedin.com/in/aditya-deshmukh-linkdin",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      value: "@adi_deshmukh_07",
      link: "https://www.instagram.com/adi_deshmukh_07/",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-electric-yellow-400 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              Let's Connect
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
              I'm always open to discussing new opportunities, collaborations,
              or just having a conversation about technology and innovation.
              Feel free to reach out!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <Card className="p-6 card-hover bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-blue-900">
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 group"
                        >
                          <div
                            className={`p-3 rounded-full bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}
                          >
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {info.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 group-hover:text-deep-blue-600 dark:group-hover:text-electric-yellow-400 transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Card className="p-6 bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 text-white">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-3">
                      📄 Download My Resume
                    </h4>
                    <p className="mb-4 opacity-90">
                      Get a comprehensive overview of my experience and skills
                    </p>
                    <Button
                      size="lg"
                      className="bg-white text-deep-blue-600 hover:bg-gray-100 font-semibold group"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = 'https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/iec2022026_aditya_deshmukh-ce7aac';
                        link.download = 'Aditya_Deshmukh_Resume.pdf';
                        link.target = '_blank';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Download Resume
                    </Button>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="p-8 bg-white dark:bg-gray-800 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-green-600 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          className="border-2 focus:border-electric-yellow-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                          className="border-2 focus:border-electric-yellow-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                        className="border-2 focus:border-electric-yellow-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project, idea, or just say hello!"
                        className="border-2 focus:border-electric-yellow-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-deep-blue-600 to-electric-yellow-400 hover:from-deep-blue-700 hover:to-electric-yellow-500 font-semibold group"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <Send className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;