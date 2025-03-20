import React from 'react';
import { Check } from 'lucide-react';

const PricingTable = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-600">/mo</span></p>
            <ul className="space-y-4 mb-8">
              {['5 Projects', '10GB Storage', 'Basic Support'].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-blue-600 rounded-lg p-8 shadow-lg relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-6">$79<span className="text-lg text-gray-600">/mo</span></p>
            <ul className="space-y-4 mb-8">
              {['15 Projects', '50GB Storage', 'Priority Support', 'Advanced Features'].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-4xl font-bold mb-6">$199<span className="text-lg text-gray-600">/mo</span></p>
            <ul className="space-y-4 mb-8">
              {['Unlimited Projects', 'Unlimited Storage', '24/7 Support', 'Custom Features'].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;