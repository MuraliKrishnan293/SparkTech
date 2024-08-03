import { motion, useScroll, useTransform } from 'framer-motion';
import '../App.css';
import { useRef } from 'react';

const Parallax = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start start', 'end start']
    })

    const yText = useTransform(scrollYProgress,[0,1],['0%','500%'])
    const yBg = useTransform(scrollYProgress,[0,1],['0%','100%'])

  return (
    <div ref={ref} className='parallax container-fluid'>
        {/* <motion.h1 style={{ y:yBg }}>Services We Offer</motion.h1> */}
        <motion.div className='mountains'>
        <motion.h1 className='display-1' style={{ y:yText }}>Team Members</motion.h1>
        </motion.div>
        <motion.div style={{ y:yBg }} className='planets'></motion.div>
        <motion.div style={{ x:yBg }} className='stars'></motion.div>
    </div>
  )
}

export default Parallax