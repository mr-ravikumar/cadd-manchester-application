import { useEffect, useState } from 'react';

const StatsSection = () => {
  // State to store the numbers for counting animation
  const [delightedCount, setDelightedCount] = useState<number>(0);
  const [coursesCount, setCoursesCount] = useState<number>(0);
  const [practiceTestCount, setPracticeTestCount] = useState<number>(0);
  const [placementPartnersCount, setPlacementPartnersCount] = useState<number>(0);
  
  // State to track if animation is already triggered
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // Animation settings for counting
  const countUp = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    let current = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      if (current < target) {
        current += increment;
        setter(current);
      } else {
        clearInterval(interval);
        setter(target); 
      }
    }, 10);
  };

  useEffect(() => {
    // Trigger the counting animation once the section is visible
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element && !animationTriggered) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setAnimationTriggered(true); 
          countUp(2000, setDelightedCount);
          countUp(25, setCoursesCount);
          countUp(1000, setPracticeTestCount);
          countUp(100, setPlacementPartnersCount);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationTriggered]); 

  return (
    <section 
      id="stats-section" 
      className="relative bg-cover bg-center py-20 px-8 sm:px-16 lg:px-32" 
      style={{ backgroundImage: 'url("home/stats.png")' }}
    >
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">A Reliable Partner in Every Student’s Journey</h2>
        <p className="text-lg mb-8">Don’t just hear about it—see the success through the figures!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-4 sm:p-6 transform transition-all duration-500 hover:scale-105">
            <div className="text-3xl sm:text-4xl font-bold">{delightedCount}+</div>
            <div className="mt-2 text-lg sm:text-xl">Delighted Students</div>
          </div>

          <div className="flex flex-col items-center p-4 sm:p-6 transform transition-all duration-500 hover:scale-105">
            <div className="text-3xl sm:text-4xl font-bold">{coursesCount}+</div>
            <div className="mt-2 text-lg sm:text-xl">Courses</div>
          </div>

          <div className="flex flex-col items-center p-4 sm:p-6 transform transition-all duration-500 hover:scale-105">
            <div className="text-3xl sm:text-4xl font-bold">{practiceTestCount}+</div>
            <div className="mt-2 text-lg sm:text-xl">Practice Tests</div>
          </div>

          <div className="flex flex-col items-center p-4 sm:p-6 transform transition-all duration-500 hover:scale-105">
            <div className="text-3xl sm:text-4xl font-bold">{placementPartnersCount}+</div>
            <div className="mt-2 text-lg sm:text-xl">Placement Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
