import { Paper, TextField, Select, MenuItem } from "@mui/material";
import { motion } from "framer-motion";

const AlertsFilter = ({ filters, setFilters }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
      <Paper className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <TextField
            size="small"
            placeholder="Search by country"
            value={filters.country}
            onChange={(e) =>
              setFilters({ ...filters, country: e.target.value })
            }
            className="md:w-64"
          />

          <Select
            size="small"
            displayEmpty
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="md:w-40">
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Booked">Booked</MenuItem>
            <MenuItem value="Expired">Expired</MenuItem>
          </Select>
        </div>
      </Paper>
    </motion.div>
  );
};

export default AlertsFilter;
