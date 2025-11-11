import React, { useEffect, useState } from "react";
import AllBillCard from "../../components/AllBillCard/AllBillCard";
import { motion } from "framer-motion";

const Bills = () => {


  return (
    <>

      <title>All Bills</title>

      <div className="min-h-screen bg-linear-to-br from-[#2A7B9B]/80 via-[#57C785]/50 to-[#EDDD53]/20 text-gray-800">

        <section className="relative py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-lg">
                All Bills Till Today
              </h1>
              <p className="text-white/90 text-lg max-w-xl mx-auto">
                Track your electricity, water, gas, and internet bills — all in one place.
              </p>
            </div>
          </motion.div>
        </section>


        <motion.section
          className="py-12 px-6 md:px-10 bg-white/80 backdrop-blur-lg shadow-inner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AllBillCard />
        </motion.section>


      </div>

    </>
  );
};

export default Bills;
