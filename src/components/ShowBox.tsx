import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface ShowBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  
}

const ShowBox: FC<ShowBoxProps> = ({className, ...props}) => {
  return <div
  className={`class="relative overflow-y-hidden flex items-center border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden ${className}`}
  {...props}
  />
}

export default ShowBox