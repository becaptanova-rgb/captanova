"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+4571587709";
const WA_MESSAGE = encodeURIComponent(
  "Hi Renu! I just completed the Captanova Clarity Assessment and I'd love to learn more about the programs. 🙏"
);

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#1fb855] text-white rounded-full shadow-[0_8px_28px_rgba(37,211,102,0.4)] px-4 py-3.5 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Chat with Renu
      </span>
      <motion.span
        className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    </motion.a>
  );
}
