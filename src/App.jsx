import React from 'react';
import LandingSection from './components/LandingSection';
import DashboardShowcaseSection from './components/DashboardShowcaseSection';
import IndicatorShowcaseSection from './components/IndicatorShowcaseSection';
import TransitionSection from './components/TransititionSection';
import AttendSection from './components/AttendSection';
import GiftsSection from './components/GiftsSection';
import CoachSection from './components/CoachSection';
import FAQSection from './components/FAQSection';
import PnLSection from './components/PnlSection';
import ToolsSection from './components/ToolsSection';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <LandingSection />
      <DashboardShowcaseSection />
      <TransitionSection />
      <IndicatorShowcaseSection imageSrc="/indicator.jpeg" />
      <ToolsSection />
      <PnLSection />
      <AttendSection />
      <CoachSection imageSrc="/personal.webp" />
      <GiftsSection />
      <FAQSection />
      
      <Footer />
      {/* ...other sections */}
    </>
  );
}

export default App;
