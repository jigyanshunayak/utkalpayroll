import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

interface DepartmentCardProps {
  item: {
    sl: number; // Primary key field
    gradename: string;
    gradecode?: string; // Optional if not always present
  };
  onDelete: (id: number) => void; // Change to number if ID is numeric
  onEdit: (id: number) => void; // Change to number if ID is numeric
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ item, onDelete, onEdit }) => {
  return (
    <div className='w-full flex flex-col p-2 items-start justify-center h-28 gap-2 bg-slate-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
      <p className='text-blue-700 text-sm'>{item.gradename}</p>
      <p className='text-gray-500 text-sm'>{item.gradecode}</p>
      <span className='flex items-center justify-start gap-3 text-sm'>
        <button 
          className='text-red-500 hover:bg-red-100 rounded hover:cursor-pointer ease-in-out duration-300'
          onClick={() => onDelete(item.sl)} // Pass the correct ID
        >
          <DeleteOutlineIcon /> Delete
        </button>
        <button 
          className='text-green-500 hover:bg-green-100 rounded p-1 hover:cursor-pointer ease-in-out duration-300'
          onClick={() => onEdit(item.sl)} // Pass the correct ID
        >
          <EditIcon /> Edit
        </button>
      </span>
    </div>
  );
}

export default DepartmentCard;
