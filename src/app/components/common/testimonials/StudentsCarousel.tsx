import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import studentsData from '../../../../../public/assets/students_review.json';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const totalCards = studentsData.length;

  // Function to automatically move the carousel to the left
  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalCards]);

  // Function to determine the number of cards visible based on screen width
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 5;
      if (window.innerWidth >= 768) return 3;
      return 3;
    }
    return 3;
  };

  useEffect(() => {
    if (isClient) {
      // Update visible cards when window is resized
      const handleResize = () => {
        setVisibleCards(getVisibleCards());
      };
      setVisibleCards(getVisibleCards());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isClient]);

  const customBoxShadow = "-2px 2px 26px 4px rgba(0, 140, 255, 0.1)";
  const backgroundImagePath = "/home/Testimonial_card.png";

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full mx-auto overflow-hidden pt-10 pb-28">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
        }}
      >
        {/* Loop through studentsData and display cards */}
        {studentsData.concat(studentsData).map((student, index) => {
          const isCenter =
            index === currentIndex + Math.floor(visibleCards / 2) ||
            index === currentIndex + Math.floor(visibleCards / 2) + totalCards;

          const uniqueKey = `${student.id}-${index}`;

          return (
            <div
              key={uniqueKey}
              className={`relative flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                isCenter ? 'scale-110 shadow-2xl mx-4' : 'scale-90 opacity-80'
              }`}
              style={{
                boxShadow: customBoxShadow,
                width: `${100 / visibleCards}%`,
                transform: isCenter ? 'scale(1.02)' : 'scale(0.9)',
                transition: 'transform 0.3s ease-in-out',
                overflow: 'hidden',
                marginLeft: isCenter ? '0px' : '',
                marginRight: isCenter ? '0px' : '',
                transformOrigin: 'center center',
                maxWidth: window.innerWidth < 768 ? '50%' : '',
                borderRadius:'20px'
              }}
            >
              <div
                className="flex flex-col items-center p-4"
                style={{
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  position: 'relative',
                  backgroundImage: `url(${backgroundImagePath})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px',
                }}
              >
                {/* Profile Image */}
                <Image
                  src={student.avatar} // Use the student's avatar image
                  alt={student.name} // Set alt text to the student's name
                  className={`rounded-full mb-4 ${window.innerWidth < 768 ? 'w-12 h-12' : window.innerWidth < 1024 ? 'w-16 h-16' : 'w-20 h-20'}`}
                  width={window.innerWidth < 768 ? 48 : window.innerWidth < 1024 ? 64 : 80} // Set width based on screen size
                  height={window.innerWidth < 768 ? 48 : window.innerWidth < 1024 ? 64 : 80} // Set height based on screen size
                  style={{ zIndex: 2 }}
                />

                {/* Student Name */}
                <h3
                  className={`font-semibold text-center ${window.innerWidth < 768 ? 'text-xs' : window.innerWidth < 1024 ? 'text-sm' : 'text-lg'}`}
                  style={{
                    marginBottom: '8px',
                    zIndex: 2,
                    color: 'black',
                  }}
                >
                  {student.name}
                </h3>

                {/* Student Review */}
                <p
                  className={`md:ml-8 text-left ${window.innerWidth < 768 ? 'text-[8px] ml-2' : window.innerWidth < 1024 ? 'text-sm' : 'text-base'}`}
                  style={{
                    marginBottom: '20px',
                    zIndex: 2,
                    color: 'black',
                  }}
                >
                  {student.review}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
