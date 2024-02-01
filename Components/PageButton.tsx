
import { FC } from 'react'
import "./Styles/pagebutton.css"

interface PageButtonProps {
    displayName? : string;
}

const PageButton: FC<PageButtonProps> = ({displayName}) => {
  return (
    <div className='page-button' >
        <button>{displayName}</button>
    </div>
  )
}

export default PageButton