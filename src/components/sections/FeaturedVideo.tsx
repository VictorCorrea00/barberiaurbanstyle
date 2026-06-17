"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

const VIDEO_URL = "https://acyyffohsqxabkksvpae.supabase.co/storage/v1/object/sign/web/1781442039705.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNjg5Yjc5My03NzdhLTRlNDUtOTEzYy05ZjIwZGQ5ZTliZDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvMTc4MTQ0MjAzOTcwNS5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNjMwOTMwLCJleHAiOjE4MTMxNjY5MzB9.FUOa6i1ww_bDFsA45bjZq4KAY5r9ZfcPbHFGSIfFz_w";

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 bg-luxury-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold uppercase tracking-[0.4em] text-sm mb-4 font-bold"
          >
            A Experiência
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif italic text-white"
          >
            Veja a excelência em movimento.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video max-w-5xl mx-auto group cursor-pointer overflow-hidden rounded-sm border border-white/5"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="w-full h-full object-cover"
            loop
            playsInline
          />
          
          {/* Custom Controls Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-luxury-black/40 flex items-center justify-center transition-opacity duration-500">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 md:w-24 md:h-24 bg-luxury-gold flex items-center justify-center rounded-full text-luxury-black shadow-2xl shadow-luxury-gold/20"
              >
                <Play fill="currentColor" size={32} className="ml-1" />
              </motion.div>
            </div>
          )}

          {/* Aesthetic corner details */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-luxury-gold/30 pointer-events-none transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-luxury-gold/30 pointer-events-none transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-luxury-light/40 uppercase tracking-[0.3em] text-xs">
            Assista e sinta a atmosfera Urban Style
          </p>
        </motion.div>
      </div>
    </section>
  );
}
