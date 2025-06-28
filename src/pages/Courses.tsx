import React from 'react';
import { Car, Truck, Bike, Clock, CheckCircle, Star, Users } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: 'Car Driving Course',
      duration: '15 days',
      lessons: '14 practical + 1 theory',
      features: [
        'Manual transmission',
        'Reverse techniques',
        'Traffic rules & road signs',
        'Defensive driving',
        'Test preparation'
      ],
      popular: true
    },
    
    
  ];

  const packages = [
    {
      name: 'Basic Package',
      price: '₹6,000',
      duration: '10 lessons',
      features: [
        '10 driving lessons (45 min each)',
        'Theory classes included',
        'Practice on local roads',
        'Basic parking techniques',
        'RTO test preparation'
      ]
    },
    {
      name: 'Standard Package',
      price: '₹8,000',
      duration: '15 lessons',
      features: [
        '15 driving lessons (45 min each)',
        'Theory classes included',
        'Highway driving practice',
        'Advanced parking (parallel, reverse)',
        'Mock driving test',
        'RTO test preparation',
        'Free pickup & drop'
      ],
      popular: true
    },
    {
      name: 'Premium Package',
      price: '₹12,000',
      duration: '20 lessons',
      features: [
        '20 driving lessons (1 hour each)',
        'Comprehensive theory course',
        'Night driving practice',
        'Highway & city driving',
        'Advanced maneuvers',
        'Multiple mock tests',
        'RTO test assistance',
        'Free pickup & drop',
        'Insurance coverage'
      ]
    }
  ];

  const specialPrograms = [
    {
      title: 'Fast Track Course',
      description: 'Complete your driving course in just 7 days',
      duration: '7 days',
      icon: <Clock className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Weekend Classes',
      description: 'Perfect for working professionals',
      duration: 'Saturdays & Sundays',
      icon: <Users className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Ladies Special',
      description: 'Exclusive batches for women with female instructors',
      duration: 'Flexible',
      icon: <Star className="h-6 w-6 text-pink-600" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Driving Course & Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of driving courses designed to meet your specific needs and schedule
          </p>
        </div>
      </section>

      {/* Main Courses */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600">Professional training for all vehicle types</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border ${course.popular ? 'border-blue-500 border-2' : 'border-gray-200'}`}>
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    
                  </div>
                )}
                <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-xl mb-6">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-sm text-gray-500">{course.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{course.lessons}</div>
                    <div className="text-sm text-gray-500">Total lessons</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600">Flexible packages to suit your learning needs and budget</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${pkg.popular ? 'border-2 border-blue-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.duration}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Programs</h2>
            <p className="text-xl text-gray-600">Customized programs for specific needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    <p className="text-sm text-gray-600">{program.duration}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Choose your course and begin your journey to becoming a confident driver today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-200">
              Download Course Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;