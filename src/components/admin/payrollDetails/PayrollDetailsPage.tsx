import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Typography,
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  TablePagination
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const payrollData = [
  { id: 1, name: 'John Doe', empId: 'EMP001', payableDays: 20 },
  { id: 2, name: 'Jane Smith', empId: 'EMP002', payableDays: 22 },
  // Add more data as needed
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = [2021, 2022, 2023, 2024, 2025];

const statuses = ['Processing', 'Processed', 'Released', 'Published', 'Hold'];

const PayrollDetailsPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Adjust as needed
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [status, setStatus] = useState('');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleMonthChange = (event: SelectChangeEvent<string>) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event: SelectChangeEvent<string>) => {
    setYear(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'text-yellow-500';
      case 'Processed':
        return 'text-green-500';
      default:
        return '';
    }
  };

  const handleSubmit = () => {
    // Implement the submit logic here
    console.log({ month, year, status });
  };

  return (
    <section className="w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2">
      <div className="w-full flex flex-col gap-8">
        <span className="flex items-center justify-start gap-2">
          <PeopleAltIcon className="!text-3xl" />
          <p className="text-lg font-bold capitalize">Payroll Details</p>
        </span>
      </div>
      <Box display="flex" gap={2} mb={4} alignItems="center">
        <FormControl variant="outlined" size="small" className="w-40">
          <InputLabel>Month</InputLabel>
          <Select value={month} onChange={handleMonthChange} label="Month">
            {months.map((month, index) => (
              <MenuItem key={index} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" className="w-40">
          <InputLabel>Year</InputLabel>
          <Select value={year} onChange={handleYearChange} label="Year">
            {years.map((year, index) => (
              <MenuItem key={index} value={year.toString()}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" className="w-40">
          <InputLabel>Salary Status</InputLabel>
          <Select value={status} onChange={handleStatusChange} label="Salary Status">
            {statuses.map((status, index) => (
              <MenuItem key={index} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit} className="w-40">
          Submit
        </Button>
      </Box>
      <div className="w-full">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] w-full h-3">
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">NAME</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">EMP ID</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">PAYABLE DAYS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payrollData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="text-black font-bold text-center">{employee.name}</TableCell>
                  <TableCell className="text-black font-bold text-center">{employee.empId}</TableCell>
                  <TableCell className="text-black font-bold text-center">{employee.payableDays}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={payrollData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </section>
  );
};

export default PayrollDetailsPage;
