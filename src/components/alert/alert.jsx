export const Alert = ({ type = "info", message, title }) => {
  const alertStyles = {
    success: {
      text: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    error: {
      text: "text-red-500",
      bg: "bg-red-50",
    },
    warning: {
      text: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    info: {
      text: "text-blue-500",
      bg: "bg-blue-50",
    },
  };

  const { text, bg } = alertStyles[type] || alertStyles.info;

  return (
    <div
      className={`p-4 mb-4 text-sm ${text} rounded-xl ${bg} font-normal`}
      role="alert"
    >
      <span className="font-semibold mr-2">{title}</span>
      {message}
    </div>
  );
};

// Usage

<Alert type="error" title="Error" message="Something went wrong!" />;
<Alert type="warning" title="Warning" message="This is a warning message." />;
<Alert type="info" title="Info" message="This is an informational alert." />;
