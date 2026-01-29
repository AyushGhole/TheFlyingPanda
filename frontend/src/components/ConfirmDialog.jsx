import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import SimpleSpinner from "../components/simplespinner";

const ConfirmDialog = ({ open, title, description, onConfirm, onClose }) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
      enqueueSnackbar("Visa Slot deleted successfully", { variant: "success" });
      onClose();
    } catch {
      enqueueSnackbar("Deletion failed", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative">
        {loading && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-2xl">
            <SimpleSpinner text={"Deleting Slot Please Wait ..."} />
          </div>
        )}
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ color: "#1f2937" }}>
            {description}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={onClose} disabled={loading} sx={{ fontWeight: 500 }}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color="error"
            disabled={loading}
            sx={{
              fontWeight: 600,
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              },
            }}>
            Confirm
          </Button>
        </DialogActions>
      </motion.div>
    </Dialog>
  );
};

export default ConfirmDialog;
