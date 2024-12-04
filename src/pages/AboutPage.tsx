import React from 'react';
import { Award, Leaf, Target } from 'lucide-react';

const values = [
  {
    icon: <Award className="w-8 h-8 text-blue-600 mb-4" />,
    title: 'Excellence',
    description: 'Maintaining the highest standards in everything we do.'
  },
  {
    icon: <Leaf className="w-8 h-8 text-blue-600 mb-4" />,
    title: 'Sustainability',
    description: 'Committed to environmental responsibility in all our operations.'
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600 mb-4" />,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge solutions.'
  }
];

const AboutPage = () => {
  return (
    <div >
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About ComfortZone</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Company headquarters"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
            At ComfortZone, we specialize in creating exceptional commercial kitchen solutions tailored to meet the unique needs of your business. From our humble beginnings as a small kitchen equipment supplier, we have grown into a trusted leader in the industry.

Our journey has been defined by innovation, attention to detail, and an unwavering commitment to quality. We understand the importance of designing and fitting efficient, high-performance kitchens that elevate functionality and style.
            </p>
            <p className="text-gray-600">

            Today, we proudly serve clients nationwide, working with skilled professionals who share our passion for crafting seamless and reliable kitchen spaces. From concept to installation, ComfortZone is your trusted partner in delivering the ultimate commercial kitchen experience.

Let’s build your perfect kitchen together.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                {value.icon}
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                position: 'Chief Executive Officer',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Sarah Johnson',
                position: 'Operations Director',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Michael Chen',
                position: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;