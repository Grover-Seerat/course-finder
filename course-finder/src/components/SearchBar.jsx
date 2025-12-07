import React, { useState } from 'react';
const SearchBar = ({ onSearch, selectedCategory, setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['All', 'Frontend', 'Backend', 'Design', 'Mobile', 'DevOps'];
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, selectedCategory);
  };
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onSearch(searchTerm, value);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSearch(searchTerm, category);
  };
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses by name, instructor, or topic..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>
        </div>
        <div className="w-full md:w-48">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none appearance-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              ▼
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.slice(1).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? 'bg-purple-500 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
export default SearchBar;