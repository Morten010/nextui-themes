"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { colors } from "@/constants";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { theme, setTheme } = useTheme()


  return (
    <>
      <Button 
      onPress={onOpen}
      color="primary"
      >
        Choose Theme
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Pick A Color</ModalHeader>
              <ModalBody>
                <div
                className="colorGrid"
                >
                    {colors?.map((color, index) => (
                      <div
                      key={`theme-${index}`}
                      className={`w-full aspect-square rounded mx-auto cursor-pointer hover:outline outline-offset-4 mb-2 ${color.name === theme ? "outline outline-primary" : ""}`}
                      style={{
                          backgroundColor: color.color,
                          outline: "3px solid primary/60"
                      }}
                      onClick={() => {
                          setTheme(color.name)
                      }}
                      />    
                    ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}