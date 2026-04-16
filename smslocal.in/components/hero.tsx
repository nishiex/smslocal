import React from "react";

function hero() {
  return (
    <div>
      {" "}
      <div className="bg-[linear-gradient(180deg,#FFFFFF_50%,#FAFAFA_50%)] md:bg-[linear-gradient(90deg,#FFFFFF_50%,#FAFAFA_50%)] flex flex-col md:flex-row items-center px-4 md:px-6 py-10 md:py-[70px] gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="font-PlusJakarta text-[28px] md:text-[55px] text-black font-bold leading-tight">
            Signup & Try Bulk SMS Service For <span>Free</span>
          </h1>

          <p className="text-[14px] md:text-[16px] text-black mt-3 md:w-[80%]">
            Send Promotional, Transactional & OTP SMS — Fully DLT compliant with
            API support
          </p>

          <div className="mt-4 border-l-[3px] border-[#ff0000] pl-3">
            <p className="text-[13px] text-black">
              Test Our Free Bulk Sms Service
            </p>
            <span className="font-bold text-[#ff0000] text-[14px]">
              Get ₹60 Free Credit On Signup
            </span>
          </div>

          <button className="mt-5 flex items-center gap-2 px-5 py-3 bg-[#013831] rounded-md text-[13px] md:text-[14px] text-white font-bold">
            Get ₹60 Free Credits Now!
            <svg width="12" fill="#ffffff" viewBox="0 0 448 512">
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </button>

          <button className="mt-5 flex items-center gap-2 px-5 py-3 bg-[#ffffff] text-black rounded-md text-[13px] broder-2 broder-[#013830] md:text-[14px] text-white font-bold">
            pricing
            <svg width="12" fill="#ffffff" viewBox="0 0 448 512">
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://www.smslocal.in/wp-content/uploads/2025/08/dashboard-1111-3-2048x1314.webp"
            className="w-full h-auto rounded-md "
            alt="dashboard"
          />
        </div>
      </div>
    </div>
  );
}

export default hero;
