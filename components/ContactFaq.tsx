"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Plus, Minus } from "lucide-react";
import { useState } from "react";

export function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    company: "",
  });

  const faqs = [
    {
      question: "What types of products can the machines handle?",
      answer:
        "Our machines support a wide variety of products including snacks, drinks, fresh items, toiletries, and convenience goods. With 75+ unique SKUs and 300+ total items capacity, you can configure each machine to match your location's needs.",
    },
    {
      question: "How does the AI product recognition work?",
      answer:
        "Our machines use advanced computer vision AI to visually detect products without requiring barcodes. The system automatically identifies items when customers remove them, processes payment, and updates inventory in real-time.",
    },
    {
      question: "What are the placement requirements?",
      answer:
        "We look for high-traffic locations such as offices, residential buildings, gyms, and commercial spaces. Ideal locations have consistent foot traffic and adequate space for the machine footprint. We handle all installation and ongoing operations.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Pricing depends on machine configuration, whether you're purchasing or using our placement service, software and support needs, and fleet size. We provide transparent, straightforward pricing aligned with long-term operator success.",
    },
    {
      question: "What kind of support and maintenance is included?",
      answer:
        "Our machines feature remote diagnostics and health monitoring. For placed machines, we handle all stocking, maintenance, and operations. For purchased machines, we provide comprehensive support, monitoring tools, and maintenance alerts through our VMS platform.",
    },
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">Get in Touch</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Us
              </span>
            </h2>

            <p className="text-gray-600 mb-8">
              Fill out the form below or reach out directly. We're here to
              answer your questions about hardware, pricing, and operations.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company / Location Details
                </label>
                <Input
                  type="text"
                  placeholder="Company name and location type"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help?
                </label>
                <Textarea
                  placeholder="Tell us about your vending needs..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 resize-none"
                />
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30"
              >
                Send Message
              </Button>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
              <MessageSquare className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <p className="text-gray-600 mb-8">
              Have questions about hardware, pricing, placement requirements, or
              operations? If you don't see your question here, contact us or
              book a call.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-gray-900 font-semibold pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === index ? "auto" : 0,
                      opacity: openFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}