"use client"
import ShowBox from '@/components/ShowBox'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useTheme } from 'next-themes'
import ColorPicker from './ColorPicker'
import { ConfigTheme } from '@nextui-org/react'
import { generatePallete } from '@/lib/generatePallete'
import { colors as Themes } from '@/constants'
import { FaChevronRight } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'


interface StepOneProps {
    setColors: Dispatch<SetStateAction<ConfigTheme>>
    colors: ConfigTheme
    setStep: Dispatch<SetStateAction<number>>
    step: number
}

const StepOne: FC<StepOneProps> = ({ colors, setColors, setStep, step }) => {
    const {theme, setTheme} = useTheme()
    const [focus, setFocus] = useState("")

    const isColorsDone = () => {
        if(
            !!colors.colors?.primary &&
            !!colors.colors?.warning &&
            !!colors.colors?.success &&
            !!colors.colors?.secondary &&
            !!colors.colors?.danger
        ){
            return true
        }else{
            return false
        }
    }

  return (
    <ShowBox
    className='h-[75vh] max-h-[75vh]'
    >
        <h2
        className='text-3xl font-semibold text-center'
        >
            Pick you're main colors
        </h2>
        <div
        className='flex gap-2 justify-evenly mt-5'
        >
            {colors.colors && Object.keys(colors.colors).reverse().map((key, index) => {
                    console.log(key === focus);
                    console.log(key, focus);
                if(
                    key === "primary" ||
                    key === "secondary" ||
                    key === "success" ||
                    key === "danger" ||
                    key === "warning" 
                ) return (
                <ColorPicker
                title={key}   
                key={key + index} 
                handleClick={() => {
                    if(key === focus){
                        setFocus("")
                    }else{
                        setFocus(key)
                    }
                }}
                // @ts-ignore
                themeColors={colors.colors?.[key]}
                inFocus={key === focus}
                onChange={(e: any) => {
                    key === "primary" ? setColors({
                        ...colors,
                        colors: {
                            ...colors.colors,
                            [key]: generatePallete(e.hsv, colors.extend!),
                            focus: generatePallete(e.hsv, "light").DEFAULT,
                        }
                    }) : setColors({
                        ...colors,
                        colors: {
                            ...colors.colors,
                            [key]: generatePallete(e.hsv, colors.extend!)
                        }
                    })
                }}
                onChangeComplete={(e: any) => {
                    console.log(e);
                    
                }}
                triangle={key === "danger" ? "top-right" : key === "primary" ? "top-right" : "top-left"}
                direction={key === "danger" ? "right" : key === "primary" ? "right" : "left"}
                styles={{
                    default: {
                        card:{
                            backgroundColor: theme ? Themes.find(t => t.name === theme)?.color : `transparent transparent ${theme}`,
                            borderRadius: "14px",
                            maxWidth: "135px"
                        },
                        body: {
                            backgroundColor: theme ? Themes.find(t => t.name === theme)?.color : `transparent transparent ${theme}`,
                            borderRadius: 4,
                        },
                        triangle: {
                            borderColor: theme ? `transparent transparent ${Themes.find(t => t.name === theme)?.color}` : `transparent transparent ${theme}`,
                        },
                        input: {
                            border: "1px solid primary",
                            borderRadius: 4
                        },
                        hash: {
                            display: "none"
                        }
                    }
                }}
                />
            )})}
        </div>
        <div
        className={`border dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 right-10 -translate-y-2/4 ${isColorsDone() ? 1 === step ? "bg-primary/20 border-default-400 scale-105 text-primary font-bold cursor-pointer" : "hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer" : "opacity-25"}`}
        onClick={() => {
            if(isColorsDone()){
                setStep(prevStep => prevStep + 1)
            }
        }}
        >
            <FaChevronRight />
        </div>
    </ShowBox>
  )
}

// ${1 === step ? "bg-primary/20 border-default-400 scale-105 text-primary font-bold" : "hover:bg-primary/20 hover:scale-105 border-default-200"}

export default StepOne