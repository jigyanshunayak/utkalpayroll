import React from 'react'

import { useRouter } from 'next/router';
import { logo_pic } from '@/src/assets/admin/adminicon';
import { sideBarArr } from '@/src/utils/superAdmin/data';


export default function Sidebar() {
  const router = useRouter()
  return (
    <aside className="w-60 py-2 bg-[#5A12CF] text-white items-center overflow-hidden font-sans rounded-xl shadow-lg flex flex-col">
      <div className="w-full py">
        <img src={logo_pic.src} alt="Company Logo" className=" h-16 w-64" />
      </div>
      <div className=" text-base  font-semibold py-6">
        <div className="flex flex-col">
          {sideBarArr.map((item) => (
            <span
              key={item.id}
              className="flex  items-center group cursor-pointer hover: !transition-all !duration-500 !ease-in-out  z-50"
              onClick={() => {
                router.push(`${item.path}`);
              }}
            ><div className='gap-5 text-base flex text-nowrap items-start hover:bg-[#D9D9D9] hover:text-[#5A12CF]  rounded-full py-2 px-5 transition duration-300 font-semibold'>
                <img src={item.img.src} alt="" className='w-5 h-5'/>
                <h2>{item.title}</h2>
              </div>
            </span>
          ))}
        </div>
        </div>

    </aside>
  )
}
