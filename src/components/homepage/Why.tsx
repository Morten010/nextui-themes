import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiHourglass } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { IoIosRose } from 'react-icons/io'

export default function Why() {
  return (
    <section>
        <h2
        className='text-3xl text-center font-bold my-2'
        >
            Why use nextui?
        </h2>
        <div
        className='grid sm:grid-cols-3 gap-2'
        >
            <Card>
                <CardBody
                className='text-center'
                >
                    <div 
                    className='h-16 w-16 dark:bg-primary-200 bg-primary-800 mx-auto rotate-45 rounded-md my-4 shadow-primary hover:scale-105 relative transition-all'
                    >
                        <BiHourglass 
                        className='-rotate-45 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-4xl text-primary'
                        />
                    </div>
                    <h3
                    className='text-xl font-semibold mb-2'
                    >
                        Saves time
                    </h3>
                    <p
                    className='text-foreground-700'
                    >
                        Premade components and now themes. how much easier does it get
                    </p>
                </CardBody>
            </Card>
            <Card>
                
                <CardBody
                className='text-center'
                >
                    <div 
                    className='h-16 w-16 dark:bg-primary-200 bg-primary-800 mx-auto rotate-45 rounded-md my-4 shadow-primary hover:scale-105 relative transition-all'
                    >
                        <IoIosRose
                        className='-rotate-45 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-4xl text-primary'
                        />
                    </div>
                    <h3
                    className='text-xl font-semibold mb-2'
                    >
                        Good looking
                    </h3>
                    <p
                    className='text-foreground-700'
                    >
                        All components looks good and clean. Plus it is easy to customize.
                    </p>
                </CardBody>
            </Card>
            <Card>
                
                <CardBody
                className='text-center'
                >
                    <div 
                    className='h-16 w-16 dark:bg-primary-200 bg-primary-800 mx-auto rotate-45 rounded-md my-4 shadow-primary hover:scale-105 relative transition-all'
                    >
                        <FaLaptopCode
                        className='-rotate-45 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-4xl text-primary'
                        />
                    </div>
                    <h3
                    className='text-xl font-semibold mb-2'
                    >
                        Easy to setup
                    </h3>
                    <p
                    className='text-foreground-700'
                    >
                        Easy to setup just go to the <Link
                        href="https://nextui.org/"
                        target='_blank'
                        className='text-primary-500 underline underline-offset-2'
                        >nextui docs</Link> and follow the instructions
                    </p>
                </CardBody>
            </Card>
        </div>
    </section>
  )
}
