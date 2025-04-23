import React from 'react';
import { useInView } from 'react-intersection-observer';
import PricingCard from '../ui/PricingCard';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: "Chihuahua",
    price: 30,
    description: "Perfect for beginners looking to start their fitness journey.",
    features: [
      "1 weekly online session",
      "Basic workout plan",
      "Email support",
      "Monthly progress check-in",
      "Access to fitness app"
    ],
    recommended: false,
    buttonText: "Get Started"
  },
  {
    id: 2,
    name: "Labrador",
    price: 49,
    description: "Our most popular plan for committed fitness enthusiasts.",
    features: [
      "2 weekly online sessions",
      "Customized workout plan",
      "Priority email support",
      "Bi-weekly progress check-ins",
      "Nutrition guidance",
      "Access to premium app features",
      "24/7 chat support"
    ],
    recommended: true,
    buttonText: "Join Now"
  },
  {
    id: 3,
    name: "Mastiff",
    price: 99,
    description: "Premium coaching for serious athletes with ambitious goals.",
    features: [
      "4 weekly online sessions",
      "Elite personalized training",
      "Direct phone support",
      "Weekly progress analysis",
      "Complete nutrition planning",
      "All premium app features",
      "24/7 priority support",
      "Video form analysis",
      "Monthly 1-on-1 strategy call"
    ],
    recommended: false,
    buttonText: "Go Premium"
  }
];

const PricingSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PRICING PLANS</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget.
            All plans include personalized attention and support.
          </p>
        </div>

        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              recommended={plan.recommended}
              buttonText={plan.buttonText}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">All Plans Include:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
              <p>No signup fees or hidden costs</p>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
              <p>Cancel anytime, no contracts</p>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
              <p>Access to fitness resources library</p>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
              <p>Progress tracking tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;