import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts'
import AddEmployeeLayOut from '../layouts/admin/AddEmployeeLayOut'
import DocumentDetail from '../components/admin/employee/addEmployee/DocumentDetails'

export default function financialDetail() {
    return (
        <AdminLayouts>
          <AddEmployeeLayOut>
            <DocumentDetail/>
          </AddEmployeeLayOut>
        </AdminLayouts>
      )
}