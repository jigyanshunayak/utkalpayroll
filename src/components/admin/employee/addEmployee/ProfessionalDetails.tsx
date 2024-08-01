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
  empid: string;
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
    empid:'',
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
    const newErrors: any = {};
    if (!formValues.companyName) {
      newErrors.companyName = 'Company Name is required';
    }
    if (!formValues.status) {
      newErrors.status = 'Status is required';
    }
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Values:', formValues); // Debugging: log form values before submission
    if (!validateForm()) {
      console.log('Form Errors:', formErrors); // Debugging: log form errors if validation fails
      return;
    }
    try {
      const response = await axios.post('http://localhost:6567/api/v1/professional/create', formValues);
      console.log('Response:', response.data); // Debugging: log API response
      if (response.status === 201) {
        router.push('/educationDetails');  // Redirect to dashboard or any other page
      }
    } catch (error) {
      console.error('Submission Error:', error); // Debugging: log submission error
      setError('Failed to submit form. Please try again.');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Professional Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Employee id"
              name="empid"
              value={formValues.empid}
              onChange={handleChange}
            />
          </Grid>
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
              label="Date of Hire"
              name="dateOfHire"
              type="date"
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
                label="Status"
                name="status"
                value={formValues.status}
                onChange={handleSelectChange}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
              {formErrors.status && (
                <FormHelperText>{formErrors.status}</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          save
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </div>
  );
};

export default ProfessionalDetails;
