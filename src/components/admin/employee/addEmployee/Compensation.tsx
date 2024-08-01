import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog, DialogContent, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface CompensationData {
  sl: number;
  empid: string;
  payGroup: string;
  annualCTC: number;
  monthlyCTC: number;
  status: number;
}

const CompensationDetails: React.FC = () => {
  const [compensationData, setCompensationData] = useState<CompensationData[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<CompensationData>>({});
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    fetchCompensationData();
  }, []); // Add dependency array to avoid infinite loop

  const fetchCompensationData = async () => {
    try {
      const response = await axios.get('http://localhost:6567/api/v1/compensationdetail/getall', { withCredentials: true });
      setCompensationData(response.data);
    } catch (error) {
      console.error('Error fetching compensation data:', error);
    }
  };

  const handleOpenDialog = (id?: number) => {
    if (id !== undefined) {
      const compensationDetail = compensationData.find((c) => c.sl === id);
      if (compensationDetail) {
        setFormData(compensationDetail);
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
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      if (editingId === null) {
        await axios.post('http://localhost:6567/api/v1/compensationdetail/create', formData, { withCredentials: true });
      } else {
        await axios.put(`http://localhost:6567/api/v1/compensationdetail/update/${editingId}`, formData, { withCredentials: true });
      }
      fetchCompensationData();
      handleCloseDialog();
      router.push('/credentialForm'); // Redirect to the compensation page or current page
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:6567/api/v1/compensationdetail/delete/${id}`);
      fetchCompensationData();
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Compensation Details</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Compensation Detail
        </Button>
      </div>
      <TableContainer className="bg-white shadow-md rounded-md">
        <Table>
          <TableHead>
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
              <TableCell className="text-white font-bold text-xs text-center">sl.No</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Emp ID</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Pay Group</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Annual CTC</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Monthly CTC</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {compensationData.map((compensation) => (
              <TableRow key={compensation.sl}>
                <TableCell className="text-xs text-center">{compensation.sl}</TableCell>
                <TableCell className="text-xs text-center">{compensation.empid}</TableCell>
                <TableCell className="text-xs text-center">{compensation.payGroup}</TableCell>
                <TableCell className="text-xs text-center">{compensation.annualCTC}</TableCell>
                <TableCell className="text-xs text-center">{compensation.monthlyCTC}</TableCell>
                <TableCell className="text-xs text-center">
                  <IconButton onClick={() => handleOpenDialog(compensation.sl)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(compensation.sl)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Emp ID"
                name="empid"
                value={formData.empid || ''}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Pay Group"
                name="payGroup"
                value={formData.payGroup || ''}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Annual CTC"
                name="annualCTC"
                type="number"
                value={formData.annualCTC || ''}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Monthly CTC"
                name="monthlyCTC"
                type="number"
                value={formData.monthlyCTC || ''}
                onChange={handleInputChange}
                required
              />
            </Grid>
          </Grid>
          <div className="flex justify-end mt-4">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {editingId === null ? 'Add' : 'Update'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CompensationDetails;
