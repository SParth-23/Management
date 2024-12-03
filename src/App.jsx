import React from 'react'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
// import Login from './components/auth/Login'

const App = () => {
  return (
    <div className=''>
      {/* <Login /> */}
      <EmployeeDashboard />
      <AdminDashboard />
    </div>
  )
}

export default App