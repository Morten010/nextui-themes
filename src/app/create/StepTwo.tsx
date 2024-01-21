"use client"
import ShowBox from '@/components/ShowBox'
import { ConfigTheme } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import ColorPicker from './ColorPicker'
import { generatePallete } from '@/lib/generatePallete'
import { colors as Themes } from '@/constants'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


interface StepTwoProps {
    setColors: Dispatch<SetStateAction<ConfigTheme>>
    colors: ConfigTheme
    setStep: Dispatch<SetStateAction<number>>
    step: number
}

const StepTwo: FC<StepTwoProps> = ({ colors, setColors, setStep, step }) => {
    const {theme, setTheme} = useTheme()
    const [focus, setFocus] = useState("")

    const isColorsDone = () => {
        if(
            !!colors.colors?.default &&
            !!colors.colors?.foreground &&
            !!colors.colors?.background
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
            Pick The boring colors
        </h2>
        <div
        className='flex gap-2 justify-evenly mt-5'
        >
              
            <ColorPicker
            colors={colors.colors?.primary ? ["#808080", "#333333", "#c0c0c0", "#444", colors.colors.primary[100]!] : ["#808080", "#333333", "#c0c0c0", "#444"]}
            title="default"   
            key={"default"} 
            handleClick={() => {
                if("default" === focus){
                    setFocus("")
                }else{
                    setFocus("default")
                }
            }}
            // @ts-ignore
            themeColors={colors.colors?.default}
            inFocus={"default" === focus}
            onChange={(e: any) => {
                setColors({
                    ...colors,
                    colors: {
                        ...colors.colors,
                        default: generatePallete(e.hsv),
                        
                    }
                })
            }}
            onChangeComplete={(e: any) => {
                console.log(e);
                
            }}
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
            {colors.colors && Object.keys(colors.colors).reverse().map((key, index) => {
                    console.log(key === focus);
                    console.log(key, focus);
                if(
                    key === "foreground" ||
                    key === "background"
                ) return (
                <ColorPicker
                direction={key === "background" ? "right": "left"}
                triangle={key === "background" ? "top-right": "top-left"}
                colors={["#fafafa", "#121212", "#808080", "#e0e0e0", "#333333", "#c0c0c0", "#f5f5f5"]}
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
                    key === "background" ? setColors({
                        ...colors,
                        colors: {
                            ...colors.colors,
                            [key]: e.hex,
                            overlay: generatePallete(e.hsv).DEFAULT
                        }
                    }) : setColors({
                        ...colors,
                        colors: {
                            ...colors.colors,
                            [key]: generatePallete(e.hsv)
                        }
                    })
                }}
                onChangeComplete={(e: any) => {
                    console.log(e);
                    
                }}
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
        className={`border dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 right-10 -translate-y-2/4 ${isColorsDone() ? 2 === step ? "bg-primary/20 border-default-400 scale-105 text-primary font-bold cursor-pointer" : "hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer" : "opacity-25"} z-20`}
        onClick={() => {
            if(isColorsDone()){
                setStep(prevStep => prevStep + 1)
            }
        }}
        >
            <FaChevronRight />
        </div>
        <div
        className={`border dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 left-10 -translate-y-2/4 ${2 === step ? "bg-primary/20 border-default-400 scale-105 text-primary font-bold cursor-pointer" : "hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer"} z-20`}
        onClick={() => {
            setStep(prevStep => prevStep - 1)
        }}
        >
            <FaChevronLeft />
        </div>
    </ShowBox>
  )
}

export default StepTwo