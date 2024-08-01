import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import AddReimbursement from './AddReimbursmentLists';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import Swal from 'sweetalert2';
const ReimbursementList: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:6567/api/v1/reimbursement/delete/${id}`, {
        withCredentials: true,
      });
      setData(data.filter((item: any) => item.sl !== id));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add reimbursement",
      });
      setOpen(false);
    } catch (error) {
      console.error('Error deleting reimbursement:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to delete Reimbursement Type ",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6567/api/v1/reimbursement/getall', {
          withCredentials: true,
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  });

  return (
    <section className='w-full main-containerAdmin flex flex-col gap-3'>
      <div className='w-full flex items-center justify-between'>
        <p className='text-2xl'>Reimbursement</p>
        <button className='bg-blue-500 text-white py-2 px-4 shadow-lg shadow-slate-400 text-sm rounded cursor-pointer hover:shadow-lg' onClick={() => setOpen(true)}><AddIcon />Add Reimbursement</button>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {data.map((item: any) => (
          <div key={item.sl} className='w-full flex flex-col p-2 items-start justify-center h-28 gap-2 bg-slate-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
            <p className='text-blue-700 text-sm'>{item.reimbursementName}</p>
            <span className='flex items-center justify-start gap-3 text-sm'>
              <button
                className='text-red-500 hover:bg-red-100 rounded hover:cursor-pointer ease-in-out duration-300'
                onClick={() => handleDelete(item.sl)}
              >
                <DeleteOutlineIcon /> Delete
              </button>
              <button
                className='text-green-500 hover:bg-green-100 rounded p-1 hover:cursor-pointer ease-in-out duration-300'
              >
                <EditIcon /> Edit
              </button>
            </span>
          </div>
        ))}
      </div>
      <AddReimbursement open={open} setOpen={setOpen} />
    </section>
  );
};

export default ReimbursementList;
