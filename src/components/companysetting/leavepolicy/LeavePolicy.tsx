import AddIcon from '@mui/icons-material/Add';
import DepartmentCard from '../../card/DepartmentCard';
import React, { useState, useEffect } from 'react';
import AddLeavepolicyList from './AddLeavepolicyList';
import axios from 'axios';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const LeavePolicyList: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const handleDelete = async (sl: number) => {
    try {
      await axios.delete(`http://localhost:6567/api/v1/leavepolicy/delete/${sl}`, { withCredentials: true });
      setData(data.filter((item) => item.sl !== sl));
      alert('Leave Policy deleted successfully!');
    } catch (error) {
      console.error('Error deleting leave policy:', error);
      alert('Failed to delete leave policy');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6567/api/v1/leavepolicy/getall', { withCredentials: true });
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
        <p className='text-2xl'>Leave Policy</p>
        <button className='bg-blue-500 text-white py-2 px-4 shadow-lg shadow-slate-400 text-xs rounded cursor-pointer hover:shadow-lg' onClick={() => setOpen(true)}><AddIcon /> LEAVE POLICY</button>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {data.map((item) => (
          <div key={item.sl} className='w-full flex flex-col p-2 items-start justify-center h-28 gap-2 bg-slate-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
            <p className='text-blue-700 text-sm'>{item.policyName}</p>
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
      <AddLeavepolicyList open={open} setOpen={setOpen} />
    </section>
  );
};

export default LeavePolicyList;
