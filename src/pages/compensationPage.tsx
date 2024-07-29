import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts'
import AddEmployeeLayOut from '../layouts/admin/AddEmployeeLayOut'
import CompensationPage from '../components/admin/employee/addEmployee/Compensation'

export default function compensationPage() {
    return (
        <AdminLayouts>
          <AddEmployeeLayOut>
            <CompensationPage/>
          </AddEmployeeLayOut>
        </AdminLayouts>
      )
}