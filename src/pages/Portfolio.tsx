import { easeInOut, motion } from "motion/react";
import PortfolioItem from "../components/PortfolioItem";
import { portfolio } from "../content";

const Portfolio = () => {
  return (
    <div className="flex-grow flex flex-col items-center p-4">
      <div className="container max-w-screen-xl w-full flex-grow flex justify-center items-center flex-col">
        <div className="mt-8">
          <motion.h2
            className="text-xl font-bold text-primary mb-1 inline-flex gap-2 items-center text-white/[87%]"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: easeInOut }}
          >
            Nasze <span className="text-primary">portfolio</span> zleceń
          </motion.h2>
          <p className="text-base text-white/60 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat enim ut varius convallis.
            Quisque viverra neque metus, quis dignissim orci imperdiet ut.
          </p>
          <div className="flex flex-col gap-4">
            <div className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-5">
                {portfolio.map((item, i) => {
                  return (
                    <PortfolioItem
                      name={item.name}
                      date={item.date}
                      desc={item.desc}
                      photo={item.photo}
                      cathegory={item.cathegory}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
