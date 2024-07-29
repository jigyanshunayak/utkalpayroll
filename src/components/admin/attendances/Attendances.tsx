import React, { useState } from 'react';
import AttendanceForm from './AttendanceForm';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import FileUploadIcon from '@mui/icons-material/FileUpload';

interface Attendance {
  image: string;
  name: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: string;
  checkOutBy: string;
  checkInStatus: string;
}

const AttendancePage: React.FC = () => {
  const [attendanceData, setAttendanceData] = useState<Attendance[]>([
    // Sample attendance data
    { image: 'path_to_image', name: 'John Doe', date: '2024-07-15', checkIn: '08:00', checkOut: '17:00', status: 'Present', checkOutBy: 'Admin', checkInStatus: 'On Time' },
    { image: 'path_to_image', name: 'John Doe', date: '2024-07-15', checkIn: '08:00', checkOut: '17:00', status: 'Present', checkOutBy: 'Admin', checkInStatus: 'On Time' },
    { image: 'path_to_image', name: 'John Doe', date: '2024-07-15', checkIn: '08:00', checkOut: '17:00', status: 'Present', checkOutBy: 'Admin', checkInStatus: 'On Time' },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEditClick = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2">
      <Box className="w-full flex flex-col gap-4">
        <Box className="flex items-center justify-start gap-2">
          <Typography variant='h6' className='font-bold capitalize'>Attendance</Typography>
        </Box>
        <Box className="w-full flex items-center justify-between gap-4">
          <Box className="flex items-center gap-4">
            <TextField
              label="Username"
              variant="outlined"
              size="small"
              className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] text-black focus:outline-none px-4 py-2 rounded-full"
            />
            <TextField
              label="Start Date"
              type="date"
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
              className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] text-black focus:outline-none px-4 py-2 rounded-full"
            />
            <TextField
              label="End Date"
              type="date"
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
              className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] text-black focus:outline-none px-4 py-2 rounded-full"
            />
          </Box>
          <Box className="flex items-center gap-4">
            <Button
              variant="contained"
              className="bg-gradient-to-t from-[#6B23CA] to-[#5A12CF] text-sm font-bold capitalize shadow-md"
              startIcon={<FilterAltIcon />}
            >
              Filter
            </Button>
            <Button
              variant="contained"
              className="bg-gradient-to-t from-[#5F1B81] to-[#5A12CF] text-sm font-bold capitalize text-white shadow-md"
              startIcon={<FilterAltOffIcon />}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] text-sm font-bold capitalize shadow-md"
              startIcon={<FileUploadIcon />}
            >
              Bulk Upload
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="w-full overflow-x-auto">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className='bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]'>
                <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Image</TableCell>
                <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Name</TableCell>
                <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Date</TableCell>
                <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Check In</TableCell>
                <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Check Out</TableCell>
                <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Attendance Status</TableCell>
                <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Check Out By</TableCell>
                <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Check In Status</TableCell>
                <TableCell className='text-white font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceData.map((attendance, index) => (
                <TableRow key={index}>
                  <TableCell className='text-black font-bold text-center'>
                    <img src={attendance.image} alt={attendance.name} className='w-10 h-10 rounded-full object-cover' />
                  </TableCell>
                  <TableCell className='text-black font-bold text-center'>{attendance.name}</TableCell>
                  <TableCell className='text-black font-bold text-center'>{attendance.date}</TableCell>
                  <TableCell className='text-black font-bold text-center'>{attendance.checkIn}</TableCell>
                  <TableCell className='text-black font-bold text-center'>{attendance.checkOut}</TableCell>
                  <TableCell className='text-black font-bold text-center'>{attendance.status}</TableCell>
                  <TableCell className='text-black font-bold text-center'>{attendance.checkOutBy}</TableCell>
                  <TableCell className='text-black font-bold text-center'>{attendance.checkInStatus}</TableCell>
                  <TableCell className='text-white font-bold flex gap-2 justify-center'>
                    <IconButton className='px-2 py-1 rounded-full bg-blue-800' onClick={handleEditClick}>
                      <EditIcon className='!text-white' />
                    </IconButton>
                    <IconButton className='px-2 py-1 rounded-full bg-red-800'>
                      <DeleteIcon className='!text-white' />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <AttendanceForm open={isFormOpen} onClose={handleFormClose} />
    </section>
  );
};

export default AttendancePage;
