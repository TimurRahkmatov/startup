import React from "react";
import DemaloImg from "../../../assets/tuz.jpg";
import InImg from "../../../assets/ventures.jpg";
import SpendImage from "../../../assets/most.jpg";

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
              <h3 className="text-xl mt-3">MOST Ventures</h3>
              <p>
                We are a private venture fund in Central Asia. For more than 10
                years, we have been providing financial and non-financial
                support to technology entrepreneurs, as well as conducting
                incubation and acceleration prog ...
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
              <h3 className="text-xl mt-2">Spotlight Ventures</h3>
              <p>
                Spotlight! Ventures is an investment platform for technology and
                digital companies. We invest in courageous founders and teams
                with passion, ambition, willingness to take risks, determination
                and innovative ideas. ...
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
              <h3 className="text-xl mt-2">TUZ Ventures</h3>
              <p>
              TUZ Ventures is an early-stage tech VC fund focused on Central Asia and Caucasus. TUZ is founded by Silicon Valley entrepreneurs with a track record of successfully penetrating untapped frontier markets deemed ris ...
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
