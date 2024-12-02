import React from 'react';
import { Users, ThumbsUp, Timer, Wrench } from 'lucide-react';

const stats = [
  {
    icon: <Users size={40} />,
    value: '500+',
    label: 'Happy Clients'
  },
  {
    icon: <ThumbsUp size={40} />,
    value: '1000+',
    label: 'Projects Completed'
  },
  {
    icon: <Timer size={40} />,
    value: '18+',
    label: 'Years Experience'
  },
  {
    icon: <Wrench size={40} />,
    value: '24/7',
    label: 'Support Available'
  }
];

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="ComfortZone kitchen installation"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose ComfortZone?
            </h2>
            <p className="text-gray-600 mb-8">
              Since 2005, ComfortZone has been at the forefront of commercial kitchen excellence. 
              Our commitment to innovation, quality, and customer satisfaction has made us the 
              preferred choice for businesses across the nation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-600 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;