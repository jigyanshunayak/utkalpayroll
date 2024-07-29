import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts'
import AddEmployeeLayOut from '../layouts/admin/AddEmployeeLayOut'
import EducationDetails from '../components/admin/employee/addEmployee/EductionDetails'

export default function educationDetails() {
  return (
    <AdminLayouts>
      <AddEmployeeLayOut>
        <EducationDetails/>
      </AddEmployeeLayOut>
    </AdminLayouts>
  )
}