"use client";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { pathBuilder } from "@/helpers";

export const MainView = () => (
  <div className="w-full h-screen flex flex-col items-center">
    <div className="w-full flex flex-col md:flex-row animate-scale-in-slowly items-center justify-center p-8">
      <Image
        src={pathBuilder("/ceotechlogo.png")}
        alt="icon"
        width={0}
        height={0}
        className="w-20 md:w-36 h-20 md:h-36"
      />
      <Image
        src={pathBuilder("/CEOTECH/EDITED/ceotech.title.colored.svg")}
        alt="logo"
        width={0}
        height={0}
        className="w-[800px] h-auto"
      />
    </div>
    <div className="w-full animate-fade-in-slowly text-center mb-2">
      <Separator className="bg-white bg-opacity-60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-8" />
      <h1 className="md:text-4xl text-xl font-bold text-center text-white font-sans uppercase">
        Soluciones de automatización industrial <br /> Para una producción más
        eficiente y rentable
      </h1>
      <Separator className="bg-white bg-opacity-60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-8" />
      <Link href={pathBuilder("/contact")}>
        <Button className="text-xl uppercase box-border text-white shadow-blackA4 hover:bg-white hover:text-tomato9 inline-flex w-56 h-16 items-center justify-center rounded-full bg-tomato9 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Conócenos
        </Button>
      </Link>
    </div>
  </div>
);
