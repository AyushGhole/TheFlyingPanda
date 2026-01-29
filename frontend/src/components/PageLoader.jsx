import { CircularProgress } from "@mui/material";

const PageLoader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-gray-50">
      <CircularProgress />
      <p className="text-sm text-gray-500">Loading visa alerts…</p>
    </div>
  );
};

export default PageLoader;
