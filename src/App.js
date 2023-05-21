import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import logo from "../src/img/background.png";
import icon1 from "../src/img/learnatyourpace.png";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Generate random candlestick data
    const generateRandomData = () => {
      const newData = [];
      for (let i = 0; i < 50; i++) {
        const open = Math.random() * 200;
        const close = Math.random() * 200;
        const high = Math.max(open, close) + Math.random() * 50;
        const low = Math.min(open, close) - Math.random() * 50;
        newData.push({ open, close, high, low });
      }
      setData(newData);
    };

    generateRandomData();
  }, []);
  const chartContainerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: -1,
  };

  return (
    <div>
      {/* Logo */}
      <motion.img
        className="image-size"
        src={logo}
        alt="Forex Academy Logo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Background Image or Video */}
      <motion.div
        className="background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Learn Forex Trading with Experts
      </motion.h1>

      {/* Subheader */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Unlock the Secrets of Successful Trading
      </motion.h2>

      {/* Call to Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Enroll Now
      </motion.button>
      <div style={{ position: "relative" }}>
        <div style={chartContainerStyle}>
          {data.map((candle, index) => (
            <motion.div
              key={index}
              style={{
                width: "10px",
                height: `${candle.high - candle.low}px`,
                backgroundColor: candle.open > candle.close ? "yellow" : "grey",
                display: "inline-block",
                marginRight: "5px",
                position: "relative",
                bottom: `${Math.min(candle.open, candle.close) - candle.low}px`,
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
      {/* Section 1 */}
      <motion.div
        className="section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {/* Icon 1 */}
        <motion.img
          src={icon1}
          alt="Learn at Your Own Pace Icon"
          whileHover={{ scale: 1.2 }}
        />
        <motion.p>Learn at Your Own Pace</motion.p>

        {/* Icon 2 */}
        <motion.img
          src={icon1}
          alt="Comprehensive Course Material Icon"
          whileHover={{ scale: 1.2 }}
        />
        <motion.p>Comprehensive Course Material</motion.p>

        {/* Icon 3 */}
        <motion.img
          src={icon1}
          alt="Expert Traders as Instructors Icon"
          whileHover={{ scale: 1.2 }}
        />
        <motion.p>Expert Traders as Instructors</motion.p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {/* Image 1 */}
        <motion.img
          src={icon1}
          alt="Real-time Market Analysis Image"
          whileHover={{ rotate: 360 }}
        />
        <motion.p>Real-time Market Analysis</motion.p>

        {/* Image 2 */}
        <motion.img
          src={icon1}
          alt="Practical Trading Strategies Image"
          whileHover={{ rotate: 360 }}
        />
        <motion.p>Practical Trading Strategies</motion.p>

        {/* Image 3 */}
        <motion.img
          src={icon1}
          alt="Risk Management Techniques Image"
          whileHover={{ rotate: 360 }}
        />
        <motion.p>Risk Management Techniques</motion.p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        {/* Testimonial 1 */}
        <motion.blockquote whileHover={{ scale: 1.1 }}>
          "Forex Academy helped me gain a deep understanding of the forex
          market. Their practical approach and expert guidance made a huge
          difference in my trading results."
        </motion.blockquote>

        {/* Testimonial 2 */}
        <motion.blockquote whileHover={{ scale: 1.1 }}>
          "I highly recommend Forex Academy to anyone looking to master forex
          trading. The instructors are knowledgeable, the course material is
          comprehensive, and the support is excellent."
        </motion.blockquote>

        {/* Testimonial 3 */}
        <motion.blockquote whileHover={{ scale: 1.1 }}>
          "Thanks to Forex Academy, I've been able to achieve consistent profits
          in my trading. The strategies taught are effective, and the ongoing
          mentorship has been invaluable."
        </motion.blockquote>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        {/* Contact Information */}
        <p>Phone Number</p>
        <p>Email Address</p>
        <div>
          {/* Social Media Icons */}
          <motion.img
            src="facebook.png"
            alt="Facebook Icon"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src="twitter.png"
            alt="Twitter Icon"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src="instagram.png"
            alt="Instagram Icon"
            whileHover={{ scale: 1.2 }}
          />
        </div>

        {/* Copyright Notice */}
        <p>&copy; 2023 Forex Academy. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
