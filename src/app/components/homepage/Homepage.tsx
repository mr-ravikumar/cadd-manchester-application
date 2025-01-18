import React, { useEffect, useState } from "react";
import Cards from "../common/home_cards/Cards";
import CourseCards from "../common/course_cards/CourseCards";
import Image from "next/image";
import StatsSection from "../stats/Stats";
import Testimonial from "../common/testimonials/StudentsCarousel";

const HomePage = () => {
  const [currentHeading, setCurrentHeading] = useState("English Speaking Courses");
  const [isVisible, setIsVisible] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
    course: "",
  });

  const courseHeadings = [
    "English Speaking Courses",
    "Web Development Courses",
    "Data Science Courses",
    "Graphic Design Courses",
    "Digital Marketing Courses",
  ];

  // Form validation
  const isFormValid =
    formValues.firstName &&
    formValues.lastName &&
    formValues.contactNumber &&
    formValues.emailAddress &&
    formValues.course;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Cycle through course headings every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentHeading((prev) => {
          const currentIndex = courseHeadings.indexOf(prev);
          const nextIndex = (currentIndex + 1) % courseHeadings.length;
          return courseHeadings[nextIndex];
        });
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [courseHeadings]);

  return (
    <>
      <section
        className="relative mt-[50px] sm:mt-[85px] lg:mt-[90px] bg-cover bg-center w-full min-h-[58vh] md:min-h-[50vh] sm:min-h-[50vh] lg:min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5)), url('https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-mobile-website-background-with-3d-computer-phone-and-book-for-digital-image_3750846.jpg')",
        }}
      >
        <div className="text-center px-4 md:px-8 w-full max-w-5xl">
          <h2
            style={{
              animation: isVisible
                ? "slideUp 0.3s ease-out forwards"
                : " 0.3s ease-in forwards",
            }}
            className="text-[#000F66] font-inter font-black text-lg sm:text-xl md:text-2xl"
          >
            {currentHeading}
          </h2>
          <h1 className="text-[#000F66] font-inter font-black text-2xl sm:text-4xl md:text-6xl lg:text-[5rem] mt-4 leading-tight">
            Shape Futures with <br /> Education
          </h1>
          <p className="text-[#000F66] font-inter mt-6 text-sm sm:text-base px-[10%] md:px-[15%] md:text-lg lg:text-xl leading-relaxed">
            CADD Manchester Academy – Empowering careers with 3+ years of experience in skill
            development. Offering offline and online training across India. Providing
            industry-relevant courses tailored to meet professional demands. Transforming learners
            into skilled professionals for a brighter future.
          </p>
          <div className="mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#000F66] text-white py-3 px-6 font-inter text-sm sm:text-lg rounded-full hover:bg-[#003b99] transition duration-300"
            >
              Try Demo Class Free
            </button>
{/* Form part starts */}
            {showForm && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white w-full max-w-lg rounded-3xl shadow-lg p-8">
                  <h2 className="text-xl font-bold text-center mb-6">Sign Up for Demo Class</h2>

                  <form className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {/* First Name* */}
                        </label>
                        <input
                         placeholder=" First Name*"
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formValues.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {/* Last Name* */}
                        </label>
                        <input
                        placeholder="Last Name*"
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formValues.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="contactNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {/* Contact Number* */}
                      </label>
                      <input
                      placeholder="Contact Number*"
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formValues.contactNumber}
                        onChange={handleInputChange}
                        className="w-full block text-sm font-medium text-gray-700 mb-1w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="emailAddress"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {/* Email Address* */}
                      </label>
                      <input
                      placeholder=" Email Address*"
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formValues.emailAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="course"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {/* Which Course You Learn* */}
                      </label>
                      <textarea
                        placeholder="Which Course You Want to Learn*"
                        id="course"
                        name="course"
                        value={formValues.course}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-[150px] placeholder-black"
                        required
                      />
                    </div>
                    <div>
                    <button
                    type="submit"
                    className={`w-[155px] py-2 rounded-[20px] ${
                      isFormValid
                        ? "bg-[#000F66] text-white hover:bg-[#003b99]"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                    disabled={!isFormValid}
                      >
                        Submit Message
                      </button>
                    </div>
                  </form>
{/* Form part ends */}

                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="transition-transform transition-opacity duration-1000 ease-in-out">
        <div
          className="py-16 text-center px-4"
          style={{
            background:
              "linear-gradient(109.7deg, rgba(121, 176, 223, 0.18) -0.75%, rgba(91, 18, 133, 0.08) 123.88%)",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mt-8">
            Elevate your journey with our expertly designed courses
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Bridge the gap between where you are and where you want to be with our expert guidance
          </p>
          <Cards />
        </div>
      </div>
      <StatsSection />
      <div className="py-16 text-center px-4 bg-[rgba(246,246,246,0.8)]">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mt-8">
          Prepare for exams with guidance from expert instructors
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Get expert coaching, valuable exam tips, and personalized strategies to boost your
          confidence and ensure you’re fully prepared for the exam.
        </p>
        <CourseCards />
      </div>
      <div className="bg-[radial-gradient(73.44%_47%_at_50%_47.99%,_rgba(0,_140,_255,_0.14)_0%,_rgba(0,_140,_255,_0)_100%)]">
        <div className="mt-20 flex justify-center items-center px-4">
          <div className="relative w-full max-w-6xl h-[320px] sm:h-[300px] md:h-[350px] bg-white shadow-[0px_0px_42px_1px_rgba(0,_140,_255,_0.12)] rounded-[20px] opacity-100">
            <div className="flex flex-col mt-8 h-full px-6 sm:px-10 py-6 relative z-20">
              <div className="text-center sm:z-20 mt-10">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                  What are students saying!
                </h2>
                <span className="block mt-2 w-32 sm:w-52 md:w-32 mx-auto border-t-4 border-blue-500"></span>
              </div>
            </div>
            <div className="absolute top-6 left-6 z-10">
              <Image
                src="/home/text-icon.svg"
                alt="Image description"
                width={80}
                height={80}
                className="mt-8 ml-8 w-16 h-16 sm:w-20 sm:h-10 md:w-24 md:h-24"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 -mt-[200px]">
        <Testimonial />
      </div>
    </>
  );
};

export default HomePage;
