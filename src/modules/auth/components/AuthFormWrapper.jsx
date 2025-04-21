// src/modules/auth/components/AuthFormWrapper.jsx
const AuthFormWrapper = ({ title, children }) => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5 bg-light" style={{ minHeight: 'calc(100vh - 120px)' }}>
      <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4" style={{ color: '#6f22d2' }}>
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default AuthFormWrapper;
