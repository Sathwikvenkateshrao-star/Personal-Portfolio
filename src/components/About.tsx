import { Code, Palette, Zap, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export function About() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
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

  const stats = [
    { number: '10+', label: 'Projects Built for Real-World Use' },
    { number: '10/10', label: 'Product-Focused Development' },
    { number: '100%', label: 'Built for Startups & Founders' },
    { number: '100%', label: 'Long-Term Maintainability' },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating intuitive interfaces that users love to interact with.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Meeting deadlines without compromising on quality.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is my success. I work closely with you every step.',
    },
  ];

  return (
    <section
  id="about"
  ref={ref}
  className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative"
>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-purple-400 text-3xl md:text-5xl font-extrabold">About Me</h1>
          <h2 className="mt-2 text-white text-lg md:text-2xl">
            Building Thoughtful Digital Products
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I’m Sathwik Venkatesh Rao, a full-stack developer focused on building
              scalable, production-ready web and AI products.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I work with founders and teams who want to move fast without sacrificing quality from MVP's to AI-powered automation and internal tools.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              My approach is simple : understand the problem deeply, design a clear solution, and build systems that scale as your product grows.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl text-center border border-purple-500/20 backdrop-blur-sm relative group overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent relative z-10 text-3xl font-bold">{stat.number}</div>
                <div className="text-gray-400 mt-2 relative z-10 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center space-y-4 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-xl border border-purple-500/30 relative"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)",
                    rotate: 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-purple-400 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}