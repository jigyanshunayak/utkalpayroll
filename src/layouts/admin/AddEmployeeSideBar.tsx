import { useRouter } from 'next/router';
import React from 'react';
import { addEmployeeArr } from '@/src/utils/admin';

export default function AddEmployeeSideBar() {
  const router = useRouter();

  return (
    <aside className="w-60 h-screen py-4 bg-[#5A12CF] text-white items-center font-sans rounded-xl shadow-lg overflow-hidden">
      <div className="text-base font-semibold">
        <div className="flex flex-col justify-center items-center">
          {addEmployeeArr.map((item) => (
            <div
              key={item.id}
              className="flex items-center group cursor-pointer hover:transition-all hover:duration-500 hover:ease-in-out z-50"
              onClick={() => {
                router.push(item.path);
              }}
            >
              <div className="gap-5 text-xl flex text-nowrap items-start hover:bg-[#D9D9D9] hover:text-[#5A12CF] rounded-full py-2 px-5 transition duration-300 font-semibold">
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
