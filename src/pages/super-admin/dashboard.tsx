import DashboardPage from '@/src/components/superAdmin/dashboard/Dashboard'
import MainLayout from '@/src/layouts/superAdmin/Mainlayouts'
import React from 'react'

export default function Dashboard() {
  return (
    <MainLayout>
      <DashboardPage/>
    </MainLayout>
  )
}