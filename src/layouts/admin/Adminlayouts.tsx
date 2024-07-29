import React, { useState } from 'react';
import Adminheader from './Adminheader';
import AdminSidebar from './Adminsidebar';
import AdminSettingsBar from './AdminsettingSidebar';

export default function AdminLayouts({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden">
      <AdminSettingsBar open={open} setOpen={setOpen} />
      <AdminSidebar open={open} setOpen={setOpen} />
      <div className="flex-1 flex flex-col overflow-auto">
        <Adminheader />
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
