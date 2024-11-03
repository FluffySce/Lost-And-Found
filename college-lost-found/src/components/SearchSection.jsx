import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const allItems = useSelector((state) => state.items.itemsData);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!searchTerm.trim() && searchCategory === "all") {
      setResults([]);
      return;
    }

    const filteredItems = allItems.filter((item) => {
      const matchesTerm =
        searchTerm.trim() === "" ||
        item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        searchCategory === "all" || item.itemCategory === searchCategory;

      return matchesTerm && matchesCategory;
    });

    setResults(filteredItems);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className='container mx-auto py-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>Search Lost Items</h2>

      <div className='max-w-3xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-4 justify-center mb-6'>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border-2 border-gray-300 p-3 rounded-lg flex-grow'
            placeholder='Search by item name or description...'
          />

          <select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className='border-2 border-gray-300 p-3 rounded-lg w-full md:w-48'
          >
            <option value='all'>All Categories</option>
            <option value='Electronics'>Electronics</option>
            <option value='Clothing'>Clothing</option>
            <option value='Documents'>Documents</option>
            <option value='Accessories'>Accessories</option>
            <option value='Other'>Other</option>
          </select>

          <button
            onClick={handleSearch}
            className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200'
          >
            Search
          </button>
        </div>

        <div className='mt-8'>
          {results.length > 0 ? (
            <div className='grid gap-6'>
              {results.map((item, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-200'
                >
                  <div className='flex flex-col md:flex-row gap-6'>
                    {item.image && (
                      <div className='w-full md:w-48 flex-shrink-0'>
                        <img
                          src={item.image}
                          alt={item.itemName}
                          className='w-full h-48 object-cover rounded-lg'
                        />
                      </div>
                    )}
                    <div className='flex-grow space-y-2'>
                      <h3 className='text-xl font-semibold text-gray-800'>
                        {item.itemName}
                      </h3>
                      <p className='text-sm text-gray-600'>
                        Category: {item.itemCategory}
                      </p>
                      <p className='text-sm text-gray-600'>
                        Date: {formatDate(item.date)}
                      </p>
                      <p className='text-gray-700'>{item.description}</p>
                      <div className='pt-2'>
                        <p className='text-sm font-medium text-gray-600'>
                          Contact:
                        </p>
                        <p className='text-sm text-gray-800'>
                          {item.contactInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : searchTerm || searchCategory !== "all" ? (
            <div className='text-center py-8'>
              <p className='text-gray-600 text-lg'>No matching items found</p>
              <p className='text-gray-500 mt-2'>
                Try adjusting your search criteria
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
