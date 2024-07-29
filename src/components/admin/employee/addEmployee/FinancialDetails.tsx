import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Button,
} from '@mui/material';

const FinancialDetail: React.FC = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    branchName: '',
    bankAccountNumber: '',
    bankHolderName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Call the backend API to save the financial details
      const response = await fetch('https://your-backend-api-endpoint.com/financial-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Failed to save financial details');
      }

      console.log('Form Data:', formData);
      // Optionally reset the form
      setFormData({
        bankName: '',
        branchName: '',
        bankAccountNumber: '',
        bankHolderName: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Details</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bank Name"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Branch Name"
              name="branchName"
              value={formData.branchName}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bank Account Number"
              name="bankAccountNumber"
              value={formData.bankAccountNumber}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bank Holder Name"
              name="bankHolderName"
              value={formData.bankHolderName}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} className="flex justify-end">
            <Button
              variant="contained"
              color="primary"
              type="submit" // Set type to submit
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FinancialDetail;
