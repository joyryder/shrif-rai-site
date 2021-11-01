import Navlinks from "./Navlinks";
import { BiMenuAltRight} from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { useState } from "react";

const Mobilenav = () => {
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState({color:'green'})

    const hamburgerIcon = <BiMenuAltRight class='hamburger' size='50px' color="black"
                                onClick={() => setOpen(!open)} />
    const closeIcon = <IoMdClose class='closeicon' size='50px'   color="black" style={color} 
                                onClick={() => setOpen(!open)} />
    return(
        <nav className="mobilenav">
            { open ? null: hamburgerIcon}
            { open ? <div className='sidewindow'> <Navlinks/>  {closeIcon} </div> : null}
        </nav>
    )
}

export default Mobilenav;