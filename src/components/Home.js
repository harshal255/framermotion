import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0.2, rotateZ: 360, marginTop: 200 }}
    >
      <motion.h2
        animate={{ fontSize: 60, color: "#f3ff00", x: -100, y: -50 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          animate={{ scale: 1.5 }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;