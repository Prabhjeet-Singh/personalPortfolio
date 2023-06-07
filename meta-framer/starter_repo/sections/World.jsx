'use client';
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn,staggerContainer } from "../utils/motion";
import { TitleText, TypingText} from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once:'false',amount:0.25}}
  className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
  >
    <TypingText title="| People on the  World"
    textSytles="text-center"
    />
    <TitleText
    title={(
      <>
      Track friends around you and invite them to play together in the same world
      </>
    )}
    textStyles="text-center"
    />
  </motion.div>
  </section>
);

export default World;
