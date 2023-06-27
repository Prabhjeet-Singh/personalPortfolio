
"use client";
import { motion } from "framer-motion";
import styles from "../../styles";
import { navVariants } from "../../utils/motion";


 const  Navbar=()=>{
    return(
        <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
        >
            <button type="button">search</button>
            <h1>METAVERSUS</h1>
            <button type="button">option</button>
            
        </motion.nav>
    );
}
export default Navbar;