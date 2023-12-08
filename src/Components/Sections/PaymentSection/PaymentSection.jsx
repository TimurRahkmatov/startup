import React from "react";

const PaymentSection = () => {
  return (
    <section className="bg-slate-900 py-8">
      <div className="container px-11 ">
        <div className="flex justify-evenly">
          <img
            alt="visa"
            className="tss-5qovnk-root mui-4e76su"
            src="//images.ctfassets.net/1rkoumd4khui/7ls0FTDb6PByyPKV1M7ykx/1a1b9eb0a9f602033f0d3e05485aabce/Card.svg"
            data-testid="image:svg"
          />
          <img
            alt="mastercard"
            className="tss-5qovnk-root mui-4e76su"
            src="//images.ctfassets.net/1rkoumd4khui/7HKmcWbBcDIphCfviwMJXx/6b217cc5cb4a2dfcd6a1c9d0924bb580/Card__1_.svg"
            data-testid="image:svg"
          />
          <img
            alt="skrill"
            className="tss-5qovnk-root mui-4e76su"
            src="//images.ctfassets.net/1rkoumd4khui/7Aw8KtPIL6WJL0QuAjwxTs/c5099772d931269f413ebe5fbbe5b033/Card__2_.svg"
            data-testid="image:svg"
          />
          <img
            alt="neteller"
            className="tss-5qovnk-root mui-4e76su"
            src="//images.ctfassets.net/1rkoumd4khui/6VA1Z4GVsUT7D4tVq5JxtA/d2f3be1364fe423224dfaf37495f8078/Card__3_.svg"
            data-testid="image:svg"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
