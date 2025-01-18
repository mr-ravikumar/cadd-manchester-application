import Link from 'next/link';

const Page = () => {
  return (
    <>
      {/* Background Image Section */}
      <section
        className="relative mt-[80px] bg-cover bg-center w-full md:h-[calc(100vh-80px)] h-[40vh] xs:h-[40vh] sm:py-8"
        style={{
          backgroundImage: "url('/about/img1.png')", 
        }}
      >
         {/* Dark Overlay */}
         <div className="absolute top-0 left-0 w-full h-full md:bg-black opacity-40"></div>
      </section>

      {/* Under Development Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Under Development</h2>
          <p className="text-lg text-gray-600">
            We are currently working on this page. Stay tuned for updates!
          </p>
          <p className="text-sm text-gray-500 mt-4">
            In the meantime, feel free to check out other sections of the site.
          </p>
          <Link href="/" className="mt-6 inline-block text-blue-600 hover:text-blue-800 text-lg">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
