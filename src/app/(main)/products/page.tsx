import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Collection - Rust Bike",
  description: "...",
};

const page = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="group p-3">
        <Link href="collections/bikes">
          <Image
            src="/bikes.png"
            alt="Bikes"
            width={500}
            height={0}
            className="w-full h-full object-cover group-hover:scale-105 hover:opacity-70 duration-100 "
          ></Image>
        </Link>
      </div>
      <div className="group p-3">
        <Link href="collections/frames">
          <Image
            src="/frames.png"
            alt="Bikes"
            width={500}
            height={0}
            className="w-full h-full object-cover group-hover:scale-105 hover:opacity-70 duration-100 "
          ></Image>
        </Link>
      </div>
      <div className="group p-3">
        <Link href="collections/components">
          <Image
            src="/components.png"
            alt="Bikes"
            width={500}
            height={0}
            className="w-full h-full object-cover group-hover:scale-105 hover:opacity-70 duration-100 "
          ></Image>
        </Link>
      </div>
      <div className="group p-3">
        <Link href="collections/accessories">
          <Image
            src="/accessories.png"
            alt="Bikes"
            width={500}
            height={0}
            className="w-full h-full object-cover group-hover:scale-105 hover:opacity-70 duration-100 "
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default page;
