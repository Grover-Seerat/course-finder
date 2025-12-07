import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';
const initialCourses = [
  { id: 1, name: "React Fundamentals", category: "Frontend", instructor: "Sania", description: "Master React from scratch. Learn hooks, state management, and modern React practices.", price: 99, duration: 8, students: 845 },
  { id: 2, name: "Advanced JavaScript", category: "Frontend", instructor: "Jagmohan singh", description: "Deep dive into ES6+, async/await, design patterns, and performance optimization.", price: 129, duration: 10, students: 721 },
  { id: 3, name: "UI/UX Design Principles", category: "Design", instructor: "Maria", description: "Learn design thinking, user research, wireframing, and prototyping.", price: 89, duration: 6, students: 512 },
  { id: 4, name: "Backend with Node.js", category: "Backend", instructor: "Kapil", description: "Build scalable backend systems with Node.js, Express, and MongoDB.", price: 149, duration: 12, students: 623 },
  { id: 5, name: "Flutter Mobile Development", category: "Mobile", instructor: "Kartik", description: "Create beautiful cross-platform mobile apps with Flutter and Dart.", price: 119, duration: 9, students: 934 },
  { id: 6, name: "DevOps & CI/CD", category: "DevOps", instructor: "Khushmita", description: "Master Docker, Kubernetes, Jenkins, and cloud deployment strategies.", price: 159, duration: 11, students: 456 },
  { id: 7, name: "Vue.js Complete Guide", category: "Frontend", instructor: "Sameer", description: "From Vue basics to advanced patterns, Vuex, and Vue Router.", price: 109, duration: 7, students: 389 },
  { id: 8, name: "Python Data Science", category: "Backend", instructor: "Ritika", description: "Learn pandas, numpy, matplotlib, and machine learning with Python.", price: 139, duration: 10, students: 678 },
  { id: 9, name: "iOS Development with Swift", category: "Mobile", instructor: "Rohit", description: "Build native iOS apps using Swift and SwiftUI framework.", price: 149, duration: 12, students: 412 }
];
function App() {
  const [filteredCourses, setFilteredCourses] = useState(initialCourses);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleSearch = (searchTerm, category) => {
    let filtered = initialCourses;
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(course =>
        course.name.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term) ||
        course.description.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term)
      );
    }
    
    // Filter by category
    if (category !== 'All') {
      filtered = filtered.filter(course => course.category === category);
    }
    
    setFilteredCourses(filtered);
  };

  const resetFilters = () => {
    setFilteredCourses(initialCourses);
    setSelectedCategory('All');
  };

  // Styles object
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '20px'
    },
    innerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    },
    headerSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      flexWrap: 'wrap',
      gap: '20px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#111827'
    },
    countText: {
      color: '#6b7280',
      marginTop: '5px'
    },
    resetButton: {
      padding: '10px 20px',
      backgroundColor: 'white',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      color: '#374151',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer'
    },
    footer: {
      marginTop: '60px',
      paddingTop: '30px',
      borderTop: '1px solid #e5e7eb',
      textAlign: 'center',
      color: '#6b7280'
    },
    footerNote: {
      fontSize: '14px',
      marginTop: '8px',
      color: '#9ca3af'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <Header />
        
        <SearchBar 
          onSearch={handleSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <div style={styles.headerSection}>
          <div>
            <h2 style={styles.title}>Available Courses</h2>
            <p style={styles.countText}>
              Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <button
            onClick={resetFilters}
            style={styles.resetButton}
          >
            Reset Filters
          </button>
        </div>
        
        <CourseList courses={filteredCourses} />
        
        <footer style={styles.footer}>
          <p>
            © {new Date().getFullYear()} Course Finder Pro
          </p>
          <p style={styles.footerNote}>
            Built for Marketing Mojito Intern Assignment By Seerat
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;