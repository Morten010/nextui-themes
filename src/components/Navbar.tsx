import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";
import ColorsButton from "./ColorsButton";

export default function NavBar() {
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
      title: "Create",
      href: "/create"
    },
    {
      title: "Colors",
      href: "/colors"
    },
  ];

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        {menuItems.map((link, index) => (
          <NavbarItem
          key={link.title + index }
          >
            <Link 
            color="foreground"
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
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
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