"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MessageSquare, Plus, Minus, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_email: "",
    company: "",
    message: "",
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

  const handleSubmit = async () => {
    if (!formData.user_email || !formData.message) {
      toast.error("Missing Information", {
        description: "Please fill in email and message fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      toast.error("Invalid Email", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_g1ubb5m",
        "template_wh30o6r",
        {
          user_email: formData.user_email,
          company: formData.company,
          message: formData.message,
          to_email: "rifat28.dev@gmail.com",
        },
        "8QCN5ni9Fr-CBDh_n"
      );

      toast.success("Message Sent!", {
        description: "We'll get back to you shortly.",
      });

      setFormData({
        user_email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to Send", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle gradient background - matching analytics style */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <Mail className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-700 font-medium">Get in Touch</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Contact{" "}
              <span className="text-slate-600">Us</span>
            </h2>

            <p className="text-xl text-slate-600 mb-8">
              Fill out the form below or reach out directly. We're here to answer your questions.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.user_email}
                  onChange={(e) =>
                    setFormData({ ...formData, user_email: e.target.value })
                  }
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-slate-500 h-10"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company / Location Details
                </label>
                <Input
                  type="text"
                  placeholder="Company name and location type"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-slate-500 h-14"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  How can we help? <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="Tell us about your vending needs..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 resize-none focus:border-slate-500 focus:ring-slate-500 h-32"
                  required
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-slate-700 hover:bg-slate-900 text-white shadow-lg disabled:opacity-50 transition-all h-12"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <MessageSquare className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-700 font-medium">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Common{" "}
              <span className="text-slate-600">Questions</span>
            </h2>

            <p className="text-xl text-slate-600 mb-8">
              Have questions about hardware, pricing, placement or operations?
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-slate-800 font-semibold pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
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
                      <p className="text-slate-600 leading-relaxed">
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