import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./style";
import {
  Navbar,
  Hero,
  Loading,
  SkillsAndExperience,
  Education,
  Achievements,
  
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    // A div to wrap the entire application
    <div className="bg-primary w-full overflow-hidden">
      <AnimatePresence>
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.section
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div
              className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}
            >
              <div className={`${styles.boxWidth}`}>
                <SkillsAndExperience />
                <Education />
              </div>
            </div>
            {/* <Achievements /> */}

            
          </motion.section>
        )}
      <Footer/>
      </AnimatePresence>
    </div>
  );
};

export default App;
