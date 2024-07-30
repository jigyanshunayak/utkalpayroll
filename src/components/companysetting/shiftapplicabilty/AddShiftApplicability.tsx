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

interface AddShiftApplicabilityProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddShiftApplicability: React.FC<AddShiftApplicabilityProps> = ({ open, setOpen }) => {
  const [shiftName, setShiftName] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:6567/api/v1/shiftApplicability/create', {
        shiftName,
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        alert('Shift applicability added successfully!');
        setShiftName('');
        setOpen(false);
      }
    } catch (error) {
      console.error('Error adding shift applicability:', error);
      alert('Failed to add shift applicability');
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="xs">
      <div className='w-full flex justify-end p-2'>
        <button onClick={() => setOpen(false)} className="hover:bg-slate-100 text-red-500 rounded-full p-2"><CloseIcon /></button>
      </div>
      <DialogTitle className='text-center text-lg border-b-2 border-slate-200'>Add Shift Applicability</DialogTitle>
      <DialogContent className='flex flex-col gap-4'>
        <TextField
          label="Shift Name"
          value={shiftName}
          onChange={(e) => setShiftName(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddShiftApplicability;
