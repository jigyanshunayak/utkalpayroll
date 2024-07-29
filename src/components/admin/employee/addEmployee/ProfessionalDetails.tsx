import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Typography } from '@mui/material';
import axios from 'axios';

interface FormValues {
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

interface Errors {
  [key: string]: string | undefined; // Index signature added
}

const ProfessionalDetails: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
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

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when the field is modified
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    // Basic validation rules
    if (!formValues.companyName) newErrors.companyName = 'Company Name is required';
    if (!formValues.designation) newErrors.designation = 'Designation is required';
    if (!formValues.department) newErrors.department = 'Department is required';
    if (!formValues.subDepartment) newErrors.subDepartment = 'Sub-Department is required';
    if (!formValues.location) newErrors.location = 'Location is required';
    if (!formValues.division) newErrors.division = 'Division is required';
    if (!formValues.grade) newErrors.grade = 'Grade is required';
    if (!formValues.reportingManager) newErrors.reportingManager = 'Reporting Manager\'s Name is required';
    if (!formValues.employmentType) newErrors.employmentType = 'Employment Type is required';
    if (!formValues.dateOfHire) newErrors.dateOfHire = 'Date of Hire is required';
    if (!formValues.workEmail) newErrors.workEmail = 'Work Email ID is required';
    if (!formValues.cugNo) newErrors.cugNo = 'CUG No is required';
    if (!formValues.biometricId) newErrors.biometricId = 'Biometric ID is required';
    if (!formValues.panNo) newErrors.panNo = 'PAN No is required';
    if (!formValues.adharNo) newErrors.adharNo = 'Adhara No is required';
    if (!formValues.uanNo) newErrors.uanNo = 'UAN No is required';
    if (!formValues.esicNo) newErrors.esicNo = 'ESIC No is required';
    if (!formValues.voterId) newErrors.voterId = 'Voter ID is required';
    if (!formValues.drivingLicense) newErrors.drivingLicense = 'Driving License is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formValues);
      // Backend integration starts here
      axios.post('https://your-api-endpoint.com/professional-details', formValues)
        .then(response => {
          console.log('Form submitted successfully:', response.data);
          // Handle successful submission (e.g., display a success message, redirect, etc.)
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          // Handle submission error (e.g., display an error message)
        });
      // Backend integration ends here
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Professional Details
      </Typography>
      <form className="space-y-4 mt-4">
        <Grid container spacing={2}>
          {[
            { label: 'Company Name', name: 'companyName' },
            { label: 'Designation', name: 'designation', select: ['Manager', 'Developer', 'Designer', 'Analyst'] },
            { label: 'Department', name: 'department', select: ['HR', 'Engineering', 'Marketing'] },
            { label: 'Sub-Department', name: 'subDepartment', select: ['Recruitment', 'Development', 'Content'] },
            { label: 'Location', name: 'location', select: ['New York', 'London', 'Berlin'] },
            { label: 'Division', name: 'division', select: ['Division A', 'Division B'] },
            { label: 'Grade', name: 'grade', select: ['Grade 1', 'Grade 2'] },
            { label: 'Reporting Manager\'s Name', name: 'reportingManager' },
            { label: 'Employment Type', name: 'employmentType', select: ['Full-time', 'Part-time', 'Contract'] },
            { label: 'Date of Hire', name: 'dateOfHire', type: 'date' },
            { label: 'Work Email ID', name: 'workEmail' },
            { label: 'CUG No', name: 'cugNo' },
            { label: 'Biometric ID', name: 'biometricId' },
            { label: 'PAN No', name: 'panNo' },
            { label: 'Adhara No', name: 'adharNo' },
            { label: 'UAN No', name: 'uanNo' },
            { label: 'ESIC No', name: 'esicNo' },
            { label: 'Voter ID', name: 'voterId' },
            { label: 'Driving License', name: 'drivingLicense' }
          ].map(({ label, name, select, type }) => (
            <Grid item xs={12} md={6} key={name}>
              <TextField
                fullWidth
                label={label}
                name={name}
                type={type || 'text'}
                value={formValues[name as keyof FormValues]}
                onChange={handleChange}
                select={!!select}
                error={!!errors[name]}
                helperText={errors[name]}
              >
                {select && select.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          ))}
        </Grid>
        <div className="flex justify-end mt-4">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalDetails;
