import {useState} from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

const Expanded = ({ header, children}) => {
    const [expand, setExpand] = useState(false)
    const handleClick = () => {
        setExpand(!expand)
    }
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className='flex flex-row items-center justify-between'>
                    {header}
                </div>
                <div onClick={handleClick}>
                {expand ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>
            {expand && <div className='p-2 border-t'>{children}</div>}
        </div>
    )
}

export default Expanded