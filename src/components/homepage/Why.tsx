import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Why() {
  return (
    <section>
        <h2
        className='text-3xl text-center font-bold my-2'
        >
            Why use nextui?
        </h2>
        <div
        className='grid grid-cols-3 gap-2'
        >
            <Card>
                
                <CardBody
                className='text-center'
                >
                    <div 
                    className='h-16 w-16 bg-primary mx-auto rotate-45 rounded-md my-4 shadow-primary hover:scale-105 relative transition-all'
                    />
                    <h3
                    className='text-xl font-semibold mb-2'
                    >
                        Saves time
                    </h3>
                    <p>
                        With these premade themes and the prebuilt components makes you're development faster and easier.
                    </p>
                </CardBody>
            </Card>
            <Card>
                
                <CardBody
                className='text-center'
                >
                    <div 
                    className='h-16 w-16 bg-primary mx-auto rotate-45 rounded-md my-4 shadow-primary hover:scale-105 relative transition-all'
                    />
                    <h3
                    className='text-xl font-semibold mb-2'
                    >
                        Good looking
                    </h3>
                    <p>
                        All components looks good and clean. Plus it is easy to customize.
                    </p>
                </CardBody>
            </Card>
            <Card>
                
                <CardBody
                className='text-center'
                >
                    <div 
                    className='h-16 w-16 bg-primary mx-auto rotate-45 rounded-md my-4 shadow-primary hover:scale-105 relative transition-all'
                    />
                    <h3
                    className='text-xl font-semibold mb-2'
                    >
                        Easy to setup
                    </h3>
                    <p>
                        Easy to setup just go to the <Link
                        href="https://nextui.org/"
                        target='_blank'
                        >nextui docs</Link>
                    </p>
                </CardBody>
            </Card>
        </div>
    </section>
  )
}
