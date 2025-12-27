"use client"
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Footer() {


  return (
    <footer className="bg-gray-50 border-t border-gray-200 relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.a
            href="/"
            className="flex items-center justify-self-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              VendAI
            </span>
          </motion.a>
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
        Copyright  © {new Date().getFullYear()} VendAI. All rights reserved
        </motion.div>
      </div>

    </footer>
  );
}