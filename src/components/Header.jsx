import React, { useState } from 'react'
// here we imported the react icons
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { PiRectangleBold } from "react-icons/pi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
function Header() {
  // Now to manage the side barr we usee state
  const [toggle,setToggle] = useState(false)
  // iski value change karne pe component react karega
  const showSideMenu = () =>{
    setToggle(true);
    // ye set toggle ko true kardega
  }
  const hideSideMenu = () => {
    // isske click pe toggle = false means background pe click kare toh false


    setToggle(false);
  }


  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
      opacity: toggle ? 1 : 0,
      // toggle ture hai toh opacity 1 
      visibility:toggle ? "visible" : "hidden"
      // isme visibility toggle hone pe visible hogi warna hidden hogi
    }}>
      {/* FOR SIDE-BAR */}
      <div onClick={(e)=>{
        e.stopPropagation();
        // isse piche event propogate hota hai woh stop ho jayega
      }}  className='bg-[#fff] h-full w-[540px] absolute duration-[400ms]'
      style={{
        left: toggle ? '0%'  : '-100%' ,

      }}
      // toggle truue hai toh left se
      ></div>
    </div>
    <header className='p-[9px] shadow-lg ' >
      <div className='max-w [1200px]  ml-[150px] mr-[150px] flex items-center'> 
        {/* Here inn main div we apply flex and items centerr jisse items center me aa jaye */}
        <div className='w-[100px] '>
          {/* here width full kiye taki parent ke andar aa jaye */}
          <img src="images/logo.png"   className='w-full cursor-pointer' alt="" />
        </div>
        {/* This Portion is for search */}
        <div className='ml-8 cursor-pointer'>
        <span className='font-bold border-b-[2.5px] border-black hover:text-[#fc8019] '>Other 
        </span> items
        <RxCaretDown fontSize={28} className='text-[#ff5200] inline font-bold ml-2.2 cursor-pointer' onClick={showSideMenu}/>
        {/* onclick pe showsidemenu hoga */}
        {/* Here we call our icon */}
        {/* niche ki  border ke liye */}
        </div>
        



        <nav className='flex list-none gap-[34px] ml-[210px]  text-[18px] font-semibold cursor-pointer   '>
          {/* space  bettween list */}
          <li className='text-lg hover:text-[#fc8019] '><PiRectangleBold className='inline mr-[7px] size-5'/>Swiggy Corporate</li>
          <li className='text-lg hover:text-[#fc8019] '><IoMdSearch  className='inline mr-[7px] size-6' />Search
          </li>
          <li className='text-lg hover:text-[#fc8019] '> <BiSolidOffer className='inline mr-[7px] size-5' />Offers
          <sup> 
          {/* sup tag se offer ke power me aa jayega */}
          <span className='text-xs text-[#fc8019]' >New</span>
          </sup>
          </li>
          <li className='text-lg hover:text-[#fc8019] ' ><IoHelpBuoyOutline  className='inline mr-[7px] size-5' />
          Help
          </li>
          <li className='text-lg hover:text-[#fc8019] '>
          <MdOutlineAssignmentReturn className='inline mr-[7px] size-5'/>
          Sign In</li>
          <li className='text-lg hover:text-[#fc8019] '>
          <IoCartOutline className='inline mr-[7px] size-5' />
          Cart

          </li>
        </nav>
        </div>
    </header>
    </>
  )
}

export default Header
