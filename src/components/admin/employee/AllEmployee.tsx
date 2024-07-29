import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';

export default function AllEmployee() {
  const router= useRouter()
  return (
    <section className='w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2'>
        <div className='w-full flex flex-col gap-8'>
          <span className='flex items-center justify-start gap-2'>
            <PeopleIcon className='!text-3xl'/>
            <p className='text-lg font-bold capitalize'>employee</p>
          </span>
          <div className='w-full flex items-center justify-between '>
            <div className='w-full flex items-center justify-start gap-8'>
              <input type="text" placeholder='Enter User Name' className=' border-none pl-6 focus:outline-none w-64 py-2 rounded-full bg-gradient-to-t text-black from-[#6B23CA] to-[#F4ECFF] ' />
              <span className='p-2 rounded-full center bg-gradient-to-t from-[#5F1B81] to-[#5A12CF] '>
                <FilterAltIcon className='!text-white !text-2xl'/>
              </span>
            </div>
            <div className='w-full flex items-center justify-start gap-8'>
                <button className='px-8 py-2 rounded-full bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] flex items-center justify-start gap-2 text-base font-bold capitalize shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'> <FileUploadIcon/> bulk upload</button>
                <button className='px-8 py-2 rounded-full bg-gradient-to-t from-[#5F1B81] to-[#5A12CF] flex items-center justify-start gap-2 text-base font-bold capitalize text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' onClick={()=>{router.push("/addEmployee")}}>add employee</button>
            </div> 
          </div>
        </div>
        <div className='w-full'>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className='bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] w-full h-3'>
                  <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>DP</TableCell>
                  <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Emp ID</TableCell>
                  <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Name</TableCell>
                  <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Phone Number</TableCell>
                  <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Email ID</TableCell>
                  <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Status</TableCell>
                  <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className='text-black font-bold text-center'>
                    <img src="" alt="" className='w-10 h-10 rounded-full object-contain' />
                  </TableCell>
                  <TableCell className='text-black font-bold text-center'>1</TableCell>
                  <TableCell className='text-black font-bold text-center'>sanjit</TableCell>
                  <TableCell className='text-black font-bold text-center'>7894441231</TableCell>
                  <TableCell className='text-black font-bold text-center'>sanjit.kissan@gmail.com</TableCell>
                  <TableCell className='text-black font-bold text-center'>Active</TableCell>
                  <TableCell className='text-white font-bold flex gap-2 justify-center'>
                    <IconButton className='px-2 py-1 rounded-full bg-blue-800'>
                      <EditIcon className='!text-white' />
                    </IconButton>
                    <IconButton className='px-2 py-1 rounded-full bg-red-800'>
                      <DeleteIcon className='!text-white' />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </section>
  );
}
