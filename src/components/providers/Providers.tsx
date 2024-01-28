'use client'

import { colors } from '@/constants';
import { NextUIProvider } from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider, useTheme} from "next-themes";
import { FC } from 'react'

interface providersProps {
  children: React.ReactNode
}

const Providers: FC<providersProps> = ({children}) => {
  const themes = colors.map(color => color.name)

  return (
    <NextUIProvider>
        <NextThemesProvider 
        attribute="class" 
        themes={themes}
        defaultTheme='posthog'
        >
            {children}
        </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Providers