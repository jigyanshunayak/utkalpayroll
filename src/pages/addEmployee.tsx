import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts'
import AddEmployeeLayOut from '../layouts/admin/AddEmployeeLayOut'
import PersonalDetails from '../components/admin/employee/addEmployee/PersonalDetails'

export default function AddEmployee() {
  return (
    <AdminLayouts>
      <AddEmployeeLayOut>
        <PersonalDetails/>
      </AddEmployeeLayOut>
    </AdminLayouts>
  )
}
