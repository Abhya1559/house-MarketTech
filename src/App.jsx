import React from 'react';
import HeroSection from './components/HeroSection';
import ServiceCards from './components/ServiceCards';
import PricingTable from './components/PricingTable';
import ContactForm from './components/ContactForm';
import UserSearch from './components/UserSearch';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceCards />
      <UserSearch />
      <PricingTable />
      <ContactForm />
    </div>
  );
}

export default App;