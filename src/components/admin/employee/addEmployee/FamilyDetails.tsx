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
  Select,
  MenuItem,
  Grid,
  SelectChangeEvent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface FamilyMember {
  id: number;
  name: string;
  relation: string;
  dob: string;
  age: number;
  bloodGroup: string;
}

const API_URL = 'https://your-backend-api-endpoint.com/family-details'; // Replace with your API URL

const FamilyDetails: React.FC = () => {
  const [familyData, setFamilyData] = useState<FamilyMember[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState<Partial<FamilyMember>>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch initial data from the backend
    const fetchFamilyData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch family details');
        const data: FamilyMember[] = await response.json();
        setFamilyData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFamilyData();
  }, []);

  const handleOpenDialog = (index?: number) => {
    setEditingIndex(index ?? null);
    if (index !== undefined) {
      setFormData(familyData[index]);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
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
        const response = await fetch(`${API_URL}/${familyData[editingIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Failed to update family details');
        const updatedData: FamilyMember = await response.json();
        const updatedFamilyData = familyData.map((item, index) =>
          index === editingIndex ? updatedData : item
        );
        setFamilyData(updatedFamilyData);
      } else {
        // Add new record
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Failed to add family details');
        const newFamilyMember: FamilyMember = await response.json();
        setFamilyData([...familyData, newFamilyMember]);
      }
      handleCloseDialog();
      router.push('/financialDetails'); // Navigate to the desired route upon successful form submission
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleDelete = async (index: number) => {
    try {
      const id = familyData[index].id;
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete family details');
      setFamilyData(familyData.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Family Information</h1>
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
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] w-full h-3">
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Sl. No.</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Name</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Relation</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Date of Birth</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Age</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Blood Group</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {familyData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell className="text-black font-bold text-xs text-center">{index + 1}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.name}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.relation}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.dob}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{calculateAge(row.dob)}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.bloodGroup}</TableCell>
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
          <h2 className="text-xl font-bold mb-4">{editingIndex !== null ? 'Edit Family Member' : 'Add Family Member'}</h2>
          <Grid container spacing={3}>
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
              <Select
                fullWidth
                label="Relation"
                name="relation"
                value={formData.relation || ''}
                onChange={handleSelectChange}
              >
                <MenuItem value="Father">Father</MenuItem>
                <MenuItem value="Mother">Mother</MenuItem>
                <MenuItem value="Sibling">Sibling</MenuItem>
                <MenuItem value="Spouse">Spouse</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dob || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Blood Group"
                name="bloodGroup"
                value={formData.bloodGroup || ''}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <div className="flex justify-end mt-4">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {editingIndex !== null ? 'Update' : 'Add'}
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCloseDialog} className="ml-2">
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FamilyDetails;
