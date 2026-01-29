import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";

import AlertForm from "../components/AlertForm";
import AlertsTable from "../components/AlertsTable";
import AlertsFilter from "../components/AlertsFilter";
import { useAlerts } from "../hooks/useAlerts";
import SimpleSpinner from "../components/simplespinner";

const Dashboard = () => {
  const {
    alerts,
    loading,
    addAlert,
    updateAlert,
    changeStatus,
    removeAlert,
    filters,
    setFilters,
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 relative">
      {actionLoading && (
        <div className="absolute inset-0 z-30 bg-white/30 backdrop-blur-sm flex items-center justify-center">
          <SimpleSpinner />
        </div>
      )}

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-r from-indigo-600 to-sky-500 shadow-xl text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_60%)] pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Visa Slot Alerts
              </h1>
              <p className="text-sm text-indigo-100 mt-1">
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
                paddingX: 3,
                paddingY: 1.2,
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                "&:hover": {
                  backgroundColor: "#f1f5f9",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                },
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl p-4 bg-white/40 backdrop-blur-lg border border-white/50 shadow-sm">
          <AlertsFilter filters={filters} setFilters={setFilters} />
        </motion.div>

        {/* TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white/60 backdrop-blur-lg shadow-lg border border-white/50 relative">
          <AlertsTable
            alerts={alerts}
            loading={loading || actionLoading}
            onEditClick={handleEditClick}
            onDelete={handleDelete}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
