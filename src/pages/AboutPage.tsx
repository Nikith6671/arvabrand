import React from 'react';
import { Target, Users, Award, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About ARVA
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're more than just a clothing brand. We're a lifestyle, a statement, 
          and a community of individuals who dare to express themselves.
        </p>
      </div>

      {/* Brand Story */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2024, ARVA emerged from a simple belief: fashion should be accessible, 
            sustainable, and expressive. We started with the vision to create premium clothing 
            that doesn't compromise on quality or ethics.
          </p>
          <p className="text-gray-700 mb-4">
            Our name "ARVA" represents the modern individual who values authenticity, 
            quality, and self-expression. Every piece in our collection is thoughtfully 
            designed to help you wear your vibe with confidence.
          </p>
          <p className="text-gray-700">
            From our sustainable manufacturing processes to our inclusive sizing, 
            we're committed to making fashion that feels good and does good.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
            alt="ARVA Story"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything we do is guided by our core values and commitment to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Target className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600">
              We never compromise on quality. Every stitch, every fabric choice is made with care.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              We believe in building a community of like-minded individuals who support each other.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Award className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              Committed to ethical manufacturing and sustainable practices in everything we do.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Heart className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Authenticity</h3>
            <p className="text-gray-600">
              We encourage authentic self-expression through fashion that makes you feel confident.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          The passionate individuals behind ARVA who work tirelessly to bring you the best in fashion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Arjun Mehta</h3>
            <p className="text-gray-600 mb-2">Founder & CEO</p>
            <p className="text-sm text-gray-500">
              Visionary leader with 10+ years in fashion industry
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Priya Sharma</h3>
            <p className="text-gray-600 mb-2">Creative Director</p>
            <p className="text-sm text-gray-500">
              Award-winning designer with a passion for sustainable fashion
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Rohit Patel</h3>
            <p className="text-gray-600 mb-2">Operations Manager</p>
            <p className="text-sm text-gray-500">
              Ensures quality and timely delivery of every order
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the ARVA Community</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Be part of our journey as we continue to redefine fashion. 
          Follow us on social media and stay updated with our latest collections.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Follow on Instagram
          </a>
          <a href="#" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors">
            Newsletter
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;