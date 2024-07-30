import { useRouter } from 'next/router';
import React from 'react';
import { addEmployeeArr } from '@/src/utils/admin';

export default function AddEmployeeSideBar() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <aside className="w-60 h-screen py-4 bg-[#5A12CF] text-white font-sans rounded-xl shadow-lg">
      <div className="text-base font-semibold">
        <div className="flex flex-col items-start">
          {addEmployeeArr.map((item) => (
            <div
              key={item.id}
              className={`flex items-center group cursor-pointer py-2 px-5 rounded-full transition duration-300 ${currentPath === item.path ? 'bg-[#D9D9D9] text-[#5A12CF]' : 'hover:bg-[#D9D9D9] hover:text-[#5A12CF]'}`}
              onClick={() => router.push(item.path)}
            >
              <div className={`w-3 h-3 mr-3 rounded-full ${currentPath === item.path ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
