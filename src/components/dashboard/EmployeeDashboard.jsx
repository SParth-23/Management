import React from 'react'
import Header from '../elements/Header'
import TaskListNumbers from '../elements/TaskListNumbers'
import Tasklist from '../tasklist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1C1C1C]'>  
        <Header />
        <TaskListNumbers />
        <Tasklist />
    </div>
  )
}

export default EmployeeDashboard