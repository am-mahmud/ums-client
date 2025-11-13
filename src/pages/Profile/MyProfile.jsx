import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";
import { motion } from "framer-motion";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const defaultUserPhoto = "https://i.ibb.co.com/nsD8dcGf/user.png";

  return (
    <>
      <title>User Profile</title>

      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#2A7B9B]/80 via-[#57C785]/70 to-[#EDDD53]/70 py-16 px-6">
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 w-full max-w-lg text-center border border-white/20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
       
          <div className="flex flex-col items-center gap-5">
            <motion.img
              src={user?.photoURL || defaultUserPhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-contain p-1"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                Name: {user?.displayName || "No Name"}
              </h2>
              <p className="text-gray-700 text-lg">
                Email: {user?.email || "No Email Available"}
              </p>
              {/* <p className="text-gray-700 text-lg">
                Phone Number: {user?.phoneNumber || "No Phone Number Available"}
              </p> */}
            </div>
          </div>

          <div className="h-px bg-gray-300 my-6"></div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/updateprofile">
              <button className="bg-[#2A7B9B] text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-[#23697F] hover:scale-105 transition-all duration-300">
                Update Information
              </button>
            </Link>

            <Link to="/">
              <button className="bg-white text-gray-800 py-2 px-6 rounded-lg font-semibold shadow hover:bg-gray-100 border hover:scale-105 transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MyProfile;
