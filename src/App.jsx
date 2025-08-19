import React from 'react';
import PetshopHeader from './components/PetshopHeader/PetshopHeader';
import PetshopHero from './components/PetshopHero/PetshopHero';
import PetshopServices from './components/PetshopServices/PetshopServices';
import PetshopTestimonials from './components/PetshopTestimonials/PetshopTestimonials';
import PetshopContact from './components/PetshopContact/PetshopContact';
import PetshopFooter from './components/PetshopFooter/PetshopFooter';

function AmorDeLaPet() {
  return (
    <div>
      <PetshopHeader />
      <PetshopHero />
      <PetshopServices />
      <PetshopTestimonials />
      <PetshopContact />
      <PetshopFooter />
    </div>
  );
}

export default AmorDeLaPet;