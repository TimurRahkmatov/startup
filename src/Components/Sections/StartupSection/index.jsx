import React from "react";
import StartupImage from "../../../assets/startup.png";
import InvestorsImage from "../../../assets/investors.png";
import { Link } from "react-router-dom";
const StartupSection = () => {
  return (
    <section className="py-2 bg-slate-900 pb-9 mt-4">
      <div className="container px-11 flex justify-evenly gap-3">
        <Link to="/startups">
          <div className="card-startup flex justify-center items-center flex-col">
            <img
              style={{ width: "170px", height: "170px" }}
              src={StartupImage}
              alt=""
            />
            <h3 className="text-3xl mt-3 text-sky-400">Startups</h3>
            <p
              style={{ width: "80%", textAlign: "center", marginTop: "0.4rem" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur quaerat porro voluptatibus possimus debitis fuga
              deserunt id quas obcaecati ipsa.
            </p>
          </div>
        </Link>
        <Link to='/investors'>
          <div className=" card-startup flex justify-center items-center flex-col row-two">
            <img
              style={{ width: "170px", height: "170px" }}
              src={InvestorsImage}
              alt=""
            />
            <h3 className="text-3xl mt-3 text-sky-400">Investors</h3>
            <p
              style={{ width: "80%", textAlign: "center", marginTop: "0.4rem" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur quaerat porro voluptatibus possimus debitis fuga
              deserunt id quas obcaecati ipsa.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default StartupSection;
