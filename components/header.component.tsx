"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import { pathBuilder } from "../helpers";

const NavigationItem = (label: string, href: string = "/") => (
  <NavigationMenu.Item className="min-w-28 text-center gap-2">
    <NavigationMenu.Link
      className="text-white hover:text-tomato8 focus:shadow-white block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
      href={pathBuilder(href)}
    >
      {label}
    </NavigationMenu.Link>
  </NavigationMenu.Item>
);

const NavigationSpacer = (direction: "start" | "end") => (
  <div
    className={`w-full flex h-8 items-center ${
      direction === "end" && "flex-row-reverse"
    }`}
  >
    <div className="w-full">
      <Separator.Root className="bg-white bg-opacity-60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-1" />
      <Separator.Root className="bg-white bg-opacity-60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-1" />
    </div>
    <Separator.Root
      className="bg-white bg-opacity-60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
      decorative
      orientation="vertical"
    />
  </div>
);

export const NavBar = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center h-16 items-center">
      {NavigationSpacer("start")}
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] bg-transparent p-1">
        {NavigationItem("Home")}
        {NavigationItem("About us", "/about")}
        {NavigationItem("Contact", "/contact")}

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      {NavigationSpacer("end")}

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

export const ProfessionalNavBar = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-between h-16 items-center px-4">
      <Link href="/">
        <img
          src={pathBuilder("/ceotechlogo.png")}
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] bg-transparent p-1">
        {NavigationItem("Home")}
        {NavigationItem("About us", "/about")}
        {NavigationItem("Contact", "/contact")}

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};
