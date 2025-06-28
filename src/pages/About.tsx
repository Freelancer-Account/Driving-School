import React from 'react';
import { Award, Users, Car, Clock, CheckCircle, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Safety First',
      description: 'We prioritize safety in every aspect of our training, ensuring students develop defensive driving skills.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Student-Centered',
      description: 'Our teaching approach is tailored to each student\'s learning pace and comfort level.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in instruction quality and customer service.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: 'Integrity',
      description: 'Honest pricing, transparent processes, and genuine care for student success.'
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Kolhe
                <span className="text-blue-700"> Driving School</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For over 20 years, we've been committed to providing the highest quality driving education, 
                helping thousands of students become safe, confident drivers on the road.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">20</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">1500+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide exceptional driving education that empowers individuals with the skills, 
                knowledge, and confidence needed to become safe, responsible drivers. We strive to 
                make roads safer by producing well-trained, defensive drivers who understand the 
                importance of road safety and traffic rules.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading driving school in the region, recognized for our commitment to 
                excellence, innovation in teaching methods, and our contribution to road safety. 
                We envision a future where every driver on the road has received quality education 
                and contributes to a safer driving environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and help us maintain our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Credentials</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Licensed & Certified</h3>
                    <p className="text-blue-100">Fully licensed driving school with certified instructors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Government Approved</h3>
                    <p className="text-blue-100">Approved by the Department of Motor Vehicles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Insured Vehicles</h3>
                    <p className="text-blue-100">All training vehicles are fully insured and maintained</p>
                  </div>
                </div>
                  
                
              </div>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;