import React from 'react';
import { Code, Palette, Rocket, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies.',
    icon: Code
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that convert.',
    icon: Palette
  },
  {
    title: 'Security',
    description: 'Enterprise-grade security for your digital assets.',
    icon: Shield
  },
  {
    title: 'Performance',
    description: 'Lightning-fast applications optimized for scale.',
    icon: Rocket
  }
];

const ServiceCards = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;