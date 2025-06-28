import React from 'react';
import { Car, CheckCircle, Star, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expert Instructors',
      description: 'Certified and experienced driving instructors with proven track records.'
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: 'Maintained Vehicles',
      description: 'Well-maintained cars with dual controls and safety features.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'High Pass Rate',
      description: '95% of our students pass their driving test on the first attempt.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Flexible Schedule',
      description: 'Choose your convenient time slots including weekends and evenings.'
    }
  ];

  const stats = [
    { number: '1500+', label: 'Students Trained' },
    { number: '20', label: 'Years Experience' },
    { number: '2', label: 'Expert Instructors' },
    { number: '95%', label: 'Pass Rate' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Learn to Drive with 
                <span className="text-orange-400"> Confidence</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional driving lessons with expert instructors. Get your license fast and safe with our proven teaching methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-200">
                  Call Now: +91 99937 64965
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                
              </div>
            </div>
            <div className="relative">
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">License Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kolhe Driving School?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best driving education with personalized attention and modern teaching methods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Driving Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied students who learned to drive with us. Book your first lesson today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;