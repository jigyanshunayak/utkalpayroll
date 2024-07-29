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
  TextField,
  IconButton
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const leaveSummaryData = [
  { id: 1, leaveType: 'Annual Leave', OB: 10, granted: 5, availed: 2, applied: 3, encashed: 1, lapsed: 0, balanced: 7 },
  { id: 2, leaveType: 'Sick Leave', OB: 8, granted: 4, availed: 3, applied: 1, encashed: 0, lapsed: 0, balanced: 5 },
  // Add more data as needed
];

const LeaveDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredLeaveSummaryData = leaveSummaryData.filter((leave) =>
    leave.leaveType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2">
      <div className="w-full mt-8">
        <Typography variant="h6" className="mb-4 font-bold">Leave Summary</Typography>
        <div className="flex items-center mb-4">
          <TextField
            label="Enter leave type"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            className="mr-4"
          />
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] w-full h-3">
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Leave Type</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">O/B</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Granted</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Availed</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Applied</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Encashed</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Lapsed</TableCell>
                <TableCell className="text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]">Balanced</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredLeaveSummaryData.map((leaveSummary) => (
                <TableRow key={leaveSummary.id}>
                  <TableCell className="text-black font-bold text-center">{leaveSummary.leaveType}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leaveSummary.OB}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leaveSummary.granted}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leaveSummary.availed}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leaveSummary.applied}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leaveSummary.encashed}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leaveSummary.lapsed}</TableCell>
                  <TableCell className="text-black font-bold text-center">{leaveSummary.balanced}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default LeaveDetail
