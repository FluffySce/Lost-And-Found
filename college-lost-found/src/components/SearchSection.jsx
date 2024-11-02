import React, { useState } from 'react';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock search logic
    const mockItems = [
      { id: 1, name: 'Blue Backpack' },
      { id: 2, name: 'iPhone 12' },
      { id: 3, name: 'Wallet' },
    ];
    const filteredItems = mockItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredItems);
  };

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Search Items</h2>
      <div className="flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-80"
          placeholder="Search for lost items..."
        />
        <button onClick={handleSearch} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Search
        </button>
      </div>
      <div className="mt-8">
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map(item => (
              <li key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-md">{item.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No items found</p>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
