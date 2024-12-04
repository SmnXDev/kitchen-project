import { Link } from 'react-router-dom';
import { ChefHat, Award, Clock } from 'lucide-react';
import kitchen from "../../images/kitchen.jpg"

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${kitchen})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Creating Perfect Commercial Kitchen Spaces
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              ComfortZone delivers excellence in commercial kitchen design, manufacturing, and installation for restaurants, hotels, and food courts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition text-center">
                Request Consultation
              </Link>
             
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-white">
                <ChefHat size={24} className="text-blue-400" />
                <span>Expert Design</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Award size={24} className="text-blue-400" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Clock size={24} className="text-blue-400" />
                <span>Timely Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;