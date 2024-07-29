import React, { useState } from 'react';
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

interface Announcement {
  id: number;
  date: string;
  note: string;
}

const AnnouncementsPage: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [announcementDate, setAnnouncementDate] = useState('');
  const [announcementNote, setAnnouncementNote] = useState('');

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleAddAnnouncement = () => {
    const newAnnouncement: Announcement = {
      id: announcements.length + 1,
      date: announcementDate,
      note: announcementNote
    };
    setAnnouncements([...announcements, newAnnouncement]);
    setAnnouncementDate('');
    setAnnouncementNote('');
    handleCloseAddDialog();
  };

  return (
    <section className="w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2">
      <Box className="w-full flex flex-col gap-8">
        <Box className="flex items-center justify-start gap-2">
          <Typography variant='h6' className='font-bold capitalize'>Announcements</Typography>
        </Box>
        <Box className="w-full flex items-center justify-between">
          <Box className="w-full flex items-center justify-end gap-8">
            <Button 
              variant="contained" 
              className='bg- from-[#6B23CA] text-base font-bold capitalize shadow-md'
              startIcon={<AddIcon />}
              onClick={handleOpenAddDialog}
            >
              Add Announcement
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="w-full">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className='bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF] w-full h-3'>
                <TableCell className='text-black font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Date</TableCell>
                <TableCell className='text-black font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Announcement Note</TableCell>
                <TableCell className='text-black font-bold text-xs text-center shadow-[-4px_4px_27px_0px_#6B23CA]'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {announcements.map((announcement) => (
                <TableRow key={announcement.id}>
                  <TableCell className='text-black font-bold text-center'>{announcement.date}</TableCell>
                  <TableCell className='text-black font-bold text-center'>{announcement.note}</TableCell>
                  <TableCell className='text-white font-bold flex gap-2 justify-center'>
                    <IconButton className='px-2 py-1 rounded-full bg-blue-800'>
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

      {/* Add Announcement Dialog */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Add Announcement</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <FormControl variant="outlined" size="small">
              <TextField
                type="date"
                value={announcementDate}
                onChange={(e) => setAnnouncementDate(e.target.value)}
              />
            </FormControl>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Announcement Note"
              value={announcementNote}
              onChange={(e) => setAnnouncementNote(e.target.value)}
            />
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddAnnouncement}
              >
                Submit
              </Button>
            </Box>
          </Box>
          <IconButton
            aria-label="close"
            onClick={handleCloseAddDialog}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AnnouncementsPage;
