import React, { use, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Marquee from "react-fast-marquee";
import BillCard from "../../components/BillCard/BillCard";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoWater } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";

import descoImg from "../../assets/desco-img.png";
import nescoImg from "../../assets/nesco-img.png";
import titasImg from "../../assets/titas-img.png";
import dhakaWasaImg from "../../assets/dhaka-wasa-logo.png";
import HowToSection from "../../components/HowToSection/HowToSection";


const Home = () => {
  const companyLogos = [
    descoImg,
    nescoImg,
    titasImg,
    dhakaWasaImg,
    titasImg,
    dhakaWasaImg,
  ];

  

  return (
    <>
      <div id="home-container" className="min-h-screen bg-linear-to-br from-[#2A7B9B]/20 via-[#57C785]/15 to-[#EDDD53]/10 text-gray-900">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Banner />
        </motion.div>


        <Marquee speed={60} className="bg-white/30 backdrop-blur-sm p-4 shadow-inner">
          <div className="flex items-center space-x-2 gap-20">
            {companyLogos.concat(companyLogos).map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt=""
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.1 }}
              />
            ))}
            <div className="w-20" />
          </div>
        </Marquee>


        <section className="py-12 px-6 md:px-10 text-center">
          <motion.h1
            className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Categories
          </motion.h1>



          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <CategoryCard />
          </motion.div>
        </section>

        <section className="py-6 px-6 md:px-10 backdrop-blur-md">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Recent Bills
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <BillCard />
          </motion.div>
        </section>


        <section className="py-12 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <HowToSection />
          </motion.div>
        </section>


        <Marquee className="bg-[#2A7B9B] p-4 text-white" gradient={false} speed={60}>
          <p className="font-semibold text-lg flex flex-row items-center gap-2">
            Notice:
            <AiFillThunderbolt className="text-yellow-300" /> Scheduled Power Outage:
            Mirpur-10, 5 PM - 8 PM |
            <IoWater className="text-blue-300" /> Water Supply Maintenance: Uttara
            Sector 5, 10 AM - 2 PM |
            <HiLightBulb className="text-yellow-200" /> Tip: Pay bills online to avoid
            late fees!
          </p>
        </Marquee>

      </div>
    </>
  );
};

export default Home;
