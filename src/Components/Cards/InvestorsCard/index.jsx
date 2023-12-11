import React from "react";
import DemaloImg from "../../../assets/demalo.jpg";
import InImg from "../../../assets/in.jpg";
import SpendImage from "../../../assets/spend.jpg";

const InvestorsCard = () => {
  return (
    <section
      className="section_star"
      style={{
        padding: "2rem 0",
        backgroundColor: "#1e293b",
        paddingBottom: "3rem",
      }}
    >
      <div className="container m-auto px-12">
        <div className="flex justify-between py-3">
          <h3 className="text-sky-400 text-2xl">Investors</h3>
          <p className="text-white">Showing : 3</p>
        </div>
        <div className="flex gap-8 flex-wrap mt-2">
          <div
            style={{
              width: "460px",
              minHeight: "300px",
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
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
              <h3 className="text-xl mt-3">Spendonate</h3>
              <p>
                Lorem ipsum dolor sit amet consect delectus provident, earum
                quaerat. Earum placeat quaerat dolorum vitae ipsum obcaecati
                velit harum?
              </p>
            </div>
            <p className="text-blue-900">#Hosting</p>
          </div>
          <div
            style={{
              width: "460px",
              minHeight: "300px",
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
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
              <h3 className="text-xl mt-2">IN-VR Ltd.</h3>
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
              width: "460px",
              minHeight: "300px",
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
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
              <h3 className="text-xl mt-2">Demaloo</h3>
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

export default InvestorsCard;
