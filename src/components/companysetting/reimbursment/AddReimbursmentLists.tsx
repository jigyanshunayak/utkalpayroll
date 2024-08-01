
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
interface AddReimbursementProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddReimbursement: React.FC<AddReimbursementProps> = ({ open, setOpen }) => {
  const [reimbursementName, setReimbursementName] = useState<string>("");

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:6567/api/v1/reimbursement/create', {
        reimbursementName
      }, {
        withCredentials: true,
      });
      Swal.fire({
        icon: 'success',
        title: 'Reimbursement added successfully!',
        showConfirmButton: false,
        timer: 1700
      });
      setReimbursementName("");
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error('Error adding reimbursement:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add reimbursement",
      });
      setOpen(false);
    }
  };
  return (
    <Dialog open={open} onClose={()=>{setOpen(false)}} classes={{ paper: 'rounded-lg' }}   PaperProps={{
        style: {
          width: '1000px', 
          height: '350px', 
        },
      }}>
       
      <DialogTitle className="flex justify-between items-center">
        
        <span className="text-lg font-semibold">Add Reimbursment</span>
        
        
        <button
          onClick={()=>{setOpen(false)}}
          className="rounded-full outline outline-offset-2 outline-3  bg-gray-200  hover:bg-gray-300 transition"
        ><CloseIcon />
          
        </button>
      </DialogTitle>
      <DialogContent>
      <span className='text-sm'>Reimbursment Type*</span>
        <TextField
          autoFocus
          margin="dense"
          label=""
          type="text"
          fullWidth
          variant="outlined"
          value={reimbursementName}
          onChange={(e) => setReimbursementName(e.target.value)}
        
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

export default AddReimbursement
