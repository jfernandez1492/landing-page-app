"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { TooltipComment } from "@/components/tooltip.component";

export const SocialNetwork = () => {
  return (
    <NavigationMenu className="fixed bottom-4">
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem className="m-1">
          <TooltipComment content="Encuéntranos en Facebook" side="left">
            <NavigationMenuLink href="https://www.facebook.com/ceotechmx">
              <FaFacebook className="text-white text-3xl hover:text-tomato9" />
            </NavigationMenuLink>
          </TooltipComment>
        </NavigationMenuItem>

        <NavigationMenuItem className="m-1">
          <TooltipComment content="Encuéntranos en LinkedIn" side="right">
            <NavigationMenuLink href="https://www.linkedin.com/company/ceotechmx">
              <FaLinkedin className="text-white text-3xl hover:text-tomato9" />
            </NavigationMenuLink>
          </TooltipComment>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const FloatingSocial = () => {
  return <div className="absolute bottom-0 right-0">{SocialNetwork()}</div>;
};
