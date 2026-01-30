// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   CircularProgress,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import { motion } from "framer-motion";
// import StatusChip from "./StatusChip";
// import ConfirmDialog from "./ConfirmDialog";
// import { useState } from "react";

// const AlertsTable = ({ alerts, loading, onEditClick, onDelete }) => {
//   const [deleteId, setDeleteId] = useState(null);

//   return (
//     <div className="relative">
//       {loading && (
//         <div className="absolute inset-0 bg-white/30 flex items-center justify-center z-10">
//           <CircularProgress />
//         </div>
//       )}

//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Country</TableCell>
//             <TableCell>City</TableCell>
//             <TableCell>Visa Type</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Created</TableCell>
//             <TableCell align="right">Actions</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {alerts.length === 0 ? (
//             <TableRow>
//               <TableCell colSpan={6} align="center">
//                 No alerts yet
//               </TableCell>
//             </TableRow>
//           ) : (
//             alerts.map((alert) => (
//               <motion.tr key={alert._id}>
//                 <TableCell>{alert.country}</TableCell>
//                 <TableCell>{alert.city}</TableCell>
//                 <TableCell>{alert.visaType}</TableCell>
//                 <TableCell>
//                   <StatusChip status={alert.status} />
//                 </TableCell>
//                 <TableCell>
//                   {new Date(alert.createdAt).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell align="right">
//                   <IconButton onClick={() => onEditClick(alert)}>
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton
//                     color="error"
//                     onClick={() => setDeleteId(alert._id)}>
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </motion.tr>
//             ))
//           )}
//         </TableBody>
//       </Table>

//       <ConfirmDialog
//         open={Boolean(deleteId)}
//         title="Delete alert?"
//         description="Are you sure you want to delete this visa slot?"
//         onConfirm={() => onDelete(deleteId).then(() => setDeleteId(null))}
//         onClose={() => setDeleteId(null)}
//       />
//     </div>
//   );
// };

// export default AlertsTable;

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  CircularProgress,
  TableContainer,
  Box,
  Typography,
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
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center z-10">
          <CircularProgress />
        </div>
      )}

      <TableContainer>
        <Table
          sx={{
            "@media (max-width: 768px)": {
              "& thead": {
                display: "none",
              },
              "& tbody tr": {
                display: "block",
                backgroundColor: "#fff",
                marginBottom: "1rem",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                padding: "1rem",
              },
              "& tbody td": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem 0",
                borderBottom: "none",
              },
              "& tbody td::before": {
                content: "attr(data-label)",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "#6b7280",
              },
            },
          }}>
          <TableHead>
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
                  <Typography color="text.secondary">No alerts yet</Typography>
                </TableCell>
              </TableRow>
            ) : (
              alerts.map((alert) => (
                <motion.tr key={alert._id}>
                  <TableCell data-label="Country">{alert.country}</TableCell>
                  <TableCell data-label="City">{alert.city}</TableCell>
                  <TableCell data-label="Visa Type">{alert.visaType}</TableCell>
                  <TableCell data-label="Status">
                    <StatusChip status={alert.status} />
                  </TableCell>
                  <TableCell data-label="Created">
                    {new Date(alert.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell data-label="Actions" align="right">
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "flex-end",
                      }}>
                      <IconButton onClick={() => onEditClick(alert)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => setDeleteId(alert._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </motion.tr>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <ConfirmDialog
        open={Boolean(deleteId)}
        title="Delete alert?"
        description="Are you sure you want to delete this visa slot?"
        onConfirm={() => onDelete(deleteId).then(() => setDeleteId(null))}
        onClose={() => setDeleteId(null)}
      />
    </div>
  );
};

export default AlertsTable;
