import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent
} from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';

interface ProfessionalDetailsFormValues {
  companyName: string;
  designation: string;
  department: string;
  subDepartment: string;
  location: string;
  division: string;
  grade: string;
  reportingManagerName: string;
  employmentType: string;
  dateOfHire: string;
  workEmailID: string;
  cugNumber: string;
  biometricID: string;
  panNumber: string;
  aadhaarNumber: string;
  uanNumber: string;
  esicNumber: string;
  voterIDNumber: string;
  drivingLicense: string;
  status: string;
}

const ProfessionalDetails: React.FC = () => {
  const [formValues, setFormValues] = useState<ProfessionalDetailsFormValues>({
    companyName: '',
    designation: '',
    department: '',
    subDepartment: '',
    location: '',
    division: '',
    grade: '',
    reportingManagerName: '',
    employmentType: '',
    dateOfHire: '',
    workEmailID: '',
    cugNumber: '',
    biometricID: '',
    panNumber: '',
    aadhaarNumber: '',
    uanNumber: '',
    esicNumber: '',
    voterIDNumber: '',
    drivingLicense: '',
    status: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<any>({});
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formValues.companyName) errors.companyName = 'Company Name is required';
    if (!formValues.status) errors.status = 'Status is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setError('Please fix the errors in the form');
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError('No token found');
        return;
      }

      const response = await axios.post('http://localhost:6567/api/v1/professional/create', formValues, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.status === 201) {
        router.push('/educationDetails');
      }
    } catch (error: any) {
      console.error('Error submitting data:', error.response?.data || error.message);
      setError(`Error submitting data: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Typography variant="h4" gutterBottom>
        Professional Details
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formValues.companyName}
              onChange={handleChange}
              error={!!formErrors.companyName}
              helperText={formErrors.companyName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Designation"
              name="designation"
              value={formValues.designation}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Department"
              name="department"
              value={formValues.department}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Sub Department"
              name="subDepartment"
              value={formValues.subDepartment}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formValues.location}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Division"
              name="division"
              value={formValues.division}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Grade"
              name="grade"
              value={formValues.grade}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Reporting Manager Name"
              name="reportingManagerName"
              value={formValues.reportingManagerName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Employment Type"
              name="employmentType"
              value={formValues.employmentType}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Date of Hire"
              name="dateOfHire"
              value={formValues.dateOfHire}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Work Email ID"
              name="workEmailID"
              value={formValues.workEmailID}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="CUG Number"
              name="cugNumber"
              value={formValues.cugNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Biometric ID"
              name="biometricID"
              value={formValues.biometricID}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="PAN Number"
              name="panNumber"
              value={formValues.panNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Aadhaar Number"
              name="aadhaarNumber"
              value={formValues.aadhaarNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="UAN Number"
              name="uanNumber"
              value={formValues.uanNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ESIC Number"
              name="esicNumber"
              value={formValues.esicNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Voter ID Number"
              name="voterIDNumber"
              value={formValues.voterIDNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Driving License"
              name="drivingLicense"
              value={formValues.drivingLicense}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={!!formErrors.status}>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={formValues.status}
                onChange={handleSelectChange}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
              <FormHelperText>{formErrors.status}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfessionalDetails;
