import React from 'react';
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
  Box
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const attendanceStatusData = [
  { id: 1, name: 'John Doe', department: 'HR' },
  { id: 2, name: 'Jane Smith', department: 'Finance' },
  { id: 3, name: 'Michael Johnson', department: 'Marketing' },
  // Add more data as needed
];

const AttendanceStatusPage: React.FC = () => {
  return (
    <section className="p-4 w-full main-admincontainer bg-white rounded-lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Attendance Status
      </Typography>
      <Box display="flex" gap={2} mb={4} alignItems="center">
        <TextField
          label="Username"
          variant="outlined"
          size="small"
          className="hover:shadow-lg"
        />
        <TextField
          label="Month"
          variant="outlined"
          size="small"
          className="hover:shadow-lg"
        />
        <TextField
          label="Year"
          variant="outlined"
          size="small"
          className="hover:shadow-lg"
        />
        <Box display="flex" alignItems="center" className="filter-container">
          <div className="py-1 px-3 bg-blue-400 p-4 rounded-full hover:shadow-lg">
            <IconButton color="primary">
              <FilterAltIcon />
            </IconButton>
          </div>
          <div className="py-1 px-3 bg-yellow-300 p-4 rounded-full hover:shadow-lg">
            <IconButton color="secondary">
              <FilterAltOffIcon />
            </IconButton>
          </div>
        </Box>
      </Box>
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
            {attendanceStatusData.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.department}</TableCell>
                {[...Array(30)].map((_, index) => (
                  <TableCell key={index + 1}>
                    {index === 0 && 'p'}
                    {index === 1 && 'in'}
                    {index === 2 && 'wo'}
                    {index === 3 && 'and'}
                    {index === 4 && 'there'}
                    {index === 5 && 'is'}
                    {index === 6 && 'some'}
                    {index >= 7 && 'a'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default AttendanceStatusPage;
