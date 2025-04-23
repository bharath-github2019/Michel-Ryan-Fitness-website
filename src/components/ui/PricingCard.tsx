import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
  buttonText: string;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  recommended = false,
  buttonText, 
  delay = 0 
}) => {
  return (
    <div 
      className={`relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
        recommended ? 'border-2 border-red-500 shadow-lg' : 'border border-gray-200'
      }`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {recommended && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1">
          POPULAR
        </div>
      )}
      
      <div className={`p-6 ${recommended ? 'bg-gray-50' : 'bg-white'}`}>
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Button 
          href="#contact" 
          variant={recommended ? 'primary' : 'secondary'} 
          fullWidth
        >
          {buttonText}
        </Button>
      </div>
      
      <div className="p-6 bg-white border-t border-gray-100">
        <p className="font-bold mb-4">What's included:</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;