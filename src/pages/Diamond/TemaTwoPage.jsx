// Import React and other components
import React from 'react';

// Import WeddingHero and CountdownInvitation components
import WeddingHero from "../../components/Diamond/TemaTwo/WeddingHero";
import CountdownInvitation from "../../components/Diamond/TemaTwo/CountdownInvitation";
import GroomSection from '../../components/Diamond/TemaTwo/GroomSection';
import BrideSection from '../../components/Diamond/TemaTwo/BrideSection';
import WeddingEvent from '../../components/Diamond/TemaTwo/WeddingEvent';
import LoveStory from '../../components/Diamond/TemaTwo/LoveStory';
import GallerySection from '../../components/Diamond/TemaTwo/GallerySection';
import GiftSection from '../../components/Diamond/TemaTwo/GiftSection';
import ThankYouSection from '../../components/Diamond/TemaTwo/ThankYouSection';
import Footer from '../../components/Diamond/TemaTwo/Footer';

function TemaTwoPage() {
  return (
    <div>
      {/* Wedding Hero Section */}
      <WeddingHero />

      {/* Countdown Invitation Section */}
      <CountdownInvitation />

      <GroomSection/>

      <BrideSection/>

      <WeddingEvent/>

      <LoveStory/>

      <GallerySection/>

      <GiftSection/>

      <ThankYouSection/>

      <Footer/>
    </div>
  );
}

export default TemaTwoPage;
