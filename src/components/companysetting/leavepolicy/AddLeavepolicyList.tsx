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

interface DialogComponentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddLeavePolicy: React.FC<DialogComponentProps> = ({ open, setOpen }) => {
  const [policyName, setPolicyName] = useState("");

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post('http://localhost:6567/api/v1/leavepolicy/create', {
        policyName,
      }, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        alert('Leave Policy Created successfully!!!');
        setOpen(false);
      } else {
        alert('Error creating leave policy');
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error creating leave policy');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      classes={{ paper: 'rounded-lg' }}
      PaperProps={{
        style: {
          width: '1000px',
          height: '350px',
        },
      }}
    >
      <DialogTitle className="flex justify-between items-center">
        <span className="text-lg font-semibold">Add Leave Policy</span>
        <button
          onClick={() => setOpen(false)}
          className="rounded-full outline outline-offset-2 outline-3 bg-gray-200 hover:bg-gray-300 transition"
        >
          <CloseIcon />
        </button>
      </DialogTitle>
      <DialogContent>
        <span className='text-sm'>Policy Name*</span>
        <TextField
          autoFocus
          margin="dense"
          label=""
          type="text"
          fullWidth
          variant="outlined"
          value={policyName}
          onChange={(e) => setPolicyName(e.target.value)}
        />  
      </DialogContent>
      <DialogActions>
        <Button
          className='bg-blue-500 text-white py-2 px-4 hover:bg-blue-800 shadow-slate-400 rounded cursor-pointer'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddLeavePolicy;
