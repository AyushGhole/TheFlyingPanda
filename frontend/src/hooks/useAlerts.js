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

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const { enqueueSnackbar } = useSnackbar();

  const loadAlerts = async () => {
    try {
      setLoading(true);
      const { data } = await fetchAlerts(filters, page, limit);
      setAlerts(data.data);
      setTotalPages(data.pagination.totalPages);
    } finally {
      setLoading(false);
    }
  };

  const addAlert = async (alert) => {
    await createAlert(alert);
    setPage(1);
    loadAlerts();
  };

  const updateAlertById = async (id, updatedData) => {
    await updateAlert(id, updatedData);
    loadAlerts();
  };

  const changeStatus = async (id, status) => {
    await updateAlert(id, { status });
    enqueueSnackbar("Status updated", { variant: "info" });
    loadAlerts();
  };

  const removeAlert = async (id) => {
    await deleteAlert(id);
    loadAlerts();
  };

  useEffect(() => {
    loadAlerts();
  }, [filters, page, limit]);

  useEffect(() => {
    setPage(1);
  }, [filters, limit]);

  return {
    alerts,
    loading,
    addAlert,
    updateAlert: updateAlertById,
    changeStatus,
    removeAlert,
    filters,
    setFilters,
    page,
    setPage,
    limit,
    setLimit,
    totalPages,
  };
};
