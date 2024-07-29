import React, { useState } from 'react'
import AddEmployeeSideBar from './AddEmployeeSideBar';

export default function AddEmployeeLayOut({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden">
      <AddEmployeeSideBar/>
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {children}
        </main>
      </div>
   
  );
}
