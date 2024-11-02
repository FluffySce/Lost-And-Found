import React from 'react';
import { useParams } from 'react-router-dom';

// Sample data for details - replace this with actual data fetching logic
const sampleItems = [
  {
    id: 1,
    name: 'Lost Phone',
    description: 'A black smartphone found near the library.',
    image: 'https://via.placeholder.com/600x400?text=Lost+Phone',
    contact: 'Contact: 123-456-7890',
    category: 'Electronics',
    date: 'Date: 2024-10-01',
  },
  {
    id: 2,
    name: 'Found Wallet',
    description: 'A brown leather wallet found in the cafeteria.',
    image: 'https://via.placeholder.com/600x400?text=Found+Wallet',
    contact: 'Contact: 987-654-3210',
    category: 'Accessories',
    date: 'Date: 2024-09-30',
  },
  {
    id: 3,
    name: 'Lost Keys',
    description: 'A set of keys with a blue keychain.',
    image: 'https://via.placeholder.com/600x400?text=Lost+Keys',
    contact: 'Contact: 555-555-5555',
    category: 'Miscellaneous',
    date: 'Date: 2024-10-03',
  },
  {
    id: 4,
    name: 'Lost Backpack',
    description: 'A black backpack found near the main entrance.',
    image: 'https://via.placeholder.com/600x400?text=Lost+Backpack',
    contact: 'Contact: 444-444-4444',
    category: 'Personal Items',
    date: 'Date: 2024-10-04',
  },
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = sampleItems.find(item => item.id === parseInt(id)); // Fetching item by ID

  if (!item) return <div>Item not found</div>;

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">{item.name}</h2>
      <img src={item.image} alt={item.name} className="mb-4 w-full max-w-md rounded" />
      <p className="text-gray-800 mb-4">{item.description}</p>
      <p className="text-gray-600">{item.contact}</p>
      <p className="text-gray-600">Category: {item.category}</p>
      <p className="text-gray-600">Date: {item.date}</p>
    </div>
  );
};

export default ItemDetail;
