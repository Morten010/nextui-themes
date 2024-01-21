"use client"
import { ColorScale, Tooltip } from '@nextui-org/react'
import { FC, useState } from 'react'
import { TwitterPicker, TwitterPickerProps, GithubPicker } from 'react-color'

interface ColorPickerProps extends TwitterPickerProps {
  inFocus?: boolean,
  themeColors: ColorScale | undefined
  handleClick: () => void,
  title: string
  direction?: "left" | "right"
}

const ColorPicker: FC<ColorPickerProps> = ({ direction = "left", title, handleClick, themeColors, inFocus = false, ...props }) => {
    const primaryColor = themeColors ? typeof themeColors === "object" ? themeColors.DEFAULT : themeColors : "#fafafa"
    const colors = themeColors ? Object.values(themeColors) : []
    

  return (
    <div
    >
        <Tooltip
        content={title}
        showArrow
        >
            <div
            onClick={handleClick}
            className='cursor-pointer relative w-20 h-20 rounded-xl border border-default-200 dark:border-default-100'
            style={{
                backgroundColor: primaryColor
            }}
            >
                {inFocus && <div
                className={`absolute -bottom-5 translate-y-full ${direction === "left" ? "left-0" : "right-0"}`}
                onClick={(e) => {
                    e.stopPropagation()
                }}
                >
                    <TwitterPicker
                    {...props}
                    />
                </div>}
            </div>
        </Tooltip>
        <div
        className='flex flex-col mt-2 rounded-lg overflow-hidden w-20'
        >
            {colors.map((c) => (
                <Tooltip
                content={c}
                showArrow
                >
                    <div
                    className='w-20 h-7'
                    style={{
                        backgroundColor: c
                    }}
                    />
                </Tooltip>
            ))}
        </div>
    </div>
  )
}

export default ColorPicker