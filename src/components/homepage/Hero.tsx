import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { FC } from 'react'

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header
    className='flex gap-5 min-h-[40vh] flex-col sm:flex-row sm:min-h-[80vh]'
    >
        {/* text and cta */}
        <div
        className='w-full md:w-2/4 flex flex-col justify-center my-10 sm:my-0'
        >
            <h1
            className='text-3xl md:text-5xl lg:text-6xl font-bold'
            >
                Create amazing websites with <span
                className='text-primary'
                >
                    Beautiful
                </span> themes
            </h1>
            <p
            className='mt-1 mb-3 text-foreground/60'
            >
                Create you're own theme or find you're new favorite here. Making websites have never been easier.
            </p>
            <div
            className='flex gap-2'
            >
                <Input 
                placeholder='What do you wanna Create?'
                size='sm'
                radius='lg'
                />
                <Button
                size='lg'
                >
                    Create
                </Button>
            </div>
        </div>
        {/* text and cta */}

        {/* images */}
        <div
        className='w-full md:w-2/4 flex items-center'
        >
            <div
            className='aspect-square w-full grid grid-cols-2 gap-3'
            >
                <div 
                className='bg-content2 rounded-xl hover:scale-[102%] transition-transform'
                />
                <div
                className='gap-3 grid grid-cols-1'
                >
                    <div 
                    className='w-full bg-content3 aspect-square rounded-xl hover:scale-[102%] transition-transform'
                    />
                    <div 
                    className='w-full bg-content4 aspect-square rounded-xl hover:scale-[102%] transition-transform'
                    />
                </div>
            </div>
        </div>
        {/* images */}
    </header>
  )
}

export default Hero