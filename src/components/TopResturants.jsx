import React, { useEffect, useState } from 'react';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function TopResturants() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error

  async function fetchData() {
    setIsLoading(true);
    setError(null); // Reset error before fetching

    try {
      const response = await fetch("/api/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const result = await response.json();
      const restaurants = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setData(restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error); // Set error state for potential rendering
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleNext() {
    value >= 124 ? "" : setValue((prev) => prev + 31);
  }

  function handlePrev() {
    value <= 0 ? "" : setValue((prev) => prev - 31);
  }

  return (
    <>
      <div className='flex mt-[40px] max-w-[1200px] ml-[150px] mr-[150px] '>
        <div className='text-2xl font-bold'>Top restaurants</div>
        <div className='flex ml-[870px] '>
          <div onClick={handlePrev} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 '>
            <FaArrowLeftLong />
          </div>
          <div onClick={handleNext} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 '>
            <FaArrowRightLong />
          </div>
        </div>
      </div>

      {isLoading ? ( // Display loading indicator while fetching
        <div className='flex justify-center items-center'>Loading restaurants...</div>
      ) : error ? ( // Display error message if fetching fails
        <div className='flex justify-center items-center text-red-500'>Error: {error.message}</div>
      ) : data.length > 0 && ( // Render image list only if data is available
        <div style={{ translate: `-${value}%` }} className='flex mt-[30px] max-w-[1200px] ml-[150px] mr-[150px] duration-700 '>
          {/* CUSTOM IMAGE SECTION */}
          <div className=' h-[190px] flex gap-7 text-base object-cover hover'>
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eohdm5sdnq6e2u46xeux" alt="" />
          
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e03a0820df3c005283e94c48281aea41" alt="" />
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek" alt="" />
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7" alt="" />
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07" alt="" />
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2" alt="" />
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395" alt="" />
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/je6qlse8csxgcfpuoybe" alt="" />
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/906c0affa7d8ff78a3e4db88b4433cde" alt="" />
            <img className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0f86198cf95dc7714c9151ae8424d63" alt="" />
            <img  className='rounded-xl shadow-lg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fm3rs3g6z7ibfhesmxnu" alt="" />
          </div>
        </div>
      )}
      <hr className='my-4 max-w-[1200px] ml-[150px] mr-[150px] ' />
    </>
  );
}

export default TopResturants;