import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Bikes - Rust Bike",
  description: "...",
};
const page = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
        <div className=" relative hover:opacity-80 duration-300">
          <Link href="/products/bike">
            <Image
              src="/bike-completed.webp"
              alt="Bike"
              width={500}
              height={0}
              className="w-full object-cover"
            ></Image>
            <p className="text-base font-bold mt-1 leading-tight">
              LARGE SCAPEGOAT 27.5&quot; WHEEL&apos;D COMPLETE
            </p>
            <p className="mt-1 text-sm font-light">$3.500.00</p>
          </Link>
      </div>
        <div className=" relative hover:opacity-80 duration-300">
          <div className="absolute top-0 right-0 text-sm font-normal bg-[#43b3d2] p-1">Sold Out</div>
          <Link href="/products/bike">
            <Image
              src="/bike-completed.webp"
              alt="Bike"
              width={500}
              height={0}
              className="w-full object-cover"
            ></Image>
            <p className="text-base font-bold mt-1 leading-tight">
              LARGE SCAPEGOAT 27.5&quot; WHEEL&apos;D COMPLETE
            </p>
            <p className="mt-1 text-sm font-light">$3.500.00</p>
          </Link>
        </div>
        <div className=" relative hover:opacity-80 duration-300">
          <Link href="/products/bike">
            <Image
              src="/bike-completed.webp"
              alt="Bike"
              width={500}
              height={0}
              className="w-full object-cover"
            ></Image>
            <p className="text-base font-bold mt-1 leading-tight">
              LARGE SCAPEGOAT 27.5&quot; WHEEL&apos;D COMPLETE
            </p>
            <p className="mt-1 text-sm font-light">$3.500.00</p>
          </Link>
      </div>
        <div className=" relative hover:opacity-80 duration-300">
          <div className="absolute top-0 right-0 text-sm font-normal bg-[#43b3d2] p-1">Sold Out</div>
          <Link href="/products/bike">
            <Image
              src="/bike-completed.webp"
              alt="Bike"
              width={500}
              height={0}
              className="w-full object-cover"
            ></Image>
            <p className="text-base font-bold mt-1 leading-tight">
              LARGE SCAPEGOAT 27.5&quot; WHEEL&apos;D COMPLETE
            </p>
            <p className="mt-1 text-sm font-light">$3.500.00</p>
          </Link>
        </div>
        <div className=" relative hover:opacity-80 duration-300">
          <Link href="/products/bike">
            <Image
              src="/bike-completed.webp"
              alt="Bike"
              width={500}
              height={0}
              className="w-full object-cover"
            ></Image>
            <p className="text-base font-bold mt-1 leading-tight">
              LARGE SCAPEGOAT 27.5&quot; WHEEL&apos;D COMPLETE
            </p>
            <p className="mt-1 text-sm font-light">$3.500.00</p>
          </Link>
      </div>
        <div className=" relative hover:opacity-80 duration-300">
          <div className="absolute top-0 right-0 text-sm font-normal bg-[#43b3d2] p-1">Sold Out</div>
          <Link href="/products/bike">
            <Image
              src="/bike-completed.webp"
              alt="Bike"
              width={500}
              height={0}
              className="w-full object-cover"
            ></Image>
            <p className="text-base font-bold mt-1 leading-tight">
              LARGE SCAPEGOAT 27.5&quot; WHEEL&apos;D COMPLETE
            </p>
            <p className="mt-1 text-sm font-light">$3.500.00</p>
          </Link>
        </div>
    </div>
  );
};

export default page;
