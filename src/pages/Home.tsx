import {
  BoltIcon,
  BriefcaseIcon,
  ClipboardDocumentCheckIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { easeInOut } from "motion";
import { motion } from "motion/react";
import SectionWrapper from "../components/SectionWrapper";
import SingleOpinia from "../components/SingleOpinia";
import UserPanel from "../components/UserPanel";
import UslugaListItem from "../components/UslugaListItem";
import { opinie, people, uslugi } from "../content";
import Hero from "./sections/Hero";
import HButton from "../components/HButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <div className="flex-grow flex flex-col items-center">
      <Hero />
      <div className="container max-w-screen-xl w-full flex-grow flex justify-center items-center flex-col">
        <SectionWrapper>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {people.map((man, i) => (
              <UserPanel name={man.name} position={man.position} description={man.desc} avatar={man.avatar} key={i} />
            ))}
            <div className="flex-grow">
              <motion.h2
                className="text-xl font-bold text-primary mb-1 inline-flex gap-2 items-center text-white/[87%]"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: easeInOut }}
              >
                <InformationCircleIcon className="size-6 text-primary" />
                Poznaj <span className="text-primary">naszą</span> ekipe
              </motion.h2>
              <p className="text-base text-white/60 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat enim ut varius convallis.
                Quisque viverra neque metus, quis dignissim orci imperdiet ut. Aenean in efficitur augue. Sed in pretium
                eros. Curabitur at tortor placerat, varius elit et, ultricies risus. Suspendisse dapibus tempus orci.
                Proin eget hendrerit erat, ut vulputate orci. In sit amet elit vel lectus mattis elementum. Curabitur
                risus leo, luctus vel erat eget, tristique maximus justo. Duis vel consectetur justo. Phasellus
                consequat pretium semper. Pellentesque porta lectus nec ex pretium, eget venenatis nisl pellentesque.
              </p>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <motion.h2
            className="text-xl font-bold text-primary mb-1 inline-flex gap-2 items-center text-white/[87%]"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: easeInOut }}
          >
            <ClipboardDocumentCheckIcon className="size-6 text-primary" />
            Nasza oferta
          </motion.h2>
          <p className="text-base text-white/60 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat enim ut varius convallis.
            Quisque viverra neque metus, quis dignissim orci imperdiet ut.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-2">
            {uslugi.map((item) => {
              return (
                <UslugaListItem key={item.id}>
                  <item.logo className="size-6 text-primary" />
                  <p>{item.name}</p>
                </UslugaListItem>
              );
            })}
          </div>
          <div className="flex-grow flex justify-center items-center mt-8">
            <HButton onClick={() => nav("/portfolio")}>
              <BriefcaseIcon className="size-6" />
              Zobacz nasze portfolio
            </HButton>
          </div>
        </SectionWrapper>
        <hr className="h-px w-[90%] my-2 border-0 bg-white/10" />
        <SectionWrapper>
          <motion.h2
            className="text-xl font-bold text-white/[87%] mb-1 inline-flex gap-2 items-center"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: easeInOut }}
          >
            <BoltIcon className="size-6 text-primary" />
            Dlaczego <span className="text-primary">nas</span> wybrać?
          </motion.h2>
          <p className="text-base text-white/60 text-justify mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat enim ut varius convallis.
            Quisque viverra neque metus, quis dignissim orci imperdiet ut.
          </p>
          <div className="flex-grow flex flex-wrap justify-center gap-16">
            {opinie.map((opinia, i) => {
              return <SingleOpinia name={opinia.name} content={opinia.content} stars={opinia.stars} key={i} />;
            })}
          </div>
        </SectionWrapper>
        <SectionWrapper className="w-full flex flex-col items-center gap-4">
          <motion.h2
            className="text-xl font-bold text-white/[87%] mb-1 inline-flex gap-2 items-center"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: easeInOut }}
          >
            Nasi <span className="text-primary">partnerzy</span> biznesowi
          </motion.h2>
          <div className="flex-grow flex flex-wrap justify-center gap-8">
            <img src="/src/assets/logo_nzozkp.png" className="h-16 rounded-lg" />
          </div>
        </SectionWrapper>
        <hr className="h-px w-[90%] my-2 border-0 bg-white/10" />
        <SectionWrapper>
          <motion.h2
            className="text-xl font-bold text-primary mb-1 inline-flex gap-2 items-center text-white/[87%]"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: easeInOut }}
          >
            <PhoneIcon className="size-6 text-primary" />
            Kontakt
          </motion.h2>
          <p className="text-base text-white/60 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat enim ut varius convallis.
            Quisque viverra neque metus, quis dignissim orci imperdiet ut.
          </p>
          <div className="w-full flex-grow flex  justify-center items-center mt-4">
            <div className="flex flex-col gap-2 text-lg">
              <div className="inline-flex gap-2 items-center">
                <EnvelopeIcon className="size-5 text-primary" />{" "}
                <span>
                  burnt<span className="text-primary">resistor</span>
                  @gmail.com
                </span>
              </div>
              <div className="inline-flex gap-2 items-center">
                <PhoneIcon className="size-5 text-primary" /> +48 xxx-xxx-xxx
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
     
    </div>
  );
};

export default Home;
