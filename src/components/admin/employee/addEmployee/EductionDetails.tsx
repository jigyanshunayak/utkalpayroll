import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog, DialogContent, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface EducationData {
  sl: number;
  empid: string;
  degree: string;
  university: string;
  board: string;
  passingYear: number;
  passingPercentage: number;
  division: string;
  status: number;
}

const EducationDetails: React.FC = () => {
  const [educationData, setEducationData] = useState<EducationData[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<EducationData>>({});
  const router = useRouter();

  useEffect(() => {
    fetchEducationData();
  });

  const fetchEducationData = async () => {
    try {
      const response = await axios.get('http://localhost:6567/api/v1/education/getall', { withCredentials: true });
      setEducationData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenDialog = (id?: number) => {
    if (id !== undefined) {
      const education = educationData.find((e) => e.sl === id);
      if (education) {
        setFormData(education);
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
        await axios.post('http://localhost:6567/api/v1/education/create', formData, { withCredentials: true });
      } else {
        await axios.post(`http://localhost:6567/api/v1/education/update/${editingId}`, formData, { withCredentials: true });
      }
      fetchEducationData();
      handleCloseDialog();
      router.push('/experienceDetails'); // Navigate to /education after submit
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:6567/api/v1/education/delete/${id}`);
      fetchEducationData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Education Details</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Education
        </Button>
      </div>
      <TableContainer className="bg-white shadow-md rounded-md">
        <Table>
          <TableHead>
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
              <TableCell className="text-white font-bold text-xs text-center">Sl. No.</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">empid</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Degree</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">University</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Board</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Passing Year</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Percentage</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Division</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationData.map((edu) => (
              <TableRow key={edu.sl}>
                <TableCell>{edu.sl}</TableCell>
                <TableCell>{edu.empid}</TableCell>
                <TableCell>{edu.degree}</TableCell>
                <TableCell>{edu.university}</TableCell>
                <TableCell>{edu.board}</TableCell>
                <TableCell>{edu.passingYear}</TableCell>
                <TableCell>{edu.passingPercentage}</TableCell>
                <TableCell>{edu.division}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(edu.sl)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(edu.sl)}>
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
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Education' : 'Add Education'}</h2>
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
                label="Degree"
                name="degree"
                value={formData.degree || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="University"
                name="university"
                value={formData.university || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Board"
                name="board"
                value={formData.board || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Passing Year"
                name="passingYear"
                type="number"
                value={formData.passingYear || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Passing Percentage"
                name="passingPercentage"
                type="number"
                value={formData.passingPercentage || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Division"
                name="division"
                value={formData.division || ''}
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

export default EducationDetails;
