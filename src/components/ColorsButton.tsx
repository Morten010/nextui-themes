"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { colors } from "@/constants";
import { CopyBlock, dracula } from "react-code-blocks";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { theme, setTheme } = useTheme()

  const choosenColor = colors.find(c => c.name === theme)
  console.log(theme);
  
  return (
    <>
      <Button 
      onPress={onOpen}
      color="primary"
      >
        Choose Theme
      </Button>
      <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      scrollBehavior="outside"
      size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                Pick A Color
              </ModalHeader>
              <ModalBody>
                <div
                className="colorGrid"
                >
                    {colors?.map((color, index) => (
                      <Tooltip
                      content={color.title}
                      showArrow
                      >
                        <div
                        key={`theme-${index}-${color.name}`}
                        className={`w-full aspect-square rounded mx-auto cursor-pointer hover:outline outline-offset-4 mb-2 ${color.name === theme ? "outline outline-primary" : ""}`}
                        style={{
                            backgroundColor: color.color,
                            outline: "3px solid primary/60"
                        }}
                        onClick={() => setTheme(color.name)}
                        />   
                      </Tooltip> 
                    ))}
                </div>
                {choosenColor?.template && (<div
                className="mb-2"
                >
                  <h3
                  className="text-2xl mb-1 font-semibold"
                  >
                    Theme code
                  </h3>
                  <h4
                  className="text-lg font-semibold mt-2"
                  >
                    Step 1.
                  </h4>
                  <p
                  className="text-foreground/60 mt-1 mb-2"
                  >
                    Setup nextui <Link
                    href="https://nextui.org/docs/frameworks/nextjs"
                    target="_blank"
                    className="underline text-primary underline-offset-2"
                    >
                      Click here
                    </Link>
                  </p>
                  <h4
                  className="text-lg font-semibold mt-2"
                  >
                    Step 2.
                  </h4>
                  <p
                  className="mb-1 text-foreground/60"
                  >
                    insert in tailwind.config.ts and insert it in the nextui plugin
                  </p>
                  <CopyBlock
                  wrapLongLines
                  text={choosenColor.template}
                  language="js"
                  showLineNumbers={true}
                  theme={dracula}
                  />
                </div>)}
                {theme === "dark" && (<div>
                  <p
                  className="text-foreground/60"
                  >
                    This is the default dark theme to nextui
                  </p>
                </div>)}
                {theme === "light" && (<div>
                  <p
                  className="text-foreground/60"
                  >
                    This is the default theme to nextui
                  </p>
                </div>)}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}