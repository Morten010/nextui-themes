"use client"
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { FC } from 'react'

interface ProductCardsProps {
}

const ProductCards: FC<ProductCardsProps> = ({}) => {
    const list = [
        {
          title: "Orange",
          img: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
          price: "$5.50",
        },
        {
            title: "Orange",
            img: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
            price: "$5.50",
          },
          {
            title: "Orange",
            img: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
            price: "$5.50",
          },
          {
            title: "Orange",
            img: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
            price: "$5.50",
          },
    ]

  return (
    <div>
        <h2
        className="text-2xl font-semibold mt-5 mb-2"
        >
            Product Cards
        </h2>
        <div
        className='gap-2 grid grid-cols-2 sm:grid-cols-4'
        >
            {list.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible p-0">
                    <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>{item.title}</b>
                    <p className="text-default-500">{item.price}</p>
                </CardFooter>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default ProductCards