import Buttons from '@/components/ui/Buttons'
import ProductCards from '@/components/ui/ProductCards'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <>
        <div>
            <h1
            className='text-3xl font-semibold'
            >
                Components
            </h1>
            <p
            className='text-foreground/60'
            >
                See how all the components looks with the theme.
            </p>
        </div>
        <Buttons 
        
        />
        <ProductCards />
    </>
  )
}

export default page