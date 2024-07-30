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

interface AddDesignationListProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onDesignationAdded: () => void;
}

const AddDesignationList: React.FC<AddDesignationListProps> = ({ open, setOpen, onDesignationAdded }) => {
  const [designame, setDesignationName] = useState('');

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post('http://localhost:6567/api/v1/designation/create', {
        designame,
      }, {
        withCredentials: true,
      });

      if (response.status === 201) {
        alert('Designation Created successfully!!!');
        setOpen(false);
        onDesignationAdded();
      } else {
        alert('Error creating designation');
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error creating designation');
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
          height: '250px',
        },
      }}
    >
      <DialogTitle className="flex justify-between items-center">
        <span className="text-lg font-semibold">Add Designation</span>
        <button
          onClick={() => setOpen(false)}
          className="rounded-full outline outline-offset-2 outline-3 bg-gray-200 hover:bg-gray-300 transition"
        >
          <CloseIcon />
        </button>
      </DialogTitle>
      <DialogContent>
        <span className='text-sm'>Designation Name*</span>
        <TextField
          autoFocus
          margin="dense"
          name='designame'
          label=""
          type="text"
          fullWidth
          variant="outlined"
          value={designame}
          onChange={(e) => setDesignationName(e.target.value)}
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

export default AddDesignationList;
