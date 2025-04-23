import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Dumbbell, Award, Clock, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT MICHAEL</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet your dedicated fitness coach committed to helping you achieve your health and fitness goals.
          </p>
        </div>

        <div 
          ref={ref} 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Image Column */}
          <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Michael Ryan - Fitness Coach"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Your Journey to Fitness Excellence Starts Here
            </h3>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              With over 10 years of experience in personal training and fitness coaching, I've helped hundreds of clients 
              transform their bodies and lives. My approach combines science-based exercise programming with personalized 
              nutrition guidance to deliver lasting results.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              I believe fitness is more than just physical—it's a mindset that empowers you in all aspects of life. 
              My mission is to guide you through your fitness journey with expert knowledge, unwavering support, and 
              the motivation you need to succeed.
            </p>

            {/* Stats and Credentials */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <Award className="text-red-600 mb-2" size={32} />
                <p className="font-bold text-xl">Certified</p>
                <p className="text-gray-600 text-center">NASM PT, CrossFit L2</p>
              </div>
              
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <Clock className="text-red-600 mb-2" size={32} />
                <p className="font-bold text-xl">10+ Years</p>
                <p className="text-gray-600 text-center">Professional Experience</p>
              </div>
              
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <Dumbbell className="text-red-600 mb-2" size={32} />
                <p className="font-bold text-xl">500+</p>
                <p className="text-gray-600 text-center">Workouts Created</p>
              </div>
              
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <Users className="text-red-600 mb-2" size={32} />
                <p className="font-bold text-xl">300+</p>
                <p className="text-gray-600 text-center">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;