import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { FC, useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { FaQuestion, FaTrashCan } from 'react-icons/fa6'
import { IoIosWarning } from 'react-icons/io'

interface MoreModalProps {
  children: React.ReactNode
}

const MoreModal: FC<MoreModalProps> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
       <Button
        isIconOnly
        variant='bordered'
        color='primary'
        radius='full'
        size='sm'
        className='absolute right-4 top-4'
        onClick={onOpen}
        >
            <FaQuestion
            className='h-4 w-4'
            />
        </Button> 
        <Modal 
        size='5xl'
        backdrop="blur" 
        isOpen={isOpen} 
        onClose={onClose}
        scrollBehavior='outside'
        >
            <ModalContent>
            {() => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-2xl">
                    What is the different colors and where do they go
                </ModalHeader>
                <ModalBody
                className='gap-1'
                >
                    {children}
                </ModalBody>
                </>
            )}
            </ModalContent>
      </Modal>
    </>
  )
}

export default MoreModal