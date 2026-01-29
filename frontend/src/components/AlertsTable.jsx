import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { motion } from "framer-motion";
import StatusChip from "./StatusChip";
import ConfirmDialog from "./ConfirmDialog";
import { useState } from "react";

const AlertsTable = ({ alerts, loading, onEditClick, onDelete }) => {
  const [deleteId, setDeleteId] = useState(null);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-10 rounded-2xl">
          <CircularProgress size={38} />
        </div>
      )}

      <Table>
        <TableHead className="bg-gray-100">
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Visa Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alerts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No alerts yet
              </TableCell>
            </TableRow>
          ) : (
            alerts.map((alert) => (
              <motion.tr
                key={alert._id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}>
                <TableCell>{alert.country}</TableCell>
                <TableCell>{alert.city}</TableCell>
                <TableCell>{alert.visaType}</TableCell>
                <TableCell>
                  <StatusChip status={alert.status} />
                </TableCell>
                <TableCell>
                  {new Date(alert.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => onEditClick(alert)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => setDeleteId(alert._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </motion.tr>
            ))
          )}
        </TableBody>
      </Table>

      <ConfirmDialog
        open={Boolean(deleteId)}
        title="Delete alert?"
        description="Are you sure you want to delete Visa Slot ??"
        onConfirm={() => onDelete(deleteId).then(() => setDeleteId(null))}
        onClose={() => setDeleteId(null)}
      />
    </div>
  );
};

export default AlertsTable;
