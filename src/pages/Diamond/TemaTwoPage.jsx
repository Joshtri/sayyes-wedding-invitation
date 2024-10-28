// Import React and other components
import React from 'react';

// Import WeddingHero and CountdownInvitation components
import WeddingHero from "../../components/Diamond/TemaTwo/WeddingHero";
import CountdownInvitation from "../../components/Diamond/TemaTwo/CountdownInvitation";

function TemaTwoPage() {
  return (
    <div>
      {/* Wedding Hero Section */}
      <WeddingHero />

      {/* Countdown Invitation Section */}
      <CountdownInvitation />
    </div>
  );
}

export default TemaTwoPage;
