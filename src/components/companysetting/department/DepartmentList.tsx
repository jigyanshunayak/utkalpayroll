
import AddIcon from '@mui/icons-material/Add';
import DepartmentCard from '../../card/DepartmentCard';
import React, { useState } from 'react'

import AddDepartmentForm from './AddDepartmentForm';
const data = {
  value:"IT Department",
  value2:"10 Employees"
}

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  

// console.log(data)
  return (
    <section className='w-full main-containerAdmin flex flex-col gap-3'>
    <div className='w-full flex items-center justify-between'>
      <p className='text-2xl'>Department</p>
          <button className='bg-blue-500 text-white text-md py-2 px-4 shadow-lg shadow-slate-400 text-xs rounded cursor-pointer hover:shadow-lg' onClick={()=>{setOpen(true)}} ><AddIcon/>Add Department</button>
          

    </div>
    <div className='grid grid-cols-4 gap-5'>
      <DepartmentCard item={data} />
      
    </div>
    <AddDepartmentForm open={open} setOpen={setOpen}/>
  </section>
  )
}

export default DepartmentList

