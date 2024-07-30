import React from 'react';
import AddEmployeeSideBar from './AddEmployeeSideBar';

export default function AddEmployeeLayOut({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AddEmployeeSideBar />
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
