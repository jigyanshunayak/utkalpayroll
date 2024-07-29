import React from 'react';
import { useRouter } from 'next/router';
import { logo_pic } from '@/src/assets/admin/adminicon';
import { adminsideBarArr } from '@/src/utils/admin';

const AdminSettingsBar = ({open,setOpen}:any) => {
  const router = useRouter();
  return (
    <aside className={`w-60 py-4 bg-[#5A12CF] text-white items-center overflow-hidden font-sans rounded-xl shadow-lg ${open ? "flex flex-col":"hidden"} `}>
      <div className="w-full">
        <img src={logo_pic.src} alt="Company Logo" className="h-16 w-64" />
      </div>
      <div className="text-base font-semibold">
        <div className="flex flex-col">
          <button className='py-2 px-8 text-white'onClick={()=>{setOpen(false)}}>
            Back to Home
          </button>
          {adminsideBarArr.map((item) => (
            <span
              key={item.id}
              className="flex items-center group cursor-pointer hover:!transition-all !duration-500 !ease-in-out z-50"
              onClick={() => {
                router.push(`${item.path}`);
              }}
            >
              <div className="gap-5 text-base flex text-nowrap items-start hover:bg-[#D9D9D9] hover:text-[#5A12CF] rounded-full py-2 px-5 transition duration-300 font-semibold">
                <img src={item.img.src} alt="" />
                <h2>{item.title}</h2>
              </div>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AdminSettingsBar;
