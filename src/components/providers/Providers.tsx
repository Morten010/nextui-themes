'use client'

import { NextUIProvider } from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider, useTheme} from "next-themes";
import { FC } from 'react'

interface providersProps {
  children: React.ReactNode
}

const Providers: FC<providersProps> = ({children}) => {
    
  return (
    <NextUIProvider>
        <NextThemesProvider 
        attribute="class" 
        themes={["light", "dark", "darkBlue", "cherryBlossom", "purple", "test"]}
        enableColorScheme
        >
            {children}
        </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Providers