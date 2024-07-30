import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Dialog, DialogContent, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface EducationData {
  id: number;
  degree: string;
  university: string;
  board: string;
  passingYear: number;
  percentage: number;
  division: string;
}

const initialData: EducationData[] = [
  {
    id: 1,
    degree: 'B.Tech',
    university: 'XYZ University',
    board: 'ABC Board',
    passingYear: 2020,
    percentage: 85,
    division: 'First'
  },
];

const EducationDetails: React.FC = () => {
  const router = useRouter();
  const [educationData, setEducationData] = useState<EducationData[]>(initialData);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState<Partial<EducationData>>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleOpenDialog = (index?: number) => {
    setEditingIndex(index ?? null);
    if (index !== undefined) {
      setFormData(educationData[index]);
    } else {
      setFormData({});
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

  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updatedData = educationData.map((item, index) =>
        index === editingIndex ? { ...item, ...formData } : item
      );
      setEducationData(updatedData);
    } else {
      setEducationData([
        ...educationData,
        { id: educationData.length + 1, ...formData } as EducationData
      ]);
    }
    handleCloseDialog();
    router.push('/experienceDetails'); // Replace with the desired route
  };

  const handleDelete = (index: number) => {
    setEducationData(educationData.filter((_, i) => i !== index));
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
              <TableCell className="text-white font-bold text-xs text-center">Degree</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">University</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Board</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Passing Year</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Percentage</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Division</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell className="text-black text-xs text-center">{index + 1}</TableCell>
                <TableCell className="text-black text-xs text-center">{row.degree}</TableCell>
                <TableCell className="text-black text-xs text-center">{row.university}</TableCell>
                <TableCell className="text-black text-xs text-center">{row.board}</TableCell>
                <TableCell className="text-black text-xs text-center">{row.passingYear}</TableCell>
                <TableCell className="text-black text-xs text-center">{row.percentage}</TableCell>
                <TableCell className="text-black text-xs text-center">{row.division}</TableCell>
                <TableCell className="text-xs text-center">
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
          <h2 className="text-xl font-bold mb-4">{editingIndex !== null ? 'Edit Education' : 'Add Education'}</h2>
          <Grid container spacing={3}>
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
                label="Percentage"
                name="percentage"
                type="number"
                value={formData.percentage || ''}
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

export default EducationDetails;
