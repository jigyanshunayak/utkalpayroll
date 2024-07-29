import AllEmployee from '@/src/components/admin/employee/AllEmployee'
import Adminlayouts from '@/src/layouts/admin/Adminlayouts'
import React from 'react'

export default function AdminDashboard() {
  return (
   <Adminlayouts>
    <AllEmployee/>
   </Adminlayouts>
  )
}
