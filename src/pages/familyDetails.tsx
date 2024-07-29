import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts'
import AddEmployeeLayOut from '../layouts/admin/AddEmployeeLayOut'
import FamilyDetails from '../components/admin/employee/addEmployee/FamilyDetails'

export default function familyDetails() {
    return (
        <AdminLayouts>
          <AddEmployeeLayOut>
            <FamilyDetails/>
          </AddEmployeeLayOut>
        </AdminLayouts>
      )
}
