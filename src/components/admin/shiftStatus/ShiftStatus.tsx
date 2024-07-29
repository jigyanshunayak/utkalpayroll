import React, { useState } from 'react';
import Adminlayouts from '@/src/layouts/admin/Adminlayouts';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Typography,
  TextField,
  IconButton,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from(new Array(30), (val, index) => index + 1990);

const ShiftStatusPage: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  return (
      <section className="p-4 w-full flex flex-col">
        <Typography variant="h4" component="h1" className="text-lg font-bold capitalize mb-4">
          Shift Status
        </Typography>
        <Box display="flex" gap={2} mb={4} alignItems="center">
          <TextField
            label="Username"
            variant="outlined"
            size="small"
            className="hover:shadow-lg"
          />
          <FormControl variant="outlined" size="small" className="hover:shadow-lg w-36">
            <InputLabel>Month</InputLabel>
            <Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              label="Month"
            >
              {months.map((month, index) => (
                <MenuItem key={index} value={month}>{month}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" className="hover:shadow-lg w-36">
            <InputLabel>Year</InputLabel>
            <Select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              label="Year"
            >
              {years.map((year, index) => (
                <MenuItem key={index} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display="flex" alignItems="center" className="filter-container">
            <div className="bg-blue-400 p-2 rounded-full hover:shadow-lg">
              <IconButton color="primary">
                <FilterAltIcon />
              </IconButton>
            </div>
            <div className="bg-yellow-300 p-2 rounded-full hover:shadow-lg">
              <IconButton color="secondary">
                <FilterAltOffIcon />
              </IconButton>
            </div>
          </Box>
        </Box>
        <div className="flex-1 overflow-y-auto">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
                  <TableCell className="text-white font-bold text-xs shadow-[-4px_4px_27px_0px_#6B23CA]">Emp. ID</TableCell>
                  <TableCell className="text-white font-bold text-xs shadow-[-4px_4px_27px_0px_#6B23CA]">Name</TableCell>
                  <TableCell className="text-white font-bold text-xs shadow-[-4px_4px_27px_0px_#6B23CA]">Department</TableCell>
                  {[...Array(30)].map((_, index) => (
                    <TableCell key={index + 1} className="text-white font-bold text-xs shadow-[-4px_4px_27px_0px_#6B23CA]">{index + 1}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Example row, replace with actual data */}
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>IT</TableCell>
                  {[...Array(30)].map((_, index) => (
                    <TableCell key={index + 1}>Data</TableCell>
                  ))}
                </TableRow>
                {/* Repeat TableRow for each data row */}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
  );
};

export default ShiftStatusPage;
