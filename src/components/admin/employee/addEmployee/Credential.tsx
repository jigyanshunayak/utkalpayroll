import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Button,
} from '@mui/material';

const CredentialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    empId: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    empId: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateField(name, value);
  };

  const validateField = (name: string, value: string): string => {
    let error = '';
    switch (name) {
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email is not valid';
        }
        break;
      case 'empId':
        if (!value) {
          error = 'Employee ID is required';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          error = 'Confirm Password is required';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
    return error; // Return the error message
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    for (const field in formData) {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) {
        isValid = false;
      }
    }
    if (isValid) {
      // Handle form submission logic here
      console.log('Form Data:', formData);
      // Reset form or perform other actions
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Credential</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Employee ID"
              name="empId"
              value={formData.empId}
              onChange={handleInputChange}
              variant="outlined"
              error={!!errors.empId}
              helperText={errors.empId}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              variant="outlined"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </Grid>
          <Grid item xs={12} className="flex justify-end">
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CredentialForm;