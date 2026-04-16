import React from "react";
import Hero from "./hero";
import Connected from "./connected";
const home = () => {
  return (
  <>
  {/* Top Bar */}
  <div className="bg-[#1C3F39] flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-3 gap-2">
    <div>
      <h3 className="font-PlusJakarta font-bold text-[12px] md:text-[14px]">
        Get
        <span className="text-[#ffff00] animate-yellow">
          ₹ 60 free trial credit
        </span>{" "}
        of every new sign-up,
        <span className="text-[#ffff00] animate-yellow"> Try Now</span>
      </h3>
    </div>

    <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-[12px] md:text-[14px] font-bold">
      <div className="flex items-center gap-2">
        {/* Phone Icon */}
       <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M13 2a9 9 0 0 1 9 9" />
              <path d="M13 6a5 5 0 0 1 5 5" />
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
        <h3>+91 76210 73586</h3>
      </div>

      <div className="flex items-center gap-2">
        {/* Mail Icon */}
         <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" />
              <path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" />
              <rect x="7" y="3" width="15" height="12" rx="2" />
            </svg>
                <h3>info@smslocal.in</h3>
      </div>
    </div>
  </div>

  {/* Navbar */}
  <div className="bg-white flex  md:flex-row items-center justify-between px-4 py-4 md:justify-items-end sm:flex-row">
    <img
      src="https://www.smslocal.in/wp-content/uploads/2024/06/smslocal-black360x60px.png"
      className="w-[140px] md:w-[200px]"
      alt="smslocal.in"
    />

  <div className="hidden text-black text-[15px] font-bold md:flex gap-6 items-center text-[15px] mt-3 md:mt-0">
  <h3><a href="/solutions">Solutions</a></h3>
  <h3><a href="/developers">Developers</a></h3>
  <h3><a href="/pricing">Pricing plans</a></h3>
  <h3><a href="/blog">Blog</a></h3>
  <h3><a href="/support">Support</a></h3>
</div>

<div className="flex gap-4 text-black font-bold items-center">
  <h3 className="text-[13px] text-[#1c3f39]"><a href="/support">Log In</a></h3>
  <button className="text-[12px] text-white bg-[#1C3F39] pr-[10px] pl-[10px] pt-2 pb-2 rounded-[2px]">₹60 Free Credit</button>
</div>
  </div>
  {/* Hero Section */}
   <Hero />
   <Connected />

  
</>
  
    );
};

export default home;
