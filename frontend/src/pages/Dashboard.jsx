import { useState } from "react";
import { Button, Pagination } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";

import AlertForm from "../components/AlertForm";
import AlertsTable from "../components/AlertsTable";
import AlertsFilter from "../components/AlertsFilter";
import { useAlerts } from "../hooks/useAlerts";
import { Select, MenuItem } from "@mui/material";

const Dashboard = () => {
  const {
    alerts,
    loading,
    addAlert,
    updateAlert,
    removeAlert,
    filters,
    setFilters,
    page,
    setPage,
    limit,
    setLimit,
    totalPages,
  } = useAlerts();

  const [open, setOpen] = useState(false);
  const [currentAlert, setCurrentAlert] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const handleCreateClick = () => {
    setCurrentAlert(null);
    setOpen(true);
  };

  const handleEditClick = (alert) => {
    setCurrentAlert(alert);
    setOpen(true);
  };

  const handleSubmit = async (form) => {
    setActionLoading(true);
    try {
      if (currentAlert) {
        await updateAlert(currentAlert._id, form);
      } else {
        await addAlert(form);
      }
      setOpen(false);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setActionLoading(true);
    try {
      await removeAlert(id);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl p-6 bg-gradient-to-r from-indigo-600 to-sky-500 shadow-xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Visa Slot Alerts</h1>
              <p className="text-sm text-indigo-100">
                Track and manage visa slot availability
              </p>
            </div>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleCreateClick}
              sx={{
                backgroundColor: "white",
                color: "#2563eb",
                fontWeight: 600,
                borderRadius: "12px",
              }}>
              Create Alert
            </Button>
          </div>
        </motion.div>

        {/* MODAL */}
        <AlertForm
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
          initialData={currentAlert}
        />

        {/* FILTERS */}
        <AlertsFilter filters={filters} setFilters={setFilters} />

        {/* TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white shadow-lg">
          <AlertsTable
            alerts={alerts}
            loading={loading || actionLoading}
            onEditClick={handleEditClick}
            onDelete={handleDelete}
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-3  bg-gray-50 rounded-b-2xl">
            {/* Left: rows per page */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="whitespace-nowrap">Rows per page</span>

              <Select
                size="small"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                sx={{
                  minWidth: 72,
                  height: 32,
                  fontSize: "0.875rem",
                  backgroundColor: "white",
                  borderRadius: "6px",
                }}>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </div>

            {/* Right: pagination */}
            {totalPages > 1 && (
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                shape="rounded"
                size="small"
                color="primary"
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
