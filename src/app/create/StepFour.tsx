"use client"
import ShowBox from '@/components/ShowBox'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useTheme } from 'next-themes'
import { ConfigTheme } from '@nextui-org/react'
import { FaChevronLeft } from 'react-icons/fa'
import { CopyBlock, dracula } from "react-code-blocks";

interface StepFourProps {
    setColors: Dispatch<SetStateAction<ConfigTheme>>
    colors: ConfigTheme
    setStep: Dispatch<SetStateAction<number>>
    step: number
}

const StepFour: FC<StepFourProps> = ({ colors, setColors, setStep, step }) => {

  return (
    <ShowBox
    className='h-[75vh] max-h-[75vh] overflow-auto'
    style={{
        overflow: "auto"
    }}
    >
        <h2
        className='text-3xl font-semibold text-center mb-2'
        >
            You're done🥳
        </h2>

        <CopyBlock 
        language='json'
        text={JSON.stringify(colors, null, 2)}
        theme={dracula}
        
        />
        
        <div
        className={`border dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 left-10 -translate-y-2/4 hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer z-20`}
        onClick={() => {
            setStep(prevStep => prevStep - 1)
        }}
        >
            <FaChevronLeft />
        </div>
        
    </ShowBox>
  )
}


export default StepFour