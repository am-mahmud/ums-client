import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://ums-server-delta.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center text-gray-800">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card bg-base-100 shadow-sm p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-md"
          >
            <div className="card-body items-center text-center">
              {category.image && (
                <img
                  src={category.image}
                  alt={category.title || ""}
                  className="rounded-lg h-32 w-32 mb-4 object-cover"
                />
              )}
              <h2 className="card-title text-lg font-semibold mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
