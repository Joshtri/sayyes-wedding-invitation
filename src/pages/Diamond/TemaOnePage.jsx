// import React from 'react'

import CountdownTimer from "../../components/Diamond/TemaOne/CountdownTimer";
import Divider from "../../components/Diamond/TemaOne/Divider";
import EventDetails from "../../components/Diamond/TemaOne/EventDetails";
import EventSection from "../../components/Diamond/TemaOne/EventSection";
import Gallery from "../../components/Diamond/TemaOne/Gallery";
import GroomSection from "../../components/Diamond/TemaOne/GroomSection";
import LoveStory from "../../components/Diamond/TemaOne/LoveStory";
import RSVP from "../../components/Diamond/TemaOne/RSVP";
import ThankYouSection from "../../components/Diamond/TemaOne/ThankYouSection";
import WeddingHero from "../../components/Diamond/TemaOne/WeddingHero";
import './animateGradient.css'

// DIAMOND pages.
function TemaOnePage() {
  return (
    <div className="animated-gradient-bg min-h-screen">
      <WeddingHero />
      <GroomSection />

      <Divider/>

      <LoveStory/>

      <EventSection/>

      <CountdownTimer targetDate="2024-12-31T00:00:00" />
      <RSVP />

      <EventDetails/>

      <Gallery/>

      <ThankYouSection/>
      
    </div>
  );
}

export default TemaOnePage;
