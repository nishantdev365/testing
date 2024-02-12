'use client'
import Image from 'next/image'
import Link from 'next/link'
import ErrorIcon from '../assets/error.png'
import React from 'react'

const error = () => {
  return (
    <div className="intro_screen">
    <div className="error_page">

       <Image src={ErrorIcon} alt="error_icon" />
       <p style={{fontSize: "74px", fontWeight: "400", }}>404</p>
       <p className="error_title" style={{fontSize: "22px", width: "368px", textAlign: "center"}}>We can&apos;t seem to find the page you&apos;re looking for.</p>
       <div className="login_container_intro error_page_btn" >
           <Link href="/" style={{color: "white"}}>
           <b className="login1_intro" style={{margin: "0 40px 0 40px"}}>Go back to home</b>
           </Link>
       </div>
    </div>

</div>
  )
}

export default error