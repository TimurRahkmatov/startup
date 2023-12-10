import React from "react";
import DemaloImg from "../../../assets/demalo.jpg";
import InImg from "../../../assets/in.jpg";
import SpendImage from "../../../assets/spend.jpg";

const StartupCard = () => {
  return (
    <section
      style={{ width: "80%", padding: "2rem 0", backgroundColor: "#1e293b" }}
    >
      <div className="container px-7 ">
        <div className="flex justify-between py-3">
          <h3 className="text-sky-400 text-2xl">Startups</h3>
          <p className="text-white">Showing : 3</p>
        </div>
        <div className="flex gap-8 mt-2">
          <div
            style={{
              width: "320px",
              height: "320px",
              backgroundColor: "#f4f4f5ee",
              padding: "1.5rem",
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img
                src={SpendImage}
                style={{ width: "65x", height: "65px" }}
                alt=""
              />
              <h3 className="text-xl">Spendonate</h3>
              <p>Spendonate is an app that creates an opportunity for you to</p>
            </div>
            <p className="text-blue-900">#Hosting</p>
          </div>
          <div
            style={{
              width: "320px",
              height: "320px",
              backgroundColor: "#f4f4f5ee",
              padding: "1.5rem",
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img
                src={InImg}
                style={{ width: "60px", height: "60px" }}
                alt=""
              />
              <h3 className="text-xl">IN-VR Ltd.</h3>
              <p>
                The haptic feedback system provides users with realistic
                sensations and touch in virtual and augmented reality through
                electrical muscle stimulatio ...
              </p>
            </div>
            <p className="text-blue-900">#Travel</p>
          </div>
          <div
            style={{
              width: "320px",
              height: "320px",
              backgroundColor: "#f4f4f5ee",
              padding: "1.5rem",
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img
                src={DemaloImg}
                style={{ width: "60px", height: "60px" }}
                alt=""
              />
              <h3 className="text-xl">Demaloo</h3>
              <p>
                It help people to find and book all the tours and activities in
                an easy and convenient way.
              </p>
            </div>
            <p className="text-blue-900">#Travel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupCard;
