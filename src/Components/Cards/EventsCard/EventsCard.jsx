import React from "react";
import DodoImg from "../../../assets/photo1.jpg";
import CosmosImg from "../../../assets/photo2.jpg"
import MeetupImg from "../../../assets/photo3.jpg"
import MonthlyImg from "../../../assets/photo4.jpg"
const EventsCard = () => {
  return (
    <div style={{gap: "5rem"}} className="py-7 flex justify-center items-center flex-wrap">
      <div className="events_card flex">
        <div style={{ position: "relative" }} className="event-one">
          <div
          className="img_wid"
            style={{
             
              backgroundColor: "red",
              borderRadius: "15px",
              position: "absolute",
              right: "50px",
              top: "30px",
            }}
          >
            <img
              style={{ width: "100%", borderRadius: "15px" ,height: "100%" }}
              src={DodoImg}
              alt=""
            />
          </div>
        </div>
        <div className="text-white event-two items-start flex flex-col justify-between py-7">
          <div>
            <p className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">15-12-2023</p>
            <h3 style={{ width: "95%" }} className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">
            ITosh: Relocation IT meetup #7 в IMPACT.T
            </h3>
          </div>
          <button>Learn More</button>
        </div>
      </div>
      <div className="events_card flex">
        <div style={{ position: "relative" }} className="event-one">
          <div
          className="img_wid"
            style={{
              
              borderRadius: "15px",
              position: "absolute",
              right: "50px",
              top: "30px",
            }}
          >
            <img
              style={{ width: "100%", borderRadius: "15px" , height: "100%" }}
              src={MeetupImg}
              alt=""
            />
          </div>
        </div>
        <div className="text-white event-two items-start flex flex-col justify-between py-7">
          <div>
            <p className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">14-12-2023</p>
            <h3 style={{ width: "95%" }} className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">
            Demo Day акселерационной программы U-Start в UEnte
            </h3>
          </div>
          <button>Learn More</button>
        </div>
      </div>
      <div className="events_card flex">
        <div style={{ position: "relative" }} className="event-one">
          <div
          className="img_wid"
            style={{
              
              borderRadius: "15px",
              position: "absolute",
              right: "50px",
              top: "30px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", borderRadius: "15px" }}
              src={CosmosImg}
              alt=""
            />
          </div>
        </div>
        <div className="text-white event-two items-start flex flex-col justify-between py-7">
          <div>
            <p className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">16-12-2023</p>
            <h3 style={{ width: "95%" }} className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">
            TechDay в Inha University 
            </h3>
          </div>
          <button>Learn More</button>
        </div>
      </div>
      <div className="events_card flex">
        <div style={{ position: "relative" }} className="event-one">
          <div
          className="img_wid"
            style={{
              
              backgroundColor: "red",
              borderRadius: "15px",
              position: "absolute",
              right: "50px",
              top: "30px",
            }}
          >
            <img
              style={{ width: "100%", borderRadius: "15px" , height: "100%" }}
              src={MonthlyImg}
              alt=""
            />
          </div>
        </div>
        <div className="text-white event-two items-start flex flex-col justify-between py-7">
          <div>
            <p className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">18-19-12-2023</p>
            <h3 style={{ width: "95%" }} className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">
            Business Angel Investors School by MOST Hub Tashkent в C-Space Yunusabad
            </h3>
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
