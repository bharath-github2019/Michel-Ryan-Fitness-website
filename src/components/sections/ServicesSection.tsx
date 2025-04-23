import React from 'react';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '../ui/ServiceCard';
import { 
  Heart, 
  ActivitySquare, 
  Dumbbell, 
  Utensils, 
  UserPlus, 
  Scale 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Try Workout",
    description: "A complimentary session to assess your fitness level and design a personalized program.",
    icon: ActivitySquare,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Posture Correction",
    description: "Expert guidance to fix posture issues and prevent injuries during workouts.",
    icon: UserPlus,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Cardio Fitness",
    description: "Specialized programs to improve heart health, endurance, and calorie burning.",
    icon: Heart,
    color: "bg-red-500",
  },
  {
    id: 4,
    title: "Weight Training",
    description: "Build strength, tone muscles, and increase metabolism with personalized weight training.",
    icon: Dumbbell,
    color: "bg-purple-500",
  },
  {
    id: 5,
    title: "Diet Planning",
    description: "Custom nutrition plans that complement your fitness goals and lifestyle.",
    icon: Utensils,
    color: "bg-yellow-500",
  },
  {
    id: 6,
    title: "Body Composition",
    description: "Regular measurements and adjustments to optimize fat loss and muscle gain.",
    icon: Scale,
    color: "bg-indigo-500",
  }
];

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">MY SERVICES</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive fitness solutions tailored to your specific needs and goals.
            Each service is designed to maximize your results and transform your lifestyle.
          </p>
        </div>

        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#book" 
            className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
          >
            Book a Session Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;