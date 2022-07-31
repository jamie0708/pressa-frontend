import React from 'react'
import { Outlet } from 'react-router'
import Admin from '../../components/Admin/Admin'

export default function AdminPage() {
  return (
    <div>
        <Admin />

        <Outlet />
    </div>
  )
}
