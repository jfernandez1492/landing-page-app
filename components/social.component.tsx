"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { SocialIcon, SocialIconProps } from "react-social-icons";
import "react-social-icons/facebook";
import "react-social-icons/linkedin";
import path from "path";
import { pathBuilder } from "../helpers";

const NavigationItem = (network: SocialIconProps["network"], url: string) => (
  <NavigationMenu.Item className="m-1">
    <SocialIcon
      network={network}
      url={pathBuilder(url)}
      bgColor="transparent"
      fgColor="white"
    />
  </NavigationMenu.Item>
);

export const SocialNetwork = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center animate-scaleInSlowly">
      <NavigationMenu.List className="center shadow-blackA4 m-0 px-3 flex gap-7 list-none rounded-full bg-transparent p-1 shadow-[0_2px_10px]">
        {NavigationItem("facebook", "https://www.facebook.com/ceotechmx")}

        {NavigationItem(
          "twitter",
          "https://www.facebook.com/ceotechmx?mibextid=LQQJ4d"
        )}

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

export const FloatingSocial = () => {
  return <div className="absolute bottom-0 right-0">{SocialNetwork()}</div>;
};
