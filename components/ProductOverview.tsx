"use client"
import { motion } from "framer-motion";
import { ShoppingCart, Store, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function ProductOverview() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const products = [
    {
      icon: ShoppingCart,
      title: "Machine Sales",
      description:
        "Purchase AI-powered vending hardware and run it yourself. Full ownership, complete control.",
      features: [
        "One-time purchase",
        "Complete hardware ownership",
        "Self-operated model",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Store,
      title: "Machine Placement & Operations",
      description:
        "We place, stock, and operate machines in qualified locations. You provide the space, we handle everything else.",
      features: [
        "Zero upfront cost",
        "Full-service operations",
        "Revenue sharing model",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-medium">Flexible Solutions</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            One Platform.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Two Ways to Work With Us.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We support both sides of unattended retail. Same technology.
            Different business models.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl from-blue-200/50 to-purple-200/50" />
              
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <product.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}