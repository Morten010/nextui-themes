"use client"

import { Dispatch, FC, SetStateAction, useState } from 'react'
import StepOne from './StepOne'
import { ConfigTheme } from '@nextui-org/react'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'

interface pageProps {

}

const page: FC<pageProps> = ({}) => {
    const [step, setStep] = useState(1)
    const steps = Array(4).fill("")

    const [colors, setColors] = useState<ConfigTheme>({
        colors: {
            background: "",
            content1: "",
            content2: "",
            content3: "",
            content4: "",
            danger: "",
            default: "",
            divider: "",
            focus: "",
            foreground: "",
            overlay: "",
            primary: "",
            secondary: "",
            success: "",
            warning: "",
        },
        extend: "dark"
    })

    console.log(colors);
    
  return (
    <>
        <div
        className='hidden sm:inline-block w-full'
        >
            {step === 1 && <StepOne 
            setStep={setStep}
            step={step}
            colors={colors}
            setColors={setColors}
            />}
            {step === 2 && <StepTwo 
            setStep={setStep}
            step={step}
            colors={colors}
            setColors={setColors}
            />}
            {step === 3 && <StepThree 
            setStep={setStep}
            step={step}
            colors={colors}
            setColors={setColors}
            />}
            {step === 4 && <StepFour 
            setStep={setStep}
            step={step}
            colors={colors}
            setColors={setColors}
            />}
        </div>
        <div
        className='sm:hidden min-h-[70vh] grid place-content-center text-center'
        >
            <h1
            className='text-3xl font-bold mb-2'
            >
                Oops! Looks like this content isn't phone-friendly 📱💔
            </h1>
            <p
            className='text-default-500'
            >
                Sorry about that! The stuff you're trying to see doesn't work well on phones. 😟 For the best experience, please switch to a computer or laptop. If you don't have access to one right now, don't worry—try again later when you can. We'll be here! 🌟
            </p>
        </div>
        
        <div
        className='gap-2 absolute bottom-5 left-2/4 -translate-x-2/4 hidden sm:flex'
        >
            {steps.map((_ , index) => (
                <div
                key={`step-${index}`}
                className={`border border-divider h-9 w-9 grid place-content-center rounded-full cursor-pointer transition-all ${index + 1 === step ? "bg-primary/20 border-default-400 scale-105 text-primary font-bold" : "hover:bg-primary/20 hover:scale-105 border-default-200"}`}
                // onClick={() => index + 1 === step ? null : setStep(index +1)}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    </>
  )
}

export default page