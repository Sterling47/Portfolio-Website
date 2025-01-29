import React from 'react';
import { useEffect } from 'react';

const AnimatedBg = () => {

const getRandom = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

useEffect(() => {
  const gridItems = document.querySelectorAll('.grid-Background');
  gridItems.forEach((item) => {
    const delay = getRandom(0, 5);
    const duration = getRandom(5, 9);

    // Apply the styles dynamically
    item.style.animationDelay = `${delay}s`;
    item.style.animationDuration = `${duration}s`;
  });
}, []);


  
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-black ">

      {/* <div class="relative min-h-screen flex items-center justify-center bg-gray-900  "> */}



      <div className="absolute inset-0 p-2 grid grid-cols-12 gap-2 transform skew-y-12 scale-y-150 scale-x-110 ">

        {/* Row 1 */}
        <div className="col-span-2 bg-green-900 animate-pulse rounded grid-Background" > </div>
        <div className="col-span-5 bg-shadowGray rounded grid-Background animate-pulse" > </div>
        <div className="col-span-1 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-4 bg-gray-800 rounded grid-Background animate-pulse" > </div>

        {/* Row 2 */}
        <div className="col-span-3 bg-gray-800 rounded grid-Background animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded grid-Background animate-pulse"></div>
        <div className="col-span-4 bg-green-900 rounded grid-Background animate-pulse"></div>
        <div className="col-span-3 bg-gray-700 rounded grid-Background animate-pulse"></div>


        {/* Row 3 */}
        <div className="col-span-6 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-1 bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-3 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-2 bg-gray-800 rounded grid-Background animate-pulse" > </div>

        {/* Row 4 */}
        <div className="col-span-1 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-3 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-4 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-4 bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600 rounded grid-Background animate-pulse" > </div>
        {/* Row 5 */}
        <div className="col-span-3 bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600 rounded grid-Background animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded grid-Background animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded grid-Background animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded grid-Background animate-pulse"></div>
        {/* Row 6 */}
        <div className="col-span-2 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-3 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-2 bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-5 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        {/* Row 7 */}
        <div className="col-span-3 bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-3 bg-shadowGray rounded grid-Background animate-pulse" > </div>
        <div className="col-span-3 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-3 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        {/* Row 8 */}
        <div className="col-span-4 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-1 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-5 bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600rounded grid-Background animate-pulse" > </div>
        <div className="col-span-2 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        {/* Row 9 */}
        <div className="col-span-2 bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600 animate-pulse rounded grid-Background" > </div>
        <div className="col-span-5 bg-shadowGray rounded grid-Background animate-pulse" > </div>
        <div className="col-span-1 bg-gray-800 rounded grid-Background animate-pulse" > </div>
        <div className="col-span-4 bg-gray-800 rounded grid-Background animate-pulse" > </div>

      </div>



      {/* </div> */}
    </div>
  );
};

export default AnimatedBg;