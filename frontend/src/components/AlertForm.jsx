import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  CircularProgress,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import SimpleSpinner from "../components/simplespinner";

const initialState = {
  country: "",
  city: "",
  visaType: "Tourist",
  status: "Active",
};

const AlertForm = ({ open, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || initialState);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setForm(initialData || initialState);
  }, [initialData, open]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const country = form.country.trim();
    const city = form.city.trim();

    if (!country || !city) {
      enqueueSnackbar("Country and City are required", { variant: "warning" });
      return;
    }

    if (country.length < 2 || city.length < 2) {
      enqueueSnackbar("Country and City must be at least 2 characters", {
        variant: "warning",
      });
      return;
    }

    if (initialData && !["Active", "Booked", "Expired"].includes(form.status)) {
      enqueueSnackbar("Invalid status value", { variant: "error" });
      return;
    }

    try {
      setLoading(true);
      await onSubmit(form);
      enqueueSnackbar(
        initialData
          ? "Visa slot updated successfully"
          : "Visa slot created successfully",
        { variant: "success" },
      );
      onClose();
    } catch {
      enqueueSnackbar(
        initialData
          ? "Failed to update visa slot"
          : "Failed to create visa slot",
        { variant: "error" },
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut" }}>
        <div className="relative">
          {loading && (
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-2xl">
              <SimpleSpinner
                text={
                  initialData
                    ? "Updating Please Wait..."
                    : "Creating Please Wait..."
                }
              />{" "}
            </div>
          )}

          <DialogContent className="p-0">
            {/* HEADER */}
            <div className="px-6 py-6 bg-gradient-to-r from-indigo-600 to-sky-500 relative rounded-t-2xl text-white shadow-md">
              <h2 className="text-2xl font-bold">
                {initialData ? "Update Visa Slot" : "Create Visa Slot"}
              </h2>
              <p className="text-sm text-indigo-100 mt-1">
                Track visa slot availability for a specific location
              </p>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_60%)] pointer-events-none rounded-t-2xl" />
            </div>

            {/* FORM */}
            <div className="px-6 py-6 bg-white/70 backdrop-blur-md rounded-b-2xl shadow-inner space-y-5">
              <TextField
                label="Country"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="e.g. Germany"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PublicIcon className="text-gray-500" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  marginBottom: "1rem",
                }}
                helperText="Country where visa slot is required"
              />
              <TextField
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="e.g. Berlin"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon className="text-gray-500" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  marginBottom: "1rem",
                }}
                helperText="Consulate or city location"
              />
              <Select
                name="visaType"
                value={form.visaType}
                onChange={handleChange}
                fullWidth
                displayEmpty
                sx={{ mt: 1 }}>
                <MenuItem value="Tourist">Tourist Visa</MenuItem>
                <MenuItem value="Business">Business Visa</MenuItem>
                <MenuItem value="Student">Student Visa</MenuItem>
              </Select>

              {/* STATUS ONLY FOR EDIT */}
              {initialData && (
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel>Status</InputLabel>
                  <Select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    label="Status">
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Booked">Booked</MenuItem>
                    <MenuItem value="Expired">Expired</MenuItem>
                  </Select>
                </FormControl>
              )}
            </div>

            {/* FOOTER */}
            <div className="px-6 py-4 bg-white/50 backdrop-blur-sm flex justify-between items-center rounded-b-2xl">
              <Button
                onClick={onClose}
                color="inherit"
                sx={{ fontWeight: 500 }}>
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={loading}
                sx={{
                  backgroundColor: "#1f2937", // dark button for visibility
                  color: "white",
                  fontWeight: 600,
                  borderRadius: "10px",
                  paddingX: 3,
                  paddingY: 1.2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  "&:hover": {
                    backgroundColor: "#111827",
                    transform: "translateY(-1px)",
                    boxShadow: "0 6px 25px rgba(0,0,0,0.35)",
                  },
                  transition: "all 0.25s ease",
                }}>
                {initialData
                  ? loading
                    ? "Updating slot please wait..."
                    : "Update Slot"
                  : loading
                    ? "Creating slot please wait..."
                    : "Create Slot"}
              </Button>
            </div>
          </DialogContent>
        </div>
      </motion.div>
    </Dialog>
  );
};

export default AlertForm;
