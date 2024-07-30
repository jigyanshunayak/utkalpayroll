import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import DepartmentCard from '../../card/DepartmentCard';
import AddGradeList from './AddGradeList';
import Cookies from 'js-cookie';
const GradeList: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  // console.log(token)
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.get(`http://localhost:6567/api/v1/grade/getall `,{
    
          withCredentials: true,
        });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:6567/api/v1/grade/delete/${id}`,{
        withCredentials: true,
      });
      setData(data.filter((item: any) => item.sl !== id));
      alert('Grade deleted successfully!');
    } catch (error) {
      console.error('Error deleting grade:', error);
      alert('Failed to delete grade');
    }
  };

  const handleEdit = (id: number) => {
    console.log('Edit item with ID:', id);
  };

  const handleGradeAdded = () => {
    fetchData();
  };

  return (
    <section className='w-full main-containerAdmin flex flex-col gap-3'>
      <div className='w-full flex items-center justify-between'>
        <p className='text-2xl'>Grade</p>
        <button
          className='bg-blue-500 text-white py-2 px-4 shadow-lg shadow-slate-400 rounded cursor-pointer hover:shadow-lg'
          onClick={() => { setOpen(true) }}
        >
          <AddIcon /> Add Grade
        </button>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {
          data.length > 0 ? data.map((item: any) => (
            <DepartmentCard 
              key={item.sl} // Use the primary key field
              item={item} 
              onDelete={handleDelete} 
              onEdit={handleEdit}
            />
          )) : <p>No Grades found</p>
        }
      </div>
      <AddGradeList open={open} setOpen={setOpen} onGradeAdded={handleGradeAdded} />
    </section>
  );
}

export default GradeList;
