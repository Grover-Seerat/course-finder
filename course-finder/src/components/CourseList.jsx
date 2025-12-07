import React from 'react';
const CourseList = ({ courses }) => {
  const getCategoryColor = (category) => {
    const colors = {
      Frontend: 'bg-blue-100 text-blue-800',
      Backend: 'bg-green-100 text-green-800',
      Design: 'bg-purple-100 text-purple-800',
      Mobile: 'bg-orange-100 text-orange-800',
      DevOps: 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };
  if (courses.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-gray-700 mb-3">No courses found</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Try adjusting your search terms or select a different category
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(course.category)}`}>
                {course.category}
              </span>
              <div className="text-2xl">📘</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{course.name}</h3>
            <p className="text-gray-600 mb-6 line-clamp-3">{course.description}</p>
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                  {course.instructor.charAt(0)}
                </div>
                <span className="font-medium text-gray-700">{course.instructor}</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">Rs.{course.price}</div>
                <div className="text-sm text-gray-500">per month</div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{course.duration} weeks</span>
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${Math.min(100, (course.students / 1000) * 100)}%` }}
                ></div>
              </div>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all">
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CourseList;