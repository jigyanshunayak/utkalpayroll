import React, { useState, useEffect } from 'react';
import {
  TextField,
  Grid,
  Button,
  Dialog,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import axios from 'axios';

interface FinancialData {
  sl: number;
  empid: string;
  bankname: string;
  branchname: string;
  bankaccountnumber: string;
  ifcecode: string;
}

const FinancialDetail: React.FC = () => {
  const [financialData, setFinancialData] = useState<FinancialData[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<FinancialData>>({});
  const router = useRouter();

  useEffect(() => {
    fetchFinancialData();
  });

  const fetchFinancialData = async () => {
    try {
      const response = await axios.get('http://localhost:6567/api/v1/bankdetail/getall', { withCredentials: true });
      setFinancialData(response.data);
    } catch (error) {
      console.error('Error fetching financial data:', error);
    }
  };

  const handleOpenDialog = (id?: number) => {
    if (id !== undefined) {
      const financialDetail = financialData.find((f) => f.sl === id);
      if (financialDetail) {
        setFormData(financialDetail);
        setEditingId(id);
      }
    } else {
      setFormData({});
      setEditingId(null);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({});
    setEditingId(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (editingId === null) {
        await axios.post('http://localhost:6567/api/v1/bankdetail/create', formData, { withCredentials: true });
      } else {
        await axios.put(`http://localhost:6567/api/v1/bankdetail/update/${editingId}`, formData, { withCredentials: true });
      }
      fetchFinancialData();
      handleCloseDialog();
      router.push('/documentDetail'); // Adjust if needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:6567/api/v1/financialdetail/delete/${id}`);
      fetchFinancialData();
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Financial Details</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Financial Detail
        </Button>
      </div>
      <TableContainer className="bg-white shadow-md rounded-md">
        <Table>
          <TableHead>
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
              <TableCell className="text-white font-bold text-xs text-center">ID</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Emp ID</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Bank Name</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Branch Name</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Account Number</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Holder Name</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {financialData.map((financial) => (
              <TableRow key={financial.sl}>
                <TableCell>{financial.sl}</TableCell>
                <TableCell>{financial.empid}</TableCell>
                <TableCell>{financial.bankname}</TableCell>
                <TableCell>{financial.branchname}</TableCell>
                <TableCell>{financial.bankaccountnumber}</TableCell>
                <TableCell>{financial.ifcecode}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(financial.sl)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(financial.sl)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Financial Detail' : 'Add Financial Detail'}</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Employee ID"
                name="empid"
                value={formData.empid || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Bank Name"
                name="bankname"
                value={formData.bankname || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Branch Name"
                name="branchname"
                value={formData.branchname || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Bank Account Number"
                name="bankaccountnumber"
                value={formData.bankaccountnumber || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="IFCE CODE"
                name="ifcecode"
                value={formData.ifcecode || ''}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className="mt-4"
          >
            {editingId ? 'Update' : 'Submit'}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FinancialDetail;
