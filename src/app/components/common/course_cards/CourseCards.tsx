import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Course {
  logo: string;
  name: string;
}

const CourseCards: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/assets/coursesData.json'); 
      const data: Course[] = await response.json();
      setCourses(data);
    };

    fetchData();
  }, []);

  return (
    <div className="course-cards-container py-6 px-4 sm:px-6 md:px-8 lg:px-[56px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-8 md:gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-card w-full bg-white shadow-md rounded-lg text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            {/* Course Logo */}
            <div className="course-logo-container relative w-full h-20 sm:h-20 md:h-20 lg:h-24">
              <Image
                src={course.logo}
                alt={course.name}
                width={40} 
                height={80}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-6 sm:h-6 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
              />
            </div>

            {/* Course Name */}
            <div className="course-name-container ">
              <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-gray-800">{course.name}</h3>
            </div>

            {/* Learn More Button */}
            <div className="learn-more-button-container p-1 sm:p-2 md:p-3">
              <button className="relative top-4 text-white bg-[rgba(0,15,102,1)] hover:bg-blue-700 py-2 sm:py-1.5 md:py-2 px-4 sm:px-5 md:px-4 rounded-2xl transition duration-300 text-[10px] lg:text-[10px] lg:top-7">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;