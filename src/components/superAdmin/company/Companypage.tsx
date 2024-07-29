import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { companyData } from '@/src/utils/superAdmin/data';
import AddCompanyForm from './AddCompanyForm';

import { 
  Table, 
  TableHead, 
  TableBody, 
  TableCell, 
  TableRow, 
  TableContainer, 
  Paper, 
  Button, 
  Typography,
  Dialog,
  TextField
} from '@mui/material';
import axios from 'axios';

const CompanyPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [open, setOpen]=useState<boolean>(false);
  const [name, setName]=useState<string>("");
  const [email, setEmail]=useState<string>("");
  const [mobile, setMobile]=useState<string>("");
  const [password, setPassword]=useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const handleAddCompanyClick = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleSubmit=async()=>{
    try {
     
      const response = await axios.post('http://localhost:6567/api/v1/user/signup', { name,  email, mobile, password},{
        withCredentials: true,
      });
      
      if (response.status === 200) {
        console.log("signup successful")
      }else{
        console.log("signup failed")
      }
  }catch(err){
    console.log(err)
  }
   
  }


  useEffect(()=>{
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      
      try {
        // const accessToken = Cookies.get("accessToken");
        const response = await axios.get(`http://localhost:6567/api/v1/company/getall `,{
      
            withCredentials: true,
          });
        setData(response.data);
        // console.log("gdg",response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
  })
  // console.log(data)
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:6567/api/v1/company/delete/${id}`,{
        withCredentials: true,
      });
      setData(data.filter((item: any) => item.sl !== id));
      alert('company deleted successfully!');
    } catch (error) {
      console.error('Error deleting grade:', error);
      alert('Failed to delete company');
    }
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h4" component="h1">
          COMPANY
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddCompanyClick}
        >
          Add Company
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#6B23CA' }}>
              <TableCell style={{ color: 'white' }}>Sl No.</TableCell>

              <TableCell style={{ color: 'white', cursor:'pointer' }} >Company Name</TableCell>
              <TableCell style={{ color: 'white' }}>Phone</TableCell>
              <TableCell style={{ color: 'white' }}>Email</TableCell>
              <TableCell style={{ color: 'white' }}>About</TableCell>
              <TableCell style={{ color: 'white' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((company, index) => (
              <TableRow key={index}>
                <TableCell>
                {index+1}
                </TableCell>
                <TableCell onClick={()=>{setOpen(true)}}>{company.compname}</TableCell>
                <TableCell>{company.phone}</TableCell>
                <TableCell>{company.email}</TableCell>
                <TableCell>{company.website}</TableCell>
                <TableCell>
                <button className="text-white hover:text-blue-500 mr-2 py-1 px-5 bg-[#5738DA] rounded-3xl">
                  <EditIcon />
                </button>
                <button onClick={() => handleDelete(company.sl)} className="text-white hover:text-red-700 py-1 px-5 bg-[#FF0000] rounded-3xl">
                  <DeleteIcon />
                </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={isFormOpen} onClose={handleFormClose}>
        <AddCompanyForm onClose={handleFormClose} />
      </Dialog>
      <Dialog
       
        maxWidth={"lg"}
        open={open}
        onClose={()=>{setOpen(false)}}
      >
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-start justify-start gap-6 p-6'>
        <TextField
          autoFocus
          margin="dense"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          required
        />
        <TextField
          autoFocus
          margin="dense"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          label="Email"
          type="text"
          fullWidth
          variant="outlined"
          required
        />
        <TextField
          autoFocus
          margin="dense"
          label="phone number"
          value={mobile}
          onChange={(e)=>{setMobile(e.target.value)}}
          type="text"
          fullWidth
          variant="outlined"
          required
        />
        <TextField
          autoFocus
          margin="dense"
          label="password"
          type="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          fullWidth
          variant="outlined"
          required
        />
        <button type='submit' className='py-3 w-full bg-blue-500 uppercase font-bold text-white rounded-md'>submit</button>
        </form>
      </Dialog>
    </div>
  );
};

export default CompanyPage;
