import React from "react";
import CompotuerImage from "../../assets/platform.png";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <section className="py-2 bg-slate-900 text-white">
      <div className="container px-11 flex items-center">
        <div style={{ width: "75%" }}>
          <img
            className="main__platform-block-image"
            src={CompotuerImage}
            alt="about-us"
            srcSet="/site/img/main/platform@2x.png 2x, /site/img/main/platform@3x.png 3x"
          />
        </div>
        <div style={{width: "60%"}}>
          <h1 style={{ width: "70%" }} className="text-5xl ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                

                  .typeString("Get information for the regional growth, use smart matching tools for the startups")
                //   .pauseFor(1000)
                  
                  .start();
              }}
            />
          </h1>
          <p style={{ width: "70%" }} className="text-2xl mt-6 ">
            Зарегистрируйтесь и получите $10000 на демо-счет для обучения
            торговле
          </p>
          <div className="flex gap-3 mt-4">
            <button className="py-2 px-8 rounded text-white bg-sky-400">
              SIGN UP
            </button>
            <button className="py-2 px-9 rounded text-sky-400 border-sky-400 border">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
