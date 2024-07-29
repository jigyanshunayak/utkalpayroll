import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts'
import AddEmployeeLayOut from '../layouts/admin/AddEmployeeLayOut'
import CredentialForm from '../components/admin/employee/addEmployee/Credential'

export default function financialDetail() {
    return (
        <AdminLayouts>
          <AddEmployeeLayOut>
            <CredentialForm/>
          </AddEmployeeLayOut>
        </AdminLayouts>
      )
}