import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://theflyingpanda-backend.onrender.com",
});

export const fetchAlerts = (filters, page = 1, limit = 10) => {
  return API.get("/alerts", {
    params: {
      ...filters,
      page,
      limit,
    },
  });
};

export const createAlert = (data) => API.post("/alerts", data);
export const updateAlert = (id, data) => API.put(`/alerts/${id}`, data);
export const deleteAlert = (id) => API.delete(`/alerts/${id}`);
