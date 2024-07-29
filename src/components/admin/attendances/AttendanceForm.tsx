import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  IconButton,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
interface AttendanceFormProps {
  open: boolean;
  onClose: () => void;
}

const AttendanceForm: React.FC<AttendanceFormProps> = ({ open, onClose }) => {
  const handleFormSubmit = () => {
    onClose();
  };

  return (
    <section className='w-full main-containerAdmin flex flex-col items-start justify-start gap-6 my-2'>
      <Dialog open={open} onClose={onClose} PaperProps={{ style: { borderRadius: 16 } }}>
        <DialogTitle>
          Edit Attendance
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            style={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              margin="dense"
              label="Date"
              type="date"
              fullWidth
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="dense"
              label="Check In"
              type="time"
              fullWidth
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="dense"
              label="Check Out"
              type="time"
              fullWidth
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="dense"
              label="Attendance Status"
              select
              fullWidth
              variant="outlined"
              required
            >
              <MenuItem value="Full Day">Full Day</MenuItem>
              <MenuItem value="Half Day">Half Day</MenuItem>
              <MenuItem value="Absent">Absent</MenuItem>
              <MenuItem value="Not Approved">Not Approved</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            startIcon={<EditIcon />}
            sx={{ borderRadius: '16px' }}
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default AttendanceForm;
