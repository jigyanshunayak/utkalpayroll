import React from 'react'
import AdminLayouts from '../layouts/admin/Adminlayouts'
import AddEmployeeLayOut from '../layouts/admin/AddEmployeeLayOut'
import FinancialDetail from '../components/admin/employee/addEmployee/FinancialDetails'

export default function financialDetail() {
    return (
        <AdminLayouts>
          <AddEmployeeLayOut>
            <FinancialDetail/>
          </AddEmployeeLayOut>
        </AdminLayouts>
      )
}
