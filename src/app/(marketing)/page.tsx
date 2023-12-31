import React from "react";
import Header from "../../components/Header";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Header></Header>
      <div className=" min-h-[700px] m-auto bg-[url('/blue_green.png')] bg-center bg-no-repeat bg-fixed bg-cover]">
        <Image
          src="/funnygif.gif"
          width={0}
          height={0}
          alt="Gif"
          className="w-full"
        ></Image>
      </div>
      <Footer></Footer>
    </>
  );
};

export default page;
