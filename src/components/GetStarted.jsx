import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'


const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[130px] h-[130px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}>
        <div className={`${styles.flexStart} flwxrow
        `}>
          <p className='font-poppins font-medium text-[17px] leading-[20px] mr-[1px]'><span className='text-gradient'>Get</span></p>
          <img src={arrowUp} alt="arrowup" className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[17px] leading-[20px]'><span className='text-gradient'>Started</span></p>
      </div>
    </div>
  )
}

export default GetStarted
