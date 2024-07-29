import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { leadsData } from '@/src/utils/superAdmin/data';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Button,
  Typography
} from '@mui/material';

const LeadsPage: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h4" component="h1">
          LEADS
        </Typography>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Leads Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leadsData.map((lead, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img src={lead.image} alt={lead.name} className="h-12 w-12 rounded-full" />
                </TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.phone}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.companyName}</TableCell>
                <TableCell>
                  <div
                    className={`inline-block px-2 py-1 rounded text-white ${
                      lead.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'
                    }`}
                  >
                    {lead.status}
                  </div>
                </TableCell>
                <TableCell>
                  <button className="text-white hover:text-blue-500 mr-2 py-1 px-5 bg-[#5738DA] rounded-3xl">
                  <EditIcon />
                </button>
                <button className="text-white hover:text-red-700 py-1 px-5 bg-[#FF0000] rounded-3xl">
                  <DeleteIcon />
                </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LeadsPage;
