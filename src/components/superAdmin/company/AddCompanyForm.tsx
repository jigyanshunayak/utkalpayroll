import React, { useEffect, useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';
import axios from 'axios';

interface AddCompanyFormProps {
  onClose: () => void;
}

const AddCompanyForm: React.FC<AddCompanyFormProps> = ({ onClose }) => {
  const [compname, setCompname]= useState<string>("");
  const [email, setEmail]=useState<string>("");
  const [phone, setPhone]=useState<string>("");
  const [website, setWebsite]=useState<string>("");
  const handleSubmit=async()=>{
    try {
     
      const response = await axios.post('http://localhost:6567/api/v1/company/create', { compname,  email, phone, website}, {
        withCredentials: true,
      });
      
      if (response.status === 201) {
        console.log("compant create successful")
        alert("compant create successful")
        onClose()
      }else{
        console.log("company create failed")
      }
  }catch(err){
    console.log(err)
  }finally{
  
      setCompname("");
      setEmail("");
      setPhone("");
      setWebsite("");
  
  }

   
  }
 

  return (
    <Box component="form" sx={{ width: '400px' }}>
      <DialogTitle>Add New Company</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="New Company Name"
          type="text"
          fullWidth
          variant="outlined"
          value={compname}
          onChange={(e)=>setCompname(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="Website of Company"
          type="text"
          fullWidth
          variant="outlined"
          value={website}
          onChange={(e)=>setWebsite(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Company Email"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="Company Phone Number"
          type="tel"
          fullWidth
          variant="outlined"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          required
        />
       
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>{
          onClose
          handleSubmit()
        }} color="primary" variant="contained"
        type='button'
        >
          Submit
        </Button>
      </DialogActions>
    </Box>
  );
};

export default AddCompanyForm;
