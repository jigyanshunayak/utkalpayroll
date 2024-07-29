import React from 'react'
import Adminlayouts from '../layouts/admin/Adminlayouts'
import AttendancePage from '../components/admin/attendances/Attendances'

export default function AttendancePages() {
  return (
   <Adminlayouts>
    <AttendancePage/>
   </Adminlayouts>
  )
}
