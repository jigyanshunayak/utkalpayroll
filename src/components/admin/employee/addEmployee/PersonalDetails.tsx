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

interface PersonalDetailsFormValues {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  maritalStatus: string;
  bloodGroup: string;
  nationality: string;
  phoneNumber: string;
  emergencyPhoneNumber: string;
  alternativeContactNumber: string;
  religion: string;
  gender: string;
  permanentAddress: string;
  presentAddress: string;
  isSameAddress: boolean;
}

const PersonalDetails: React.FC = () => {
  const [formValues, setFormValues] = useState<PersonalDetailsFormValues>({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    maritalStatus: '',
    bloodGroup: '',
    nationality: '',
    phoneNumber: '',
    emergencyPhoneNumber: '',
    alternativeContactNumber: '',
    religion: '',
    gender: '',
    permanentAddress: '',
    presentAddress: '',
    isSameAddress: false
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormValues({
        ...formValues,
        [name]: checked
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value
      });
    }
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
    router.push('/professionalDetails');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Typography variant="h4" gutterBottom>
        Personal Details
      </Typography>
      <form className="space-y-4 mt-4">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Middle Name"
              name="middleName"
              value={formValues.middleName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formValues.dateOfBirth}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Marital Status</InputLabel>
              <Select
                name="maritalStatus"
                value={formValues.maritalStatus}
                onChange={handleSelectChange}
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Blood Group</InputLabel>
              <Select
                name="bloodGroup"
                value={formValues.bloodGroup}
                onChange={handleSelectChange}
              >
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nationality"
              name="nationality"
              value={formValues.nationality}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Emergency Phone Number"
              name="emergencyPhoneNumber"
              value={formValues.emergencyPhoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Alternative Contact Number"
              name="alternativeContactNumber"
              value={formValues.alternativeContactNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Religion"
              name="religion"
              value={formValues.religion}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formValues.gender}
                onChange={handleSelectChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Permanent Address"
              name="permanentAddress"
              multiline
              rows={3}
              value={formValues.permanentAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Present Address"
              name="presentAddress"
              multiline
              rows={3}
              value={formValues.presentAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <InputLabel>Is Present and Permanent Address the Same?</InputLabel>
              <Select
                name="isSameAddress"
                fullWidth
                value={formValues.isSameAddress ? 'Yes' : 'No'}
                onChange={(e: SelectChangeEvent<string>) =>
                  setFormValues({
                    ...formValues,
                    isSameAddress: e.target.value === 'Yes'
                  })
                }
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
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

export default PersonalDetails;
