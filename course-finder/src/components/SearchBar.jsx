import React, { useState } from 'react';

const SearchBar = ({ onSearch, selectedCategory, setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['All', 'Frontend', 'Backend', 'Design', 'Mobile', 'DevOps'];

  const handleSearch = (e) => {
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

  const styles = {
    searchContainer: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    searchRow: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '20px'
    },
    searchInputContainer: {
      flex: '1',
      position: 'relative'
    },
    searchInput: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      fontSize: '16px',
      border: '1px solid #d1d5db',
      borderRadius: '8px'
    },
    searchIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af'
    },
    categorySelect: {
      width: '100%',
      padding: '16px',
      fontSize: '16px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      backgroundColor: 'white'
    },
    categoryButtons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    categoryButton: {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.searchContainer}>
      <div style={styles.searchRow}>
        <div style={styles.searchInputContainer}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search courses by name, instructor, or topic..."
            value={searchTerm}
            onChange={handleSearch}
            style={styles.searchInput}
          />
        </div>
        
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={styles.categorySelect}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'All' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>
      
      <div style={styles.categoryButtons}>
        {categories.slice(1).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              ...styles.categoryButton,
              backgroundColor: selectedCategory === category ? '#4f46e5' : '#f3f4f6',
              color: selectedCategory === category ? 'white' : '#374151'
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;