import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

import { CiShoppingCart } from "react-icons/ci";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="bg-[url('/purple_green.png')] bg-center bg-no-repeat bg-fixed bg-cover">
        <div className="flex items-center justify-end gap-3 w-[85%] mx-auto px-10">
          <a className="text-[16px]" href="https://www.instagram.com/_minhquoc">
            <FaInstagram />
          </a>
          <a className="text-[16px]" href="https://www.instagram.com/_minhquoc">
            <FaYoutube />
          </a>
          <a href="tel:0327991343" className="hover:translate-x-0">
            0327991343
          </a>
        </div>
      </div>
      <div className="bg-[url('/purple_green.png')] bg-center bg-no-repeat bg-fixed bg-cover border-t">
        <div className="px-10 w-[85%] py-5 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <a href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={180}
                  height={28}
                ></Image>
              </a>
            </div>
            <div className="flex items-center justify-between gap-12 text-base font-medium tracking-[4px] uppercase">
              <Link href="/collections">SHOPPING</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/shipping">SHIPPING</Link>
              <Link href="/blogs">BLOGS</Link>
              <Link href="/about">ABOUT</Link>
            </div>
            <div className="flex items-center justify-between gap-5 text-[26px]">
              <Link href="user">
                <CiUser />
              </Link>
              <Link href="user">
                <CiSearch />
              </Link>
              <Link href="cart">
                <CiShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
