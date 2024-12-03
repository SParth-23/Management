import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='w-screen flex justify-between gap-5 px-7'>
        <div className='w-[45%] rounded-md px-9 py-6 bg-blue-700'>
            <h2 className='font-semibold text-4xl'>0</h2>
            <h3 className='font-semibold text-2xl'>New task</h3>
        </div>
        <div className='w-[45%] rounded-md px-9 py-6 bg-amber-500'>
            <h2 className='font-semibold text-4xl'>0</h2>
            <h3 className='font-semibold text-2xl'>Accepeted</h3>
        </div>
        <div className='w-[45%] rounded-md px-9 py-6 bg-green-600'>
            <h2 className='font-semibold text-4xl'>0</h2>
            <h3 className='font-semibold text-2xl'>Completed</h3>
        </div>
        <div className='w-[45%] rounded-md px-9 py-6 bg-red-600'>
            <h2 className='font-semibold text-4xl'>0</h2>
            <h3 className='font-semibold text-2xl'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers