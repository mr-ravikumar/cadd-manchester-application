const Page = () => {
  return (
    <>
      {/* Background Image Section */}
      <section
        className="relative mt-[80px] bg-cover bg-center w-full md:h-[calc(100vh-80px)] h-[40vh] xs:h-[40vh] sm:py-8"
        style={{
          backgroundImage: "url('/about/image.jpg')", 
        }}
      >
         {/* Dark Overlay */}
         <div className="absolute top-0 left-0 w-full h-full md:bg-black opacity-40"></div>
      </section>
      <section
        className="relative mt-0 lg:mt-[70px] w-full sm:py-8 pt-0" 
      >
        {/* Layout for Larger Screens */}
        <div className="flex flex-col lg:flex-row justify-center px-4 mt-0 mb-16"> 
          
          <div className="lg:w-[35%] md:w-full md:h-[400px] mt-6 lg:mb-0 lg:mr-8 lg:ml-8 mx-4 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.971382368237!2d77.27502737407531!3d28.63061978417011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3bd6098fa13%3A0x5f111c4431472261!2sCADD%20Manchester%20Academy!5e0!3m2!1sen!2sin!4v1733154633771!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* About Section (Right Side on Large Devices) */}
          <div className="lg:w-[60%] w-full px-4 text-black mb-8"> 
            <h2 className="text-2xl font-bold mb-4">About CADD Manchester</h2>
            <hr className="border-t-2 border-gray-300 mb-4" />
            <p className="text-sm mb-8">
              In the past few years, the best digital marketing in Laxmi Nagar, Delhi has become a popular career choice. It’s an excellent choice for those wanting a stable and reliable income.<br/><br/>
              Unlike regular jobs, CADD Manchester’s Digital Marketing course gives you many advantages. You can work from home, on your own time, or get a good-paying job with a well-known company.<br/><br/>

              The digital marketing courses in Laxmi Nagar have greatly affected the market and opened up many new opportunities. Whether you’re looking for a job or you’re a business owner, learning Internet marketing can help. Today, because so many things are done online, businesses need to ensure they have a strong presence on the internet. That’s why they hire digital marketing experts to help them get noticed online and succeed.
            </p>

            {/* Join Us Button */}
            <div className="">
              <a href="/join-us" className="inline-block px-4 py-2 bg-[#222B57] text-white text-xl rounded-sm hover:text-black transition">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
