import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent
} from '@mui/material';
import { useRouter } from 'next/router';

interface ProfessionalDetailsFormValues {
  companyName: string;
  designation: string;
  department: string;
  subDepartment: string;
  location: string;
  division: string;
  grade: string;
  reportingManager: string;
  employmentType: string;
  dateOfHire: string;
  workEmail: string;
  cugNo: string;
  biometricId: string;
  panNo: string;
  adharNo: string;
  uanNo: string;
  esicNo: string;
  voterId: string;
  drivingLicense: string;
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
    reportingManager: '',
    employmentType: '',
    dateOfHire: '',
    workEmail: '',
    cugNo: '',
    biometricId: '',
    panNo: '',
    adharNo: '',
    uanNo: '',
    esicNo: '',
    voterId: '',
    drivingLicense: ''
  });

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

  const handleSubmit = () => {
    // Save form data and navigate to the next step or final step
    router.push('/documentDetails');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Typography variant="h4" gutterBottom>
        Professional Details
      </Typography>
      <form className="space-y-4 mt-4">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formValues.companyName}
              onChange={handleChange}
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
            <FormControl fullWidth>
              <InputLabel>Grade</InputLabel>
              <Select
                name="grade"
                value={formValues.grade}
                onChange={handleSelectChange}
              >
                <MenuItem value="Junior">Junior</MenuItem>
                <MenuItem value="Senior">Senior</MenuItem>
                <MenuItem value="Lead">Lead</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Reporting Manager"
              name="reportingManager"
              value={formValues.reportingManager}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Employment Type</InputLabel>
              <Select
                name="employmentType"
                value={formValues.employmentType}
                onChange={handleSelectChange}
              >
                <MenuItem value="Full-Time">Full-Time</MenuItem>
                <MenuItem value="Part-Time">Part-Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </Select>
            </FormControl>
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
              label="Work Email"
              name="workEmail"
              value={formValues.workEmail}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="CUG No"
              name="cugNo"
              value={formValues.cugNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Biometric ID"
              name="biometricId"
              value={formValues.biometricId}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="PAN No"
              name="panNo"
              value={formValues.panNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Aadhaar No"
              name="adharNo"
              value={formValues.adharNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="UAN No"
              name="uanNo"
              value={formValues.uanNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ESIC No"
              name="esicNo"
              value={formValues.esicNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Voter ID"
              name="voterId"
              value={formValues.voterId}
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
          <Grid item xs={12} className="text-right">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ProfessionalDetails;
