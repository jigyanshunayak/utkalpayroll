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
  Button,
  Box,
  TextField,
  IconButton,
  TablePagination
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const resignationData = [
  { id: 1, name: 'John Doe', reason: 'Personal reasons', resignDate: '2024-07-20', lastWorkingDate: '2024-07-30', status: 'Pending' },
  { id: 2, name: 'Jane Smith', reason: 'Career growth', resignDate: '2024-07-18', lastWorkingDate: '2024-07-28', status: 'Approved' },
  // Add more data as needed
];

const ResignationPage: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleApprove = (id: number) => {
    console.log(`Approving resignation with ID: ${id}`);
    // Add logic to update resignation status as needed
  };

  const handleReject = (id: number) => {
    console.log(`Rejecting resignation with ID: ${id}`);
    // Add logic to update resignation status as needed
  };

  const getStatusStyle = (status: string) => {
    if (status === 'Pending') {
      return 'text-yellow-500';
    }
    if (status === 'Approved') {
      return 'text-green-500';
    }
    return '';
  };

  return (
    <section className="w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2">
      <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col gap-8">
        <span className="flex items-center justify-start gap-2">
          <PeopleAltIcon className="!text-3xl" />
          <p className="text-lg font-bold capitalize">Resignation</p>
        </span>
      </div>
        <Box display="flex" gap={2} alignItems="center">
          <TextField
            label="Search by Name"
            variant="outlined"
            size="small"
            className="border-none pl-1 focus:outline-none w-64"
          />
          <IconButton color="primary" className="p-2 rounded-full bg-[#5A12CF] hover:bg-gray-400">
            <FilterAltIcon className="text-white text-2xl" />
          </IconButton>
          <IconButton color="secondary" className="p-2 rounded-full bg-yellow-400 hover:bg-gray-400">
            <FilterAltOffIcon className="text-white text-2xl" />
          </IconButton>
        </Box>
      </div>
      <div className="w-full">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">NAME</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">REASON OF RESIGNATION</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">RESIGN DATE</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">LAST WORKING DATE</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">STATUS</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">APPROVE/REJECT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resignationData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((resignation) => (
                <TableRow key={resignation.id}>
                  <TableCell className="text-black font-bold text-center">{resignation.name}</TableCell>
                  <TableCell className="text-black font-bold text-center">{resignation.reason}</TableCell>
                  <TableCell className="text-black font-bold text-center">{resignation.resignDate}</TableCell>
                  <TableCell className="text-black font-bold text-center">{resignation.lastWorkingDate}</TableCell>
                  <TableCell className={`text-black font-bold text-center ${getStatusStyle(resignation.status)}`}>
                    {resignation.status}
                  </TableCell>
                  <TableCell className="flex gap-2 justify-center">
                    {resignation.status === 'Pending' ? (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleApprove(resignation.id)}
                          className="bg-blue-600 hover:bg-blue-800 rounded-3xl"
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleReject(resignation.id)}
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
          count={resignationData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </section>
  );
};

export default ResignationPage;
