import React from "react";
import CompotuerImage from "../../assets/platform.png";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <section className="py-2 bg-slate-900 text-white">
      <div className="container m-auto px-11 main_flex">
        <div style={{ width: "75%"  }}>
          <img
            className="main__platform-block-image"
            src={CompotuerImage}
          />
        </div>
        <div style={{width: "60%"}} className="texts">
          <h1  className="main_text">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                

                  .typeString("A connecting bridge between investors and startups")
                //   .pauseFor(1000)
                  
                  .start();
              }}
            />
          </h1>
          
          <div className="flex gap-3 mt-4">
            <button className="btn_main text-white bg-sky-400">
              SIGN UP
            </button>
            <button className="btn_main text-sky-400 border-sky-400 border">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
