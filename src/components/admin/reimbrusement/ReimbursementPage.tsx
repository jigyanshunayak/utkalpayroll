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
  Box,
  TablePagination
} from '@mui/material';

const reimbursementData = [
  { id: 1, name: 'John Doe', type: 'Travel', amount: 500, detail: 'Flight ticket', document: 'Receipt', status: 'Pending' },
  { id: 2, name: 'Jane Smith', type: 'Meal', amount: 150, detail: 'Business lunch', document: 'Invoice', status: 'Approved' },
  // Add more data as needed
];

const ReimbursementPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleApprove = (id: number) => {
    console.log(`Approving reimbursement with ID: ${id}`);
  };

  const handleReject = (id: number) => {
    console.log(`Rejecting reimbursement with ID: ${id}`);
  };

  const getStatusStyle = (status: string) => {
    if (status === 'Pending') {
      return 'text-yellow-400 text-white font-bold p-2 rounded-md text-center';
    }
    if (status === 'Approved') {
      return 'text-green-400 text-white font-bold p-2 rounded-md text-center';
    }
    return '';
  };

  return (
    <section className="w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2">
      <div className="w-full flex flex-col gap-8">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="h1" gutterBottom>
            Reimbursement
          </Typography>
        </Box>
      </div>
      <div className="w-full">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">NAME</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">REIMBURSEMENT TYPE</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">AMOUNT</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">DETAIL</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">DOCUMENT</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">STATUS</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reimbursementData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((reimbursement) => (
                <TableRow key={reimbursement.id}>
                  <TableCell className="text-black font-bold text-center">{reimbursement.name}</TableCell>
                  <TableCell className="text-black font-bold text-center">{reimbursement.type}</TableCell>
                  <TableCell className="text-black font-bold text-center">{reimbursement.amount}</TableCell>
                  <TableCell className="text-black font-bold text-center">{reimbursement.detail}</TableCell>
                  <TableCell className="text-black font-bold text-center">{reimbursement.document}</TableCell>
                  <TableCell className={getStatusStyle(reimbursement.status)}>
                    {reimbursement.status}
                  </TableCell>
                  <TableCell className="flex gap-2 justify-center">
                    {reimbursement.status === 'Pending' ? (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          className="px-4 py-1 rounded-full bg-blue-800"
                          onClick={() => handleApprove(reimbursement.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          className="px-4 py-1 rounded-full bg-red-800"
                          onClick={() => handleReject(reimbursement.id)}
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
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={reimbursementData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </section>
  );
};

export default ReimbursementPage;
