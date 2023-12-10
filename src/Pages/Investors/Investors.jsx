import React from "react";
import InvestorsSidebar from "../../Components/Sidebar/InvestorsSidbar";
import InvestorsCard from "../../Components/Cards/InvestorsCard";

const Investors = () => {
  return (
    <div>
      <section className="bg-slate-900 py-12">
        <div className="container flex justify-center">
          <div
            className="flex items-center px-3 gap-4"
            style={{
              width: "800px",
              backgroundColor: "#fff",
              height: "53px",
              borderRadius: "10px",
            }}
          >
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />

            <button className="bg-aqua-400 px-5 py-2 rounded">Search</button>
          </div>
        </div>
      </section>
      <div className="flex">
        <InvestorsSidebar />
        <InvestorsCard />
      </div>
    </div>
  );
};

export default Investors;
