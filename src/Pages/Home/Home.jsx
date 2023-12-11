import React from "react";
import Main from "../../Components/Main";
import PaymentSection from "../../Components/Sections/PaymentSection";
import StartupSection from "../../Components/Sections/StartupSection";
import EventsSection from "../../Components/Sections/EventsSection";

const Home = () => {
  return (
    <div className="bg-slate-900">
      <Main />
      <StartupSection />
      <EventsSection />
    </div>
  );
};

export default Home;
