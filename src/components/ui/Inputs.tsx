import { Input } from '@nextui-org/react'
import React from 'react'

export default function Inputs() {
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <div>
        <h2
        className="text-2xl font-semibold mt-5"
        >
            Inputs
        </h2>
        <div className="flex w-full flex-wrap gap-4">
            <Input type="email" label="Email" className="max-w-[220px]" />
            <Input type="email" label="Email" placeholder="Enter your email"  className="max-w-[220px]"/>
            {colors.map((color) => (
              <Input
                key={color}
                type="email"
                color={color}
                label="Email"
                placeholder="Enter your email"
                defaultValue="junior@nextui.org"
                className="max-w-[220px]"
              />
            ))}
            <Input
              isClearable
              type="email"
              label="Email"
              variant="bordered"
              placeholder="Enter your email"
              defaultValue="junior@nextui.org"
              className="max-w-xs"
            />
        </div>
    </div>
  )
}
