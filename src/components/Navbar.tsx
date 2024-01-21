"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";
import ColorsButton from "./ColorsButton";
import { usePathname } from "next/navigation";
import Logo from "./logo";

export default function NavBar() {
  const pathname = usePathname()
  const menuItems = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Components",
      href: "/components"
    },
    {
      title: "Colors",
      href: "/colors"
    },
    {
      title: "Create",
      href: "/create"
    },
  ];

  const isPathName = (path: string) => {
    if(path === "/"){
      if(path === pathname){
        
        return true
      }else{

        return false
      }

    }
    
    return !!pathname.includes(path)
  }
  

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo 
          className="text-foreground h-9 w-9"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Logo 
          className="text-foreground h-9 w-9"
          />
        </NavbarBrand>
        {menuItems.map((link, index) => (
          <NavbarItem
          key={link.title + index }
          >
            <Link 
            color={isPathName(link.href) ? "primary" : "foreground"}
            href={link.href} 
            >
              {link.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ColorsButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
      
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem 
          key={`${item}-${index}`}
          >
            <Link
              className="w-full"
              color={isPathName(item.href) ? "primary" : "foreground"}
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}