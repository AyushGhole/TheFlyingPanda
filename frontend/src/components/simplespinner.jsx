const SimpleSpinner = ({ text }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 3000, // higher than MUI Dialog
        backgroundColor: "rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {/* Spinner */}
      <div
        style={{
          width: "80px",
          height: "80px",
          border: "6px solid #d1d5db",
          borderTop: "6px solid #111827",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      {text && (
        <div
          style={{
            marginTop: "26px",
            fontSize: "16px",
            fontWeight: 500,
            color: "#111827",
          }}>
          {text}
        </div>
      )}

      {/* Keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default SimpleSpinner;
