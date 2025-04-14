import { FaCarCrash } from "react-icons/fa";
import bg_img_1 from "./../assets/images/image/bg_img_1.png";

export default function NotFound() {
  return (
    <section
            className="bg-cover bg-center bg-fixed bg-no-repeat bg-black min-h-screen"
            style={{ backgroundImage: `url(${bg_img_1})` }}
          >
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6">
      {/* Minimalist tire track design */}
      <div className="w-full max-w-md flex justify-center mb-6">
        <div className="relative h-16">
          <div className="absolute w-full h-6 bg-gray-100 top-5"></div>
          <div className="absolute w-full flex justify-between">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-6 h-16 flex flex-col justify-between">
                <div className="w-8 h-3 bg-gray-300"></div>
                <div className="w-8 h-3 bg-gray-300"></div>
              </div>
            ))}
          </div>
          {/* Red warning triangle */}
          <div className="absolute left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-10 bg-red-500 clip-triangle flex items-center justify-center text-white font-bold">
              !
            </div>
          </div>
        </div>
      </div>
      
      {/* Error message */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-medium mb-4">Road Ends Here</h2>
        <div className="w-36 h-1 bg-red-500 mx-auto mb-6"></div>
        <h1 className="text-5xl text-red-500 font-bold mb-2">404 <span className="text-white">PAGE NOT FOUND</span></h1>
        <p className="text-white max-w-md">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
      </div>
      
      {/* CTA button */}
      <a 
        href="/" 
        className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors duration-200"
      >
        <FaCarCrash className="w-4 h-4 mr-2" />
        Return to Garage
      </a>
      
      {/* Subtle footer
      <p className="text-gray-400 text-sm mt-12">
        Need emergency roadside assistance? Call (555) 123-4567
      </p> */}
      
      {/* CSS for triangle */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
    </section>
  );
}