/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {
  const [count, setCount] = useState(1);
  console.log(count);
  const decrementCount = () => {
    if (count === 1) {
      setCount(1);
      return;
    }
    setCount(count - 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  const settings = {
    customPaging: function () {
      return (
        <a>
          <Image
            src={`/frames.png`}
            width={1000}
            height={0}
            alt="Product image"
            className="w-full object-cover max-h-[500px]"
          />
        </a>
        
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="flex gap-7">
        <div className="w-[60%] min-h-[500px]">
          <div>
            <Slider {...settings}>
              <div>
                <Image
                  src={"/bike-completed.webp"}
                  width={1000}
                  height={0}
                  alt="Product images"
                  className="w-full object-cover max-h-[500px] h-full"
                />
              </div>
              <div>
                <Image
                  src={"/frames.png"}
                  width={1000}
                  height={0}
                  alt="Product images"
                  className="w-full object-cover max-h-[500px]"
                />
              </div>
              <div>
                <Image
                  src={"/accessories.png"}
                  width={1000}
                  height={0}
                  alt="Product images"
                  className="w-full object-cover max-h-[500px]"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl uppercase">
            58cm Romanceür Disc Pink n&apos; Brown Complete
          </h4>
          <p className="text-lg mt-2">$3,700.00</p>
          <p className="text-sm font-light leading-none">
            Shipping calculated at checkout.
          </p>

          <div className="max-w-xs  mt-5">
            <label
              htmlFor="quantity-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose quantity:
            </label>
            <div className="relative flex items-center max-w-[8rem]">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                className="bg-transparent dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-white rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                onClick={decrementCount}
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="number"
                id="quantity-input"
                className="bg-transparent border-x-0 border-y border-white h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="quantity"
                onChange={(e) => setCount(+e.target.value)}
                value={count}
              />
              <button
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                className="bg-transparent dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-white rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                onClick={incrementCount}
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              Only 1 items in stocks!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
