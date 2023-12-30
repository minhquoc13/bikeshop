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
      <div className="px-10 w-[85%] py-5 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <a href="/">
              <Image src="/logo.png" alt="Logo" width={180} height={28}></Image>
            </a>
          </div>
          <div className="flex items-center justify-between gap-10 text-base">
            <Link href="collections">SHOPPING</Link>
            <Link href="collections">SERVICES</Link>
            <Link href="collections">SHIPPING</Link>
            <Link href="collections">ABOUT</Link>
          </div>
          <div className="flex items-center justify-between gap-3 text-[24px]">
            <Link href="user">
              <CiUser />
            </Link>
            <Link href="cart">
              <CiShoppingCart />
            </Link>
            <Link href="user">
              <CiSearch />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
