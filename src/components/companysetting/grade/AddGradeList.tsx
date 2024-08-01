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
interface AddGradeListProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onGradeAdded: () => void; // Callback function prop
}

const AddGradeList: React.FC<AddGradeListProps> = ({ open, setOpen, onGradeAdded }) => {
  const [gradename, setGradeName] = useState('');

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post('http://localhost:6567/api/v1/grade/create', {
        gradename,
      },{
        withCredentials: true,
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Grade Master Created successfully!!!',
          showConfirmButton: false,
          timer: 1700
        });
        setOpen(false);
        onGradeAdded(); // Call the callback to refresh the data
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error creating grade",
        });
        setOpen(false);
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error creating grade');
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
        <span className="text-lg font-semibold">Add Grade</span>
        <button
          onClick={() => setOpen(false)}
          className="rounded-full outline outline-offset-2 outline-3 bg-gray-200 hover:bg-gray-300 transition"
        >
          <CloseIcon />
        </button>
      </DialogTitle>
      <DialogContent>
        <span className='text-sm'>Grade Name*</span>
        <TextField
          autoFocus
          margin="dense"
          label=""
          type="text"
          fullWidth
          variant="outlined"
          value={gradename}
          onChange={(e) => setGradeName(e.target.value)}
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

export default AddGradeList;
