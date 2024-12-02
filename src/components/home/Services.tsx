import React from 'react';
import { PenTool, Settings, Hammer, Shield } from 'lucide-react';

const services = [
  {
    icon: <PenTool size={40} />,
    title: 'Custom Design',
    description: 'Tailored kitchen layouts optimized for workflow and efficiency.',
  },
  {
    icon: <Settings size={40} />,
    title: 'Manufacturing',
    description: 'High-quality stainless steel equipment and custom fixtures.',
  },
  {
    icon: <Hammer size={40} />,
    title: 'Installation',
    description: 'Professional installation and fitting services.',
  },
  {
    icon: <Shield size={40} />,
    title: 'Maintenance',
    description: 'Regular maintenance and prompt repair services.',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete commercial kitchen solutions from design to installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-amber-700 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;