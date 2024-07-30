import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Papa from 'papaparse';
import axios from 'axios';
import Link from 'next/link';

export default function BulkUpload({open, setOpen}:any) {
  const [csvData, setCsvData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result:any) => {
          setCsvData(result.data);
        },
        error: (error) => {
          console.error('Error parsing CSV file:', error);
        },
      });
    }
  };
  


  return (
   <>
        <section className=''>
        <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={()=>setOpen(false)}
      >
        <div className='p-4 w-full flex flex-col items-start justify-start gap-4'>
          <h2>Bulk Upload</h2>
          <Link href={"http://localhost:6567/api/v1/employee/downloadsample"} target='_blank'> download sample</Link>
          <p>Upload CSV file to import employee data</p>
          <input type="file" accept=".csv" onChange={handleFileChange} />
        </div>
      </Dialog>
        </section>
   </>
  )
}
