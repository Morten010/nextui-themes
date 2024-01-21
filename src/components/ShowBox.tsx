import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface ShowBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  
}

const ShowBox: FC<ShowBoxProps> = ({className, ...props}) => {
  return <div
  className={`overflow-y-hidden border border-default-200 dark:border-default-100 px-2 py-4 rounded-2xl ${className}`}
  {...props}
  />
}

export default ShowBox