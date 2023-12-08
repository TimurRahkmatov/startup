import React from "react";
import Main from "../../Components/Main";
import PaymentSection from "../../Components/Sections/PaymentSection";
import StartupSection from "../../Components/Sections/StartupSection";

const Home = () => {
  return (
    <div className="bg-slate-900">
      <Main />
      <PaymentSection />
      <StartupSection />
    </div>
  );
};

export default Home;
