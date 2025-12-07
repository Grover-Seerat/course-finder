import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';
const initialCourses = [
  { id: 1, name: "React Fundamentals", category: "Frontend", instructor: "Sania Singla", description: "Master React from scratch. Learn hooks, state management, and modern React practices.", price: 10000, duration: 8, students: 845 },
  { id: 2, name: "Advanced JavaScript", category: "Frontend", instructor: "Jagmohan Singh", description: "Deep dive into ES6+, async/await, design patterns, and performance optimization.", price: 8000, duration: 10, students: 721 },
  { id: 3, name: "UI/UX Design Principles", category: "Design", instructor: "Sugandha", description: "Learn design thinking, user research, wireframing, and prototyping.", price: 5000, duration: 6, students: 512 },
  { id: 4, name: "Backend with Node.js", category: "Backend", instructor: "Raghav", description: "Build scalable backend systems with Node.js, Express, and MongoDB.", price: 7000, duration: 12, students: 623 },
  { id: 5, name: "Flutter Mobile Development", category: "Mobile", instructor: "Sirjandeep Singh", description: "Create beautiful cross-platform mobile apps with Flutter and Dart.", price: 10000, duration: 9, students: 934 },
  { id: 6, name: "DevOps & CI/CD", category: "DevOps", instructor: "Khushmita", description: "Master Docker, Kubernetes, Jenkins, and cloud deployment strategies.", price: 7500, duration: 11, students: 456 },
  { id: 7, name: "Vue.js Complete Guide", category: "Frontend", instructor: "Kapil Yadav", description: "From Vue basics to advanced patterns, Vuex, and Vue Router.", price: 5500, duration: 7, students: 389 },
  { id: 8, name: "Python Data Science", category: "Backend", instructor: "Ritika", description: "Learn pandas, numpy, matplotlib, and machine learning with Python.", price: 3500, duration: 10, students: 678 },
  { id: 9, name: "iOS Development with Swift", category: "Mobile", instructor: "Poorvika", description: "Build native iOS apps using Swift and SwiftUI framework.", price: 8500, duration: 12, students: 412 }
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
    if (category !== 'All') {
      filtered = filtered.filter(course => course.category === category);
    } 
    setFilteredCourses(filtered);
  };
  const resetFilters = () => {
    setFilteredCourses(initialCourses);
    setSelectedCategory('All');
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />  
        <SearchBar 
          onSearch={handleSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Available Courses</h2>
            <p className="text-gray-600 mt-1">
              Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
          >
            Reset Filters
          </button>
        </div>
        <CourseList courses={filteredCourses} />
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Course Finder Pro By Seerat
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Built for Marketing Mojito Intern Assignment
          </p>
        </footer>
      </div>
    </div>
  );
}
export default App;