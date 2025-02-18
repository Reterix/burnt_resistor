import { easeInOut, motion } from "motion/react";

const SectionWrapper = ({ children, className }: { children: React.ReactNode | string; className?: string }) => {
  return (
    <motion.section
      className={`${className} w-full p-8`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: easeInOut }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
