"use client"
import Image from 'next/image';
import Myself from '../../assets/Myself.png'
import { useInView } from 'react-intersection-observer';
import "../styles/About.css";

function Spline_Component() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
      });
  return (
    <Image src={Myself} alt='myself' ref={ref} className={inView ? 'myself__image' : 'myself__image_'} />
  )
}

export default Spline_Component