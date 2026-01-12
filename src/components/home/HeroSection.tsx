import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            hsl(var(--foreground)) 50px,
            hsl(var(--foreground)) 51px
          )`
        }} />
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary blur-3xl"
      />

      <div className="container-editorial relative z-10 text-center py-16 md:py-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <img
            src={logo}
            alt="Atakent Anatolian High School"
            className="h-24 w-24 md:h-32 md:w-32 mx-auto object-contain"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-headline mb-4"
        >
          Voice of <span className="text-primary">AAL</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-32 h-1 bg-primary mx-auto mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2"
        >
          Official Newspaper of Atakent Anatolian High School
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-sm text-caption uppercase tracking-widest"
        >
          İzmir • Karşıyaka • Established 1992
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
