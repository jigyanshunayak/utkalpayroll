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
  Button,
  TablePagination,
  TextField,
  IconButton,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import EditIcon from '@mui/icons-material/Edit';


const payslipData = [
  { id: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com', mobile: '123-456-7890', status: 'Active' },
  { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane@example.com', mobile: '234-567-8901', status: 'Inactive' },
  // Add more data as needed
];

const PayslipPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchUsername, setSearchUsername] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (id: number) => {
    console.log(`Editing payslip with ID: ${id}`);
    // Implement logic to edit payslip with id
  };

  const getStatusStyle = (status: string) => {
    if (status === 'Active') {
      return 'text-green-500 text-white font-bold p-2 rounded-md text-center';
    }
    if (status === 'Inactive') {
      return 'text-red-500 text-white font-bold p-2 rounded-md text-center';
    }
    return '';
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUsername(event.target.value);
  };

  const handleStatusFilterChange = (event: SelectChangeEvent<string>) => {
    setStatusFilter(event.target.value);
  };

  const filteredData = payslipData.filter((payslip) => {
    return payslip.username.toLowerCase().includes(searchUsername.toLowerCase()) &&
           (statusFilter === '' || payslip.status === statusFilter);
  });

  return (
    <section className="w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2">
      <div className="w-full flex flex-col gap-8">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="h1" gutterBottom>
            Payslip
          </Typography>
          <Box display="flex" gap={2} alignItems="center">
            <TextField
              label="Search by Username"
              variant="outlined"
              size="small"
              className="border-none pl-1 focus:outline-none w-64"
              value={searchUsername}
              onChange={handleSearchChange}
            />
            <FormControl variant="outlined" size="small" className="w-40">
              <InputLabel>Status Filter</InputLabel>
              <Select
                value={statusFilter}
                onChange={handleStatusFilterChange}
                label="Status Filter"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <IconButton color="primary" className="p-2 rounded-full bg-[#5A12CF]  hover:bg-gray-400">
              <FilterAltIcon className="text-white text-2xl" />
            </IconButton>
            <IconButton color="secondary" className="p-2 rounded-full bg-yellow-400 hover:bg-gray-400">
              <FilterAltOffIcon className="text-white text-2xl" />
            </IconButton>
          </Box>
        </Box>
      </div>
      <div className="w-full">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">NAME</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">USER NAME</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">EMAIL</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">MOBILE</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">STATUS</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((payslip) => (
                <TableRow key={payslip.id}>
                  <TableCell className="text-black font-bold text-center">{payslip.name}</TableCell>
                  <TableCell className="text-black font-bold text-center">{payslip.username}</TableCell>
                  <TableCell className="text-black font-bold text-center">{payslip.email}</TableCell>
                  <TableCell className="text-black font-bold text-center">{payslip.mobile}</TableCell>
                  <TableCell className={getStatusStyle(payslip.status)}>
                    {payslip.status}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="contained"
                      color="primary"
                      className="px-4 py-1 rounded-full bg-blue-800"
                      onClick={() => handleEdit(payslip.id)}
                    >
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </section>
  );
};

export default PayslipPage;
