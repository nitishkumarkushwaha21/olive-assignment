"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const BASE_ITEMS = [
  {
    id: "prod1",
    imgSrc: "/product-1.webp",
    brand: "Nature's Path",
    name: "Organic Honey Almond Crunch",
    subtitle: "Cereal",
    color: "#f4f1ea",
    textColor: "#544632",
    score: 82,
    verdict: "Good",
    dotColor: "bg-green-400",
    oliverSays:
      "A solid breakfast choice! This cereal uses whole grains and organic ingredients without heavy artificial sweeteners, giving you steady energy to start the day.",
  },
  {
    id: "prod2",
    imgSrc: "/product-2.webp",
    brand: "SnackTime",
    name: "Cheese Puff Rings",
    subtitle: "Processed Snack",
    color: "#fbeeea",
    textColor: "#d35c37",
    score: 35,
    verdict: "Avoid",
    dotColor: "bg-red-500",
    oliverSays:
      "This product is heavily processed with artificial coloring and preservatives. The sodium content is quite high, making it something you should avoid or eat very rarely.",
  },
  {
    id: "prod3",
    imgSrc: "/product-4.webp",
    brand: "Simple Mills",
    name: "Almond Flour Crackers",
    subtitle: "Fine Ground Sea Salt",
    color: "#e8f0ea",
    textColor: "#3e5c46",
    score: 88,
    verdict: "Excellent",
    dotColor: "bg-green-500",
    oliverSays:
      "We love this! It's made from a simple, short list of nutrient-dense ingredients like almonds and sunflower seeds. A perfect alternative to refined wheat crackers.",
  },
  {
    id: "prod4",
    imgSrc: "/product-6.webp",
    brand: "Sweet Treats",
    name: "Marshmallow Cookies",
    subtitle: "Frosted",
    color: "#f1ebf4",
    textColor: "#664d7a",
    score: 42,
    verdict: "Avoid",
    dotColor: "bg-red-500",
    oliverSays:
      "High levels of high-fructose corn syrup and hydrogenated oils give this a very low score. These ingredients can lead to inflammation and metabolic issues over time.",
  },
  {
    id: "prod5",
    imgSrc: "/product-7.webp",
    brand: "Purely Elizabeth",
    name: "Ancient Grain Granola",
    subtitle: "Original",
    color: "#f4f2eb",
    textColor: "#685c3f",
    score: 75,
    verdict: "Fair",
    dotColor: "bg-yellow-500",
    oliverSays:
      "A decent option containing beneficial ancient grains like quinoa and amaranth. However, the added coconut sugar means you should still be mindful of your portion size.",
  },
  {
    id: "prod6",
    imgSrc: "/product-3.webp",
    brand: "Lesser Evil",
    name: "Himalayan Pink Salt Popcorn",
    subtitle: "Organic Popcorn",
    color: "#f6ede4",
    textColor: "#a85d34",
    score: 80,
    verdict: "Good",
    dotColor: "bg-green-400",
    oliverSays:
      "A solid, light snack! Made with just three organic ingredients, it avoids the processed oils and excessive sodium found in most microwave popcorn brands.",
  },
];

