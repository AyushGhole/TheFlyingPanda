import { useEffect, useState } from "react";
import {
  fetchAlerts,
  createAlert,
  updateAlert,
  deleteAlert,
} from "../services/alerts.api";
import { useSnackbar } from "notistack";

export const useAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    country: "",
    status: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  // Load all alerts based on filters
  const loadAlerts = async () => {
    try {
      setLoading(true);
      const { data } = await fetchAlerts(filters);
      setAlerts(data);
    } finally {
      setLoading(false);
    }
  };

  // Create a new alert
  const addAlert = async (alert) => {
    await createAlert(alert);
    loadAlerts();
  };

  // Update an alert fully (used for editing)
  const updateAlertById = async (id, updatedData) => {
    await updateAlert(id, updatedData);
    loadAlerts();
  };

  // Change only status
  const changeStatus = async (id, status) => {
    await updateAlert(id, { status });
    enqueueSnackbar("Status updated", { variant: "info" });
    loadAlerts();
  };

  // Delete an alert
  const removeAlert = async (id) => {
    await deleteAlert(id);
    loadAlerts();
  };

  useEffect(() => {
    loadAlerts();
  }, [filters]);

  return {
    alerts,
    loading,
    addAlert,
    updateAlert: updateAlertById, // expose update function
    changeStatus,
    removeAlert,
    filters,
    setFilters,
  };
};
