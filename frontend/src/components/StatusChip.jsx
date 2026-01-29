import { Chip } from "@mui/material";

const statusColorMap = {
  Active: "success",
  Booked: "warning",
  Expired: "default",
};

const StatusChip = ({ status }) => {
  return <Chip label={status} color={statusColorMap[status]} size="small" />;
};

export default StatusChip;