const CAROUSEL_ITEMS = [...BASE_ITEMS, ...BASE_ITEMS].map((item, index) => ({
  ...item,
  id: `${item.id}-${index}`,
}));

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(3); // Start at fig & olive

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_ITEMS.length);
    }, 1500); // changes every 1.5 seconds
    return () => clearInterval(timer);
  }, []);

  const activeItem = CAROUSEL_ITEMS[activeIndex];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 font-sans text-[#2e4028] flex flex-col">
      <main className="w-full max-w-[1200px] mx-auto bg-[#f6f9f3] rounded-[2rem] overflow-hidden flex flex-col items-center relative shadow-sm">
        {/* Navigation */}
        <nav className="w-full flex items-center justify-between px-6 py-4 lg:py-6 lg:px-10 z-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Olive Logo"
              width={130}
              height={52}
              className="object-contain"
            />
          </div>

          <div className="hidden lg:flex items-center gap-8 text-base font-medium text-[#465a3d]">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#2e4028]"
            >
              Solutions
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-[#2e4028]">
              Features
            </a>
            <a href="#" className="hover:text-[#2e4028]">
              Pricing
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#2e4028]"
            >
              Blog
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-[#2e4028]">
              Restaurants
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#2e4028]"
            >
              Food
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <a
              href="#"
              className="text-base font-medium text-[#465a3d] hover:text-[#2e4028] hidden sm:block"
            >
              Sign in
            </a>
            <button className="bg-[#1f3517] text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-full text-base font-medium flex items-center gap-2 hover:bg-[#162710] transition-colors">
              Get Olive
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mt-2 lg:mt-6 px-4 max-w-3xl mx-auto w-full z-10 shrink-0">
          <div className="flex items-center gap-3 bg-white/60 px-4 py-1.5 rounded-full mb-4 lg:mb-6">
            <div className="flex -space-x-3">
              <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#f6f9f3] overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`}
                  alt="avatar"
                />
              </div>
              <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#f6f9f3] overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka`}
                  alt="avatar"
                />
              </div>
              <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#f6f9f3] overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Bob`}
                  alt="avatar"
                />
              </div>
              <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#f6f9f3] overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Alice`}
                  alt="avatar"
                />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#e3e8de] border-2 border-[#f6f9f3] flex items-center justify-center text-[9px] font-bold text-[#465a3d]">
                3k+
              </div>
            </div>
            <span className="text-xs lg:text-sm text-[#5f7454] font-medium">
              Trusted by thousands of healthy families
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1f3517] mb-4 lg:mb-5 leading-[1.05]">
            The Safest Way to
            <br />
            Shop for Groceries
          </h1>

          <p className="text-sm lg:text-base text-[#5f7454] max-w-[500px] mb-6 lg:mb-8 leading-relaxed">
            Use the Olive Food Scanner App to Instantly Eliminate Harmful
            Ingredients from Your Family's Diet and Get Expert-Backed Food
            Insights
          </p>

          <button className="bg-[#1f3517] text-white px-6 py-3 rounded-full text-sm lg:text-base font-semibold flex items-center gap-2 hover:bg-[#162710] transition-colors shadow-lg">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.365 7.159c-.066-2.618 2.124-3.924 2.215-3.987-1.228-1.787-3.136-2.029-3.818-2.057-1.636-.168-3.197.962-4.041.962-.843 0-2.125-.944-3.483-.918-1.78.026-3.42 1.037-4.341 2.645-1.859 3.242-.475 8.023 1.332 10.669.882 1.286 1.921 2.732 3.321 2.679 1.346-.053 1.864-.868 3.483-.868 1.603 0 2.085.868 3.498.841 1.455-.026 2.348-1.313 3.216-2.585 1.009-1.482 1.425-2.923 1.445-2.997-.031-.013-2.795-1.077-2.827-4.384zM14.653 3.864c.739-.894 1.236-2.143 1.1-3.388-1.07.043-2.368.712-3.134 1.625-.684.81-1.281 2.083-1.118 3.3.1.004.204.004.302.004 1.01 0 2.106-.632 2.85-1.541z" />
            </svg>
            Download for iOS
          </button>
        </section>

        {/* App Mockup */}
        <div className="w-full flex justify-center px-4 mt-6">
          <div className="relative z-10 w-[300px] lg:w-[320px] bg-white rounded-t-[2.5rem] border-[10px] border-b-0 border-[#e5e9e0] shadow-2xl flex flex-col translate-y-6">
            {/* Dynamic Island Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-full z-20"></div>

            <div className="flex flex-col pt-10 relative">
              {/* Inside-Phone Carousel */}
              <div className="flex flex-col items-center relative w-full mb-2">
                <div className="relative w-full h-[120px] flex items-center justify-center">
                  {CAROUSEL_ITEMS.map((item, index) => {
                    // Calculate relative distance: 0 is center, -1 is left, 1 is right, etc.
                    let offset = index - activeIndex;
                    // Handle wrap-around for infinite scroll effect
                    const total = CAROUSEL_ITEMS.length; // 12
                    const half = Math.floor(total / 2); // 6
                    if (offset > half) offset -= total;
                    if (offset < -half) offset += total;

                    let translateX = "0px";
                    let scale = 1;
                    let opacity = 1;
                    let zIndex = 10;

                    if (offset === 0) {
                      translateX = "0px";
                      scale = 1;
                      opacity = 1;
                      zIndex = 20;
                    } else if (offset === -1) {
                      translateX = "-120px";
                      scale = 0.8;
                      opacity = 0.6;
                      zIndex = 10;
                    } else if (offset === 1) {
                      translateX = "120px";
                      scale = 0.8;
                      opacity = 0.6;
                      zIndex = 10;
                    } else if (offset === -2) {
                      translateX = "-220px";
                      scale = 0.6;
                      opacity = 0.3;
                      zIndex = 5;
                    } else if (offset === 2) {
                      translateX = "220px";
                      scale = 0.6;
                      opacity = 0.3;
                      zIndex = 5;
                    } else if (offset === -3) {
                      translateX = "-320px";
                      scale = 0.5;
                      opacity = 0;
                      zIndex = 1;
                    } else if (offset === 3) {
                      translateX = "320px";
                      scale = 0.5;
                      opacity = 0;
                      zIndex = 1;
                    } else if (offset < -3) {
                      translateX = "-400px";
                      scale = 0.5;
                      opacity = 0;
                      zIndex = 0;
                    } else if (offset > 3) {
                      translateX = "400px";
                      scale = 0.5;
                      opacity = 0;
                      zIndex = 0;
                    }

                    let transitionClass = "transition-all duration-500 ease-in-out";
                    // Snap item instantly when it teleports in the deep background (offset > 3 or < -3)
                    // We only want smooth transitions for items moving between -3 and 3
                    if (offset > 3 || offset < -3) {
                       transitionClass = "transition-none";
                    }

                    return (
                      <div
                        key={item.id}
                        className={`absolute w-[110px] h-[110px] rounded-[1.2rem] shrink-0 border border-gray-200 flex items-center justify-center shadow-sm overflow-hidden bg-white ${transitionClass}`}
                        style={{
                          transform: `translateX(${translateX}) scale(${scale})`,
                          opacity: opacity,
                          zIndex: zIndex,
                        }}
                      >
                        {item.imgSrc ? (
                          <Image src={item.imgSrc} alt={item.name} fill className="object-cover rounded-xl" />
                        ) : (
                          <div
                            className="w-full h-full flex flex-col items-center justify-center relative z-10 rounded-xl border border-white"
                            style={{
                              backgroundColor: "#ffffffaa",
                              color: item.textColor,
                            }}
                          >
                            <span className="font-bold text-[10px] tracking-widest uppercase mb-1">
                              {item.brand}
                            </span>
                            <span className="text-[12px] font-bold text-center leading-tight">
                              {item.name}
                              <br />
                            </span>
                            <span className="text-[6px] uppercase tracking-wide mt-1">
                              {item.subtitle}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Carousel Indicator Line */}
                <div className="w-6 h-1 bg-gray-200 rounded-full mt-2"></div>
              </div>

              {/* Product Info - animated transition */}
              <div
                className="px-5 py-2 flex flex-col transition-opacity duration-300"
                key={activeItem.id}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div
                    className="w-12 h-10 rounded flex items-center justify-center shrink-0 border transition-colors duration-500"
                    style={{
                      backgroundColor: activeItem.color,
                      borderColor: activeItem.textColor,
                    }}
                  >
                    <span
                      className="font-bold text-[8px] uppercase text-center leading-tight"
                      style={{ color: activeItem.textColor }}
                    >
                      {activeItem.brand}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 leading-tight mb-0.5">
                      {activeItem.name}, {activeItem.subtitle}
                    </h2>
                    <p className="text-[10px] text-gray-500 font-medium">
                      {activeItem.brand}
                    </p>
                  </div>
                </div>

                {/* Score */}
                <div className="flex items-center justify-between mt-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2.5 h-2.5 ${activeItem.dotColor} rounded-full transition-colors duration-500`}
                    ></div>
                    <div>
                      <div className="text-lg font-bold text-gray-900 leading-none">
                        {activeItem.score}
                        <span className="text-gray-400 text-sm">/100</span>
                      </div>
                      <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">
                        {activeItem.verdict}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-gray-400">
                    <button className="hover:text-gray-600">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <button className="hover:text-gray-600">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 14 20 9 15 4"></polyline>
                        <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Oliver Says */}
                <div className="bg-[#fcfdfa] border border-[#e8efe2] rounded-xl p-3 shadow-sm mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Image
                      src="/logo.png"
                      alt="Oliver"
                      width={16}
                      height={16}
                      className="object-contain drop-shadow-sm"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span className="font-bold text-gray-900 text-xs">
                      Oliver Says:
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed min-h-[50px]">
                    "{activeItem.oliverSays}"
                  </p>
                </div>

                {/* We push "Breakdown" to the bottom, and end the phone directly under it */}
                <div className="pb-4 pt-1">
                  <h3 className="font-bold text-gray-900 text-xs">Breakdown</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
