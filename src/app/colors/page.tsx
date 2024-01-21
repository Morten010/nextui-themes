import { Tooltip } from '@nextui-org/react'
import React from 'react'

export default function page() {

    const colors = [
        {
            title: "Background Colors",
            colors: [
                "bg-background-50",
                "bg-background-100",
                "bg-background-200",
                "bg-background-300",
                "bg-background-400",
                "bg-background-500",
                "bg-background-600",
                "bg-background-700",
                "bg-background-800",
                "bg-background-900",
                "bg-background",
            ]
        },
        {
            title: "Content Colors",
            colors: [
                "bg-content1",
                "bg-content2",
                "bg-content3",
                "bg-content4"
            ]
        },
        {
            title: "Danger Colors",
            colors: [
                "bg-danger-50",
                "bg-danger-100",
                "bg-danger-200",
                "bg-danger-300",
                "bg-danger-400",
                "bg-danger-500",
                "bg-danger-600",
                "bg-danger-700",
                "bg-danger-800",
                "bg-danger-900",
                "bg-danger",
            ]
        },
        {
            title: "Default Colors",
            colors: [
                "bg-default-50",
                "bg-default-100",
                "bg-default-200",
                "bg-default-300",
                "bg-default-400",
                "bg-default-500",
                "bg-default-600",
                "bg-default-700",
                "bg-default-800",
                "bg-default-900",
                "bg-default",
            ]
        },
        {
            title: "Foreground Colors",
            colors: [
                "bg-foreground-50",
                "bg-foreground-100",
                "bg-foreground-200",
                "bg-foreground-300",
                "bg-foreground-400",
                "bg-foreground-500",
                "bg-foreground-600",
                "bg-foreground-700",
                "bg-foreground-800",
                "bg-foreground-900",
                "bg-foreground",
            ]
        },
        {
            title: "Primary Colors",
            colors: [
                "bg-primary-50",
                "bg-primary-100",
                "bg-primary-200",
                "bg-primary-300",
                "bg-primary-400",
                "bg-primary-500",
                "bg-primary-600",
                "bg-primary-700",
                "bg-primary-800",
                "bg-primary-900",
                "bg-primary",
            ]
        },
        {
            title: "Secondary Colors",
            colors: [
                "bg-secondary-50",
                "bg-secondary-100",
                "bg-secondary-200",
                "bg-secondary-300",
                "bg-secondary-400",
                "bg-secondary-500",
                "bg-secondary-600",
                "bg-secondary-700",
                "bg-secondary-800",
                "bg-secondary-900",
                "bg-secondary",
            ]
        },
        {
            title: "Success Colors",
            colors: [
                "bg-success-50",
                "bg-success-100",
                "bg-success-200",
                "bg-success-300",
                "bg-success-400",
                "bg-success-500",
                "bg-success-600",
                "bg-success-700",
                "bg-success-800",
                "bg-success-900",
                "bg-success",
            ]
        },
        {
            title: "Warning Colors",
            colors: [
                "bg-warning-50",
                "bg-warning-100",
                "bg-warning-200",
                "bg-warning-300",
                "bg-warning-400",
                "bg-warning-500",
                "bg-warning-600",
                "bg-warning-700",
                "bg-warning-800",
                "bg-warning-900",
                "bg-warning",
            ]
        },
        {
            title: "Rest of colors",
            colors: [
                "bg-divider",
                "bg-focus",
                "bg-focus",
                "bg-overlay",
                "bg-overlay",
            ]
        },
    ]

  return (
    <div>
        <h1
        className='text-3xl font-semibold mt-3 mb-1'
        >
            All Colors
        </h1>
        <p
        className='text-foreground/60'
        >
            Where are they placed
        </p>
        {colors.map((c, index) => (
            <>
                <h2
                className='text-xl font-semibold mt-2 mb-1'
                >
                    {c.title}
                </h2>
                <div
                className='colorGrid my1'
                >
                    {c.colors.map((color, index) => (
                        <Tooltip
                        content={color}
                        showArrow
                        >
                            <div 
                            className={`w-full aspect-square max-w-32 border rounded-lg ${color}`}
                            />
                        </Tooltip>
                    ))}
                </div>
            </>
        ))}
    </div>
  )
}

