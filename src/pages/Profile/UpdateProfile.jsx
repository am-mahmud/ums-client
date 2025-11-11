import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUserProfile(name, photoURL)
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <>
      <title>Update Profile</title>

      <div className="flex justify-center items-center min-h-screen p-4 bg-linear-to-br from-[#2A7B9B]/70 via-[#57C785]/60 to-[#EDDD53]/70">
        <div className="w-full max-w-sm rounded-2xl shadow-xl overflow-hidden bg-white/90 backdrop-blur-md border border-white/30 p-6">
          <h2 className="text-center font-bold text-2xl mb-6 text-gray-800">
            Update Your Information
          </h2>

          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 text-lg rounded-md border border-gray-300 focus:ring-2 focus:ring-[#57C785] outline-none text-gray-700"
              required
            />

            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your photo URL"
              className="w-full p-3 text-lg rounded-md border border-gray-300 focus:ring-2 focus:ring-[#57C785] outline-none text-gray-700"
              required
            />

            <button
              type="submit"
              className="w-full py-2 mt-4 font-semibold rounded-lg bg-[#2A7B9B] text-white hover:bg-[#23697F] transition-all duration-300"
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
