import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Papa from 'papaparse';
import axios from 'axios';
import Link from 'next/link';

export default function BulkUpload({open, setOpen}:any) {
  const [csvData, setCsvData] = useState();
  const [fileName, setFileName] = useState('');

  // const handleFileChange = (event:any) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     Papa.parse(file, {
  //       header: true,
  //       complete: (result:any) => {
  //         setCsvData(result.data);
  //       },
  //       error: (error) => {
  //         console.error('Error parsing CSV file:', error);
  //       },
  //     });
  //   }
  // };
  const handleFileChange = (event:any) => {
    const file = event.target.files[0]; // Get the first file
    if (file) {
      setFileName(file.name); // Set the file name state
    }
  };
  
console.log(fileName,"path")

  return (
   <>
        <section className=''>
        <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={()=>setOpen(false)}
      >
        <div className='p-4 w-full flex flex-col bg-violet-300 rounded-2xl items-start justify-start gap-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>Bulk Upload</h2>
          <Link href={"http://localhost:6567/api/v1/employee/downloadsample"} target='_blank' className='px-6 py-1 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300'> Download Sample</Link>
          <p className='text-2xl font-normal text-gray-800'>Upload CSV file to import employee data</p>
          <input type="file" onChange={handleFileChange} />
          <button className='px-6 py-1 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300'> Submit</button>
        </div>
        
      </Dialog>
        </section>
   </>
  )
}
