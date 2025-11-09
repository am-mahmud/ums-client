import React, { useEffect, useState } from 'react';

const CategoryCard = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error('Error fetching categories:', err));
    }, []);


    return (
        <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center text-gray-800">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 shadow-sm p-6 flex flex-col items-center text-center"
                    >
                        <div className="card-body items-center text-center">
                            {category.image && (
                                <img
                                    src={category.image}
                                    alt={""}
                                    className="rounded-lg h-32 w-32 mb-4 object-cover"
                                />
                            )}
                            <h2 className="card-title">{category.title}</h2>
                            <p>{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CategoryCard;