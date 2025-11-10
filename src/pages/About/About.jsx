import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaWater, FaGasPump, FaGlobe } from "react-icons/fa6";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#2A7B9B]/80 via-[#57C785]/70 to-[#EDDD53]/70 text-gray-900">
      <section className="text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About <span className="text-gray-800">Utility Manage System</span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A smarter, simpler way to track, manage, and pay your utility bills —
          all from one unified dashboard. Stay connected, informed, and
          stress-free.
        </motion.p>

      
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="../../../public/ums-icon.svg"
            alt=""
            className="rounded-2xl shadow-lg w-full h-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold  text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-200 leading-relaxed">
              We aim to simplify how users interact with essential services —
              from electricity and gas to water and internet. By providing an
              intuitive and transparent platform, we empower users to manage
              payments efficiently and reduce service downtime through
              real-time updates.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-16 px-6 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose <span className="text-[#2A7B9B]">Utility Management System?</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaBolt size={36} />,
              title: "Electricity Tracking",
              desc: "Monitor and pay your power bills seamlessly with automated reminders.",
            },
            {
              icon: <FaGasPump size={36} />,
              title: "Gas Usage Insight",
              desc: "Keep an eye on gas usage trends and avoid unexpected billing surprises.",
            },
            {
              icon: <FaWater size={36}  />,
              title: "Water Consumption",
              desc: "Track water usage efficiently and detect unusual consumption patterns.",
            },
            {
              icon: <FaGlobe size={36} />,
              title: "Internet Billing",
              desc: "View your internet bills in real-time and manage all ISPs from one dashboard.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center text-white bg-[#2A7B9B]/80">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Simplify Your Utility Management?
        </h2>
        <p className="mb-6 text-gray-200">
          Join thousands of users who’ve streamlined their daily utility
          tracking experience.
        </p>
        <button className="btn-secondary-ui">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
