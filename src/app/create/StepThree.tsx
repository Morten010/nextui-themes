import ShowBox from '@/components/ShowBox'
import { Button, ConfigTheme, Switch } from '@nextui-org/react'
import { Dispatch, FC, SetStateAction } from 'react'
import { FaChevronLeft, FaChevronRight, FaMoon, FaSun } from 'react-icons/fa'

interface StepThreeProps {
    setColors: Dispatch<SetStateAction<ConfigTheme>>
    colors: ConfigTheme
    setStep: Dispatch<SetStateAction<number>>
    step: number
}

const StepThree: FC<StepThreeProps> = ({ colors, setColors, setStep, step }) => {

    const handleSwitch = () => {
            const newColors: ConfigTheme = {
                ...colors,
                colors: {
                    ...colors.colors,
                    danger: {
                        // @ts-ignore
                        ...colors.colors?.danger,
                        "50": colors.colors?.danger?.[900],
                        "100": colors.colors?.danger?.[800],
                        "200": colors.colors?.danger?.[700],
                        "300": colors.colors?.danger?.[600],
                        "400": colors.colors?.danger?.[500],
                        "500": colors.colors?.danger?.[400],
                        "600": colors.colors?.danger?.[300],
                        "700": colors.colors?.danger?.[200],
                        "800": colors.colors?.danger?.[100],
                        "900": colors.colors?.danger?.[50],
                    },
                    primary: {
                        // @ts-ignore
                        ...colors.colors?.primary,
                        "50": colors.colors?.primary?.[900],
                        "100": colors.colors?.primary?.[800],
                        "200": colors.colors?.primary?.[700],
                        "300": colors.colors?.primary?.[600],
                        "400": colors.colors?.primary?.[500],
                        "500": colors.colors?.primary?.[400],
                        "600": colors.colors?.primary?.[300],
                        "700": colors.colors?.primary?.[200],
                        "800": colors.colors?.primary?.[100],
                        "900": colors.colors?.primary?.[50],
                    },
                    secondary: {
                        // @ts-ignore
                        ...colors.colors?.secondary,
                        "50": colors.colors?.secondary?.[900],
                        "100": colors.colors?.secondary?.[800],
                        "200": colors.colors?.secondary?.[700],
                        "300": colors.colors?.secondary?.[600],
                        "400": colors.colors?.secondary?.[500],
                        "500": colors.colors?.secondary?.[400],
                        "600": colors.colors?.secondary?.[300],
                        "700": colors.colors?.secondary?.[200],
                        "800": colors.colors?.secondary?.[100],
                        "900": colors.colors?.secondary?.[50],
                    },
                    success: {
                        // @ts-ignore
                        ...colors.colors?.success,
                        "50": colors.colors?.success?.[900],
                        "100": colors.colors?.success?.[800],
                        "200": colors.colors?.success?.[700],
                        "300": colors.colors?.success?.[600],
                        "400": colors.colors?.success?.[500],
                        "500": colors.colors?.success?.[400],
                        "600": colors.colors?.success?.[300],
                        "700": colors.colors?.success?.[200],
                        "800": colors.colors?.success?.[100],
                        "900": colors.colors?.success?.[50],
                    },
                    warning: {
                        // @ts-ignore
                        ...colors.colors?.warning,
                        "50": colors.colors?.warning?.[900],
                        "100": colors.colors?.warning?.[800],
                        "200": colors.colors?.warning?.[700],
                        "300": colors.colors?.warning?.[600],
                        "400": colors.colors?.warning?.[500],
                        "500": colors.colors?.warning?.[400],
                        "600": colors.colors?.warning?.[300],
                        "700": colors.colors?.warning?.[200],
                        "800": colors.colors?.warning?.[100],
                        "900": colors.colors?.warning?.[50],
                    },
                    background: {
                        // @ts-ignore
                        "DEFAULT": colors.colors?.background?.["foreground"],
                        // @ts-ignore
                        "foreground": colors.colors?.background?.["DEFAULT"]
                    },
                    default: {
                        // @ts-ignore
                        ...colors.colors?.default,
                        "50": colors.colors?.default?.[900],
                        "100": colors.colors?.default?.[800],
                        "200": colors.colors?.default?.[700],
                        "300": colors.colors?.default?.[600],
                        "400": colors.colors?.default?.[500],
                        "500": colors.colors?.default?.[400],
                        "600": colors.colors?.default?.[300],
                        "700": colors.colors?.default?.[200],
                        "800": colors.colors?.default?.[100],
                        "900": colors.colors?.default?.[50],
                    },
                    foreground: {
                         // @ts-ignore
                         ...colors.colors?.foreground,
                         "50": colors.colors?.foreground?.[900],
                         "100": colors.colors?.foreground?.[800],
                         "200": colors.colors?.foreground?.[700],
                         "300": colors.colors?.foreground?.[600],
                         "400": colors.colors?.foreground?.[500],
                         "500": colors.colors?.foreground?.[400],
                         "600": colors.colors?.foreground?.[300],
                         "700": colors.colors?.foreground?.[200],
                         "800": colors.colors?.foreground?.[100],
                         "900": colors.colors?.foreground?.[50],
                    },
                    content1: colors.colors?.default?.[800],
                    content2: colors.colors?.default?.[700],
                    content3: colors.colors?.default?.[600],
                    content4: colors.colors?.default?.[500],
                    
                },
                extend: colors.extend === "dark" ? "light": "dark"
            }

        setColors(newColors)
    }

  return <ShowBox
  className='h-[75vh] max-h-[75vh] w-full'
  >
    <h2
    className='text-3xl font-semibold text-center'
    >
        Pick you're main colors
    </h2>

    <Switch
      className='flex flex-col mx-auto mt-[25vh] gap-2'
      defaultSelected={false}
      onChange={() => handleSwitch()}
      size="lg"
      color="success"
      startContent={<FaMoon />}
      endContent={<FaSun />}
    >
        {colors.extend === "dark" ? "Dark": "Light"} mode
    </Switch>

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