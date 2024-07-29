import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts'
import AddEmployeeLayOut from '../layouts/admin/AddEmployeeLayOut'
import ExperienceDetails from '../components/admin/employee/addEmployee/ExperienceDetails'

export default function experienceDetails() {
    return (
        <AdminLayouts>
          <AddEmployeeLayOut>
            <ExperienceDetails/>
          </AddEmployeeLayOut>
        </AdminLayouts>
      )
}
