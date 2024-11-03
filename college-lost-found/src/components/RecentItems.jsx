import React from "react";
import { useSelector } from "react-redux";

const RecentItems = () => {
  const items = useSelector((state) => state.items.itemsData);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className='container mx-auto py-12'>
      <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>
        Recent Lost Items
      </h2>
      {items.length === 0 ? (
        <p className='text-center text-gray-600'>
          No items have been reported yet.
        </p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {items.map((item, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition duration-200'
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.itemName}
                  className='w-full h-48 object-cover rounded-lg mb-4'
                />
              ) : (
                <div className='w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center'>
                  <span className='text-gray-500'>No Image Available</span>
                </div>
              )}
              <div className='space-y-2'>
                <h3 className='text-xl font-semibold text-gray-800'>
                  {item.itemName}
                </h3>
                <p className='text-sm text-gray-600'>
                  Category: {item.itemCategory}
                </p>
                <p className='text-sm text-gray-600'>
                  Date: {formatDate(item.date)}
                </p>
                <p className='text-gray-700 line-clamp-2'>{item.description}</p>
                <div className='pt-2'>
                  <p className='text-sm font-medium text-gray-600'>Contact:</p>
                  <p className='text-sm text-gray-800'>{item.contactInfo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentItems;
