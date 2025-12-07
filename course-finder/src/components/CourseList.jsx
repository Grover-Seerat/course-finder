import React from 'react';

const CourseList = ({ courses }) => {
  const getCategoryStyle = (category) => {
    const styles = {
      Frontend: { backgroundColor: '#dbeafe', color: '#1e40af' },
      Backend: { backgroundColor: '#d1fae5', color: '#065f46' },
      Design: { backgroundColor: '#f3e8ff', color: '#5b21b6' },
      Mobile: { backgroundColor: '#fed7aa', color: '#9a3412' },
      DevOps: { backgroundColor: '#fecaca', color: '#991b1b' }
    };
    return styles[category] || { backgroundColor: '#e5e7eb', color: '#374151' };
  };

  const componentStyles = {
    container: {
      minHeight: '100vh'
    },
    noCourses: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '60px 40px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    noCoursesIcon: {
      fontSize: '48px',
      marginBottom: '20px'
    },
    noCoursesTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '12px'
    },
    noCoursesText: {
      color: '#6b7280'
    },
    courseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '24px'
    },
    courseCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    categoryBadge: {
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600'
    },
    courseIcon: {
      fontSize: '24px'
    },
    courseTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '12px'
    },
    courseDescription: {
      color: '#6b7280',
      marginBottom: '20px',
      lineHeight: '1.5'
    },
    courseInfo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
      paddingTop: '20px',
      borderTop: '1px solid #f3f4f6'
    },
    instructorInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    instructorAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#4f46e5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold'
    },
    instructorName: {
      fontWeight: '600',
      color: '#374151'
    },
    priceSection: {
      textAlign: 'right'
    },
    price: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#4f46e5'
    },
    priceLabel: {
      fontSize: '12px',
      color: '#9ca3af'
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '12px'
    },
    progressBar: {
      width: '100%',
      height: '6px',
      backgroundColor: '#e5e7eb',
      borderRadius: '3px',
      marginBottom: '20px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      borderRadius: '3px'
    },
    enrollButton: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#4f46e5',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  if (courses.length === 0) {
    return (
      <div style={componentStyles.noCourses}>
        <div style={componentStyles.noCoursesIcon}>🔍</div>
        <h3 style={componentStyles.noCoursesTitle}>No courses found</h3>
        <p style={componentStyles.noCoursesText}>
          Try adjusting your search or select a different category
        </p>
      </div>
    );
  }

  return (
    <div style={componentStyles.courseGrid}>
      {courses.map((course) => {
        const categoryStyle = getCategoryStyle(course.category);
        const progressPercentage = Math.min(100, (course.students / 1000) * 100);
        
        return (
          <div key={course.id} style={componentStyles.courseCard}>
            <div style={componentStyles.cardHeader}>
              <span style={{ ...componentStyles.categoryBadge, ...categoryStyle }}>
                {course.category}
              </span>
              <span style={componentStyles.courseIcon}>📘</span>
            </div>
            
            <h3 style={componentStyles.courseTitle}>{course.name}</h3>
            <p style={componentStyles.courseDescription}>{course.description}</p>
            
            <div style={componentStyles.courseInfo}>
              <div style={componentStyles.instructorInfo}>
                <div style={componentStyles.instructorAvatar}>
                  {course.instructor.charAt(0)}
                </div>
                <span style={componentStyles.instructorName}>{course.instructor}</span>
              </div>
              <div style={componentStyles.priceSection}>
                <div style={componentStyles.price}>Rs.{course.price}</div>
                <div style={componentStyles.priceLabel}>per month</div>
              </div>
            </div>
            <div style={componentStyles.stats}>
              <span>{course.duration} weeks</span>
              <span>{course.students} students</span>
            </div>           
            <div style={componentStyles.progressBar}>
              <div 
                style={{ 
                  ...componentStyles.progressFill,
                  width: `${progressPercentage}%`,
                  backgroundColor: categoryStyle.color
                }}
              />
            </div>
            <button style={componentStyles.enrollButton}>
              Enroll Now
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default CourseList;