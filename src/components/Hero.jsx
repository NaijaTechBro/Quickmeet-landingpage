import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {/* Meet Genuine Friends with <span>QuickMeet</span> */}
        Meet New Friends with <span>QuickMeet</span>
      </motion.h1>
      <p>Dating, Hanging Out and Meeting Up just got a little better and fun.</p>
      <center>
        <a href="/">Download App</a>
      </center>
    </div>
  );
};

export default Hero;
