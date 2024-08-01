import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog, DialogContent, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface FamilyData {
  sl: number;
  empid: string;
  name: string;
  relation: string;
  dob: string;
  bloodGroup: string;
  status: number;
}

const FamilyDetails: React.FC = () => {
  const [familyData, setFamilyData] = useState<FamilyData[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<FamilyData>>({});
  const router = useRouter();

  useEffect(() => {
    fetchFamilyData();
  });

  const fetchFamilyData = async () => {
    try {
      const response = await axios.get('http://localhost:6567/api/v1/familydetail/getall', { withCredentials: true });
      setFamilyData(response.data);
    } catch (error) {
      console.error('Error fetching family data:', error);
    }
  };

  const handleOpenDialog = (id?: number) => {
    if (id !== undefined) {
      const familyMember = familyData.find((f) => f.sl === id);
      if (familyMember) {
        setFormData(familyMember);
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
        await axios.post('http://localhost:6567/api/v1/familydetail/create', formData, { withCredentials: true });
      } else {
        await axios.put(`http://localhost:6567/api/v1/familydetail/update/${editingId}`, formData, { withCredentials: true });
      }
      fetchFamilyData();
      handleCloseDialog();
      router.push('/financialDetail'); // Adjust if needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:6567/api/v1/family/delete/${id}`);
      fetchFamilyData();
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Family Details</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Family Member
        </Button>
      </div>
      <TableContainer className="bg-white shadow-md rounded-md">
        <Table>
          <TableHead>
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
              <TableCell className="text-white font-bold text-xs text-center">ID</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Emp ID</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Name</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Relationship</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Date of Birth</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Blood Group</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {familyData.map((family) => (
              <TableRow key={family.sl}>
                <TableCell>{family.sl}</TableCell>
                <TableCell>{family.empid}</TableCell>
                <TableCell>{family.name}</TableCell>
                <TableCell>{family.relation}</TableCell>
                <TableCell>{family.dob}</TableCell>
                <TableCell>{family.bloodGroup}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(family.sl)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(family.sl)}>
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
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Family Member' : 'Add Family Member'}</h2>
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
                label="Name"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Relationship"
                name="relation"
                value={formData.relation || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup || ''}
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

export default FamilyDetails;
