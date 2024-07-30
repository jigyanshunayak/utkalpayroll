import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Grid
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface ExperienceData {
  id: number;
  organization: string;
  startDate: string;
  endDate: string;
  designation: string;
  annualCTC: number;
}

const API_URL = 'https://your-backend-api-endpoint.com/experience'; // Replace with your API URL

const ExperienceDetails: React.FC = () => {
  const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState<Partial<ExperienceData>>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch initial data from the backend
    const fetchExperienceData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch experience details');
        const data: ExperienceData[] = await response.json();
        setExperienceData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchExperienceData();
  }, []);

  const handleOpenDialog = (index?: number) => {
    setEditingIndex(index ?? null);
    if (index !== undefined) {
      setFormData(experienceData[index]);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({});
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
      if (editingIndex !== null) {
        // Update existing record
        const response = await fetch(`${API_URL}/${experienceData[editingIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Failed to update experience details');
        const updatedData: ExperienceData = await response.json();
        const updatedExperienceData = experienceData.map((item, index) =>
          index === editingIndex ? updatedData : item
        );
        setExperienceData(updatedExperienceData);
      } else {
        // Add new record
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

        });
        if (!response.ok) throw new Error('Failed to add experience details');
        const newExperience: ExperienceData = await response.json();
        setExperienceData([...experienceData, newExperience]);
      }
      handleCloseDialog();
      router.push('/familyDetails');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleDelete = async (index: number) => {
    try {
      const id = experienceData[index].id;
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete experience details');
      setExperienceData(experienceData.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end.getFullYear() - start.getFullYear();
    return `${diff} years`;
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
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] w-full h-3">
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Sl. No.</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Name of Organization</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Designation</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Annual CTC</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Working Duration</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {experienceData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell className="text-black font-bold text-xs text-center">{index + 1}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.organization}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.designation}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.annualCTC}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{calculateDuration(row.startDate, row.endDate)}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">
                  <IconButton onClick={() => handleOpenDialog(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogContent>
          <h2 className="text-xl font-bold mb-4">{editingIndex !== null ? 'Edit Experience' : 'Add Experience'}</h2>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name of Organization"
                name="organization"
                value={formData.organization || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Start Date"
                name="startDate"
                type="date"
                value={formData.startDate || ''}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="End Date"
                name="endDate"
                type="date"
                value={formData.endDate || ''}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Designation"
                name="designation"
                value={formData.designation || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Annual CTC"
                name="annualCTC"
                type="number"
                value={formData.annualCTC || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                {editingIndex !== null ? 'Update' : 'Submit'}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExperienceDetails;
