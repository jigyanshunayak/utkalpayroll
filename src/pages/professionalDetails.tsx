import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts'
import AddEmployeeLayOut from '../layouts/admin/AddEmployeeLayOut'
import ProfessionalDetails from '../components/admin/employee/addEmployee/ProfessionalDetails'

export default function professionalDetails() {
  return (
    <AdminLayouts>
      <AddEmployeeLayOut>
        <ProfessionalDetails/>
      </AddEmployeeLayOut>
    </AdminLayouts>
  )
}
