import { Globe, Smartphone, Layout, Database, Rocket, Brush,Bot } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export function Services() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Production-Ready Web Applications',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused'],
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind, from wireframes to final designs.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Database,
      title: 'Scalable Backend & APIs',
      description: 'Robust server-side solutions with databases, APIs, and cloud infrastructure.',
      features: ['REST APIs', 'Database Design', 'Cloud Hosting'],
    },
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Rapid prototyping and MVP development for startups looking to validate their ideas quickly.',
      features: ['Fast Delivery', 'Scalable Architecture', 'Iterative Process'],
    },
    {
      icon: Brush,
      title: 'Brand Identity',
      description: 'Complete brand identity design including logos, color schemes, and brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials'],
    },
    {
      icon: Bot,
      title: "AI Agents & Workflow Automation",
      description:
        "Design and development of intelligent AI agents and workflow automation using LangChain and LangGraph, tailored to real-world business use cases.",
      features: [
        "LLM-Powered Agents",
        "Multi-Step Workflows (LangGraph)",
        "RAG & Knowledge Retrieval",
        "API & Tool Integration",
        "Process Automation",
      ],
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-400">Services</span>
          <h2 className="mt-2 text-white">
            What I Can Do For You
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, I offer comprehensive solutions to bring your digital projects to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all backdrop-blur-sm group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
                />
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg flex items-center justify-center mb-6 border border-purple-500/30 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  whileHover={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)" }}
                >
                  <Icon className="w-7 h-7 text-purple-400" />
                </motion.div>
                <h3 className="text-white mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-400 mb-6 relative z-10">
                  {service.description}
                </p>
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}