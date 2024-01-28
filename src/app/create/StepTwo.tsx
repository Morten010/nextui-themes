"use client"
import ShowBox from '@/components/ShowBox'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useTheme } from 'next-themes'
import ColorPicker from './ColorPicker'
import { Button, ConfigTheme } from '@nextui-org/react'
import { generatePallete } from '@/lib/generatePallete'
import { colors as Themes } from '@/constants'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaTrashCan } from "react-icons/fa6"
import MoreModal from '@/components/MoreModal'
import { BiShoppingBag } from 'react-icons/bi'
import { IoIosWarning } from 'react-icons/io'

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
    className='h-[75vh] max-h-[75vh] relative'
    >
        <Modal />
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
                resetFocus={() => setFocus("")}
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
        className={`border bg-black dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 left-10 -translate-y-2/4 hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer z-20`}
        onClick={() => {
            setStep(prevStep => prevStep - 1)
        }}
        >
            <FaChevronLeft />
        </div>
        <div
        className={`border bg-background dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 right-10 -translate-y-2/4 ${isColorsDone() ? 1 === step ? "bg-primary/20 border-default-400 scale-105 text-primary font-bold cursor-pointer" : "hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer" : "opacity-25"}`}
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

const Modal = () => {

    return(
        <MoreModal>
            <h3
            className='text-lg font-bold'
            >
                Primary color
            </h3>
            <p
            className='text-foreground'
            >
                This is the primary color which will be used on you're website. The one on most button's you will be using.
            </p>
            <Button
            startContent={<BiShoppingBag className='text-xl'/>}
            color='primary'
            className='mr-auto mb-3'
            >
                Buy now
            </Button>
            <h3
            className='text-lg font-bold'
            >
                Secondary color
            </h3>
            <p
            className='text-foreground'
            >
                Secondary colors complement the main color and are used to highlight secondary information on your website. They should contrast with your main color to create visual interest and guide your visitors' eyes through your site.
            </p>
            <Button
            color='secondary'
            className='mr-auto mb-3'
            >
                Get Started
            </Button>
            <h3
            className='text-lg font-bold'
            >
                Success color
            </h3>
            <p
            className='text-foreground'
            >
                Success color is a color that shows that something good will happened or did happen. Like an accept button or a success message.
            </p>
            <Button
            color='success'
            className='mr-auto mb-3'
            >
                Accept
            </Button>
            <h3
            className='text-lg font-bold'
            >
                Warning color
            </h3>
            <p className='text-foreground'>
                Warning color is a hue that signals caution or potential issues. It is commonly used to draw attention to important information that requires careful consideration. This color is often associated with alert messages, warning signs, or prompts indicating potential risks or actions that users need to be aware of.
            </p>
            <div
            className='border border-warning p-2 mr-auto rounded flex gap-2 text-warning items-center mb-3 mt-1'
            >
                <IoIosWarning
                className='text-2xl'
                />
                <div>
                    <h4
                    className='font-bold'
                    >
                        Warning
                    </h4>
                    <p>
                        If you delete this you won't be able to get it back
                    </p>
                </div>

            </div>
            <h3 className='text-lg font-bold'>
                Danger Color
            </h3>
            <p className='text-foreground'>
                Danger color is a vivid shade that signifies a potential threat or critical situation. It is often used to grab immediate attention and warn users about actions or elements that could have severe consequences. Commonly associated with error messages, delete buttons, or alerts, the danger color serves as a visual cue to prompt users to proceed with caution or take corrective actions.
            </p>
            <Button
            color='danger'
            className='mr-auto mb-3'
            startContent={<FaTrashCan className='text-xl'/>}
            >
                Delete Product
            </Button>
        </MoreModal>            
    )
}

export default StepOne