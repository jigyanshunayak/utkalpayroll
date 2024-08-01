import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog, DialogContent, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface ExperienceData {
  sl: number;
  empid: string;
  nameOfOrganization: string;
  typeOfDocument: string;
  documentTitle: string;
  workingDurationStart: string;
  workingDurationEnd: string;
  status: number;
}

const ExperienceDetails: React.FC = () => {
  const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<ExperienceData>>({});
  const router = useRouter();

  useEffect(() => {
    fetchExperienceData();
  });

  const fetchExperienceData = async () => {
    try {
      const response = await axios.get('http://localhost:6567/api/v1/experience/getall', { withCredentials: true });
      setExperienceData(response.data);
    } catch (error) {
      console.error('Error fetching experience data:', error);
    }
  };

  const handleOpenDialog = (id?: number) => {
    if (id !== undefined) {
      const experience = experienceData.find((e) => e.sl === id);
      if (experience) {
        setFormData(experience);
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
        await axios.post('http://localhost:6567/api/v1/experience/create', formData, { withCredentials: true });
      } else {
        await axios.put(`http://localhost:6567/api/v1/experience/update/${editingId}`, formData, { withCredentials: true });
      }
      fetchExperienceData();
      handleCloseDialog();
      router.push('/familyDetails'); // Adjust if needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:6567/api/v1/experience/delete/${id}`);
      fetchExperienceData();
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Experience Details</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Experience
        </Button>
      </div>
      <TableContainer className="bg-white shadow-md rounded-md">
        <Table>
          <TableHead>
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
              <TableCell className="text-white font-bold text-xs text-center">ID</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Emp ID</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Organization</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Document Type</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Document Title</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Start Date</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">End Date</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {experienceData.map((exp) => (
              <TableRow key={exp.sl}>
                <TableCell>{exp.sl}</TableCell>
                <TableCell>{exp.empid}</TableCell>
                <TableCell>{exp.nameOfOrganization}</TableCell>
                <TableCell>{exp.typeOfDocument}</TableCell>
                <TableCell>{exp.documentTitle}</TableCell>
                <TableCell>{exp.workingDurationStart}</TableCell>
                <TableCell>{exp.workingDurationEnd}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(exp.sl)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(exp.sl)}>
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
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Experience' : 'Add Experience'}</h2>
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
                label="Organization"
                name="nameOfOrganization"
                value={formData.nameOfOrganization || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Document Type"
                name="typeOfDocument"
                value={formData.typeOfDocument || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Document Title"
                name="documentTitle"
                value={formData.documentTitle || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Working Duration Start"
                name="workingDurationStart"
                type="date"
                value={formData.workingDurationStart || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Working Duration End"
                name="workingDurationEnd"
                type="date"
                value={formData.workingDurationEnd || ''}
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

export default ExperienceDetails;
