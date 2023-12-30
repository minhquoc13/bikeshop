import React from "react";
import Header from "../../components/Header";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Header></Header>
      <div className="w-full">
        <Image src="/funnygif.gif" width={0} height={0} alt="Gif" className="w-full"></Image>
      </div>
    </>
  );
};

export default page;
