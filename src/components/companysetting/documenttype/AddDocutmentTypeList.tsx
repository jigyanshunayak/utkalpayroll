
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
interface AddDocumentTypeProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddDocumentType: React.FC<AddDocumentTypeProps> = ({ open, setOpen }) => {
  const [documentTypeName, setDocumentTypeName] = useState<string>("");

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:6567/api/v1/documentType/create', {
        documentTypeName
      }, {
        withCredentials: true,
      });
      Swal.fire({
        icon: 'success',
        title: 'Document type added successfully!',
        showConfirmButton: false,
        timer: 1700
      });
      setDocumentTypeName("");
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error('Error adding document type:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add document type",
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
        
        <span className="text-lg font-semibold">Add Designation</span>
        
        
        <button
          onClick={()=>{setOpen(false)}}
          className="rounded-full outline outline-offset-2 outline-3  bg-gray-200  hover:bg-gray-300 transition"
        ><CloseIcon />
          
        </button>
      </DialogTitle>
      <DialogContent>
      <span className='text-sm'>Documents Name*</span>
        <TextField
          autoFocus
          margin="dense"
          label=""
          type="text"
          fullWidth
          variant="outlined"
          value={documentTypeName}
          onChange={(e) => setDocumentTypeName(e.target.value)}
        
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

export default AddDocumentType
