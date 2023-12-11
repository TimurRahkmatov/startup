import React from "react";
import DodoImg from "../../../assets/dodo.jpg";
import CosmosImg from "../../../assets/cosmos.jpg"
import MeetupImg from "../../../assets/meetup.jpg"
import MonthlyImg from "../../../assets/monthly.png"
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
              style={{ width: "100%", borderRadius: "15px" }}
              src={DodoImg}
              alt=""
            />
          </div>
        </div>
        <div className="text-white event-two items-start flex flex-col justify-between py-7">
          <div>
            <p className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">2023-12-05</p>
            <h3 style={{ width: "95%" }} className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">
              It’s finally time for the Pizza Pitch!
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
            <p className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">2023-12-05</p>
            <h3 style={{ width: "95%" }} className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">
              It’s finally time for the Pizza Pitch!
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
            <p className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">2023-12-05</p>
            <h3 style={{ width: "95%" }} className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">
              It’s finally time for the Pizza Pitch!
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
            <p className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">2023-12-05</p>
            <h3 style={{ width: "95%" }} className="xl:text-xl sm:text-sm md:text-xl lg:text-xl">
              It’s finally time for the Pizza Pitch!
            </h3>
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
