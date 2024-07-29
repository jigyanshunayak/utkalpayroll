import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts';
import LeaveDetailPage from '../components/companysetting/leavedetails/LeaveDetails';

export default function leaveDetail() {
    return (
        <AdminLayouts>
             <LeaveDetailPage/>
        </AdminLayouts>
      );
}

