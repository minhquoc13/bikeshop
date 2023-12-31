import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-20 border-t bg-[url('/blue_green.png')] bg-center bg-no-repeat bg-fixed bg-cover]">
      <div className="w-[85%] px-10 mx-auto flex gap-10">
        <div>
          <p className="text-base tracking-wider uppercase">
            Signup for newest posts
          </p>
          <input
            type="text"
            placeholder="Your email..."
            className="px-1 py-2 rounded-md mt-2"
          />
          <div className="flex gap-5 mt-3 text-xl">
            <Link href="https://www.instagram.com/_minhquoc">
              <FaInstagram></FaInstagram>
            </Link>
            <Link href="https://www.instagram.com/_minhquoc">
              <FaYoutube></FaYoutube>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-base tracking-wider uppercase">Shipping guide</p>
          <p className="text-base font-medium mt-1">
            How to check your shipping cost
          </p>
          <p className="text-sm max-w-[320px] mt-2">
            Add your product to the cart and then checkout. Fill out your
            address and click &quot;Continue to Shipping.&quot; Your shipping
            will be displayed on the next page. (Don&apos;t worry you won&apos;t
            be charged unless you complete the payment)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
