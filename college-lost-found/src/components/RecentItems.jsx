import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecentItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Recent Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link 
            to={`/item/${item._id}`}  // Ensure you have a route set up for item details
            key={item._id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition duration-200"
          >
            <img 
              src={item.image || 'https://via.placeholder.com/300x200?text=No+Image'}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-800 font-bold mt-2">${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentItems;
