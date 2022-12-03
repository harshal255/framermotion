import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0, 1] }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <motion.h2
        animate={{ fontSize: 60, color: "#f3ff00" }} >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          initial={{}}
          animate={{}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;