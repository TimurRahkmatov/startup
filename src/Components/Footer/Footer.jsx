import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-sky-700 text-white py-12 ">
      <div className="container m-auto px-12">
        <h2 className="">Logo</h2>

        <div className="flex justify-between items-center mt-0.2 flex-wrap gap-5">
          <div className="">
            <p className="w-64 text-sm">
              About us Latest Startups Events Latest News
            </p>
          </div>
          <div>
            
            <div className="flex mt-4 gap-2 flex-wrap sm:gap-6">
              <input
                type="text"
                placeholder="Your email"
                className="bg-slate-900 border   border-white rounded px-3"
              />
              <button className="px-6 py-2 rounded bg-aqua-400">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h2 className="">FOLLOW US</h2>
            <div className="flex items-center gap-4 mt-2 text-lg">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div>
            <h4>CALL US</h4>
            <h5 className="mt-2">+998 90 134 23 86</h5>
          </div>
        </div>
        <div className="w-100 bg-white h-px mt-10"></div>
        <div className="mt-4 flex gap-12">
          <div className="">
            <p className="text-sm">
              @SteppeUp is active in: Uzbekistan, Kazakhstan, Kyrgyzystan,
              Turkemenistan and Tadjikistan{" "}
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-sm">PRIVACY POLICY</p>
            <p className="text-sm">TERMS AND CONDITIOSN</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
