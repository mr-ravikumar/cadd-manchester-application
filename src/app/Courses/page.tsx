"use client";
import React, { useState } from "react";
import coursesData from "../../../public/assets/courses.json"; // Import the JSON file

interface Course {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
}

const CoursesPage = () => {
  // State to hold the selected course details, with an initial value of undefined
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>(coursesData[0]);

  // Function to handle course selection
  const handleCourseSelect = (courseId: number) => {
    const course = coursesData.find((course) => course.id === courseId);
    setSelectedCourse(course);
  };

  return (
    <div className="flex flex-col md:flex-row mt-[80px]">
      {/* Left Side: List of Courses */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 md:h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseSelect(course.id)}
              className="cursor-pointer p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{course.description.substring(0, 60)}...</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Course Details */}
      <div className="w-full md:w-2/3 p-6 md:ml-1/3 bg-white md:h-screen">
        {selectedCourse ? (
          <>
            <h2 className="text-2xl font-semibold">{selectedCourse.name}</h2>
            <p className="mt-4">{selectedCourse.description}</p>
            <div className="mt-6">
              <p><strong>Duration:</strong> {selectedCourse.duration}</p>
              <p><strong>Price:</strong> {selectedCourse.price}</p>
            </div>
          </>
        ) : (
          <p>Please select a course to view details.</p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
