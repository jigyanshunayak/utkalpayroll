
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
import Swal from 'sweetalert2';
interface DialogComponentProps {
  open: boolean;
  handleClose: () => void;
}
const  AddSalaryComponentList= ({open, setOpen}:any) => {
  const [componentName, setComponentName] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:6567/api/v1/salaryComponent/create', {
        componentName,
      }, {
        withCredentials: true,
      });
      Swal.fire({
        icon: 'success',
        title: 'Salary Component added successfully!',
        showConfirmButton: false,
        timer: 1700
      });
      setComponentName("");
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error('Error adding component:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add Salary Component",
      });
      setOpen(false);
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
        
        <span className="text-lg font-semibold">Create Salary Components</span>
        
        
        <button
          onClick={()=>{setOpen(false)}}
          className="rounded-full outline outline-offset-2 outline-3  bg-gray-200  hover:bg-gray-300 transition"
        ><CloseIcon />
          
        </button>
      </DialogTitle>
      <DialogContent>
      <span className='text-sm'>SlaryComponents Name*</span>
        <TextField
          autoFocus
          margin="dense"
          label=""
          type="text"
          fullWidth
          variant="outlined"
          value={componentName}
          onChange={(e) => setComponentName(e.target.value)}
        
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

export default AddSalaryComponentList
