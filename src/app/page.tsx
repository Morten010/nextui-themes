import Hero from "@/components/homepage/Hero";
import Why from "@/components/homepage/Why";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function Home() {

  return (
    <>
      <Hero />
      <Why />
    </>
  );
}
