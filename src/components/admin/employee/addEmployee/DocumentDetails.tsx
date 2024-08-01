import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface DocumentData {
  id: number;
  documentType: string;
  documentTitle: string;
}

const initialData: DocumentData[] = [];

const DocumentDetail: React.FC = () => {
  const [documentData, setDocumentData] = useState<DocumentData[]>(initialData);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState<Partial<DocumentData>>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleOpenDialog = (index?: number) => {
    setEditingIndex(index ?? null);
    if (index !== undefined) {
      setFormData(documentData[index]);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!formData.documentType || !formData.documentTitle) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingIndex !== null) {
      // Update existing record
      const updatedData = documentData.map((item, index) =>
        index === editingIndex ? { ...item, ...formData } : item
      );
      setDocumentData(updatedData);
    } else {
      // Add new record
      setDocumentData([
        ...documentData,
        { id: documentData.length + 1, ...formData } as DocumentData,
      ]);
    }
    handleCloseDialog();
    router.push('/compensationPage'); // Replace with the desired route
  };

  const handleDelete = (index: number) => {
    setDocumentData(documentData.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Document Details</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Document
        </Button>
      </div>
      <TableContainer className="bg-white shadow-md rounded-md">
        <Table>
          <TableHead>
            <TableRow className="bg-gradient-to-t from-[#6B23CA] to-[#F4ECFF]">
              <TableCell className="text-white font-bold text-xs text-center">Sl. No.</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Type of Document</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Document Title</TableCell>
              <TableCell className="text-white font-bold text-xs text-center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documentData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell className="text-black font-bold text-xs text-center">{index + 1}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.documentType}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">{row.documentTitle}</TableCell>
                <TableCell className="text-black font-bold text-xs text-center">
                  <IconButton onClick={() => handleOpenDialog(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogContent>
          <h2 className="text-xl font-bold mb-4">{editingIndex !== null ? 'Edit Document' : 'Add Document'}</h2>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="document-type-label">Type of Document</InputLabel>
                <Select
                  labelId="document-type-label"
                  name="documentType"
                  value={formData.documentType || ''}
                  onChange={handleSelectChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Passport">Passport</MenuItem>
                  <MenuItem value="Driving License">Driving License</MenuItem>
                  <MenuItem value="ID Card">ID Card</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Document Title"
                name="documentTitle"
                value={formData.documentTitle || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                {editingIndex !== null ? 'Update' : 'Submit'}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DocumentDetail;
