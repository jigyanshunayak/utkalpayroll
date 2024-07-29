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
  TablePagination
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
            <TableRow>
              <TableCell className="bg-violet-500 text-white shadow-[-4px_4px_27px_0px_#6B23CA]">NAME</TableCell>
              <TableCell className="bg-violet-500 text-white shadow-[-4px_4px_27px_0px_#6B23CA]">AMOUNT</TableCell>
              <TableCell className="bg-violet-500 text-white shadow-[-4px_4px_27px_0px_#6B23CA]">EMI</TableCell>
              <TableCell className="bg-violet-500 text-white shadow-[-4px_4px_27px_0px_#6B23CA]">REASON</TableCell>
              <TableCell className="bg-violet-500 text-white shadow-[-4px_4px_27px_0px_#6B23CA]">STATUS</TableCell>
              <TableCell className="bg-violet-500 text-white shadow-[-4px_4px_27px_0px_#6B23CA]">APPROVE/REJECT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salaryRequestData.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.amount}</TableCell>
                <TableCell>{request.emi}</TableCell>
                <TableCell>{request.reason}</TableCell>
                <TableCell className={getStatusStyle(request.status)}>
                  {request.status}
                </TableCell>
                <TableCell>
                  {request.status === 'Pending' ? (
                    <div className="">
                      <Button variant="contained" color="primary" onClick={() => handleApprove(request.id)} className='bg-blue-600 hover:bg-blue-800 rounded-3xl p-2'>
                        Approve
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleReject(request.id)} className='bg-red-600 hover:bg-red-800 rounded-3xl'>
                        Reject
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-green-500  p-2 rounded-3xl w-24">
                      <Typography variant="body1" color="textPrimary" className='flex justify-center'>
                        Approved
                      </Typography>
                    </div>
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
