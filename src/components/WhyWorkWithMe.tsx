import { CheckCircle, Workflow, Briefcase, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function WhyWorkWithMe() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
  const element = ref.current;
  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(element);

  return () => {
    observer.unobserve(element);
  };
}, []);

  const blocks = [
    {
      icon: Workflow,
      title: "How I Work",
      content:
        "I follow a clear, product-driven process — understand the problem, design the right solution, build clean and scalable systems, and iterate based on real feedback.",
    },
    {
      icon: Briefcase,
      title: "Featured Case Study",
      content:
        "Built an AI-powered resume analyzer using LLMs and vector search to automate screening, improve candidate ranking, and reduce manual effort.",
    },
    {
      icon: CheckCircle,
      title: "Problems I Help Solve",
      content:
        "Turning ideas into MVPs, scaling messy systems, automating workflows, and integrating AI into real-world products.",
    },
    {
      icon: HelpCircle,
      title: "Common Questions",
      content:
        "I work with early-stage startups and teams, help with existing codebases, and focus on building long-term, maintainable solutions.",
    },
  ];

  return (
    <section
      id="why-work-with-me"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 relative"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-40 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-400">Why Work With Me</span>
          <h2 className="mt-2 text-white">
            Clear Process. Real Outcomes.
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I focus on building production-ready web and AI products with a
            structured approach, strong technical foundation, and long-term
            scalability.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all backdrop-blur-sm group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center border border-purple-500/30 relative z-10">
                  <Icon className="w-7 h-7 text-purple-400" />
                </div>

                <h3 className="text-white mb-3 relative z-10">
                  {block.title}
                </h3>
                <p className="text-gray-400 relative z-10">
                  {block.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
