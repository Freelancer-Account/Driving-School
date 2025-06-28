import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Bhavi Vaidya',
      course: 'Car Driving Course',
      rating: 5,
      text: 'I recently completed a car driving class from Kolhe driving school and overall , I had a very positive experience Pawan sir was very patient and very clear in his explanations. He had created a very clam environment for the learning.',
      location: 'Balaghat'
    },
    {
      id: 2,
      name: 'Uzair Khan',
      age: 28,
      course: 'Car Driving Course',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Khole Driving School is a great place to learn driving, especially for beginners. The instructors are patient, professional, and make sure you feel confident behind the wheel. They explain road rules clearly and give practical tips that are really helpful during real traffic situations. The vehicles are well-maintained and comfortable to drive. Scheduling classes is easy and flexible, which is perfect for students or working people. They also help with RTO procedures, which saves a lot of time. Overall its a reliable and affordable option for anyone wanting to learn driving properly. Highly recommended!',
      location: 'Balaghat'
    },
    {
      id: 3,
      name: 'Mahi Vaidya',
      age: 32,
      course: 'Car Driving Course',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'I recently completed my driving classes, and overall, it was a valuable experience. The instructor was patient and explained things clearly, especially for a beginner like me. The classes covered everything from basic controls to everything . I appreciated Pawan sir for giving this valuable lesson . Thank you pawan sir',
      location: 'Balaghat'
    },
    {
      id: 4,
      name: 'Prerna Ninawe',
      age: 26,
      course: 'Car Driving Course',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Kolhe driving school is one of the best driving school in balaghat . Pawan sir is friendly & patient and makes learning stress free. He explains every thing in detail .All the traffic rules and instructions are properly explained by him . Pawan sir made me learn driving in 5 days.If you want to learn driving in balaghat than you should choose kolhe driving school.Good teachers are the reason why ordinary students dream to do extraordinary things 🙏 Thankyou you so much Pawan sir 🙏',
      location: 'Balaghat'
    },
    {
      id: 5,
      name: 'Sonali Arje',
      age: 22,
      course: 'Car Driving Course',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Kolhe driving is best driving school in our town.In this u r taught every precaution of driving in detail.Even if u hv never driven a cycle or a bike ,u can come to this school and learn to drive a car very promptly. Here every traffic rule is also taught in details. Thanks to Pawan bhaiya',
      location: 'Balaghat'
    },
    {
      id: 6,
      name: 'Ashmira khan',
      age: 30,
      course: 'Car Driving Course',
      rating: 5,
      image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Thank you Kohle ji for teaching so well. You teach very well while understanding things. Your way of teaching car driving is very good. I learned to drive a car in just 5 days. I was not sure that I would learn so quickly.Your behvior is very good, your teach in a very simple way Thank you so much 🙏🏻',
      location: 'Balaghat'
    }
  ];

  const reviews = [
    { platform: 'Google Reviews', rating: 4.9, reviews: 250, stars: 5 },
    { platform: 'Facebook', rating: 4.8, reviews: 180, stars: 5 },
    { platform: 'Justdial', rating: 4.9, reviews: 120, stars: 5 }
  ];

  const stats = [
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '1500+', label: 'Happy Students' },
    { number: '95%', label: 'First Attempt Pass Rate' },
    { number: '20', label: 'Years of Excellence' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Quote className="h-8 w-8 text-blue-600" />
            <Users className="h-8 w-8 text-orange-500" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Students Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say about their experience with DriveAce.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <div className="absolute top-6 left-6">
              <Quote className="h-12 w-12 text-blue-200" />
            </div>
            <div className="text-center">
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                
                <div className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600">Every student's journey is unique, but the destination is the same - success!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.course}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-4">"{testimonial.text}"</p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Verified Student from {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews from Platforms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Across Platforms</h2>
            <p className="text-xl text-gray-600">See our ratings on popular review platforms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{review.platform}</h3>
                <div className="flex justify-center mb-4">
                  {renderStars(review.stars)}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{review.rating}/5</div>
                <div className="text-gray-600">Based on {review.reviews} reviews</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied students who achieved their driving goals with us.
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default Testimonials;