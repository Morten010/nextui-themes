import ShowBox from '@/components/ShowBox'
import { Button, ConfigTheme } from '@nextui-org/react'
import { Dispatch, FC, SetStateAction } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface StepThreeProps {
    setColors: Dispatch<SetStateAction<ConfigTheme>>
    colors: ConfigTheme
    setStep: Dispatch<SetStateAction<number>>
    step: number
}

const StepThree: FC<StepThreeProps> = ({ colors, setColors, setStep, step }) => {
  return <ShowBox
  className='h-[75vh] max-h-[75vh]'
  >
    <h2
    className='text-3xl font-semibold text-center'
    >
        Pick you're main colors
    </h2>
    <Button
    onClick={() => {
        setColors({
            ...colors,
            extend: colors.extend === "dark" ? "light" : "dark"
        })
    }}
    color='primary'
    >
        Change type of theme to {colors.extend === "dark" ? "Light": "Dark"}
    </Button>
    <div
    className={`border dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 right-10 -translate-y-2/4 hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer z-20`}
    onClick={() => {
        setStep(prevStep => prevStep + 1)
    }}
    >
        <FaChevronRight />
    </div>
    <div
    className={`border dark:border-default-100 h-9 w-9 grid place-content-center rounded-full transition-all absolute top-2/4 left-10 -translate-y-2/4 hover:bg-primary/20 hover:scale-105 border-default-200 cursor-pointer z-20`}
    onClick={() => {
        setStep(prevStep => prevStep - 1)
    }}
    >
        <FaChevronLeft />
    </div>
  </ShowBox>
}

export default StepThree