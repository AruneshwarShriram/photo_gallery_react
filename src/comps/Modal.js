import React from 'react';
import { motion } from 'framer-motion';
const Modal=({selected,setSelected})=>{
    const handleClick =(e)=>{
        if(e.target.classList.contains('backdrop'))
        setSelected(null);
    }
    return(
        <motion.div className="backdrop" onClick={handleClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
            <motion.img src={selected} alt=""
            initial={{y:"-20vh"}}
            animate={{y:0}}
                transition={{ delay: 0.3}}

            />

        </motion.div>)
}
export default Modal;