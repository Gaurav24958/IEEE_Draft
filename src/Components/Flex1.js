import React from 'react'
import Navbar from './Navbar'

export default function Flex1() {
  return (
    <>

      <Navbar/>
      <div className="bgimag"></div>
      <div className="text">
        <div className="line1">
          <img src="../Images/IEEE.png" className="IEEE" alt="" srcset="" />
          {/* <h2>IEEE</h2> */}
        </div>
        <div className="line2">
          <h2>ALL <span>INDIA</span> STUDENT YOUNG PROFESSIONAL</h2>
        </div>
        <div className="line3">
          <h2>WOMEN IN ENGINEERING</h2>
        </div>
        <div className="line4">
          <h2>AND LIFE MEMBER</h2>
        </div>
        <div className="line5">
          <h2>CONGRESS'22</h2>
        </div>

      </div>


    </>
  )
}
