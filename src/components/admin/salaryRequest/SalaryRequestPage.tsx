// Import necessary components and icons
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
  Box
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// Sample salary request data (rename leaveData to salaryRequestData if desired)
const salaryRequestData = [
  { id: 1, name: 'John Doe', amount: '$5000', emi: `&#8377; 1000`, reason: 'Medical expenses', status: 'Pending' },
  { id: 2, name: 'Jane Smith', amount: '$8000', emi: '$1200', reason: 'Home renovation', status: 'Approved' },
  // Add more data as needed
];

const SalaryRequestPage: React.FC = () => {
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle page change
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Approve salary request handler
  const handleApprove = (id: number) => {
    console.log(`Approving salary request with ID: ${id}`);
    // Add logic to update salary request status as needed
  };

  // Reject salary request handler
  const handleReject = (id: number) => {
    console.log(`Rejecting salary request with ID: ${id}`);
    // Add logic to update salary request status as needed
  };

  // Function to get status style
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'text-yellow-500';
      case 'Approved':
        return 'text-green-500';
      default:
        return '';
    }
  };

  return (
    <section className="p-4 w-full main-admincontainer bg-white rounded-lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Salary Request
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">NAME</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">AMOUNT</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">EMI</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">REASON</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">STATUS</TableCell>
              <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">APPROVE/REJECT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salaryRequestData.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="text-black font-bold text-center">{request.name}</TableCell>
                <TableCell className="text-black font-bold text-center">{request.amount}</TableCell>
                <TableCell className="text-black font-bold text-center">{request.emi}</TableCell>
                <TableCell className="text-black font-bold text-center">{request.reason}</TableCell>
                <TableCell className={getStatusStyle(request.status)}>
                  {request.status}
                </TableCell>
                <TableCell className="flex gap-2 justify-center">
                    {request.status === 'Pending' ? (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          className="px-4 py-1 rounded-full bg-blue-800"
                          onClick={() => handleApprove(request.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          className="px-4 py-1 rounded-full bg-red-800"
                          onClick={() => handleReject(request.id)}
                        >
                          Reject
                        </Button>
                      </>
                    ) : (
                      <Box className="bg-green-500 p-2 px-4 py-1 rounded-full">
                        <Typography variant="body1" color="textPrimary" className="flex justify-center">
                          Approved
                        </Typography>
                      </Box>
                    )}
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={salaryRequestData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </section>
  );
};

export default SalaryRequestPage;
