import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Phone Number',
      details: ['+91 99937 64965'],
      
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: 'WhatsApp',
      details: ['+91 99937 64965'],
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: 'Visit Our Office',
      details: ['Gondia - Balaghat Rd, near Shakti Mobile, Kosmi, Balaghat, Madhya Pradesh 481001'],
      action: 'Get Directions'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your driving journey? Contact us today to book your lessons, 
            ask questions, or visit our facilities. We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info (3 items in a row on desktop) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                
                
              </div>
              
            ))}
            
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              For urgent inquiries or emergency support, contact us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: +91 99937 64965</span>
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
