import { ClipboardDocumentCheckIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import logo from "../../assets/logo_color.svg";
import HButton from "../../components/HButton";
import { motion } from "motion/react";
import { easeInOut } from "motion";

const Hero = () => {
  return (
    <section
      className="w-full p-4 py-16 object-fill"
      style={{
        backgroundImage: `url("src/assets/hero.jpg")`,
      }}
    >
      <div className="flex flex-col-reverse gap-1 sm:flex-row sm:gap-8 items-center justify-center min-h-128">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h2 className="text-5xl font-bold text-white/[87%]">
              Witaj w Burnt <span className="text-primary">Resistor</span>
            </h2>
            <p className="text-base text-white/60">Twoim partnerem w obsłudze informatycznej</p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <HButton onClick={() => {}}>
              <ClipboardDocumentCheckIcon className="size-4" />
              Zobacz naszą ofertę
            </HButton>
            <HButton onClick={() => (window.location.href = "mailto:jzielinski47dev@gmail.com")}>
              <EnvelopeIcon className="size-4" />
              Skontaktuj się
            </HButton>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: easeInOut,
          }}
        >
          <img src={logo} className="size-32 sm:size-64" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
