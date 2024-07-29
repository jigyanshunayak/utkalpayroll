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

const leaveData = [
  { id: 1, name: 'John Doe', from: '2024-07-16', to: '2024-07-20', reason: 'Vacation', status: 'Pending', leaveDay: 5, type: 'Paid' },
  { id: 2, name: 'Jane Smith', from: '2024-07-18', to: '2024-07-22', reason: 'Personal', status: 'Approved', leaveDay: 5, type: 'Unpaid' },
  // Add more data as needed
];

const LeavePage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Adjust as needed

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleApprove = (id: number) => {
    console.log(`Approving leave with ID: ${id}`);
    // Add logic to update leave status as needed
  };

  const handleReject = (id: number) => {
    console.log(`Rejecting leave with ID: ${id}`);
    // Add logic to update leave status as needed
  };

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
    <section className="w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2">
      <div className="w-full flex flex-col gap-8">
        <span className="flex items-center justify-start gap-2">
          <PeopleAltIcon className="!text-3xl" />
          <p className="text-lg font-bold capitalize">Leave</p>
        </span>
      </div>
      <div className="w-full">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] w-full h-3">
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">NAME</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">FROM</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">TO</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">REASON</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">STATUS</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">LEAVE DAY</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">TYPE</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">APPROVE/REJECT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaveData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((leave) => (
                <TableRow key={leave.id}>
                  <TableCell className="text-black font-bold text-center">{leave.name}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leave.from}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leave.to}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leave.reason}</TableCell>
                  <TableCell className={`text-black font-bold text-center ${getStatusStyle(leave.status)}`}>
                    {leave.status}
                  </TableCell>
                  <TableCell className="text-black font-bold text-center">{leave.leaveDay}</TableCell>
                  <TableCell className={`text-black font-bold text-center ${leave.type === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                    {leave.type}
                  </TableCell>
                  <TableCell className="flex gap-2 justify-center">
                    {leave.status === 'Pending' ? (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleApprove(leave.id)}
                          className="bg-blue-600 hover:bg-blue-800 rounded-3xl"
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleReject(leave.id)}
                          className="bg-red-600 hover:bg-red-800 rounded-3xl"
                        >
                          Reject
                        </Button>
                      </>
                    ) : (
                      <div className="bg-green-500 p-2 rounded-3xl">
                        <Typography variant="body1" color="textPrimary" className="flex justify-center">
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
          count={leaveData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </section>
  );
};

export default LeavePage;
