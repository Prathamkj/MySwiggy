import React, { useEffect, useState } from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { RiAlarmWarningFill } from 'react-icons/ri';
function Category() {
    const [data, setData] = useState([]);

    const [value, setValue] = useState(0)
    // initially value = 0
    // making an async fnc of fetch data
    async function fetchData() {
        const data = await fetch("/api/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // convert inro json format and assing await to it
        const result = await data.json()
        // here we destructure karenge ek ek karke
        // yaha pe hum har ek date ko ek ek karke leke aayenge
        console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // now we store date into set date
        setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)

    }

    useEffect(() => {
        // api use effect ke andar fetch karenge
        fetchData()
    }, [])
    // for arrows
    function handleNext() {
        // set value me change hoga ki previous value me 20 + kardenge
        value >= 124 ? "" : setValue((prev) => prev + 31)

    }

    function handlePrev() {
        value <= 0 ? "" : setValue((prev) => prev - 31)
    }




    return (
        <>
            {/* same class jo header me thi */}
            <div className='' >
                <div className='flex mt-[15px] max-w-[1200px] ml-[150px] mr-[150px] '>
                    <div className='text-2xl font-bold'>My Swiggy</div>
                    {/* 2 arrows */}
                    <div className='flex ml-[910px] '>
                        {/* it is like justify items center and aling item center  */}
                        <div onClick={handlePrev} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 '>
                            <FaArrowLeftLong />
                        </div>
                        <div onClick={handleNext} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 '>
                            <FaArrowRightLong /></div>
                    </div>

                </div>
                <div
                    style={{ translate: `-${value}%` }}
                    // here we will use trasnlate to move the value
                    className={'flex mt-[30px] max-w-[1200px] ml-[150px] mr-[150px] duration-700'}>

                    {/* here we gave overfloww hidden  */}

                    {
                        // images lana hai isme
                        data.map((item) => (
                            <img
                                key={item.id}
                                className='h-[182px] ' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt="" />
                        ))
                    }

                </div>
                {/* horizontal line */}
                <hr className='my-4 max-w-[1200px] ml-[150px] mr-[150px] ' />

                {/* SECOND PART OF BODY */}

            </div>

        </>
    )
}

export default Category
