import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from 'framer-motion/dist/es/index'
//import { AnimatePresence} from 'framer-motion/dist/framer-motion'

const Gallerygrid = ({setSelected})=>{
    const {docs}= useFirestore('images');
    console.log(docs);
    return(
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }} s
                    onClick={() => setSelected(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}
export default Gallerygrid;