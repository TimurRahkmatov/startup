import React from "react";
import StartupImage from "../../../assets/startup.png";
import InvestorsImage from "../../../assets/investors.png";
const StartupSection = () => {
  return (
    <section className="py-2 bg-slate-900 pb-9 mt-4">
      <div className="container px-11">
        <div className="card_startup text-white flex">
          <div
            style={{ width: "50%" }}
            className="row-one flex justify-center items-center flex-col"
          >
            <img
              style={{ width: "170px", height: "170px" }}
              src={StartupImage}
              alt=""
            />
            <h3 className="text-3xl mt-3">Startups</h3>
            <p
              style={{ width: "80%", textAlign: "center", marginTop: "0.4rem" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur quaerat porro voluptatibus possimus debitis fuga
              deserunt id quas obcaecati ipsa.
            </p>
            <button className="startup_btn">Click me</button>
          </div>
          <div
            style={{ width: "1px", boxShadow: "0px 0px 10px #0369a1" }}
            className="bg-sky-700  h-full"
          ></div>
          <div
            style={{ width: "50%" }}
            className="flex justify-center items-center flex-col row-two"
          >
            <img
              style={{ width: "170px", height: "170px" }}
              src={InvestorsImage}
              alt=""
            />
            <h3 className="text-3xl mt-3">Investors</h3>
            <p
              style={{ width: "80%", textAlign: "center", marginTop: "0.4rem" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur quaerat porro voluptatibus possimus debitis fuga
              deserunt id quas obcaecati ipsa.
            </p>
            <button className="startup_btn">Click me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
