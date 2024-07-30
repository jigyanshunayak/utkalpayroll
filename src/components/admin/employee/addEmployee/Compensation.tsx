import React, { useState, useEffect } from 'react';
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogContent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface Compensation {
  id: number;
  payGroup: string;
  annualCTC: string;
  monthlyCTC: string;
}

const API_URL = 'https://your-backend-api-endpoint.com/compensation-details'; // Replace with your API URL

const CompensationPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    payGroup: '',
    annualCTC: '',
    monthlyCTC: ''
  });

  const [errors, setErrors] = useState({
    payGroup: '',
    annualCTC: '',
    monthlyCTC: ''
  });

  const [compensationData, setCompensationData] = useState<Compensation[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchCompensationData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch compensation details');
        const data: Compensation[] = await response.json();
        setCompensationData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCompensationData();
  }, []);

  const handleOpenDialog = (index?: number) => {
    setEditingIndex(index ?? null);
    if (index !== undefined) {
      setFormData(compensationData[index]);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
      payGroup: '',
      annualCTC: '',
      monthlyCTC: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateField(name, value);
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateField(name, value);
  };

  const validateField = (name: string, value: string): string => {
    let error = '';
    switch (name) {
      case 'payGroup':
        if (!value) {
          error = 'Pay Group is required';
        }
        break;
      case 'annualCTC':
        if (!value) {
          error = 'Annual CTC is required';
        } else if (isNaN(Number(value)) || Number(value) <= 0) {
          error = 'Annual CTC must be a positive number';
        }
        break;
      case 'monthlyCTC':
        if (!value) {
          error = 'Monthly CTC is required';
        } else if (isNaN(Number(value)) || Number(value) <= 0) {
          error = 'Monthly CTC must be a positive number';
        }
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
    return error;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValid = true;
    for (const field in formData) {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    try {
      if (editingIndex !== null) {
        // Update existing record
        const response = await fetch(`${API_URL}/${compensationData[editingIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Failed to update compensation details');
        const updatedData: Compensation = await response.json();
        const updatedCompensationData = compensationData.map((item, index) =>
          index === editingIndex ? updatedData : item
        );
        setCompensationData(updatedCompensationData);
        router.push('/credentialForm'); // Redirect after update
      } else {
        // Add new record
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (!response.ok) throw new Error('Failed to add compensation details');
        const newCompensation: Compensation = await response.json();
        setCompensationData([...compensationData, newCompensation]);
        router.push('/compensation'); // Redirect after addition
      }
      handleCloseDialog();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleDelete = async (index: number) => {
    try {
      const id = compensationData[index].id;
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete compensation details');
      setCompensationData(compensationData.filter((_, i) => i !== index));
      router.push('/compensation'); // Redirect after deletion
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Compensation</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Compensation
        </Button>
      </div>
      <TableContainer className="bg-white shadow-md rounded-md">
        <Table>
          <TableHead>
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] w-full h-3">
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Sl. No.</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Pay Group</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Annual CTC</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Monthly CTC</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {compensationData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell className="text-black font-bold text-xs text-center">{index + 1}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.payGroup}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.annualCTC}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.monthlyCTC}</TableCell>
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
          <h2 className="text-xl font-bold mb-4">{editingIndex !== null ? 'Edit Compensation' : 'Add Compensation'}</h2>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth error={!!errors.payGroup}>
                  <InputLabel id="payGroup-label">Pay Group</InputLabel>
                  <Select
                    labelId="payGroup-label"
                    name="payGroup"
                    value={formData.payGroup}
                    onChange={handleSelectChange}
                  >
                    <MenuItem value="Group1">Group 1</MenuItem>
                    <MenuItem value="Group2">Group 2</MenuItem>
                  </Select>
                  <FormHelperText>{errors.payGroup}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Annual CTC"
                  name="annualCTC"
                  value={formData.annualCTC}
                  onChange={handleInputChange}
                  error={!!errors.annualCTC}
                  helperText={errors.annualCTC}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Monthly CTC"
                  name="monthlyCTC"
                  value={formData.monthlyCTC}
                  onChange={handleInputChange}
                  error={!!errors.monthlyCTC}
                  helperText={errors.monthlyCTC}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  {editingIndex !== null ? 'Update' : 'Add'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CompensationPage;
