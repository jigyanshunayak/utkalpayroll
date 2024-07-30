
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

interface AddResignationTypeProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddResignationList: React.FC<AddResignationTypeProps> = ({ open, setOpen }) => {
  const [typeName, setTypeName] = useState<string>("");

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:6567/api/v1/resignationType/create', {
        typeName
      }, {
        withCredentials: true,
      });
      alert('Type added successfully!');
      setTypeName("");
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error('Error adding type:', error);
      alert('Failed to add type');
    }
  };



  return (
    <Dialog open={open} onClose={()=>{setOpen(false)}} classes={{ paper: 'rounded-lg' }}   PaperProps={{
        style: {
          width: '1000px', 
          height: '250px', 
        },
      }}>
       
      <DialogTitle className="flex justify-between items-center">
        
        <span className="text-lg font-semibold">Create Resignation</span>
        
        
        <button
          onClick={()=>{setOpen(false)}}
          className="rounded-full outline outline-offset-2 outline-3  bg-gray-200  hover:bg-gray-300 transition"
        ><CloseIcon />
          
        </button>
      </DialogTitle>
      <DialogContent>
      <span className='text-sm'>Resignation Name*</span>
        <TextField
          autoFocus
          margin="dense"
          label=""
          type="text"
          fullWidth
          variant="outlined"
          value={typeName}
          onChange={(e) => setTypeName(e.target.value)}
        
        />
      </DialogContent>
      <DialogActions>
        
        <Button className='bg-blue-500 text-white py-2 px-4 hover:bg-blue-800 shadow-slate-400  rounded cursor-pointer ' onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddResignationList
