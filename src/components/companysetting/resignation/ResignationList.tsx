
import AddIcon from '@mui/icons-material/Add';
import DepartmentCard from '../../card/DepartmentCard';
import React, { useState } from 'react'
import AddResignationList from './AddResignationList';

const data ={
  value:"hr department"
}


const ResignationList: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  


  return (
    <section className='w-full main-containerAdmin flex flex-col gap-3'>
    <div className='w-full flex items-center justify-between'>
      <p className='text-2xl'>Resignation Type</p>
          <button className='bg-blue-500 text-white py-2 px-4 shadow-lg shadow-slate-400  rounded cursor-pointer hover:shadow-lg' onClick={()=>{setOpen(true)}} ><AddIcon/> Resignation</button>
    </div>
    <div className='grid grid-cols-4 gap-5'>
      <DepartmentCard item={data}/> 
    </div>
    <AddResignationList open={open} setOpen={setOpen}/>
  </section>
  )
}

export default ResignationList

