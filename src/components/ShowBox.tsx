import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface ShowBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  
}

const ShowBox: FC<ShowBoxProps> = ({className, ...props}) => {
  return <div
  className={`overflow-y-hidden border border-divider px-2 py-4 rounded-2xl  ${className}`}
  {...props}
  />
}

export default ShowBox