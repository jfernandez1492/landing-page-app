"use client";
import React from "react";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import { pathBuilder } from "../helpers";
import { SocialNetwork } from "./social.component";

export const MainView = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col md:flex-row animate-scaleInSlowly items-center justify-center p-8">
        <img
          src={pathBuilder("/ceotechlogo.png")}
          alt="icon"
          className="w-20 md:w-36 h-20 md:h-36"
        />
        <img
          src={pathBuilder("/CEOTECH/EDITED/ceotech.title.colored.svg")}
          alt="logo"
          className="w-[800px]"
        />
      </div>
      <div className="w-full animate-fadeInSlowly text-center mb-2">
        <Separator.Root className="bg-white bg-opacity-60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-8" />
        <h1 className="md:text-4xl text-xl font-bold text-center font-sans uppercase">
          Soluciones de automatización industrial <br /> Para una producción más
          eficiente y rentable
        </h1>
        <Separator.Root className="bg-white bg-opacity-60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-8" />
        <Link href={pathBuilder("/contact")}>
          <button className="text-xl uppercase box-border text-white shadow-blackA4 hover:bg-white hover:text-tomato9 inline-flex w-56 h-16 items-center justify-center rounded-full bg-tomato9 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Conócenos
          </button>
        </Link>
      </div>
      <SocialNetwork />
    </div>
  );
};
